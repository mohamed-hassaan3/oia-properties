import React from 'react'

const Card = ({ item }) => {
    const { image, name } = item
    return (
        <div className='lg:h-[450px] lg:w-[300px] py-10 px-4 bg-secondary my-10 mx-4 text-center rounded-xl'>
            <img src={image} alt={name} className='w-full h-[300px] object-cover rounded-3xl' />
            <p className='mt-8 text-success text-2xl'>{name}</p>
        </div>
    )
}

export default Card