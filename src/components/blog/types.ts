import { StaticImageData } from 'next/image'

interface BlogTypes {
  id: number
  title: string
  desc: string
  image: string | StaticImageData
}

export const dataBlog: BlogTypes[] = [
  {
    id: 0,
    title: 'How To Start a Staging Business In 7 Simple Steps',
    desc: 'Do you love to decorate? Do you have an “eye for design”? Are you feeling creative? Thinking of a career change? This article will help you figure out your...',
    image: require('../../../public/images/blog/1.png'),
  },
  {
    id: 1,
    title: 'How A Professional Home Stager Can Help You Sell Your House',
    desc: 'We understand first hand how important it is to have sharp, high-quality real-estate photography available as quickly as possible and that’s what we do',
    image: require('../../../public/images/blog/2.png'),
  },
  {
    id: 2,
    title: 'How A Professional Home Stager Can Help You Sell Your House',
    desc: 'You watched every episode of every home improvement show on HGTV. You redecorated every area of your own home many many times and are ready to do the same for...',
    image: require('../../../public/images/blog/3.png'),
  },
  {
    id: 3,
    title: 'TNT was announced as the best staging company 2018',
    desc: 'We understand first hand how important it is to have sharp, high-quality real-estate photography available as quickly as possible and that’s what we do',
    image: require('../../../public/images/blog/4.png'),
  },
  {
    id: 4,
    title: 'How To Start a Staging Business In 7 Simple Steps',
    desc: 'The home staging industry has been growing leaps and bounds in the last few years, with the job title becoming interchangeable with decorator and home designer. Everyone seems to...',
    image: require('../../../public/images/blog/5.png'),
  },
  {
    id: 5,
    title: 'TNT was announced as the best staging company 2018',
    desc: 'Home staging gets a bad rap sometimes, a lot of people think it is a waste of money or just too expensive. Which is far from the truth! Home...',
    image: require('../../../public/images/blog/6.png'),
  },
  {
    id: 6,
    title: 'How To Start a Staging Business in 7 Simple Steps',
    desc: 'Do you love to decorate? Do you have an “eye for design”? Are you feeling creative? Thinking of a career change? This article will help you figure out your...',
    image: require('../../../public/images/blog/7.png'),
  },
  {
    id: 7,
    title: 'How a Professional Home Stager Can Help You Sell Your House',
    desc: 'We understand first hand how important it is to have sharp, high-quality real-estate photography available as quickly as possible and that’s what we do',
    image: require('../../../public/images/blog/8.png'),
  },
  {
    id: 8,
    title: 'TNT was announced as the best staging company 2018',
    desc: 'You watched every episode of every home improvement show on HGTV. You redecorated every area of your own home many-many times and are ready to do the same for...',
    image: require('../../../public/images/blog/9.png'),
  },
  {
    id: 9,
    title: 'How To Start a Staging Business in 7 Simple Steps',
    desc: 'We understand first hand how important it is to have sharp, high-quality real-estate photography available as quickly as possible and that’s what we do',
    image: require('../../../public/images/blog/10.png'),
  },
]
