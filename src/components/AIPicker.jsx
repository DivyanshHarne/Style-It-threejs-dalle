import React from 'react'
import CustomButton from './CustomButton'

const AIPicker = ({prompt, setPrompt, generatingImg, handleSubmit}) => {
  return (
    <div className='aipicker-container'>
      <textarea 
      className='aipicker-textarea'
      rows={5}
      value={prompt}
      placeholder='What is it that you desire?'
      onChange={(e)=> setPrompt(e.target.value)}
      />

      <div className='flex flex-wrap gap-3'>
        {generatingImg ? (
          <CustomButton 
            type="outline"
            title="Ask AI"
            customStyles='text-xs'
          />
        ) : (
          <>
          <CustomButton 
            type="outline"
            title="AI Logo"
            customStyles='text-xs'
            handleClick={() => handleSubmit('logo')}
          />

          <CustomButton 
            type="filled"
            title="AI Full Image"
            customStyles='text-xs'
            handleClick={() => handleSubmit('full')}
          />
          </>
        )
      }
      </div>
    </div>
  )
}

export default AIPicker