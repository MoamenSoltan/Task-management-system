import React from 'react'

const ModalTemplate = ({children}) => {
  return (
    <div className='w-screen h-screen fixed bg-half-transparent top-0 right-0 flex items-center justify-center'>
        <div className='w-[50%] h-[50%] rounded-lg justify-center items-center drop-shadow bg-white p-4 flex flex-col'>
            {children}
        </div>

        
        
    </div>
  )
}

export default ModalTemplate