import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';

import animationData from '../../animations/programming.json';

import { Container, Content } from './styles';

export default function About() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  };

  return (
    <Container>
      <Content>
        <div>
          <h1>About me</h1>
          <h2>
            I'm 22 years old, I live in Brazil, in Salvador, in the state of
            Bahia. I'm currently studying Information System at UNIFACS. I
            started in the technology area in mid-2015, when I took my first
            Computer Technician course and I loved it. I really like the
            JavaScript ecosystem and today i'm focused on studying Node.js,
            ReactJS and React Native.
          </h2>
          <Link to="/projects">Projects</Link>
        </div>

        <Lottie
          options={defaultOptions}
          height={575}
          width={800}
          style={{ marginRight: -100, marginTop: 150 }}
        />
      </Content>
    </Container>
  );
}
