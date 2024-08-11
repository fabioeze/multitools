'use client'
import React, { useState } from 'react';
import styles from './ordenarlinhas.module.css';

const FunctionOrdenarLinhas = () => {
    const [lines, setLines] = useState('');
    const [sortOption, setSortOption] = useState('');
  
    const handleSort = () => {
      let linesArray = lines.split('\n').filter(line => line.trim() !== '');
  
      switch (sortOption) {
        case 'alphabetical':
          linesArray = linesArray.sort();
          break;
        case 'alphabeticalReverse':
          linesArray = linesArray.sort().reverse();
          break;
        case 'byLength':
          linesArray = linesArray.sort((a, b) => a.length - b.length);
          break;
        case 'byLengthReverse':
          linesArray = linesArray.sort((a, b) => b.length - a.length);
          break;
        case 'reverse':
          linesArray = linesArray.reverse();
          break;
        case 'shuffle':
          linesArray = linesArray.sort(() => Math.random() - 0.5);
          break;
        default:
          break;
      }
  
      setLines(linesArray.join('\n'));
    };
  
    const handleCopy = () => {
      navigator.clipboard.writeText(lines);
      alert('Texto copiado para a área de transferência!');
    };
  
    return (
      <div className={styles.container}>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className={styles.selectBox}
        >
          <option value="">Selecione a Ordenação</option>
          <option value="alphabetical">Ordenar por Ordem alfabética</option>
          <option value="alphabeticalReverse">Ordenar por Ordem alfabética Reversa</option>
          <option value="byLength">Ordenar por Tamanho</option>
          <option value="byLengthReverse">Ordenar por Tamanho Reverso</option>
          <option value="reverse">Reverter Linhas</option>
          <option value="shuffle">Aleatorizar Linhas</option>
        </select>
        <textarea
          value={lines}
          onChange={(e) => setLines(e.target.value)}
          placeholder="Digite as linhas, separadas por quebra de linha"
          rows="10"
          className={styles.textArea}
        />
        <div className={styles.buttonContainer}>
          <button onClick={handleSort} className={styles.button}>
            Ordenar
          </button>
          <button onClick={handleCopy} className={`${styles.button} ${styles.copyButton}`}>
            Copiar
          </button>
        </div>
      </div>
  );
};

export default FunctionOrdenarLinhas;
