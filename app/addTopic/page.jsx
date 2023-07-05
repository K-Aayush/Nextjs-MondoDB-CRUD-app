import React from 'react'

const AddTopic = () => {
  return (
    <form className="flex flex-col gap-3">
        <input className="border broder-slate-500 px-8 py-2 mx-2" type="text" placeholder="Topic Title" />
        <input className="border broder-slate-500 px-8 py-2 mx-2" type="text" placeholder="Topic Description" />

        <button className='bg-green-600 font-bold text-white py-3 px-6 w-fit mx-2'>
            Add Topic
        </button>
    </form>
    
  )
}

export default AddTopic;