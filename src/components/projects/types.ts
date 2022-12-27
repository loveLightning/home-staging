import { StaticImageData } from 'next/image'

interface ImageTypes {
  id: number
  image: string | StaticImageData
}

export const dataImages: ImageTypes[] = [
  {
    id: 0,
    image: require('../../../public/images/projects/1.png'),
  },
  {
    id: 1,
    image: require('../../../public/images/projects/2.png'),
  },
  {
    id: 2,
    image: require('../../../public/images/projects/3.png'),
  },
  {
    id: 3,
    image: require('../../../public/images/projects/4.png'),
  },
  {
    id: 4,
    image: require('../../../public/images/projects/5.png'),
  },
  {
    id: 5,
    image: require('../../../public/images/projects/6.png'),
  },
  {
    id: 6,
    image: require('../../../public/images/projects/7.png'),
  },
  {
    id: 7,
    image: require('../../../public/images/projects/8.png'),
  },
  {
    id: 8,
    image: require('../../../public/images/projects/9.png'),
  },
  {
    id: 9,
    image: require('../../../public/images/projects/10.png'),
  },
]
