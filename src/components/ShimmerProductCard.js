import React from 'react'
import { ShimmerBadge,  ShimmerThumbnail, ShimmerTitle } from 'react-shimmer-effects'

const ShimmerProductCard = () => {
  return (
    <div
      className="relative m-8 flex  max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md w-96"
    >
      <div className="m-6 ">
        <div>
            <ShimmerThumbnail height={150} rounded />
            <ShimmerTitle  line={3} gap={10} variant="secondary" />
          <div className="flex items-center justify-between ">
          <div><ShimmerBadge width={130}  /></div>
            <div className=" font-bold flex items-center">
              <div className=''><ShimmerBadge width={80} /></div>
            </div>
          </div>
          <ShimmerThumbnail height={40} rounded />
        </div>
      </div>
    </div>
  )
}

export default ShimmerProductCard