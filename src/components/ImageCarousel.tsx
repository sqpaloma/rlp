import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

const carouselImages = [
  {
    id: 1,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0348-w55GDjrlN3Fl9RW7vhKmuOQ1Kgv9I3.jpeg",
    title: "Edifício Comercial Santana",
    address: "Av. Água Fria 532, Santana, São Paulo - SP",
  },
  {
    id: 2,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0349-s1XJm2g6AeblIcHlzXO7TaTwc1ZTW5.jpeg",
    title: "Residencial Brasília Office",
    address: "Av. Água Fria 532, Santana, São Paulo - SP",
  },
  {
    id: 3,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0362-ut7sqOkUfqqkMsBlJIuKq25XRe9qlL.jpeg",
    title: "Edifício Corporativo Blue Tower",
    address: "Av. Paulista 1200, Bela Vista, São Paulo - SP",
  },
  {
    id: 4,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0363-pcH23whE30HcKRfbs1rq4H9DmnPqml.webp",
    title: "Residencial Vista Moderna",
    address: "Rua Augusta 1500, Consolação, São Paulo - SP",
  },
]

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [autoplay, setAutoplay] = useState(true)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  const getNextIndex = (index: number) => (index + 1) % carouselImages.length
  const getPrevIndex = (index: number) => (index - 1 + carouselImages.length) % carouselImages.length

  useEffect(() => {
    if (autoplay && !isTransitioning) {
      autoplayRef.current = setInterval(() => {
        handleSlideChange("next")
      }, 3000)
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [autoplay, isTransitioning, currentIndex])

  const handleSlideChange = (direction: "next" | "prev") => {
    if (isTransitioning) return

    setIsTransitioning(true)
    const nextIndex = direction === "next" ? getNextIndex(currentIndex) : getPrevIndex(currentIndex)

    setTimeout(() => {
      setCurrentIndex(nextIndex)
      setTimeout(() => {
        setIsTransitioning(false)
      }, 50)
    }, 300)
  }

  const handleManualNavigation = (direction: "next" | "prev") => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
    }

    handleSlideChange(direction)

    setTimeout(() => {
      setAutoplay(true)
    }, 10000)
  }

  const mainSlideIndex = currentIndex
  const secondarySlideIndex = getNextIndex(currentIndex)

  return (
    <div className="relative">
      <div className="flex justify-center space-x-6 relative">
        <div className={`w-1/2 transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image
              src={carouselImages[mainSlideIndex].src || "/placeholder.svg"}
              alt={carouselImages[mainSlideIndex].title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 25vw"
              priority
            />
          </div>
          <div className="mt-4 h-16">
            <h3 className="font-semibold text-lg">{carouselImages[mainSlideIndex].title}</h3>
            <p className="text-gray-600 text-sm">{carouselImages[mainSlideIndex].address}</p>
          </div>
        </div>

        <div className={`w-1/3 transition-opacity duration-300 relative ${isTransitioning ? "opacity-0" : "opacity-30"}`}>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image
              src={carouselImages[secondarySlideIndex].src || "/placeholder.svg"}
              alt={carouselImages[secondarySlideIndex].title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 17vw"
            />

            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
              <div className="bg-white rounded-full p-2 shadow-lg">
                <ChevronRight className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="mt-4 h-16">
            <h3 className="font-semibold text-sm">{carouselImages[secondarySlideIndex].title}</h3>
            <p className="text-gray-600 text-xs">{carouselImages[secondarySlideIndex].address}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() => handleManualNavigation("prev")}
          className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors disabled:opacity-50"
          disabled={isTransitioning}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => handleManualNavigation("next")}
          className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors disabled:opacity-50"
          disabled={isTransitioning}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
} 