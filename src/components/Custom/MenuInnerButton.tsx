import type { PropsWithChildren } from 'react'

export default function MenuInnerButton({ children }: PropsWithChildren) {
  return (
    <button
      type="button"
      className="flex w-full items-center gap-2 pop:bg-black std:bg-accent-dark kindle:stroke-accent pop:stroke-accent-light stroke-offWhite py-1 pr-4 pl-2 pop:font-medium kindle:text-accent pop:text-accent-light text-offWhite text-sm kindle:transition-colors transition-all kindle:hover:bg-accent pop:hover:bg-accent std:hover:bg-accent-light kindle:hover:stroke-primary pop:hover:stroke-black kindle:hover:text-primary pop:hover:text-black"
    >
      {children}
    </button>
  )
}
