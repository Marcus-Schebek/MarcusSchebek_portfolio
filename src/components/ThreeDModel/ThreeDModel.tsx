import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface ThreeDModelProps {
  onModelLoad?: () => void;
}

const RotatingModel: React.FC<ThreeDModelProps> = ({ onModelLoad }) => {
  const { scene } = useGLTF('src/assets/low_poly_computer_with_devices.glb');
  const ref = useRef<THREE.Group>(null!);
  const [isAnimating, setIsAnimating] = useState(true);

  useFrame(() => {
    if (ref.current && isAnimating) {
      // Rotação final desejada
      const targetRotation = new THREE.Euler(0.25, -0.5, 0);
      const smoothFactor = 0.015; // Ajuste este valor para alterar a suavidade da transição

      // Interpolação suave para a rotação final
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, targetRotation.y, smoothFactor);
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, targetRotation.x, smoothFactor);
      ref.current.rotation.z = THREE.MathUtils.lerp(ref.current.rotation.z, targetRotation.z, smoothFactor);

      // Verifica se a rotação está suficientemente próxima da rotação final
      if (
        Math.abs(ref.current.rotation.y - targetRotation.y) < 0.01 &&
        Math.abs(ref.current.rotation.x - targetRotation.x) < 0.01 &&
        Math.abs(ref.current.rotation.z - targetRotation.z) < 0.01
      ) {
        // Para a animação quando a rotação está suficientemente próxima do alvo
        setIsAnimating(false);
      }
    }
  });

  useEffect(() => {
    if (onModelLoad) {
      onModelLoad();
    }
  }, [onModelLoad]);

  return (
    <primitive
      rotation={[0, 0, 0]} 
      object={scene}
      ref={ref}
      scale={[2, 2, 2]}
      position={[0, -1.0, -0.5]}
    />
  );
};

const ThreeDModel: React.FC<ThreeDModelProps> = (props) => {
  return (
    <Canvas style={{ width: '100%', height: '100%' }}>
      <ambientLight intensity={4} />
      <directionalLight
        position={[0, 5, 5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={10}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
      />
      <RotatingModel {...props} />
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        target={[0, 0, 0]}
        position={[0, 1, 8]}
      />
    </Canvas>
  );
};

export default ThreeDModel;
