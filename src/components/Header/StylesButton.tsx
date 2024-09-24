'use client'

import { useEffect, useState } from 'react'
import Down from '../icons/Down'
import Option from '../icons/Option'
import CoolButton from '../Custom/CoolButton'

const Styles = ['standard', 'pop', 'kindle']

export default function StylesButton() {
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
      <CoolButton
        onMouseEnter={() => setNeeded(true)}
        onMouseLeave={() => setNeeded(false)}
        onClick={() => toggleactive()}
      >
        <span className="kindle:mt-[2px] text-xs">Styles</span>
        <Down height={12} width={12} />
      </CoolButton>
      {active && (
        <div
          onMouseEnter={() => setNeeded(true)}
          onMouseLeave={() => setNeeded(false)}
          className="pop:before:-z-10 absolute right-0 kindle:mt-2 mt-1 pop:mt-2 flex flex-col overflow-hidden kindle:rounded-md std:rounded-lg kindle:border kindle:border-accent bg-accent kindle:bg-primary pop:bg-black std:bg-accent-dark kindle:p-0 py-2 pop:before:absolute pop:before:top-1 pop:before:right-1 pop:before:h-full pop:before:w-full pop:before:bg-accent odd:bg-black"
        >
          {Styles.map((style) => {
            return (
              <button
                type="button"
                key={style}
                onClick={() => setStyle(style)}
                className="flex items-center gap-2 kindle:border-accent kindle:bg-primary pop:bg-black std:bg-accent-dark kindle:stroke-accent pop:stroke-accent-light stroke-primary py-1 pr-4 pl-2 pop:font-medium kindle:text-accent pop:text-accent-light text-offWhite text-sm transition-colors kindle:hover:bg-accent pop:hover:bg-accent std:hover:bg-accent-light kindle:hover:stroke-primary pop:hover:stroke-black kindle:hover:text-primary pop:hover:text-black kindle:[&:not(:last-child)]:border-b"
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
