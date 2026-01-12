interface ParallaxBackgroundProps {
  src?: string
  alt?: string
  opacity?: string
  className?: string
}

export default function ParallaxBackground({
  src = '/images/software-15.png',
  alt = 'Hero Background',
  opacity = 'opacity-80',
  className = 'absolute inset-0',
}: ParallaxBackgroundProps) {
  return (
    <div className={className}>
      <div className="absolute inset-0">
        <img
          src={src}
          alt={alt}
          className={`h-full w-full object-cover ${opacity}`}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  )
}
