import { Canvas, useFrame } from '@react-three/fiber'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MathUtils } from 'three'
import type { Mesh } from 'three'

function FacetedObject() {
  const mesh = useRef<Mesh>(null)

  useFrame((state, delta) => {
    const current = mesh.current
    if (!current) return

    const elapsed = state.clock.elapsedTime
    const targetX = state.pointer.y * 0.16 + Math.sin(elapsed * 0.15) * 0.08
    const targetY = state.pointer.x * 0.32 + Math.sin(elapsed * 0.11) * 0.12
    const targetYPosition = Math.sin(elapsed * 0.3) * 0.05

    current.rotation.x = MathUtils.damp(current.rotation.x, targetX, 2.2, delta)
    current.rotation.y = MathUtils.damp(current.rotation.y, targetY, 2.2, delta)
    current.position.y = MathUtils.damp(current.position.y, targetYPosition, 2.2, delta)
  })

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.4, 1]} />
      <meshStandardMaterial color="#cfcfcf" roughness={0.55} metalness={0.12} flatShading />
    </mesh>
  )
}

export default function HeroObject() {
  const containerRef = useRef<HTMLDivElement>(null)
  const inView = useInView(containerRef)

  return (
    <div ref={containerRef} className="mx-auto aspect-square w-full max-w-[480px]">
      <Canvas
        frameloop={inView ? 'always' : 'never'}
        camera={{ position: [0, 0, 4.6], fov: 34 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.35} />
        <directionalLight position={[3, 4, 5]} intensity={1.4} />
        <directionalLight position={[-4, -2, -3]} intensity={0.35} />
        <FacetedObject />
      </Canvas>
    </div>
  )
}
