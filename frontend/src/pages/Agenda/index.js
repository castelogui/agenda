import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiPlusCircle, FiChevronRight } from 'react-icons/fi'

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
      
      var elemento = document.getElementById(id)
      elemento.style.transform = 'translateX(-20%)';
      
      try{
         await api.delete(`contato/${id}`);

         setContatos(contatos.filter(contato => contato.id !== id));
      } catch (err) {
         alert('Erro ao deletar contato!');
      }
   }
   
   function moreInfo(id){
      var elemento = document.getElementById(id); 
      if(elemento.style.display === 'flex') {
         elemento.style.display = 'none'; 
      }else{
         elemento.style.display = 'flex'; 
      }
   }
   function rotateButton(id){
      var elemento = document.getElementById(id); 
      if(elemento.style.transform === 'rotate(90deg)') {
         elemento.style.transform = 'none'; 
      }else{
         elemento.style.transform = 'rotate(90deg)'; 
      }
   } 
   
   function delay(idLi){
      var elemento = document.getElementById(idLi)
      elemento.style.transition = '0.7s';
   }
   function more(id, idButton){
      moreInfo(id);
      rotateButton(idButton);
      delay(id)
   } 

   return (
      <div className="container">
         <header>
            <h1>Agenda</h1>
            <Link className="button" to="/new">
               <FiPlusCircle className="FiPlusCircle" size={40}/>
            </Link>
         </header>

         <h3>Contatos</h3>

         <ul>
            {contatos.map(contato => (
               <li key={contato.id}>
                  <div className="contato-info" id={`${contato.id}`}>
                     <p className="name">{contato.name} {contato.lastname}</p>
                     <div className="more-info" id={`more-info${contato.id}`}>
                        <p className="email">{contato.email}</p>
                        <p className="number">{contato.number}</p>
                     </div>
                  </div>
                  <button>
                     <FiTrash2 
                        size={20}
                        onClick={() => handleDeleteContato(contato.id)}
                        type="button"
                     />
                  </button>
                  <button>
                     <FiChevronRight 
                        className="FiChevronRight"
                        size={20}
                        id = {`button-more-info${contato.id}`}
                        onClick={() => more(`more-info${contato.id}`, `button-more-info${contato.id}`)} 
                        type="button"
                     />
                  </button>
               </li>
            ))}
         </ul>
      </div>   
   );
}