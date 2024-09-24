import Link from 'next/link'
import MenuButton from './MenuButton'
import StylesButton from './StylesButton'

export default function Header() {
  return (
    <header className="flex justify-between gap-4">
      <div className="flex items-center gap-2 kindle:border kindle:border-accent kindle:rounded-[6px] kindle:gap-0">
        <MenuButton />
        <Link
          aria-label="Return to home"
          href={'/'}
          className="pop:before:-top-1 pop:before:-right-1 pop:before:-z-10 relative pop:rotate-1 pop:bg-black pop:px-2 pop:py-1 pop:font-black pop:before:absolute pop:before:h-full pop:before:w-full pop:before:bg-accent kindle:pr-2 kindle:pl-2"
        >
          <span className="font-medium pop:font-black pop:text-offWhite text-accent text-sm md:text-lg">
            KYKY<span className="font-bold text-xs md:text-base">.dev</span>
          </span>
        </Link>
      </div>
      <StylesButton />
    </header>
  )
}
