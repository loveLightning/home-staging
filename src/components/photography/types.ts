import { StaticImageData } from 'next/image'

import bed from '../../../public/images/bed.png'
import house from '../../../public/images/house.png'

interface PhotograpyTypes {
  id: number
  title: string
  desc: string
  image: string | StaticImageData
  link: string
}

export const photographyData: PhotograpyTypes[] = [
  {
    id: 0,
    title: 'Home staging',
    desc: 'You deserve the best return on your investmend! Home Staging is a perfect marketing tool to sell homes faster and for the highest price. We offer staging services in transitional, modern, mid-century modern & contemporary styles',
    image: house,
    link: '/services/home-staging',
  },

  {
    id: 1,
    title: 'Real Estate Photography',
    desc: 'We understand first hand how important it is to have sharp, high-quality real-estate photography available as quickly as possible and that’s what we doz',
    image: bed,
    link: '/services/photography',
  },
]
