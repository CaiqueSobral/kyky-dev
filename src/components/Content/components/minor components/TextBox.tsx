import type { PropsWithChildren } from 'react'

export default function TextBox({ children }: PropsWithChildren) {
  return (
    <div className="pop:before:-top-1 pop:before:-right-1 pop:before:-z-10 relative pop:rotate-1 pop:bg-black pop:px-2 pop:py-1 pop:font-black pop:before:absolute pop:before:h-full pop:before:w-full pop:before:bg-accent">
      {children}
    </div>
  )
}
