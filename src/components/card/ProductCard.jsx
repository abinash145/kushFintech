import React from 'react'
import Rating from 'react-rating'
export default function ProductCard({ cardData }) {
  const { title, rating, price, image, id, description, category } = cardData
  return (
    <div className="w-full ">
      <div className="mb-4 border rounded-lg overflow-hidden aspect-square">
        <img src={image} alt="" className="w-full " />
      </div>
      <div className="p-4">
        <div>
          <h2 className="text-lg font-medium mb-2">{title}</h2>
          <p className="text-base line-clamp-4 overflow-hidden whitespace-normal">
            {description}
          </p>
        </div>
        <div className="flex justify-between">
          <div className="">
            <p> Price:{price}</p>
          </div>
          <div className="">
            {/* <Rating style={{ maxWidth: 180 }} value={3} readOnly={true} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
