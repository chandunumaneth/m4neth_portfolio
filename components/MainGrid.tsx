import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

const MainGrid = () => {
  return (
    <section id='about'>
        <BentoGrid>
            {[{ title : 'Title1', description: 'Desc1'}].map
            ((item,i) => (
                <BentoGridItem

                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default MainGrid
