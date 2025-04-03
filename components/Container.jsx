import React from 'react'

const Container = ({children}) => {
    return (
        <div className='max-w-full sm:max-w-[80%] mx-auto px-4 lg:px-0 overflow-hidden md:overflow-visible'>{children}</div>
    )
}

export default Container