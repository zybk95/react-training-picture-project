import React from 'react'
import './imageList.scss'
import Image from './image.js'

const imageList = ({ images }) => {

  const hazirlananResimler = images.map(resim => {
    return (
      // <img alt={resim.id} key={resim.id} src={resim.urls.small} />
      <Image key={resim.id} resim={resim} />
    )
  });

  console.log(images);

  return (
    <div className="image-list-container">
      {hazirlananResimler}
    </div>
  )
}

export default imageList;