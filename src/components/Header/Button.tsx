'use client'

import { useState } from 'react'

export default function CoolButton() {
  const [state, setState] = useState('closed')

  return (
    <button
      type="button"
      className="inline-flex w-fit rounded-full bg-primary-normal px-6 py-1 hover:bg-primary-dark"
    >
      <span className="text-offWhite text-sm">Cool stuff</span>
    </button>
  )
}
