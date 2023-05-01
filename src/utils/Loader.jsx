import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

export default function Loader() {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  )
}
