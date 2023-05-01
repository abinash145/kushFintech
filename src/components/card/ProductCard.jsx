import React from 'react'
export default function ProductCard({ cardData }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg h-[620px]">
      <div className="p-4">
        <img
          className="w-full mb-4 overflow-hidden aspect-square"
          src={cardData.image}
          alt="Sunset in the mountains"
        />
      </div>
      <div className="px-6 py-4 title">
        <div className="font-bold text-xl mb-2">{cardData.title}</div>
        <p className="text-gray-700 line-clamp-4 overflow-hidden whitespace-normal">
          {cardData.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 category">
        <span className="block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          # {cardData.category}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Rating : {cardData.rating.rate}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Price: {cardData.price}
        </span>
      </div>
    </div>
  )
}
