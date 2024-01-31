import React from 'react'

const Form = ({ children, className }) => {
    return (
        <div className={`border border-secondary bg-primary p-4 rounded-xl ${className}`}>
            <aside className='text-center'>{children}</aside>
            <form className='*:border *:text-text *:border-primary space-y-3 *:py-1 *:px-2 *:outline-none *:rounded-xl flex flex-col'>
                <input className='bg-custom-white' type="text" name="name" id="" placeholder='Name *' />
                <input className='bg-custom-white' type="email" name="email" id="" placeholder='Email *' />
                <input className='bg-custom-white' type="text" name="phone" id="" placeholder='Contact No. *' />
                <textarea name="message" placeholder='message' className='min-w-[100%] min-h-[150px] max-h-[250px]'></textarea>
                <button className='bg-secondary font-medium'>Submit</button>
            </form>
        </div>
    )
}

export default Form