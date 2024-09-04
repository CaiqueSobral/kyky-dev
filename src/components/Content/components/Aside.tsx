import Standard from '@public/images/Standard.png'

export default function Aside() {
  return (
    <aside className="z-10 flex flex-1 items-center justify-center lg:h-auto">
      <div className="after:-z-10 after:-top-[10%] after:-right-[10%] before:-z-10 before:-bottom-[10%] before:-left-[10%] relative flex aspect-square w-3/5 xsm:max-w-[180px] items-center justify-center rounded-3xl bg-primary-normal before:absolute before:aspect-square before:h-3/4 before:rounded-3xl before:bg-primary-dark after:absolute after:aspect-square after:h-3/4 after:rounded-3xl after:bg-primary-light md:w-1/3 md:max-w-[246px] lg:w-3/5 lg:max-w-[350px]">
        <img
          src={Standard.src}
          alt="It's me"
          className="h-auto w-4/5 self-end"
        />
      </div>
    </aside>
  )
}
