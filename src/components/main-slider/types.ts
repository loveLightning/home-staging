import { StaticImageData } from 'next/image'

import mainImage from '../../../public/images/main.png'
import smallImage from '../../../public/images/slider/first-slider.png'

interface MainSliderTypes {
  id: number
  title: string
  desc: string
  pageNumber: string
  additDesc: string
  image: string | StaticImageData
  imageSmall: string | StaticImageData
}

export const mainSliderData: MainSliderTypes[] = [
  {
    id: 0,
    title: 'Home Staging',
    desc: 'Award-winning home staging company featured on HGTV',
    additDesc: 'Our staging is featured on hgtv',
    pageNumber: '01',
    image: mainImage,
    imageSmall: smallImage,
  },
  {
    id: 1,
    title: 'Home Staging',
    desc: 'Award-winning home staging company featured on HGTV',
    pageNumber: '02',
    additDesc: 'Our staging is featured on hgtv',
    image: mainImage,
    imageSmall: smallImage,
  },
]
