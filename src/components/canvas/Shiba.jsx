import {Suspense} from 'react'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from './Loader'

const Shiba = () => {
    const shiba = useGLTF(new URL('../../assets/shiba/scene.gltf', import.meta.url).href);

  return (
    <mesh>
        <primitive
          object={shiba.scene}
          scale={ 1.5 }
          position-y={-3} 
          rotation-y={0}
        />
      </mesh>
  );
};

const ShibaCanvas = () => {
  return (
    <Canvas
    shadows
    frameloop='demand'
    dpr={[1, 2]}
    gl={{ preserveDrawingBuffer: true }}
    camera={{
      fov: 25,
      near: 0.1,
      far: 200,
      position: [20, -5, 5],
    }}
    > 
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

          <Shiba/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ShibaCanvas