import Main from '@/components/Content/Index'
import Footer from '@/components/Footer/Index'
import Header from '@/components/Header/Index'

export default function Standard() {
  return (
    <main className="h-svh min-h-svh w-screen bg-primary pop:bg-pop pop:bg-repeat">
      <section className="mx-auto flex h-full w-full max-w-screen-2xl flex-col p-6 sm:p-16">
        <Header />
        <Main />
        <Footer />
      </section>
    </main>
  )
}
