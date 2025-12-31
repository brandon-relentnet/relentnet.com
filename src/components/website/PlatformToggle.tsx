import { motion } from 'motion/react'

interface PlatformToggleProps {
  isCustom: boolean
  setIsCustom: (value: boolean) => void
}

export default function PlatformToggle({
  isCustom,
  setIsCustom,
}: PlatformToggleProps) {
  return (
    <div className="mb-6 flex justify-center">
      <div className="card inline-flex flex-row bg-base-300 p-2 shadow-md">
        <ToggleButton isSelected={!isCustom} onClick={() => setIsCustom(false)}>
          WordPress
        </ToggleButton>
        <ToggleButton isSelected={isCustom} onClick={() => setIsCustom(true)}>
          Next.js
        </ToggleButton>
      </div>
    </div>
  )
}

function ToggleButton({
  children,
  isSelected,
  onClick,
}: {
  children: React.ReactNode
  isSelected: boolean
  onClick: () => void
}) {
  return (
    <button type="button" onClick={onClick} className="relative flex">
      <motion.span
        initial={false}
        animate={{
          color: isSelected
            ? 'var(--color-primary-content)'
            : 'var(--color-base-content)',
          opacity: isSelected ? 1 : 0.7,
        }}
        className="relative z-[2] cursor-pointer px-6 py-3 text-lg font-medium"
      >
        {children}
      </motion.span>
      {isSelected && (
        <motion.div
          layoutId="selected-toggle"
          className="absolute inset-0 bg-primary"
          style={{ borderRadius: 25, zIndex: 1 }}
        />
      )}
    </button>
  )
}
