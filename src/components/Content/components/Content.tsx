import Download from '@/components/icons/Download'

export default function Content() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-primary">Hello, I'm Kyky</h1>
        <div>
          <p>I'm a software engineer</p>
          <p>And this is my cliche website</p>
        </div>
        <div className="self-center">
          <a
            href="/download/Kyky-Resume.pdf"
            className="py-1 px-6 bg-primary-normal transition-all rounded-full inline-flex justify-center items-center gap-2 shrink hover:bg-primary-dark hover:px-7"
            download
          >
            <span className="text-sm text-[#FAF9F6]">My Resume</span>
            <Download
              height={14}
              width={14}
              className="inline"
              fill="#FAF9F6"
              stroke="#FAF9F6"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
