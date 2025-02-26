export default function AboutUi() {
  return (
    <section className="-z-10 relative flex flex-1 flex-col-reverse py-5 md:py-10 lg:flex-row">
      <div className="flex flex-1 items-start justify-center sm:items-center">
        <div className="pop:before:-left-2 pop:before:-bottom-2 pop:before:-z-10 relative flex w-4/5 flex-col gap-2 pop:rounded-none rounded-2xl kindle:border kindle:border-accent bg-accent-dark kindle:bg-transparent pop:bg-black px-4 py-3 kindle:text-accent text-offWhite pop:before:absolute pop:before:h-full pop:before:w-full pop:before:bg-accent md:w-3/4">
          <p className="text-center text-base text-inherit lg:text-lg">
            Hi, I'm Kyky.
          </p>
          <p className="text-inherit text-xs lg:text-sm">
            My actual name is Caique Sobral, but most of my friends and peers
            call me Kyky.
          </p>
          <p className="text-inherit text-xs lg:text-sm">
            I'm a software engineer, currently working for IBM. I have a
            bachelor's degree in Computer Science from the Universidade Anhembi
            Morumbi.
          </p>
          <p className="text-inherit text-xs lg:text-sm">
            I've been around for {new Date().getFullYear() - 2020}+ years,
            mostly working as a full-stack developer.
          </p>
          <p className="text-inherit text-xs lg:text-sm">
            I'm always trying to learn new things and build stuff I enjoy, such
            as this website.
          </p>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="after:-z-10 std:after:-top-[10%] std:after:-right-[10%] before:-z-10 std:before:-bottom-[10%] std:before:-left-[10%] pop:after:-z-10 relative flex aspect-square max-h-40 xsm:w-2/4 xsm:max-w-[180px] items-center justify-center pop:rounded-none rounded-3xl kindle:border kindle:border-accent bg-accent kindle:bg-transparent pop:bg-black before:absolute pop:before:top-0 pop:before:bottom-0 kindle:before:hidden before:aspect-square before:h-3/4 pop:before:h-full pop:before:w-full before:rounded-3xl pop:before:rounded-none before:bg-accent-dark pop:before:bg-accent after:absolute kindle:after:hidden after:aspect-square after:h-3/4 pop:after:h-full pop:after:w-full pop:after:rotate-12 after:rounded-3xl pop:after:rounded-none after:bg-accent-light pop:after:bg-black md:max-h-none md:max-w-[246px] pop:md:scale-100 lg:h-auto lg:w-2/3 lg:max-w-[350px] pop:lg:max-w-[500px]">
          <img
            src={'https://github.com/caiquesobral.png'}
            alt="It's me"
            className="h-auto pop:w-full w-4/5 pop:rotate-3 pop:rounded-none rounded-2xl"
          />
        </div>
      </div>
    </section>
  )
}
