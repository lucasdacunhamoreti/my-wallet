import React, { useMemo } from 'react';
import { Container } from './styles';

import CountUp from 'react-countup';

import dollarImg from '../../assets/dollar.svg';
import arrowUpImg from '../../assets/arrow-up.svg';
import ArrowDownImg from '../../assets/arrow-down.svg';

interface IWalletBoxProps {
  title: string;
  amount: number;
  footerLabel: string;
  icon: 'dollar' | 'arrowUp' | 'arrowDown';
  color: string;
}

const WalletBox: React.FC<IWalletBoxProps> = ({
  title,
  amount,
  footerLabel,
  icon,
  color,
}) => {
  const iconSelected = useMemo(() => {
    switch (icon) {
      case 'dollar':
        return dollarImg;
      case 'arrowUp':
        return arrowUpImg;
      case 'arrowDown':
        return ArrowDownImg;
      default:
        return null;
    }
  }, [icon])

  return (
    <Container color={ color }>
      <span>{ title }</span>
      <h1>
        <strong>R$ </strong>
        <CountUp
          end={ amount }
          separator="."
          decimal=","
          decimals={ 2 }
        />
      </h1>
      <small>{ footerLabel }</small>
      { iconSelected && <img src={ iconSelected } alt={ title } />}
    </Container>
  )
}

export default WalletBox;