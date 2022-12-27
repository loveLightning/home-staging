/* eslint-disable prettier/prettier */
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
    image: require('../../../public/images/home-staging/1.png'),
    title: 'Fast Turnaround Time',
    desc: 'We understand that when it comes to selling your property, time is money. Our TNT team stages and photographs homes in 1 day, so your property is market-ready the same day.  Our team members work fast, never sacrificing quality, to get you from staged to sold in no time.',
  },
  {
    id: 1,
    image: require('../../../public/images/home-staging/2.png'),
    title: 'New Modern Furniture & Decor ',
    desc: 'Our award-winning TNT team of industry experts knows how to pull together a cohesive plan for your property.  By keeping up with both market and style trends, TNT Staging is uniquely qualified to present your home so it appeals to the greatest number of potential buyers. We offer staging services in transitional, modern, mid-century modern & contemporary styles. ',
  },
  {
    id: 2,
    image: require('../../../public/images/home-staging/3.png'),
    title: 'Same Day Staging & Photography',
    desc: 'Our TNT award-winning team of experts provides the highest quality of professional staging and real estate photography. We coordinate with our team so that photos can be taken the same day staging is complete getting you on the fast track to being market-ready.',
  },
  {
    id: 3,
    image: require('../../../public/images/home-staging/4.png'),
    title: 'Best Value And The Highest Quality Services',
    desc: 'TNT is the best staging company in the area in terms of value and quality of services. TNT Staging is the only staging company in the Carolinas that installs curtains. We own 100% of our inventory which means you don’t pay a middle-man for furniture rentals.  And we have been consistently recognized as an industry leader by the IAHSP.    ',
  },
  {
    id: 4,
    image: require('../../../public/images/home-staging/5.png'),
    title: 'Increased ROI, Homes Sold Faster And For More',
    desc: 'According to the IAHSP’s latest surveys, not only can staged homes sell upwards of 30 times faster than those without staging, but they also fetch a higher sales price as well (avg 5%-15%).  We understand that the right style of design evokes an emotional connection for prospective buyers, and that equates to a higher perceived value overall for your property. ',
  },
  {
    id: 5,
    image: require('../../../public/images/home-staging/6.png'),
    title: 'Highest-Rated, Award-Winning, Professional Team',
    desc: 'We’ve been awarded the trifecta for Real Estate Staging professionals.  Recognized by the IAHSP as the Best Staging Team we’ve taken home awards for Staging Excellence, Industry Leadership and Customer Service.   Our TNT Staging team also holds certifications as Luxury Home Staging Specialists (LHS) and are ASP (Accredited Staging Professional) certified.',
  },
]

export const secondDataImages: ImagesTypes[] = [
  {
    id: 0,
    image: require('../../../public/images/home-staging/sold/1.png'),
    title: '',
    desc: 'Amazing personal home of a custom builder in the Lake Wylie area. Our TNT home staging team used a transitional style with modern accents for this project',
  },
  {
    id: 1,
    image: require('../../../public/images/home-staging/sold/2.png'),
    title: 'New Modern Furniture & Decor ',
    desc: 'Craftsman style home. A sought after Alenky Signature new build in exciting Commonwealth Park. TNT home staging team used a transitional style with modern accents to deliver on this timeless look',
  },
  {
    id: 2,
    image: require('../../../public/images/home-staging/sold/3.png'),
    title: 'Same Day Staging & Photography',
    desc: 'Elegant & modern - Hot Enderly Park Location. All details were carefully planned out to create a clean, open and light-filled space. Our TNT home staging team used modern accents to make this transitional style pop',
  },
  {
    id: 3,
    image: require('../../../public/images/home-staging/sold/4.png'),
    title: 'Best Value And The Highest Quality Services',
    desc: 'This gorgeous $2.6M mansion was on the market for 171 days prior to staging and sold in only 2 weeks after it was staged during the quarantine. The TNT home staging team used a transitional style with modern accents for this beautiful stately home with Lake Norman views in Mooresville, NC',
  },
  {
    id: 4,
    image: require('../../../public/images/home-staging/sold/5.png'),
    title: 'Increased ROI, Homes Sold Faster And For More',
    desc: 'Beautiful new build by Brookhaven Properties nestled between red hot Villa Heights and the Arts District. Our TNT home staging team used a transitional style with modern accents for this new construction project',
  },
  {
    id: 5,
    image: require('../../../public/images/home-staging/sold/6.png'),
    title: 'Highest-Rated, Award-Winning, Professional Team',
    desc: 'Luxurious & modern property in popular Lansdowne neighborhood. Our TNT home staging team used a mix of modern and transitional styles to create a balanced look for this open floor plan with large windows',
  },
]

interface DropDownTypes {
  id: number
  title: string
  active: boolean
  desc: string
}

export const dataDropdown: DropDownTypes[] = [
  {
    id: 0,
    title: 'How long does it take you to stage a house?',
    active: false,
    desc: 'We’re fast! We stage vacant homes in 1 day.  We can also ensure photography is done the same day as well.'
  },
  {
    id: 1,
    title: 'How much notice do you need to put us on schedule?',
    active: false,
    desc: 'Ideally 5-7 days, however sometimes folks have to reschedule and we can squeeze you in last minute. Give us a call to check on our schedule 704-STAGING'
  },
  {
    id: 2,
    title: 'Do I need to stage the entire house?',
    active: false,
    desc: 'No, you don’t need to stage the entire house unless you want to.  In fact, we know which rooms to prioritize for staging to make the biggest impact for showings and photos.'
  },
  {
    id: 3,
    title: 'How does your staging process work?',
    active: false,
    desc: 'Once we’ve seen the property (via photos or in person) we provide you with a free quote within 24-48 hrs. Once the quote is accepted & a staging date is secured, our team arrives with everything needed to complete the staging on the selected date and leaves the property market-ready.  We then require a 7 day notice so we can schedule to have our staging elements removed from the premises.'
  },
  {
    id: 4,
    title: 'Can you give us a quote based on listing photos?',
    active: false,
    desc: 'Yes absolutey!  As long as the photos you provide us represent the current layout for the property we can definitely use those to create a proposal for you to review.'
  },
  {
    id: 5,
    title: 'What makes you different from your competitors?',
    active: false,
    desc: 'Not only do we stage in 1 day,  but our services include extra details such as curtain installation which makes an incredible visual difference.  We also own our inventory so there is no upcharge for furniture rentals from a middle-man that gets passed on to you.  '
  },
  {
    id: 6,
    title: 'How much does staging cost?',
    active: false,
    desc: 'The cost of staging is dependent on how many rooms you commit to having us stage for you. Our service agreements are based on the rooms chosen to be staged along with a one time staging/destaging fee. The agreement includes up to 30 days of our inventory designated to your property.'
  },
  {
    id: 7,
    title: 'Why curtains?',
    active: false,
    desc: 'We’re so glad you asked!  Curtains do more than add color or warmth to a space.  They actually make a space feel larger and can make windows appear bigger, resulting in a more open, airy and spacious feel.  Curtains also help accentuate architectural details and give definition to a design style.'
  },
  {
    id: 8,
    title: 'Do you do photography?',
    active: false,
    desc: 'We do! In fact, we are able to have photos taken the same day as staging.  Our photographer delivers crisp and vibrant magazine-worthy images that are edited and formatted so they are ready for your use the moment they hit your inbox. '
  },
  {
    id: 9,
    title: 'What style do you stage in?',
    active: false,
    desc: 'Our stylists select elements from transitional, modern, mid-century modern & contemporary styles to create a space with maximum appeal.'
  },
  {
    id: 10,
    title: 'How do you charge?',
    active: false,
    desc: 'Payments for our services are expected up front at the time our proposal is accepted and we’ve been contracted for service. Our clients can pay by credit card with a 3% processing fee or by check.'
  },
]