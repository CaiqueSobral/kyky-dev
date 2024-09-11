import type { PropsWithChildren } from 'react'

export default function MenuInnerButton({ children }: PropsWithChildren) {
  return (
    <button
      type="button"
      className="flex w-full items-center gap-2 pop:bg-black std:bg-accent-dark pop:stroke-accent-light stroke-offWhite py-1 pr-4 pl-2 pop:font-medium pop:text-accent-light text-offWhite text-sm transition-all pop:hover:bg-accent std:hover:bg-accent-light pop:hover:stroke-black pop:hover:text-black"
    >
      {children}
    </button>
  )
}
