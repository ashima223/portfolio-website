import { Link } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import LogoTitle from '../../assets/images/logo-s.png'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [
    's',
    'h',
    'i',
    'm',
    'a',
  ]
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
        clearTimeout(timer);
    }
  });
   
  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Frontend Developer / JavaScript Expert</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
    <Loader type="pacman"/>
    </>
  )
}

export default Home
