import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'

const TopicsList = () => {
  return (
    <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5 mx-2 items-start'>
        <div>
            <h2 className='font-bold text-2xl'>Topic Title</h2>
            <div>Topic Description</div>
        </div>

        <div className='flex gap-2'>
          <RemoveBtn />
          <Link href={'/editTopic/123'}>
            <svg class="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </Link>
        </div>
    </div>
  )
}

export default TopicsList