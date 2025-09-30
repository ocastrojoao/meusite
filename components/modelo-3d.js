// components/modelo-3d.js

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
// Stage é o nosso "estúdio", ele adiciona luzes e um chão automaticamente
import { Stage, OrbitControls, useGLTF } from '@react-three/drei'

function Modelo() {
    const { scene } = useGLTF('/computador.glb')
    // A mágica do tamanho acontece aqui, na propriedade 'scale'
    return <primitive object={scene} scale={1.1} />
}

// Para o TypeScript não reclamar do useGLTF
useGLTF.preload('/computador.glb')

const Modelo3D = () => {
    return (
        // Ajustamos a câmera para ficar mais perto e com menos distorção (fov menor)
        <Canvas camera={{ position: [0, 0, 10], fov: 25 }}>
            <Suspense fallback={null}>
                {/* O Stage cria uma iluminação de estúdio perfeita para exibir um objeto */}
                <Stage environment="city" intensity={0.6}> 
                    <Modelo />
                </Stage>
            </Suspense>
            {/* autoRotate faz ele girar sozinho */}
            <OrbitControls autoRotate enableZoom={false} />
        </Canvas>
    )
}

export default Modelo3D