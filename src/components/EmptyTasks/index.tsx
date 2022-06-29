import logoTasksEmpty from 'assets/tasksEmpty.png'
import styles from './styles.module.css'

export function EmptyTasks() {


  return (

    <div className={styles.emptyTasks} >

      <img src={logoTasksEmpty} alt="Tasks to Do"> </img>

      <div>

        <strong> You don't have issues now </strong>
        <p> Create your issues now </p>

      </div>

    </div>


  )

}