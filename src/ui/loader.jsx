import React from 'react'

const Loader = () => {
  return (
    <div className='mt-4 d-flex justify-content-center align-items-center'>
        <div class="spinner-grow " role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
  )
}

export default Loader