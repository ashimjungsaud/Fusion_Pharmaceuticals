import React from 'react'
import BannerImage from '/images/banner.png'

export const Banner = () => {
    return (
        <div className="flex justify-center">
            <img className='w-full h-96 object-cover' src={BannerImage} alt="Banner"></img>
        </div>
    )
}
