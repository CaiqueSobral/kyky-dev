import Explosion from '@/components/icons/Explosion'
import Standard from '@public/images/Standard.png'

export default function Aside() {
  return (
    <aside className="pointer-events-none flex flex-1 items-center justify-center lg:h-auto">
      <Explosion />
      <div className="after:-z-10 std:after:-top-[10%] std:after:-right-[10%] before:-z-10 std:before:-bottom-[10%] std:before:-left-[10%] pop:clip-explosion pop:before:clip-explosion pop:before:-top-[50%] pop:after:clip-explosion pop:after:-top-1/2 relative flex aspect-square h-3/4 max-h-40 xsm:max-w-[180px] pop:scale-150 items-center justify-center pop:rounded-none rounded-3xl bg-accent pop:bg-black before:absolute before:aspect-square before:h-3/4 pop:before:h-[90%] pop:before:translate-y-[61%] before:rounded-3xl before:bg-accent-dark pop:before:bg-offWhite pop:before:bg-pop-profile after:absolute after:aspect-square after:h-3/4 pop:after:h-[90%] pop:after:translate-y-[61%] after:rounded-3xl after:bg-accent-light pop:after:bg-contain pop:after:bg-pop-pic pop:after:bg-transparent md:h-auto md:max-h-none md:w-1/3 md:max-w-[246px] pop:md:scale-100 lg:w-3/5 pop:lg:w-4/5 lg:max-w-[350px] pop:lg:max-w-[500px]">
        <img
          src={Standard.src}
          alt="It's me"
          className="pop:hidden h-auto pop:w-10/12 w-4/5 self-end"
        />
      </div>
    </aside>
  )
}
