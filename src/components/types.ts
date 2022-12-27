export interface PaginationTypes {
  id: number
  active: boolean
  title: string
}

interface ExperienceTypes {
  id: number
  active: boolean
  title: string
}

export const dataPagination: PaginationTypes[] = [
  {
    id: 0,
    active: true,
    title: '1',
  },
  {
    id: 1,
    active: false,
    title: '2',
  },
  {
    id: 2,
    active: false,
    title: '3',
  },
  {
    id: 3,
    active: false,
    title: '4',
  },
  {
    id: 4,
    active: false,
    title: '5',
  },
]

export const dataExperience: ExperienceTypes[] = [
  {
    id: 0,
    active: true,
    title: 'All Projects',
  },
  {
    id: 1,
    active: false,
    title: 'Kitchen',
  },
  {
    id: 2,
    active: false,
    title: 'Living Room',
  },
  {
    id: 3,
    active: false,
    title: 'Primary Bedroom',
  },
  {
    id: 4,
    active: false,
    title: 'Other',
  },
]
