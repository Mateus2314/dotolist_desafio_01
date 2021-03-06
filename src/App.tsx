import { ChangeEvent, useState } from 'react';
import { taskProps } from 'types';
import { uuidv4, PlusCircle } from 'Libs';
import { Header, EmptyTasks, ListTasks } from 'components';


import styles from './App.module.css';


export function App() {


  const [tasks, setTasks] = useState<taskProps[]>([])
  const [newTask, setNewTask] = useState('')
  const [countTasks, setCountTasks] = useState(0)
  const [tasksCompleted, setTasksCompleted] = useState(0)

  const isNewTaskEmpty = newTask.length === 0

  function handleCreateTask() {

    setTasks([

      ...tasks,

      {
        id: uuidv4(),
        description: newTask,
        checked: false
      }
    ])

    setCountTasks(task => {
      return task + 1
    })

    setNewTask('')

  }

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {

    setNewTask(event.target.value)

  }

  function taskCompleted(tasks: taskProps[]) {

    const result = tasks.filter(task => task.checked === true)

    setTasksCompleted(result.length)
  }

  function handleDeleteTask(id: string) {
    const taskDelete = tasks.filter(task => task.id != id)

    setTasks([...taskDelete])

    setCountTasks(task => {
      return task - 1
    })

    taskCompleted(taskDelete)

  }

  function handleCheckedTask(id: string) {
    const taskChecked = tasks.map(task => {
      if (task.id == id) {
        task.checked = !task.checked
      }
      return task
    })
    setTasks([...taskChecked])

    taskCompleted(taskChecked)
  }




  return (

    <div className={styles.wrapper}>
      <Header />

      <div className={styles.newTask}>
        <input placeholder="Add a new task " value={newTask} onChange={handleNewTask} />
        <button
          onClick={handleCreateTask}
          disabled={isNewTaskEmpty}
          title={isNewTaskEmpty ? 'Type a task to activate the button' : ''}
        >
          Create
          <PlusCircle size={20} />
        </button>
      </div>

      <div className={styles.content}>
        <main>
          <div className={styles.countTasks}>
            <div className={styles.createTasks}>
              <strong>Issues to Do</strong>
              <span>{countTasks}</span>
            </div>

            <div className={styles.completedTasks}>
              <strong>Completed</strong>

              {countTasks == 0 ? (
                <span>{countTasks}</span>
              ) : (
                <span>
                  {tasksCompleted} de {countTasks}
                </span>
              )}
            </div>
          </div>

          {tasks.length != 0 ? (
            <ListTasks
              tasks={tasks}
              handleCheckedTask={handleCheckedTask}
              handleDeleteTask={handleDeleteTask}
            />
          ) : (
            <EmptyTasks />
          )}
        </main>
      </div>


    </div>


  )
}

