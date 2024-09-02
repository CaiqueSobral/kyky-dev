import Standard from '@public/images/Standard.png'

export default function Aside() {
  return (
    <aside className="flex-1 flex h-full items-center justify-center z-10">
      <div className="flex justify-center relative pt-6 items-center h-2/5 aspect-square bg-primary-normal rounded-3xl after:h-3/4 after:bg-primary-light after:aspect-square after:rounded-3xl after:absolute after:-z-10 after:-top-[10%] after:-right-[10%] before:h-3/4 before:bg-primary-dark before:aspect-square before:rounded-3xl before:absolute before:-z-10 before:-bottom-[10%] before:-left-[10%]">
        <img src={Standard.src} alt="It's me" className="h-full w-auto" />
      </div>
    </aside>
  )
}
