import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiPlusCircle, FiChevronsRight } from 'react-icons/fi'

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
   
   function moreInfo(id){
      var elemento = document.getElementById(id); 
      if(elemento.style.display === 'block') {
         elemento.style.display = 'none'; 
      }else{
         elemento.style.display = 'block'; 
      }
   }
   function rotateButton(idButton){
      var elemento = document.getElementById(idButton); 
      if(elemento.style.transform === 'rotate(90deg)') {
         elemento.style.transform = 'none'; 
      }else{
         elemento.style.transform = 'rotate(90deg)'; 
      }
   } 
   function more(id, idButton){
      moreInfo(id)
      rotateButton(idButton)
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
                     <div className="more-info" id={`more-info${contato.id}`}>
                        <p className="email">{contato.email}</p>
                        <p className="number">{contato.number}</p>
                        <FiTrash2 
                           size={30}
                           onClick={() => handleDeleteContato(contato.id)}
                           type="button"
                        />
                     </div>
                  </div>
                  <FiChevronsRight 
                     className="FiChevronsRight"
                     size={30}
                     id = {`button-more-info${contato.id}`}
                     onClick={() => more(`more-info${contato.id}`, `button-more-info${contato.id}`)} 
                     type="button"
                  />
               </li>
            ))}
         </ul>
      </div>   
   );
}