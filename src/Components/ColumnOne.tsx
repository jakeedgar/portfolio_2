import React from 'react'
import pic from '../../public/jake_pfp 1.png'
import Image from 'next/image'

const ColumnOne: React.FC = () => {
  return (
    <div>
      This is the test content
      <div>this is the test content</div>
      <Image src={pic} alt='alt text' />
    </div>
  )
}

export default ColumnOne
