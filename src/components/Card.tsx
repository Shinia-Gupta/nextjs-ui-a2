import Image from 'next/image'
import React from 'react'

interface Props {
    img: string,
    name: string
}

function Card(props: Props) {
    const { img, name } = props

    return (
        <div className="bg-white border border-gray-200  shadow overflow-hidden flex flex-col">
            <div className="relative w-full h-80"> {/* Fixed height */}
                <Image
                    src={img}
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            {/* <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{name}</h3>
            </div> */}
        </div>
    )
}

export default Card
