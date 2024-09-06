'use client'

import { useEffect, useState } from 'react'
import Down from '../icons/Down'

type Styles = 'standard' | 'pop'

export default function CoolButton() {
  const [style, setStyle] = useState<Styles>('standard')
  const toggleStyle = () => {
    setStyle((old) => (old === 'standard' ? 'pop' : 'standard'))
  }

  useEffect(() => {
    document.body.className = style
  }, [style])

  return (
    <div className="pop:before:-bottom-1 pop:before:-left-1 pop:before:-z-10 relative z-10 self-center pop:before:absolute pop:before:h-full pop:before:w-full pop:before:bg-accent pop:hover:before:bg-black">
      <button
        type="button"
        className="inline-flex w-fit items-center justify-between gap-2 pop:rounded-none rounded-full border border-accent border-solid pop:border-none bg-primary pop:bg-black fill-accent px-4 py-1 text-accent hover:bg-accent pop:hover:bg-accent hover:fill-primary pop:hover:fill-black hover:text-primary pop:hover:text-black"
        onClick={() => toggleStyle()}
      >
        <span className="text-xs">Toggle</span>
        <Down height={12} width={12} />
      </button>
    </div>
  )
}
