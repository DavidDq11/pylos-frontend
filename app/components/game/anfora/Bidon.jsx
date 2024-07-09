import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function BidonModel(props) {
    const { nodes, materials } = useGLTF('/models/Bidon.glb')
    return (
        <group
            {...props}
            dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Bidón.geometry}
                material={nodes.Bidón.material}
                rotation={[0, 2, 0]}
                position={[46, -3.4, -60]}
                scale={[1, 1, 0.28]}
            />
        </group>
    )
}

useGLTF.preload('/models/Bidon.glb')
