// import { useEffect, useRef } from 'react'
// import gsap from 'gsap-trial'
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/myphoto.png'
import './index.scss'

const Logo = () => {
  return (
      <div className='myPhoto'>
          <img className='photo' src={LogoS} alt='Jaeden' />
      </div>
  )
}

export default Logo
