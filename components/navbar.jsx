import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center my-2 mx-2 bg-slate-800 px-8 py-5'>
        <Link className='text-white font-bold' href={"/"}>GTCoding.</Link>
        <Link  className='bg-white p-2' href={"/addTopic"}>Add Topic</Link>
    </nav>
  )
}

export default Navbar;
