import {Suspense} from 'react'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from './Loader'

const Choco = () => {
    const shiba = useGLTF(new URL('../../assets/choco/scene.gltf', import.meta.url).href);

  return (
    <mesh>
        <primitive
          object={shiba.scene}
          scale={ 2.75 }
          position-y={-1}
          position-x={1} 
        //   rotation-y={0}
          rotation={[0.2, 0 , 0]}
        />
      </mesh>
  );
};

const ChocoCanvas = () => {
  return (
    <Canvas
    shadows
    frameloop='demand'
    // dpr={[1, 2]}
    gl={{ preserveDrawingBuffer: true }}
    camera={{
      fov: 25,
      near: 0.1,
      far: 200,
      position: [20, 5, 10],
    }}
    > 
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          enableRotate={true} // Allow rotating
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

          <Choco/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ChocoCanvas