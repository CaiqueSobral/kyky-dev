import Github from '@/components/icons/Github'
import Linkedin from '@/components/icons/Linkedin'
import Instagram from '@/components/icons/Instagram'
import Gmail from '../icons/Gmail'

export default function Footer() {
  return (
    <footer className="flex gap-6 items-center h-7">
      <a
        href="https://github.com/CaiqueSobral"
        target="_blank"
        rel="noreferrer"
        className="h-6 w-6 hover:h-7 hover:w-7 transition-all"
      >
        <Github fill="#1C4473" stroke="#1C4473" />
      </a>
      <a
        href="https://linkedin.com/in/caique-sobral/"
        target="_blank"
        rel="noreferrer"
        className="h-6 w-6 hover:h-7 hover:w-7 transition-all"
      >
        <Linkedin fill="#1C4473" />
      </a>
      <a
        href="mailto:caiquelsobral@gmail.com@gmail.com.br"
        target="_blank"
        rel="noreferrer"
        className="h-6 w-6 hover:h-7 hover:w-7 transition-all"
      >
        <Gmail fill="#FAF9F6" stroke="#1C4473" />
      </a>
    </footer>
  )
}
