"use client";

import { useEffect, useRef } from "react";
import type { Mesh } from "three";

export default function TruckAnimation({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animFrameId: number;

    async function init() {
      const THREE = await import("three");

      const width = container!.clientWidth || 480;
      const height = container!.clientHeight || 400;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 5;

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container!.appendChild(renderer.domElement);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
      const pointLight = new THREE.PointLight(0xf97316, 2, 10);
      pointLight.position.set(2, 2, 2);
      scene.add(pointLight);

      const truckGroup = new THREE.Group();

      const body = new THREE.Mesh(
        new THREE.BoxGeometry(4, 1.5, 2),
        new THREE.MeshPhongMaterial({ color: 0x0f172a })
      );
      truckGroup.add(body);

      const cabin = new THREE.Mesh(
        new THREE.BoxGeometry(1.2, 1.2, 2),
        new THREE.MeshPhongMaterial({ color: 0x1e293b })
      );
      cabin.position.set(2.6, -0.15, 0);
      truckGroup.add(cabin);

      const wheelGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.5, 32);
      const wheelMat = new THREE.MeshPhongMaterial({ color: 0x334155 });
      const wheelPositions: [number, number, number][] = [
        [-1.2, -0.8, 1], [1.2, -0.8, 1],
        [-1.2, -0.8, -1], [1.2, -0.8, -1],
        [2.4, -0.8, 1], [2.4, -0.8, -1],
      ];
      const wheels: Mesh[] = [];
      wheelPositions.forEach(([x, y, z]) => {
        const wheel = new THREE.Mesh(wheelGeo, wheelMat);
        wheel.rotation.x = Math.PI / 2;
        wheel.position.set(x, y, z);
        truckGroup.add(wheel);
        wheels.push(wheel);
      });

      scene.add(truckGroup);

      const boxGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5);
      const boxMat = new THREE.MeshPhongMaterial({ color: 0xf97316 });
      const boxes: { mesh: Mesh; offset: number }[] = [];
      for (let i = 0; i < 5; i++) {
        const box = new THREE.Mesh(boxGeo, boxMat);
        box.position.set(
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 2
        );
        scene.add(box);
        boxes.push({ mesh: box, offset: Math.random() * Math.PI * 2 });
      }

      function animate() {
        animFrameId = requestAnimationFrame(animate);
        const time = Date.now() * 0.001;

        truckGroup.rotation.z = Math.sin(time * 10) * 0.01;
        truckGroup.position.y = Math.sin(time * 5) * 0.05;
        wheels.forEach(w => { w.rotation.z += 0.1; });
        boxes.forEach(b => {
          b.mesh.position.y += Math.sin(time + b.offset) * 0.005;
          b.mesh.rotation.x += 0.01;
          b.mesh.rotation.y += 0.01;
        });

        renderer.render(scene, camera);
      }
      animate();

      const handleResize = () => {
        if (!container) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        renderer.setSize(w, h);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      window.addEventListener("resize", handleResize);

      // Store cleanup on the container element for the outer effect cleanup
      (container as HTMLDivElement & { _threeCleanup?: () => void })._threeCleanup = () => {
        cancelAnimationFrame(animFrameId);
        window.removeEventListener("resize", handleResize);
        renderer.dispose();
        if (container?.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      };
    }

    init();

    return () => {
      const el = container as HTMLDivElement & { _threeCleanup?: () => void };
      el._threeCleanup?.();
    };
  }, []);

  return <div ref={containerRef} className={className} />;
}
