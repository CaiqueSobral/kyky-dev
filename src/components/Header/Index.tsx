import CoolButton from './Button'

export default function Header() {
  return (
    <header className="flex justify-between gap-4">
      <div className="pop:before:-top-1 pop:before:-right-1 pop:before:-z-10 relative pop:rotate-1 pop:bg-black pop:px-2 pop:py-1 pop:font-black pop:before:absolute pop:before:h-full pop:before:w-full pop:before:bg-accent">
        <span className="font-medium pop:font-black pop:text-offWhite text-accent text-sm md:text-lg">
          KYKY<span className="font-bold text-xs md:text-base">.dev</span>
        </span>
      </div>
      <CoolButton />
    </header>
  )
}
