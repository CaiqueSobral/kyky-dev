'use client'

import { useEffect, useState } from 'react'
import Down from '../icons/Down'
import Option from '../icons/Option'

const Styles = ['standard', 'pop']

export default function CoolButton() {
  const [active, setActive] = useState(false)
  const [needed, setNeeded] = useState(false)

  const toggleactive = () => {
    setActive((old) => !old)
  }

  const [style, setStyle] = useState<(typeof Styles)[number]>('standard')

  useEffect(() => {
    document.body.className = style
    setActive(false)
  }, [style])

  useEffect(() => {
    function handleClick() {
      !needed && setActive(false)
    }

    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [needed])

  return (
    <div className="pop:before:-bottom-1 pop:before:-left-1 pop:before:-z-10 relative z-10 self-center pop:before:absolute pop:before:h-full pop:before:w-full pop:before:bg-accent pop:hover:before:bg-black">
      <button
        type="button"
        className="inline-flex w-fit items-center justify-between gap-2 pop:rounded-none rounded-full border border-accent border-solid pop:border-none bg-primary pop:bg-black stroke-accent px-4 py-1 pop:font-black text-accent hover:bg-accent pop:hover:bg-accent hover:stroke-primary pop:hover:stroke-black hover:text-primary pop:hover:text-black"
        onMouseEnter={() => setNeeded(true)}
        onMouseLeave={() => setNeeded(false)}
        onClick={() => toggleactive()}
      >
        <span className="text-xs">Styles</span>
        <Down height={12} width={12} />
      </button>
      {active && (
        <div
          onMouseEnter={() => setNeeded(true)}
          onMouseLeave={() => setNeeded(false)}
          className="pop:before:-z-10 absolute right-0 mt-1 pop:mt-2 flex flex-col std:rounded-lg bg-accent pop:bg-black std:bg-accent-dark py-2 pop:before:absolute pop:before:top-1 pop:before:right-1 pop:before:h-full pop:before:w-full pop:before:bg-accent"
        >
          {Styles.map((style) => {
            return (
              <button
                type="button"
                key={style}
                onClick={() => setStyle(style)}
                className="flex items-center gap-2 pop:bg-black std:bg-accent-dark pop:stroke-accent-light stroke-primary py-1 pr-4 pl-2 pop:font-medium pop:text-accent-light text-offWhite text-sm transition-all pop:hover:bg-accent std:hover:bg-accent-light pop:hover:stroke-black pop:hover:text-black"
              >
                <Option height={12} width={12} />
                <span>
                  {style[0].toUpperCase() + style.substring(1).toLowerCase()}
                </span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
