import UrlIcon from '@/components/icons/UrlIcon'

export default function Content() {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl md:text-3xl font-semibold text-primary text-center">
          Hello, I'm Kyky
        </h1>
        <div className="text-center text-sm text-[#161616] md:text-base">
          <p>I'm a software engineer</p>
          <p>And this is my cliche website</p>
        </div>
        <div className="self-center">
          <a
            href="/files/Kyky-Resume.pdf"
            className="py-1 px-6 bg-primary-normal transition-all rounded-full items-center inline-flex gap-4 hover:bg-primary-dark hover:scale-105"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-sm md:text-base text-[#FAF9F6]">
              My Resume
            </span>
            <UrlIcon height={12} width={12} className="inline" fill="#FAF9F6" />
          </a>
        </div>
      </div>
    </div>
  )
}
