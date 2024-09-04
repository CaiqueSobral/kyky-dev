import Aside from './components/Aside'
import Content from './components/Content'

export default function Main() {
  return (
    <section className="flex flex-1 flex-col-reverse lg:flex-row lg:items-center">
      <Content />
      <Aside />
    </section>
  )
}
