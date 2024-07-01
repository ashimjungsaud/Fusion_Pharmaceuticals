import React from 'react'

export const Button = () => {
  return (
      <button className='productButton bg-cyan-600 rounded-lg p-2 text-white hover:bg-cyan-800 hover:p-3'
          onClick={() => navigate('product')}>
          Know more
      </button>
  )
}
