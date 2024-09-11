'use client'

import { useEffect, useState } from 'react'
import Down from '../icons/Down'
import IconCoolButton from '../Custom/IconCoolButton'
import About from '../icons/About'
import Link from 'next/link'

export default function MenuButton() {
  const [active, setActive] = useState(false)
  const [needed, setNeeded] = useState(false)

  const toggleactive = () => {
    setActive((old) => !old)
  }

  useEffect(() => {
    function handleClick() {
      !needed && setActive(false)
    }

    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [needed])

  return (
    <div className="relative">
      <IconCoolButton
        aria-label="Menu Button"
        onMouseEnter={() => setNeeded(true)}
        onMouseLeave={() => setNeeded(false)}
        onClick={() => toggleactive()}
      >
        <Down className="h-[10px] pop:h-3 pop:w-3 w-[10px]" />
      </IconCoolButton>
      {active && (
        <div
          onMouseEnter={() => setNeeded(true)}
          onMouseLeave={() => setNeeded(false)}
          className="pop:before:-z-10 absolute left-0 mt-1 pop:mt-2 flex flex-col std:rounded-lg bg-accent pop:bg-black std:bg-accent-dark py-2 pop:before:absolute pop:before:top-1 pop:before:right-1 pop:before:h-full pop:before:w-full pop:before:bg-accent"
        >
          <Link
            href={'/about'}
            className="flex items-center gap-2 pop:bg-black std:bg-accent-dark pop:stroke-accent-light stroke-offWhite py-1 pr-4 pl-2 pop:font-medium pop:text-accent-light text-offWhite text-sm transition-all pop:hover:bg-accent std:hover:bg-accent-light pop:hover:stroke-black pop:hover:text-black"
          >
            <About className="h-[14px] pop:h-4 pop:w-4 w-[14px]" />
            <span className="text-nowrap pop:font-medium pop:text-sm text-xs">
              About me
            </span>
          </Link>
        </div>
      )}
    </div>
  )
}
