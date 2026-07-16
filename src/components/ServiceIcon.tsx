import Image from "next/image";

type Props = {
  name: string;
  className?: string;
};

// Placeholder icon set in SVG, matching the brand palette (brief sección 6).
// Sustituir por los renders 3D de Higgsfield en /public/images/icons/<name>.png
// en cuanto haya créditos disponibles — solo hay que cambiar la extensión aquí.
export default function ServiceIcon({ name, className = "h-16 w-16" }: Props) {
  return (
    <Image
      src={`/images/icons/${name}.svg`}
      alt=""
      width={128}
      height={128}
      className={className}
    />
  );
}
