import React from 'react'
import './services.css'
import Img1 from '../../assets/image 1.png'
import Img2 from '../../assets/image 2.png'
import Img3 from '../../assets/image 3.png'
import Img4 from '../../assets/image 4.png'
import Img5 from '../../assets/image 5.png'
import Img6 from '../../assets/image 6.png'
import Img7 from '../../assets/image 7.png'
import Img8 from '../../assets/image 8.png'

const Services = () => {
  return (
    <services>
      <h1>Наши услуги</h1>
      <div className='servis__img'>
        <img className='servis__imag1' src={Img1} alt="" />
        <img className='servis__imag3' src={Img3} alt="" />
        <img className='servis__imag5' src={Img5} alt="" />
        <img className='servis__imag7' src={Img7} alt="" />
        <img className='servis__imag2' src={Img2} alt="" />
        <img className='servis__imag4' src={Img4} alt="" />
        <img className='servis__imag6' src={Img6} alt="" />
        <img className='servis__imag8' src={Img8} alt="" />
      </div>

    </services>
  )
}

export default Services