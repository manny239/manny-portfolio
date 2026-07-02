import { useRef } from 'react'
import type { ReactNode } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Edges, Float, Sparkles } from '@react-three/drei'
import type { Group } from 'three'
import { useTheme } from '../context/ThemeContext'

type Vec3 = [number, number, number]

/** A body panel: a solid dark box with glowing accent edges (holographic look). */
function Panel({
  args,
  position,
  rotation,
  body,
  edge,
  emissive,
  opacity,
}: {
  args: Vec3
  position: Vec3
  rotation?: Vec3
  body: string
  edge: string
  emissive: string
  opacity: number
}) {
  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry args={args} />
      <meshStandardMaterial
        color={body}
        emissive={emissive}
        emissiveIntensity={0.3}
        metalness={0.55}
        roughness={0.35}
        transparent
        opacity={opacity}
        depthWrite={false}
      />
      <Edges color={edge} scale={1.001} threshold={15} />
    </mesh>
  )
}

/** An exposed open-wheel tyre: a cylinder laid on its side, ringed with edges. */
function Wheel({
  position,
  radius,
  width,
  body,
  edge,
  opacity,
}: {
  position: Vec3
  radius: number
  width: number
  body: string
  edge: string
  opacity: number
}) {
  return (
    <group position={position} rotation={[Math.PI / 2, 0, 0]}>
      {/* Tyre — full wireframe so it reads as a 3D wheel, not a black disc */}
      <mesh>
        <cylinderGeometry args={[radius, radius, width, 24]} />
        <meshStandardMaterial
          color={body}
          emissive={edge}
          emissiveIntensity={0.12}
          metalness={0.5}
          roughness={0.55}
          transparent
          opacity={opacity}
          depthWrite={false}
        />
        <Edges color={edge} scale={1.001} threshold={1} />
      </mesh>
      {/* Hub */}
      <mesh>
        <cylinderGeometry args={[radius * 0.4, radius * 0.4, width * 1.02, 12]} />
        <meshStandardMaterial color={edge} emissive={edge} emissiveIntensity={0.4} metalness={0.6} roughness={0.3} />
      </mesh>
    </group>
  )
}

/** Original stylized open-wheel (F1-style) car, built from primitives. */
function F1Car({
  body,
  edge,
  emissive,
  opacity,
}: {
  body: string
  edge: string
  emissive: string
  opacity: number
}) {
  const p = { body, edge, emissive, opacity }
  const wheelOpacity = Math.min(opacity * 0.6, 0.5)
  return (
    <group position={[0, -0.42, 0]} scale={0.6}>
      {/* Underfloor / plank */}
      <Panel args={[3.9, 0.1, 0.78]} position={[-0.1, 0.18, 0]} {...p} />
      {/* Nose */}
      <Panel args={[1.7, 0.26, 0.32]} position={[1.35, 0.4, 0]} {...p} />
      {/* Cockpit / survival cell */}
      <Panel args={[1.5, 0.46, 0.62]} position={[0.15, 0.46, 0]} {...p} />
      {/* Engine cover */}
      <Panel args={[1.5, 0.52, 0.48]} position={[-0.95, 0.48, 0]} {...p} />
      {/* Airbox intake */}
      <Panel args={[0.44, 0.44, 0.3]} position={[-0.35, 0.8, 0]} {...p} />
      {/* Halo hint over the cockpit */}
      <Panel args={[0.52, 0.08, 0.5]} position={[0.5, 0.76, 0]} {...p} />
      {/* Sidepods */}
      <Panel args={[1.25, 0.36, 0.2]} position={[-0.1, 0.34, 0.52]} {...p} />
      <Panel args={[1.25, 0.36, 0.2]} position={[-0.1, 0.34, -0.52]} {...p} />
      {/* Front wing + endplates */}
      <Panel args={[0.52, 0.06, 1.75]} position={[2.15, 0.18, 0]} {...p} />
      <Panel args={[0.5, 0.24, 0.05]} position={[2.15, 0.29, 0.86]} {...p} />
      <Panel args={[0.5, 0.24, 0.05]} position={[2.15, 0.29, -0.86]} {...p} />
      {/* Rear wing plane, struts + endplates */}
      <Panel args={[0.46, 0.06, 1.45]} position={[-2.05, 0.98, 0]} {...p} />
      <Panel args={[0.42, 0.5, 0.06]} position={[-2.0, 0.72, 0.32]} {...p} />
      <Panel args={[0.42, 0.5, 0.06]} position={[-2.0, 0.72, -0.32]} {...p} />
      <Panel args={[0.5, 0.42, 0.05]} position={[-2.05, 0.86, 0.72]} {...p} />
      <Panel args={[0.5, 0.42, 0.05]} position={[-2.05, 0.86, -0.72]} {...p} />
      {/* Wheels — rears larger, as on a real single-seater */}
      <Wheel position={[1.5, 0.4, 0.72]} radius={0.4} width={0.26} body={body} edge={edge} opacity={wheelOpacity} />
      <Wheel position={[1.5, 0.4, -0.72]} radius={0.4} width={0.26} body={body} edge={edge} opacity={wheelOpacity} />
      <Wheel position={[-1.55, 0.44, 0.76]} radius={0.44} width={0.34} body={body} edge={edge} opacity={wheelOpacity} />
      <Wheel position={[-1.55, 0.44, -0.76]} radius={0.44} width={0.34} body={body} edge={edge} opacity={wheelOpacity} />
    </group>
  )
}

/** Continuous turntable spin (pauses with the render loop). */
function Spinner({ children, active }: { children: ReactNode; active: boolean }) {
  const group = useRef<Group>(null)
  useFrame((_, delta) => {
    if (group.current && active) group.current.rotation.y += delta * 0.3
  })
  return <group ref={group}>{children}</group>
}

/** Damped cursor parallax tilt layered on top of the spin. */
function ParallaxRig({ children }: { children: ReactNode }) {
  const group = useRef<Group>(null)
  useFrame((state) => {
    if (!group.current) return
    const targetY = state.pointer.x * 0.25
    const targetX = -state.pointer.y * 0.18
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.05
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.05
  })
  return (
    <group ref={group} position={[1.15, 0.05, 0]}>
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
  const dark = theme === 'dark'
  const edge = dark ? '#5ff3ff' : '#0a5f77'
  const emissive = dark ? '#2dd4ee' : '#0e8aa8'
  const bodyColor = dark ? '#0a1826' : '#123545'
  const panelOpacity = dark ? 0.55 : 0.72
  const accent = dark ? '#2dd4ee' : '#0e8aa8'
  const secondary = dark ? '#7c5cff' : '#3b6cff'

  return (
    <Canvas
      frameloop={active ? 'always' : 'demand'}
      dpr={[1, 1.8]}
      camera={{ position: [0, 0.4, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[6, 6, 6]} intensity={55} color={accent} />
      <pointLight position={[-6, -3, -4]} intensity={30} color={secondary} />
      <ParallaxRig>
        {/* Static view tilt so we look slightly down on the car */}
        <group rotation={[0.16, 0, 0]}>
          <Float speed={1.1} rotationIntensity={0.12} floatIntensity={0.5}>
            <Spinner active={active}>
              <F1Car body={bodyColor} edge={edge} emissive={emissive} opacity={panelOpacity} />
            </Spinner>
          </Float>
        </group>
        <Sparkles count={110} scale={[11, 9, 7]} size={2.4} speed={0.22} opacity={0.6} color={accent} />
      </ParallaxRig>
    </Canvas>
  )
}
