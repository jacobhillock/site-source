import './styles.scss';
import React from 'react';
import { useParams } from 'react-router-dom';

function Anagram() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const { size } = useParams();

  let anagram = '';

  for (let i = 0; i < (size || 3); i++) {
    const position = Math.floor(Math.random() * letters.length);
    anagram = anagram + letters.slice(position, position + 1);
  }
  return (
    <div className="c-main">
      <div>
        To be implemented
      </div>
      <div>
        { anagram }
      </div>
    </div>
  );
}

export default Anagram;