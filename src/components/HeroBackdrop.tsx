/**
 * Static CSS backdrop for the hero — grid + accent glows. Always rendered behind
 * the 3D canvas, and serves as the standalone background when 3D is disabled
 * (reduced-motion) or still loading.
 */
export function HeroBackdrop() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="grid-bg absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_72%)]" />
      <div className="glow-blob absolute left-1/2 top-[42%] h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80" />
      <div className="float-y absolute right-[8%] top-[18%] h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-24 left-[6%] h-72 w-72 rounded-full bg-accent/5 blur-3xl" />
    </div>
  )
}
