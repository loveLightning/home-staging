import React from 'react'

import {
  Experience,
  MainLayout,
  MainSlider,
  Photography,
  Testimonials,
  Trust,
} from 'src/components'

export const MainPage = () => {
  return (
    <MainLayout>
      <MainSlider />
      <Photography />
      <Trust />
      <Experience />
      <Testimonials />
    </MainLayout>
  )
}
