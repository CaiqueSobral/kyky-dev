import Aside from './components/Aside'
import Content from './components/Content'

export default function Main() {
  return (
    <section className="-z-10 relative flex flex-1 flex-col-reverse lg:flex-row lg:items-center tracking-wide">
      <Content />
      <Aside />
    </section>
  )
}
