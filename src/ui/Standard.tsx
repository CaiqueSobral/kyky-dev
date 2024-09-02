import Main from '@/components/Content'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Standard() {
  return (
    <main className="flex flex-col w-screen h-screen bg-offWhite p-16">
      <Header />
      <Main />
      <Footer />
    </main>
  )
}
