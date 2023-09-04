import style from './Footer.module.css'

export default function Footer () {
  return (
    <footer>
      <div>
        <p>Makoski Dev</p>
      </div>
      <div className={style.social} >
        <div className={style.logo} >
          <a href="https://www.linkedin.com/in/makoskidev/" target='_blank' rel="noreferrer" > <img src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin"/> </a>

        </div>
        <div className={style.logo2} >
          <a href="https://github.com/MakoskiVictor" target='_blank' rel="noreferrer"> <img src="https://img.icons8.com/ios-filled/50/github.png" alt="github"/> </a>

        </div>
      </div>
    </footer>
  )
}
