import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export function UserMarkerModel({ color = 'yellow', ...props }) {
    const { nodes, materials } = useGLTF('/models/UserMarker.glb')
    const materialRef = useRef(materials['Material.001'])

    useEffect(() => {
        if (materialRef.current) {
            materialRef.current.color.set(color)
        }
    }, [])

    return (
        <group
            {...props}
            dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.StonePlatform_Cylinder.geometry}
                material={materialRef.current}
                position={[0, 1, 0]}
                scale={0.2}
            />
        </group>
    )
}

useGLTF.preload('/models/UserMarker.glb')
