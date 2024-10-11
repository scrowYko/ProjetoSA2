import React, { useState } from 'react';
import '../css/CriacaoCampeonato.css';


const CriacaoCampeonato = () => {
  const [nome, setNome] = useState('');
  const [participantes, setParticipantes] = useState(4);
  const [formato, setFormato] = useState('Eliminatória Simples');
  const [mensagem, setMensagem] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    setMensagem(`Campeonato "${nome}" criado com ${participantes} participantes no formato ${formato}!`);
  };


  return (
    <div className='background'>
    <div className="container">
      <h1>Criação de Campeonato</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="field">
          <label className='names'>Nome do Campeonato:</label>
          <input
            className='text'
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>


        <div className="field">
          <label className='names'>Número de Participantes:</label>
          <input
            className='text'
            type="number"
            min="2"
            value={participantes}
            onChange={(e) => setParticipantes(e.target.value)}
            required
          />
        </div>


        <div className="field">
          <label className='names'>Formato do Campeonato:</label>
          <select value={formato} onChange={(e) => setFormato(e.target.value)}>
            <option value="Eliminatória Simples">Eliminatória Simples</option>
            <option value="Fase de Grupos">Fase de Grupos</option>
            <option value="Misto">Misto (Grupos + Eliminatória)</option>
          </select>
        </div>


        <button type="submit" className="button">Criar Campeonato</button>
      </form>


      {mensagem && <p className='mensagem'>{mensagem}</p>}
    </div>
    </div>
  );
};


export default CriacaoCampeonato;
