import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';

import animationData from '../../animations/dev.json';
import { Container, Content } from './styles';

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  };

  return (
    <Container>
      <Content>
        <div>
          <h1>
            Hi, <br />
            i'm Felipe Vieira
          </h1>
          <h2>A Full-Stack Developer</h2>
          <Link to="/about">about me</Link>
        </div>
        <Lottie
          options={defaultOptions}
          height={575}
          width={800}
          style={{ marginRight: -100, marginTop: -30 }}
        />
      </Content>
    </Container>
  );
}
