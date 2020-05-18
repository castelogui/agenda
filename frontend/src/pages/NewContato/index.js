import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn, FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api';

export default function NewContato(){
   const [ name, setName ] = useState('');
   const [ lastname, setLastname ] = useState('');
   const [ email, setEmail ] = useState('');
   const [ number, setNumber ] = useState('');

   const history = useHistory();

   async function handleNewContato(e){
      e.preventDefault();

      const data = {
         name,
         lastname,
         email,
         number,
      };

      try {
         await api.post('create', data)
         history.push('/');
      } catch (err){
         alert(`Erro ao inserir${err}`)
      }
   }

   
   return (
      <div className="new-contato-container">
         <div className="content">
            <header>
               <h1>NewContato</h1>
               <Link className="button" to="/">
                  <FiArrowLeft size={20}/>
               </Link>
            </header>
            <form onSubmit={handleNewContato}>
               <input 
                  placeholder="Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
               />
               <input 
                  placeholder="Lastname"
                  value={lastname}
                  onChange={e => setLastname(e.target.value)}
               />
                              <input 
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
               />
                              <input 
                  placeholder="Number"
                  value={number}
                  onChange={e => setNumber(e.target.value)}
               />
               <button className="button" type="submit">
                  <FiLogIn size={20}/>
               </button>
            </form>
         </div>
      </div>
   );
}