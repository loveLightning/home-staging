import { StaticImageData } from 'next/image'

interface ImagesTypes {
  id: number
  image: StaticImageData
  title: string
  desc: string
}

export const dataImages: ImagesTypes[] = [
  {
    id: 0,
    image: require('../../../public/images/about/1.png'),
    title: 'Great Investment',
    desc: 'Staged homes sell 88% faster and for 20% more according to Realtor.com. Homes staged prior to going on the market, sell in 90% less time according to Real Estate Staging Association',
  },
  {
    id: 1,
    image: require('../../../public/images/about/2.png'),
    title: 'Great Value',
    desc: 'TNT is the best staging company in the area in terms of value and what you get for your investment in staging. TNT is the only staging company in the Carolinas that installs curtains. We own 100% of our inventory which means that you don’t pay a middle-man for furniture rentals. Our high-quality services help sell homes faster and for the highest price',
  },
  {
    id: 2,
    image: require('../../../public/images/about/3.png'),
    title: 'Outstanding Track Record',
    desc: 'Our TNT team has a long history of partnership with real estate investors, brokers as well as homeowners. We know how best to meet their needs. We have an exclusive approach for real estate investors and professionals; therefore they hold us as their preferred vendor and “go to” team',
  },
  {
    id: 3,
    image: require('../../../public/images/about/4.png'),
    title: 'Unique one stop shop',
    desc: 'TNT Staging is a unique “one-stop shop” that provides high-quality, reliable services related to real estate interiors.  We offer staging, photography, short-term rental set up and an online furniture store',
  },
  {
    id: 4,
    image: require('../../../public/images/about/5.png'),
    title: 'professional team',
    desc: 'Our TNT Staging team is professionally trained. Our team members are ASP (Accredited Staging Professional) and RESA-PRO (Real Estate Staging Association) certified. They have 10+ years of professional experience in residential staging and design, real estate photography, and also hold a degree in architectural design and construction',
  },
  {
    id: 5,
    image: require('../../../public/images/about/6.png'),
    title: 'Guarantees',
    desc: 'Our team prides itself on being reliable, punctual and for ensuring all of our projects are completed on schedule. We have one of the highest customer-satisfaction rates and 100% of our projects were completed as scheduled. TNT Staging is fully insured and follows strict standards under the Code of Ethics set forth by the Staging Industry ',
  },
]
