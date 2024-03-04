import React from 'react'
import { ShimmerBadge,  ShimmerThumbnail, ShimmerTitle } from 'react-shimmer-effects'

const ShimmerProductCard = () => {
  return (
    <div
      className="relative m-8 flex  max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md w-96"
    >
      <div className="m-6 ">
        <div>
            <ShimmerThumbnail height={180} rounded />
            <ShimmerTitle  line={3} gap={10} variant="secondary" />
          <span className="flex items-center justify-between ">
          <span><ShimmerBadge width={130}  /></span>
            <p className=" font-bold flex items-center">
              <span className=''><ShimmerBadge width={80} /></span>
            </p>
          </span>
          <ShimmerThumbnail height={40} rounded />
        </div>
      </div>
    </div>
  )
}

export default ShimmerProductCard