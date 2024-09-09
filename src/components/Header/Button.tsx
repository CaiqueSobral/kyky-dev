'use client'

import { useEffect, useState } from 'react'
import Down from '../icons/Down'

const Styles = ['standard', 'pop']

export default function CoolButton() {
  const [active, setActive] = useState(false)

  const toggleactive = () => {
    setActive((old) => !old)
  }

  const [style, setStyle] = useState<(typeof Styles)[number]>('standard')

  useEffect(() => {
    document.body.className = style
    setActive(false)
  }, [style])

  return (
    <div className="pop:before:-bottom-1 pop:before:-left-1 pop:before:-z-10 relative z-10 self-center pop:before:absolute pop:before:h-full pop:before:w-full pop:before:bg-accent pop:hover:before:bg-black">
      <button
        type="button"
        className="inline-flex w-fit items-center justify-between gap-2 pop:rounded-none rounded-full border border-accent border-solid pop:border-none bg-primary pop:bg-black fill-accent px-4 py-1 pop:font-black text-accent hover:bg-accent pop:hover:bg-accent hover:fill-primary pop:hover:fill-black hover:text-primary pop:hover:text-black"
        onClick={() => toggleactive()}
      >
        <span className="text-xs">Styles</span>
        <Down height={12} width={12} />
      </button>
      {active && (
        <div className="absolute">
          {Styles.map((style) => {
            return (
              <button type="button" key={style} onClick={() => setStyle(style)}>
                <span>{style}</span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
