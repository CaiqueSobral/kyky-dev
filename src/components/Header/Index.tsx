import CoolButton from './Button'

export default function Header() {
  return (
    <header className="flex justify-between gap-4">
      <span className="font-medium text-accent text-sm md:text-lg">
        KYKY<span className="font-bold text-xs md:text-base">.dev</span>
      </span>
      <CoolButton />
    </header>
  )
}
