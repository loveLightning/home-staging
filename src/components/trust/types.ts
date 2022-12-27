import { StaticImageData } from 'next/image'

import firstImage from '../../../public/images/trust/1.png'
import secondImage from '../../../public/images/trust/2.png'
import thirdImage from '../../../public/images/trust/3.png'
import fourthImage from '../../../public/images/trust/4.png'

interface TrustTypes {
  id: number
  title: string
  desc: string
  image: string | StaticImageData
}

export const dataTrust: TrustTypes[] = [
  {
    id: 0,
    title: 'Value',
    desc: 'TNT is the best staging company in the area in terms of value and what you get for your investment in staging. TNT is the only staging company in the Carolinas that installs curtains. We own 100% of our inventory which means that you don’t pay a middle-man for furniture rentals',
    image: firstImage,
  },
  {
    id: 1,
    title: 'Quality',
    desc: 'Our award-winning TNT team is specially trained to prepare homes for sale. We always work in our customers’ best interest. We never cut corners and we always make sure the job is done right. The TNT team has developed an outstanding track record of helping investors, agents and builders showcase the very best of their properties.',
    image: secondImage,
  },
  {
    id: 2,
    title: 'Expertise',
    desc: 'Our TNT award-winning team of experts provides the highest quality of professional staging and real estate photography. Our well-trained, experienced and highly-professional team is ready to help you. No project is too small or too big for us. From more budget-friendly fixer uppers to luxury mansions, the TNT team will stage any vacant property.',
    image: thirdImage,
  },
  {
    id: 3,
    title: 'Result',
    desc: 'We understand that when it comes to selling your property, time is money. Our TNT team stages and photographs homes in 1 day. Your property is market-ready the same day. Houses that are professionally staged sell faster and for a higher price. That means a greater return on your investment.',
    image: fourthImage,
  },
]
