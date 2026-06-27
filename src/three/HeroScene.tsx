import { useRef } from 'react'
import type { ReactNode } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sparkles, Sphere } from '@react-three/drei'
import type { Group, Mesh } from 'three'
import { useTheme } from '../context/ThemeContext'

function Blob({ color }: { color: string }) {
  const mesh = useRef<Mesh>(null)
  useFrame((_, delta) => {
    if (mesh.current) mesh.current.rotation.y += delta * 0.12
  })
  return (
    <Float speed={1.3} rotationIntensity={0.5} floatIntensity={0.9}>
      <Sphere ref={mesh} args={[1.75, 64, 64]}>
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.22}
          roughness={0.25}
          metalness={0.7}
          wireframe
          distort={0.32}
          speed={1.7}
        />
      </Sphere>
    </Float>
  )
}

function ParallaxRig({ children }: { children: ReactNode }) {
  const group = useRef<Group>(null)
  useFrame((state) => {
    if (!group.current) return
    const targetY = state.pointer.x * 0.35
    const targetX = -state.pointer.y * 0.25
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.05
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.05
  })
  return (
    <group ref={group} position={[1.1, 0.1, 0]}>
      {children}
    </group>
  )
}

interface HeroSceneProps {
  /** When false, the render loop pauses (e.g. hero scrolled out of view). */
  active?: boolean
}

export default function HeroScene({ active = true }: HeroSceneProps) {
  const { theme } = useTheme()
  const color = theme === 'dark' ? '#2dd4ee' : '#0e8aa8'
  const secondary = theme === 'dark' ? '#7c5cff' : '#3b6cff'

  return (
    <Canvas
      frameloop={active ? 'always' : 'demand'}
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[6, 6, 6]} intensity={55} color={color} />
      <pointLight position={[-6, -3, -4]} intensity={30} color={secondary} />
      <ParallaxRig>
        <Blob color={color} />
        <Sparkles
          count={110}
          scale={[11, 9, 7]}
          size={2.4}
          speed={0.22}
          opacity={0.65}
          color={color}
        />
      </ParallaxRig>
    </Canvas>
  )
}
