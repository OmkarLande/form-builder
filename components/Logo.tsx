import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href={"/"}
        className='font-bold text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-pink-500 to-rose-700 text-transparent bg-clip-text hover:cursor-pointer'
    >
        Chisel
    </Link>
  )
}

export default Logo
