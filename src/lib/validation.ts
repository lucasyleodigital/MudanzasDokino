import { z } from "zod";

// Esquema compartido entre el formulario (cliente) y la Cloudflare Pages
// Function que procesa el envío (servidor) — la validación de servidor es la
// que cuenta, la de cliente solo mejora la experiencia de uso.

const noControlChars = (label: string) =>
  z
    .string()
    .max(2000, `${label} es demasiado largo`)
    .refine((v) => !/[\r\n]/.test(v), {
      message: `${label} no puede contener saltos de línea`,
    });

export const quoteFormSchema = z.object({
  // Paso 1
  nombre: noControlChars("El nombre").min(2, "Indica tu nombre completo"),
  telefono: noControlChars("El teléfono").min(6, "Indica un teléfono válido"),
  email: z.string().email("Indica un email válido").max(200),
  tipoCliente: z.enum(["particular", "empresa"]),

  // Paso 2
  origen: noControlChars("La dirección de origen").min(4, "Indica la dirección de origen"),
  destino: noControlChars("La dirección de destino").min(4, "Indica la dirección de destino"),
  fechaAproximada: noControlChars("La fecha").optional().default(""),

  // Paso 3
  tipoInmueble: z.enum(["vivienda", "oficina", "local"]),
  habitacionesOM2: noControlChars("Habitaciones/m²").optional().default(""),
  plantaOrigen: noControlChars("La planta de origen").optional().default(""),
  ascensorOrigen: z.enum(["si", "no"]),
  plantaDestino: noControlChars("La planta de destino").optional().default(""),
  ascensorDestino: z.enum(["si", "no"]),

  // Paso 4
  tipoMercancia: z.enum(["hogar_completo", "oficina", "objetos_sueltos", "mercancia_comercial"]),
  volumenAproximado: noControlChars("El volumen aproximado").optional().default(""),
  servicios: z.array(z.enum(["embalaje", "montaje", "guardamuebles", "plataforma_elevadora"])),
  comentarios: noControlChars("Los comentarios").optional().default(""),

  // Anti-spam
  turnstileToken: z.string().min(1, "Verificación anti-spam requerida"),
  // Honeypot: debe llegar vacío. Si un bot lo rellena, se descarta la solicitud.
  website: z.string().max(0).optional().default(""),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;

export const contactFormSchema = z.object({
  nombre: noControlChars("El nombre").min(2, "Indica tu nombre completo"),
  email: z.string().email("Indica un email válido").max(200),
  telefono: noControlChars("El teléfono").optional().default(""),
  mensaje: noControlChars("El mensaje").min(10, "Cuéntanos brevemente qué necesitas"),
  turnstileToken: z.string().min(1, "Verificación anti-spam requerida"),
  website: z.string().max(0).optional().default(""),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const SERVICIOS_EXTRA_LABELS: Record<string, string> = {
  embalaje: "Embalaje",
  montaje: "Montaje/desmontaje de muebles",
  guardamuebles: "Guardamuebles",
  plataforma_elevadora: "Plataforma elevadora",
};

export const TIPO_MERCANCIA_LABELS: Record<string, string> = {
  hogar_completo: "Hogar completo",
  oficina: "Oficina",
  objetos_sueltos: "Objetos sueltos",
  mercancia_comercial: "Mercancía comercial",
};
