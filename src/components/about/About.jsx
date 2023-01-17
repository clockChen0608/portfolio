import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FiUser, FiAward } from 'react-icons/fi'
const About = () => {
  return (
    <section id='about'>
      <h5> Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FiAward className='about__icon' />
              <h5>Experience</h5>
              <small>8+ Year working</small>
            </article>
            <article className='about__card'>
              <FiUser className='about__icon' />
              <h5>Experience</h5>
              <small>8+ Year working</small>
            </article>
            <article className='about__card'>
              <FiUser className='about__icon' />
              <h5>Experience</h5>
              <small>8+ Year working</small>
            </article>
          </div>
          <p>
            Hi I'm Jack a software developer from Taiwan
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About