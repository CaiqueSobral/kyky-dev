import Github from '@/components/icons/Github'
import Linkedin from '@/components/icons/Linkedin'
import Gmail from '../icons/Gmail'

export default function Footer() {
  return (
    <footer className="flex items-center justify-center gap-6 lg:justify-normal">
      <a
        href="https://github.com/CaiqueSobral"
        target="_blank"
        rel="noreferrer"
        className="h-6 w-6 transition-all hover:scale-125"
      >
        <Github className="pop:rounded-md pop:bg-black fill-accent pop:fill-accent stroke-accent pop:p-[2px]" />
      </a>
      <a
        href="https://linkedin.com/in/caique-sobral/"
        target="_blank"
        rel="noreferrer"
        className="h-6 w-6 transition-all hover:scale-125"
      >
        <Linkedin className="pop:rounded-md pop:bg-black fill-accent pop:fill-accent pop:p-[2px]" />
      </a>
      <a
        href="mailto:caiquelsobral@gmail.com@gmail.com.br"
        target="_blank"
        rel="noreferrer"
        className="h-6 w-6 transition-all hover:scale-125"
      >
        <Gmail className="pop:rounded-md pop:bg-black fill-primary pop:fill-black stroke-accent pop:p-[2px]" />
      </a>
    </footer>
  )
}
