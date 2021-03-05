import React from 'react';
import { Container } from './styles';

const CountDown: React.FC = () => {
  const [minuteLeft, minuteRight] = String(10).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(29).padStart(2, '0').split('');

  return (
    <Container>
      <div>
        <span>{minuteLeft}</span>
        <span>{minuteRight}</span>
      </div>
      <strong>:</strong>
      <div>
        <span>{secondLeft}</span>
        <span>{secondRight}</span>
      </div>
    </Container>
  );
};

export default CountDown;
