import CoolButton from './Button'

export default function Header() {
  return (
    <header className="flex flex-col justify-between gap-4 md:flex-row">
      <span className="font-semibold text-primary text-xl">
        Kyky<span className="font-bold text-base">.dev</span>
      </span>
      <CoolButton />
    </header>
  )
}
