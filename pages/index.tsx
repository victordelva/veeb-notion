import * as React from 'react'

import {PageHead} from "@/components/PageHead";

export default function Home() {
  return <div className='home-wrapper'>
    <PageHead
      title={'blexity'}
      description={'Softare development and consulting'}
    />
    <div className="home-container">
      <h1>blexity</h1>
      <p>Software development and consulting</p>
      <a href="mailto:info@blexity.com">info@blexity.com</a>
    </div>
  </div>
}
