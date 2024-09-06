import Main from '@/components/Content/Index'
import Footer from '@/components/Footer/Index'
import Header from '@/components/Header/Index'

export default function Standard() {
  return (
    <main className="mx-auto flex h-svh min-h-svh w-screen max-w-screen-2xl flex-col bg-primary pop:bg-pop pop:from-primary pop:to-white pop:bg-repeat p-6 sm:p-16">
      <Header />
      <Main />
      <Footer />
    </main>
  )
}
