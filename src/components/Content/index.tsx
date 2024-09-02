import Aside from './components/Aside'
import Content from './components/Content'
import Navigation from './components/Navigation'

export default function Main() {
  return (
    <section className="flex-1 flex justify-center items-center">
      {/* <Navigation /> */}
      <Content />
      <Aside />
    </section>
  )
}
