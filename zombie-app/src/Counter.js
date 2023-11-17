// src/Counter.js
import React, { useState } from 'react';

const Counter = () => {
  const [zombieCount, setZombieCount] = useState(0);

  const defeatZombie = () => {
    setZombieCount(zombieCount + 1);
  };

  return (
    <div>
      <h2>Zombies Defeated: {zombieCount}</h2>
      <button onClick={defeatZombie}>Defeat Zombie</button>
    </div>
  );
};

export default Counter;
