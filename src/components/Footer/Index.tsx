import Github from '@/components/icons/Github'
import Linkedin from '@/components/icons/Linkedin'
import Gmail from '../icons/Gmail'
import FooterLink from './components/FooterLink'

export default function Footer() {
  return (
    <footer className="flex items-center justify-center gap-6 lg:justify-normal">
      <FooterLink href="https://github.com/CaiqueSobral">
        <Github className="fill-accent pop:fill-accent stroke-accent" />
      </FooterLink>
      <FooterLink href="https://linkedin.com/in/caique-sobral/">
        <Linkedin className="fill-accent pop:fill-accent" />
      </FooterLink>
      <FooterLink href="mailto:caiquelsobral@gmail.com@gmail.com.br">
        <Gmail className="fill-primary pop:fill-black stroke-accent" />
      </FooterLink>
    </footer>
  )
}
