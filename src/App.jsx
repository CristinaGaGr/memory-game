import React from 'react';
import './app.module.scss';
import { useSelector } from 'react-redux';
import { getRandomCards } from './constants/cards';


export const  App = () => {
  const cards = useSelector((state) => state.cards);
  console.log(getRandomCards());
  return (
    <div>
      {cards.map((e) =>
          <div key={e.id}>{e.id} - {e.value}</div>
      )}
    </div>
  );
};


