import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { GrLinkNext } from 'react-icons/gr';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';

export default function NeTask(){
   const [ title_task, setTitle ] = useState('');
   const [ description_task, setDescription ] = useState('');
   const [ data_task, setData ] = useState('');

   const history = useHistory();

   async function handleNewTask(e){
      e.preventDefault();

      const data = {
         title_task,
         description_task,
         data_task
      };

      try {
         await api.post('new/task', data)
         history.push('/tasks');
      } catch (err){
         alert(`Erro ao inserir tarefa. ${err}`)
      }
   }

   return (
      <div className="new-task-container">
         <div className="content">
            <header>
               <Link className="button" to="/">
                  <FiArrowLeft size={30}/>
               </Link>
               <h1>New Task</h1>
            </header>
            <form onSubmit={handleNewTask}>
               <input 
                  placeholder="Title"
                  value={title_task}
                  onChange={e => setTitle(e.target.value)}
               />
               <input 
                  placeholder="Description"
                  value={description_task}
                  onChange={e => setDescription(e.target.value)}
               />
               <input 
                  placeholder="Data"
                  value={data_task}
                  onChange={e => setData(e.target.value)}
               />
               <button className="button" type="submit" >
                  <GrLinkNext size={20}/>
               </button>
            </form>
         </div>
      </div>
   );
}