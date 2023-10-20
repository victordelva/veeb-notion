import * as React from 'react'

import {PageHead} from "@/components/PageHead";

export default function Home() {
  return <div className='home-wrapper'>
    <PageHead
      title={'blexity'}
      description={'Softare development and consulting'}
    />
    <div
      style={{
        height: '70px',
        width: '100%',
        top: 0,
        position: 'fixed',
        zIndex: 100,
        fontFamily: 'Andika, sans-serif',
        background: 'rgba(255, 255, 255, 0.2)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(5px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <span
        style={{
          fontSize: '3rem',
        }}
      >blexity</span>
    </div>
    <div className="home-container">
      <div className="home-content">
        <div
          style={{
            maxWidth: '500px',
          }}
        >
          <h1>Desarrollo software ilimitado <br />con nuestra suscripción </h1>
          <p>Los planes mensuales son ilimitados y sin permanencia.
            Nos adaptamos a ti, a tus necesidades y a tus picos de trabajo convirtiéndonos en uno más de tu equipo.</p>
        </div>
        <div>
          <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
          {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore-next-line
            (<stripe-pricing-table pricing-table-id="prctbl_1O3JvhGgZHWnEycfdj5cg7cN"
                                    publishable-key="pk_live_51NptBOGgZHWnEycfrQX87MFzFIag6EEU65CuHMrAUH8Pz5HPemLdNHe6L8NPFEdhQJX4eeU0i0r3P69UcfhE3o8e00gaDia1oQ" />)}
        </div>
      </div>
    </div>
    <div className="footer-container">
      <p>Software development and consulting</p>
      <a href="mailto:info@blexity.com">info@blexity.com</a>
    </div>
  </div>
}
