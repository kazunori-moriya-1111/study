import React from 'react';
import styles from './App.module.css';
import { FaSignInAlt } from 'react-icons/fa'
import TaskList from './features/task/TaskList';
import TaskDetail from './features/task/TaskDetail';

function App() {
  const Logout = () => {
    localStorage.removeItem("localJWT")
    window.location.href = "/"
  }
  return (
  <div className={styles.containerTasks}>
    <div className={styles.appTasks}>
      <button onClick={Logout} className={styles.signBtn}>
        <FaSignInAlt />
      </button>
      <TaskList /> 
    </div>
    <div className={styles.appDetails}>
      <TaskDetail />
    </div>
  </div>
  );
}

export default App;
