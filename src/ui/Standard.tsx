import Main from '@/components/Content'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Standard() {
  return (
    <main className="flex flex-col w-screen h-screen max-w-screen-2xl bg-offWhite p-8 xsm:p-12 sm:p-16 mx-auto">
      <Header />
      <Main />
      <Footer />
    </main>
  )
}
