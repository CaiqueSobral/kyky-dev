import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

export default function CoolButton({
  children,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      type="button"
      className="inline-flex w-fit items-center justify-between gap-2 pop:rounded-none rounded-full border border-accent border-solid pop:border-none bg-primary pop:bg-black fill-accent stroke-accent px-4 py-1 pop:font-black text-accent hover:bg-accent pop:hover:bg-accent hover:fill-offWhite pop:hover:fill-black hover:stroke-primary pop:hover:stroke-black hover:text-primary pop:hover:text-black"
      {...props}
    >
      {children}
    </button>
  )
}
