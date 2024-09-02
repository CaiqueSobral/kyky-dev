import Navigation from './components/Navigation'
import Aside from './components/Aside'
import Content from './components/Content'

export default function Main() {
  return (
    <section className="flex-1 flex justify-center items-center">
      {/* <Navigation /> */}
      <Content />
      <Aside />
    </section>
  )
}
