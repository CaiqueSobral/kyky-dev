import UrlIcon from '@/components/icons/UrlIcon'

export default function Content() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-col gap-4">
        <h1 className="text-center font-semibold text-2xl text-accent md:text-3xl">
          Hello, I'm Kyky
        </h1>
        <div className="text-center text-details text-sm pop:shadow-black md:text-base">
          <p>I'm a software engineer</p>
          <p>And this is my cliche website</p>
        </div>
        <div className="pop:after:-z-10 pop:after:-bottom-1 pop:after:-left-1 relative z-10 self-center pop:after:absolute pop:after:h-full pop:after:w-full pop:after:bg-accent pop:hover:after:bg-black">
          <a
            href="/files/Kyky-Resume.pdf"
            className="inline-flex items-center gap-4 pop:rounded-none rounded-full bg-accent pop:bg-black px-6 py-1 pop:text-accent text-primary transition-all hover:scale-105 pop:hover:scale-100 hover:bg-accent-dark pop:hover:bg-accent pop:hover:text-black"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-sm md:text-base">My Resume</span>
            <UrlIcon height={12} width={12} className="inline fill-primary" />
          </a>
        </div>
      </div>
    </div>
  )
}
