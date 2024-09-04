import UrlIcon from '@/components/icons/UrlIcon'

export default function Content() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-col gap-4">
        <h1 className="text-center font-semibold text-2xl text-primary md:text-3xl">
          Hello, I'm Kyky
        </h1>
        <div className="text-center text-[#161616] text-sm md:text-base">
          <p>I'm a software engineer</p>
          <p>And this is my cliche website</p>
        </div>
        <div className="self-center">
          <a
            href="/files/Kyky-Resume.pdf"
            className="inline-flex items-center gap-4 rounded-full bg-primary-normal px-6 py-1 transition-all hover:scale-105 hover:bg-primary-dark"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-[#FAF9F6] text-sm md:text-base">
              My Resume
            </span>
            <UrlIcon height={12} width={12} className="inline" fill="#FAF9F6" />
          </a>
        </div>
      </div>
    </div>
  )
}
