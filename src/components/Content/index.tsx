import Aside from './components/Aside'
import Content from './components/Content'

export default function Main() {
  return (
    <section className="flex-1 flex flex-col-reverse lg:flex-row lg:items-center">
      <Content />
      <Aside />
    </section>
  )
}
