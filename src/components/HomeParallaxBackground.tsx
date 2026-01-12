import ScrollButton from '@/components/ScrollButton'

interface HomeParallaxBackgroundProps {
  src?: string
  alt?: string
  opacity?: string
  className?: string
}

export default function HomeParallaxBackground({
  src = '/images/software-15.png',
  alt = 'Hero Background',
  opacity = 'opacity-80',
  className = 'absolute inset-0 radial-gradient',
}: HomeParallaxBackgroundProps) {
  return (
    <div className={className}>
      <div className="radial-gradient absolute top-0 left-0 z-10 hero min-h-[calc(100vh-5rem)] bg-transparent!" />

      <div className="absolute inset-0 hero-content z-20 mx-auto text-center">
        <div className="relative flex h-auto max-w-md flex-col items-center justify-center">
          <h1 className="relative inline-block overflow-hidden rounded-xl p-2 text-5xl font-medium text-primary italic md:text-6xl">
            Empower
          </h1>

          <h1 className="mb-6 text-center text-3xl font-medium text-base-content md:text-4xl lg:text-5xl">
            your online vision.
          </h1>

          <div>
            <ScrollButton targetId="services">Explore</ScrollButton>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-20 scale-110">
        <img
          src={src}
          alt={alt}
          className={`h-full w-full object-cover ${opacity}`}
        />
      </div>
    </div>
  )
}
