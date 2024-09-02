import Standard from '@public/images/Standard.png'

export default function Aside() {
  return (
    <aside className="flex-1 flex items-center justify-center z-10 lg:h-auto">
      <div className="flex justify-center relative pt-6 items-center w-3/5 xsm:max-w-[230px] md:max-w-[246px] md:w-1/3 lg:w-3/5 lg:max-w-[350px] aspect-square bg-primary-normal rounded-3xl after:h-3/4 after:bg-primary-light after:aspect-square after:rounded-3xl after:absolute after:-z-10 after:-top-[10%] after:-right-[10%] before:h-3/4 before:bg-primary-dark before:aspect-square before:rounded-3xl before:absolute before:-z-10 before:-bottom-[10%] before:-left-[10%]">
        <img src={Standard.src} alt="It's me" className="h-full w-auto" />
      </div>
    </aside>
  )
}
