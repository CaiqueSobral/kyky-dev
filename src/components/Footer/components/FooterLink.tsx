import type { AnchorHTMLAttributes, PropsWithChildren } from 'react'

export default function FooterLink({
  children,
  ...props
}: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className="h-6 w-6 pop:rounded-md pop:bg-black pop:p-[2px] transition-transform hover:scale-125"
      {...props}
    >
      {children}
    </a>
  )
}
