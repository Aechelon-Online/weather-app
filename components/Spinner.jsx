import React from 'react'
import spinner from '../public/gray-loader.gif'

const Spinner = () => {
    return(
        <>
        <Image className="w-[200px] m-auto block absolute z-20" src={spinner} alt="loading.." />
        </>
    )
}

export default Spinner