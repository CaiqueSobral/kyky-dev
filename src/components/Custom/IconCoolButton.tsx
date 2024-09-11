import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

export default function IconCoolButton({
  children,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      type="button"
      className="pop:before:-bottom-[3px] pop:before:-left-[3px] pop:before:-z-10 relative inline-flex w-fit items-center justify-between pop:rounded-none rounded-md border border-accent border-solid pop:border-none bg-primary pop:bg-black fill-accent stroke-accent p-[2px] pop:p-2 pop:font-black text-accent pop:before:absolute pop:before:h-full pop:before:w-full pop:before:bg-accent hover:bg-accent pop:hover:bg-accent hover:fill-offWhite pop:hover:fill-black hover:stroke-primary pop:hover:stroke-black hover:text-primary pop:hover:text-black pop:hover:before:bg-black"
      {...props}
    >
      {children}
    </button>
  )
}
