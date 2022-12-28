import { StaticImageData } from 'next/image'

interface ImageTypes {
  id: number
  image: string | StaticImageData
  type: string
}

export const dataImages: ImageTypes[] = [
  {
    id: 0,
    image: require('../../../public/images/projects/1.png'),
    type: 'Kitchen',
  },
  {
    id: 1,
    image: require('../../../public/images/projects/2.png'),
    type: 'Living Room',
  },
  {
    id: 2,
    image: require('../../../public/images/projects/3.png'),
    type: 'Other',
  },
  {
    id: 3,
    image: require('../../../public/images/projects/4.png'),
    type: 'Primary Bedroom',
  },
  {
    id: 4,
    image: require('../../../public/images/projects/5.png'),
    type: 'Primary Bedroom',
  },
  {
    id: 5,
    image: require('../../../public/images/projects/6.png'),
    type: 'Other',
  },
  {
    id: 6,
    image: require('../../../public/images/projects/7.png'),
    type: 'Living Room',
  },
  {
    id: 7,
    image: require('../../../public/images/projects/8.png'),
    type: 'Other',
  },
  {
    id: 8,
    image: require('../../../public/images/projects/9.png'),
    type: 'Kitchen',
  },
  {
    id: 9,
    image: require('../../../public/images/projects/10.png'),
    type: 'Kitchen',
  },
]
