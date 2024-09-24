import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

export default function CoolButton({
  children,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      type="button"
      className="inline-flex w-fit items-center justify-between gap-2 kindle:gap-3 kindle:rounded-md pop:rounded-none rounded-full border border-accent border-solid pop:border-none bg-primary pop:bg-black fill-accent stroke-accent kindle:px-2 px-4 py-1 pop:font-black text-accent kindle:transition-colors hover:bg-accent pop:hover:bg-accent hover:fill-offWhite pop:hover:fill-black hover:stroke-primary pop:hover:stroke-black hover:text-primary pop:hover:text-black"
      {...props}
    >
      {children}
    </button>
  )
}
