import Main from '@/components/Content/Index'
import Footer from '@/components/Footer'
import Header from '@/components/Header/Index'

export default function Standard() {
  return (
    <main className="mx-auto flex h-svh min-h-svh w-screen max-w-screen-2xl flex-col bg-offWhite p-8 xsm:p-12 sm:p-16">
      <Header />
      <Main />
      <Footer />
    </main>
  )
}
