import { StaticImageData } from 'next/image'

import review from '../../../public/images/testimonials/review.png'
import image from '../../../public/images/testimonials/testimonials.png'

interface SliderTypes {
  id: number
  firstImage: string | StaticImageData
  secondImage: string | StaticImageData
}

export const sliderData: SliderTypes[] = [
  {
    id: 0,
    firstImage: image,
    secondImage: review,
  },
  {
    id: 1,
    firstImage: image,
    secondImage: review,
  },
  {
    id: 2,
    firstImage: image,
    secondImage: review,
  },
  {
    id: 3,
    firstImage: image,
    secondImage: review,
  },
]
