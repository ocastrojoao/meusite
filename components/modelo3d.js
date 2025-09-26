// components/modelo-3d.js

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

// Componente que carrega e renderiza o modelo
function Modelo(props) {
    // Coloque o caminho para o seu modelo 3D dentro da pasta /public
    const { scene } = useGLTF('/meu-modelo.glb') 
    return <primitive object={scene} {...props} />
}

// Componente principal que cria a "cena" 3D
const Modelo3D = () => {
    return (
        <Canvas>
            {/* Luz ambiente para iluminar o modelo de todos os lados */}
            <ambientLight intensity={0.5} />
            {/* Luz direcional, como se fosse um "sol" */}
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            
            {/* Suspense é necessário para aguardar o modelo carregar */}
            <Suspense fallback={null}>
                <Modelo />
            </Suspense>

            {/* Permite que o usuário rotacione o modelo com o mouse */}
            <OrbitControls enableZoom={false} />
        </Canvas>
    )
}

export default Modelo3D