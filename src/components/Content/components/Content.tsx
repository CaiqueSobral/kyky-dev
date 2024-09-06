import UrlIcon from '@/components/icons/UrlIcon'

export default function Content() {
  const classNameForDivs =
    'pop:bg-black relative pop:font-black pop:rotate-1 pop:px-2 pop:py-1 pop:before:absolute pop:before:h-full pop:before:w-full pop:before:bg-accent pop:before:-top-1 pop:before:-right-1 pop:before:-z-10'

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-col gap-4">
        <h1 className="text-center font-semibold pop:font-pop pop:text-4xl text-2xl text-accent md:text-3xl pop:md:text-5xl">
          Hello, I'm Kyky
        </h1>
        <div className="flex flex-col items-center justify-center pop:gap-2 text-center text-details text-sm md:text-base">
          <div className={classNameForDivs}>
            <span>I'm a software engineer</span>
          </div>
          <div className={classNameForDivs}>
            <span>And this is my cliche website</span>
          </div>
        </div>
        <div className="pop:after:-z-10 pop:after:-bottom-1 pop:after:-left-1 relative z-10 self-center pop:after:absolute pop:after:h-full pop:after:w-full pop:after:bg-accent pop:hover:after:bg-black">
          <a
            href="/files/Kyky-Resume.pdf"
            className="inline-flex items-center gap-4 pop:rounded-none rounded-full bg-accent pop:bg-black px-6 py-1 pop:text-accent text-primary transition-transform hover:scale-105 pop:hover:scale-100 hover:bg-accent-dark pop:hover:bg-accent pop:hover:text-black"
            target="_blank"
            rel="noreferrer"
          >
            <span className="pop:font-black text-sm md:text-base">
              My Resume
            </span>
            <UrlIcon height={12} width={12} className="inline fill-primary" />
          </a>
        </div>
      </div>
    </div>
  )
}
