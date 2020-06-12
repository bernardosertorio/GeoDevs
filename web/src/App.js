import React, { useState, useEffect } from 'react';
import api from './services/api';

import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevItem';



// Obtenção de latitude e longitude do usuário



//Os 3 principais conceitos do react

//Componente: Uma função, Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação.
//            criar um componente por arquivo.
//Estado: informações mantidas pelo componente (Lembrar: imutabilidade).
//Propriedade: Informações que um componente PAI passa para o componente FILHO. 


export default function App() {
  
  const [ devs, setDevs] = useState([]);

  useEffect(() => { //buscar os dvs da api e coloca-los na listagem de devs.
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);

      loadDevs();
    }

    async function handleAddDev(data) { // chamada api para add devs
      const response = await api.post('/devs', data)

    setDevs([...devs, response.data]); // adção de um array no javascript. Para por um novo dev na lista.
  }  

  return (
    <div id= "app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />

      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
})