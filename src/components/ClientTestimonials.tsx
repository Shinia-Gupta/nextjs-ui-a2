'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function ClientTestimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="relative w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="bg-blue-950 text-white text-center flex flex-col justify-center items-center space-y-5 p-10">
              <div>
                <h1 className="text-xl font-bold mt-10 mb-4">
                  Checkout our Valued Client&apos;s Testimonials
                </h1>
                <p className="max-w-3xl">
                  Clients&apos; feedback is more precious than any other asset for our
                  company. We believe in complete client satisfaction, hence we
                  discover their needs to deliver quality solutions. Listing a few
                  from 100s of great client testimonials.
                </p>
              </div>
              <div>
                <h1 className="text-xl font-bold text-pink-500 mb-4">Eric Jona</h1>
                <p className="max-w-3xl">
                  Tkdigitals cross-functional team used a proactive approach to provide
                  my brand a dynamic website with my customizable requirements. We are
                  very pleased with all the digital marketing campaigns that they have
                  run for us, with their self-organizing professional team, we have been
                  fetching SEO/PPC records we have long awaited for.
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10" />
      <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10" />
    </Carousel>
  )
}
