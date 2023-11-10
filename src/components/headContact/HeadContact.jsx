import React from 'react'
import './headContact.css'
import Logo from '../../assets/logo.png'
import Phone from '../../assets/phone.png'

const HeadContact = () => {
  return (
   <section>
    <div className='sect'>
    <div className="logo">
    <img src={Logo} alt="logo" />
    </div>
    <div className="adres">
      <div className='adres__citi'>Адрес: Ярославль, Парижская коммуна 8а</div>
      <div className='adres__tame'>Режим работы: ПН-СБ с 9:00 – 20:00 ВС по предварительной записи</div>
      
    </div>
    <div className='phone'>
      <img className='image' src={Phone} alt="photo"/>
      <div className="cont">
      <h1>+7 (4852) 68‒57‒98</h1>
      <h3>Обратный звонок</h3>
      </div>
    </div>
    <button className='btn btn__head'>Записаться на прием</button>
    </div>
   </section>
  )
}

export default HeadContact