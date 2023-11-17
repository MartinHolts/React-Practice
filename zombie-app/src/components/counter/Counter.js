// src/components/counter/Counter.js
import React, { useState } from 'react';
import zombieImage1 from '../../images/zombie/zombie_1.jpg';
import zombieImage2 from '../../images/zombie/zombie_2.jpg';
import zombieImage3 from '../../images/zombie/zombie_3.jpg';

const Counter = () => {
  const [zombieCount, setZombieCount] = useState(0);

  const defeatZombie = () => {
    setZombieCount(zombieCount + 1);
  };

  // Determine the image source based on the counter value
  const getImageSource = () => {
    if (zombieCount < 10) {
      return zombieImage1;
    } else if (zombieCount < 20) {
      return zombieImage2;
    } else {
      return zombieImage3;
    }
  };

  return (
    <div>
      <h2>Zombies Defeated: {zombieCount}</h2>
      <img src={getImageSource()} alt="Zombie" />
      <button onClick={defeatZombie}>Defeat Zombie</button>
    </div>
  );
};

export default Counter;
