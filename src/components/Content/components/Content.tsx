import UrlIcon from '@/components/icons/UrlIcon'
import TextBox from './minor components/TextBox'

export default function Content() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-col gap-4">
        <h1 className="text-center font-semibold pop:font-pop pop:text-4xl text-2xl text-accent md:text-3xl pop:md:text-5xl">
          Hello, I'm Kyky
        </h1>
        <div className="flex flex-col items-center justify-center pop:gap-2 text-center text-details text-sm md:text-base">
          <TextBox>
            <span>I'm a software engineer</span>
          </TextBox>
          <TextBox>
            <span>And this is my cliche website</span>
          </TextBox>
        </div>
        <div className="pop:after:-z-10 pop:after:-bottom-1 pop:after:-left-1 pop:relative pop:z-10 self-center pop:after:absolute pop:after:h-full pop:after:w-full pop:after:bg-accent pop:hover:after:bg-black">
          <a
            href="/Resume.pdf"
            className="inline-flex items-center gap-4 pop:rounded-none rounded-full kindle:border kindle:border-accent bg-accent kindle:bg-primary pop:bg-black kindle:stroke-accent pop:stroke-accent stroke-primary px-6 py-1 kindle:text-accent pop:text-accent text-primary kindle:transition-colors transition-transform std:hover:scale-105 hover:bg-accent-dark kindle:hover:bg-accent pop:hover:bg-accent kindle:hover:stroke-primary pop:hover:stroke-black kindle:hover:text-primary pop:hover:text-black"
            target="_blank"
            rel="noreferrer"
          >
            <span className="pop:font-black text-sm md:text-base">
              My Resume
            </span>
            <UrlIcon
              height={16}
              width={16}
              className="inline rotate-[135deg]"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
