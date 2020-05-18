import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiPlusCircle, FiMoreVertical } from 'react-icons/fi'

import api from '../../services/api';

import './styles.css';

export default function Agenda(){
   const [ contatos, setContatos ] = useState([]);

   useEffect(() => {
      api.get('/').then(response => {
         setContatos(response.data);
      })
   }, []);

   async function handleDeleteContato(id){
      try{
         await api.delete(`contato/${id}`);

         setContatos(contatos.filter(contato => contato.id !== id));
      } catch (err) {
         alert('Erro ao deletar contato!');
      }
   }
   
   function infoContato(id){
      var elemento = document.getElementById(id); 
      
      if(elemento.style.display === 'block') {
         elemento.style.display = 'none'; 
      }else{
         elemento.style.display = 'block'; 
      }
   }    
   

   return (
      <div>
         <header>
            <h1>Agenda</h1>
            <Link className="button" to="/new">
               <FiPlusCircle size={30} color="black"/>
            </Link>
         </header>

         <h3>Contatos</h3>

         <ul>
            {contatos.map(contato => (
               <li key={contato.id}>
                  <div className="contato-info">
                     <p className="name">{contato.name} {contato.lastname}</p>
                     <div id={`info${contato.id}`}>
                        <p className="email">{contato.email}</p>
                        <p className="number">{contato.number}</p>
                     </div>
                  </div>
                  <button onClick={() => infoContato(`info${contato.id}`)} type="button">
                     <FiMoreVertical size={20}/>
                  </button>
                  <button onClick={() => handleDeleteContato(contato.id)} type="button">
                     <FiTrash2 size={20}/>
                  </button>
               </li>
            ))}
         </ul>
      </div>   
   );
}