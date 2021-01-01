import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiXSquare, FiPlusCircle, FiChevronRight, FiPocket } from 'react-icons/fi';

import api from '../../services/api';

//import Tasks from '../Tasks/index';

import './styles.css';

export default function Dashboard() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    api.get('/tasks').then((response) => {
      setTask(response.data);
    });
  }, []);

  async function handleDeleteTask(id) {
    var elemento = document.getElementById(id);
    elemento.style.transform = "translate(-10%)";
    elemento.style.backgroundColor = "red";
    elemento.style.color = "white";

    try {
      await api.delete(`task/${id}`);

      setTask(task.filter((task) => task.id_task !== id));
    } catch (err) {
      alert("Erro ao deletar Task!");
    }
  }

  function moreInfo(id) {
    var elemento = document.getElementById(id);
    if (elemento.style.display === "flex") {
      elemento.style.display = "none";
    } else {
      elemento.style.display = "flex";
    }
  }
  function rotateButton(id) {
    var elemento = document.getElementById(id);
    if (elemento.style.transform === "rotate(90deg)") {
      elemento.style.transform = "none";
    } else {
      elemento.style.transform = "rotate(90deg)";
    }
  }
  function more(id, idButton) {
    moreInfo(id);
    rotateButton(idButton);
  }
  
  async function complete(id){
    var elemento = await api.get();
    console.log(elemento);
    if (elemento.value === false){
      elemento.style.color = "transparent";
    }else{
      elemento.style.color = "green";
    }
  }

  return (
    <div className="container">
      <header>
        <h1>Tasker</h1>
      </header>

      <div className="task-container">
        <section>
          <h3>Task</h3>
          <Link className="button" to="/new">
            <FiPlusCircle className="FiPlusCircle" size={25} />
          </Link>
        </section>
        <ul>
          {task.map((task) => (
            <li key={task.id} className="task">
              <button className="delete-task">
                <FiXSquare
                  className="FiXSquare"
                  size={20}
                  onClick={() => handleDeleteTask(task.id_task)}
                  type="button"
                />
              </button>
              <div className="task-info" id={`${task.id_task}`}>
                <p className="title">
                  {task.title_task}
                </p>
                <div className="more-info" id={`more-info${task.id_task}`}>
                  <p className="description">{task.description_task}</p>
                  <p className="data">{task.data_task}</p>
                </div>
              </div>
              <button className="complete-task">
                <FiPocket
                  className="FiPocket"
                  size={20}
                  id={`button-complete-task${task.id_task}`}
                  onClick={() => complete(`complete-task${task.complete_task}`)}
                />
              </button>
              <button className="more-info">
                <FiChevronRight
                  className="FiChevronRight"
                  size={25}
                  id={`button-more-info${task.id_task}`}
                  onClick={() =>
                    more(
                      `more-info${task.id_task}`,
                      `button-more-info${task.id_task}`
                    )
                  }
                  type="button"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
