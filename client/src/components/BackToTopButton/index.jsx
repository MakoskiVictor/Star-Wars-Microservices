import { useEffect, useState } from 'react'
import { ToTopIcon } from '../Icons/index'
import style from './BackToTopButton.module.css'

export default function BackToTopButton () {
  const [backButton, setBackButton] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackButton(true)
      } else {
        setBackButton(false)
      }
    })
  }, [])
  return (

      <a href="#title" className={backButton ? style.toTop2 : style.toTop1} >
        <div className={backButton ? style.icon2 : style.icon}>
          <ToTopIcon />
        </div>
      </a>

  )
}
