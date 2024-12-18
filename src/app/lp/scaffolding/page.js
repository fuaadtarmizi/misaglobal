'use client'
import React from 'react'
import Image from 'next/image'
import ScaffoldingContent from '@/components/lp/Scaffoldingg/ScaffoldingContent'
import Helpbutton from '@/components/lp/Scaffoldingg/Helpbutton'
import Syarat from '@/components/lp/Scaffoldingg/Syarat'
import ScaffoldingFirst from '@/components/lp/Scaffoldingg/ScaffoldingFirst'
import FormScaffolding from '@/components/lp/Scaffoldingg/FormScaffolding'

function page() {
  return (
    <div>
      <div className="px-2">
      <ScaffoldingFirst/>
      <FormScaffolding/>
      <Syarat/>
      <ScaffoldingContent/>
      <Helpbutton/>
      </div>
      </div>
       
  )
}

export default page