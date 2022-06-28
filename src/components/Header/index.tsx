import rocketLogo from 'assets/rocket.png'
import todoLogo from 'assets/todo.png'


import styles from './styles.module.css'

export function Header() {
  return (

    <header className={styles.header} >
 
      <img src={ rocketLogo } alt="Logo rocket"/>

      <img src={ todoLogo } alt="Logo Todo-list"/>


    </header>
  )
}