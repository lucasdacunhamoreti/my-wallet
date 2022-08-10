import React from 'react';
import { Container } from './styles';

type Props = {
  children: React.ReactNode
}

const Content: React.FC<Props> = ({ children }) => (
    <Container>
      { children }
    </Container>
  )

export default Content;