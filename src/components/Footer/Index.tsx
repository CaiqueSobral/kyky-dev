import Github from '@/components/icons/Github'
import Instagram from '@/components/icons/Instagram'
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
        <Github fill="#1C4473" stroke="#1C4473" />
      </a>
      <a
        href="https://linkedin.com/in/caique-sobral/"
        target="_blank"
        rel="noreferrer"
        className="h-6 w-6 transition-all hover:scale-125"
      >
        <Linkedin fill="#1C4473" />
      </a>
      <a
        href="mailto:caiquelsobral@gmail.com@gmail.com.br"
        target="_blank"
        rel="noreferrer"
        className="h-6 w-6 transition-all hover:scale-125"
      >
        <Gmail fill="#FAF9F6" stroke="#1C4473" />
      </a>
    </footer>
  )
}
