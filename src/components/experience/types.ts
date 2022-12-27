import { StaticImageData } from 'next/image'

interface ImagesTypes {
  id: number
  image: string | StaticImageData
}

export const dataImages: ImagesTypes[] = [
  {
    id: 0,
    image: require('../../../public/images/our-work/1.png'),
  },
  {
    id: 1,
    image: require('../../../public/images/our-work/2.png'),
  },
  {
    id: 2,
    image: require('../../../public/images/our-work/3.png'),
  },
  {
    id: 3,
    image: require('../../../public/images/our-work/4.png'),
  },
  {
    id: 4,
    image: require('../../../public/images/our-work/5.png'),
  },
  {
    id: 5,
    image: require('../../../public/images/our-work/6.png'),
  },
  {
    id: 6,
    image: require('../../../public/images/our-work/7.png'),
  },
  {
    id: 7,
    image: require('../../../public/images/our-work/8.png'),
  },
]
