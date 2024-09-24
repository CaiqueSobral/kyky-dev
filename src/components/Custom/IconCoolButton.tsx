import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

export default function IconCoolButton({
  children,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      type="button"
      className="pop:before:-bottom-[3px] pop:before:-left-[3px] pop:before:-z-10 relative inline-flex kindle:h-full kindle:w-full w-fit items-center justify-between pop:rounded-none rounded-md kindle:rounded-r-none border border-accent border-solid kindle:border-none pop:border-none bg-primary kindle:bg-inherit pop:bg-black fill-accent stroke-accent p-[2px] pop:p-2 kindle:px-2 pop:font-black text-accent pop:before:absolute pop:before:h-full pop:before:w-full pop:before:bg-accent hover:bg-accent pop:hover:bg-accent hover:fill-offWhite kindle:hover:fill-primary pop:hover:fill-black hover:stroke-primary pop:hover:stroke-black hover:text-primary pop:hover:text-black pop:hover:before:bg-black"
      {...props}
    >
      {children}
    </button>
  )
}
