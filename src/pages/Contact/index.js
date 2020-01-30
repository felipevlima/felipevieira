import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../../animations/study.json';

import { Container, Content, Contacts } from './styles';

export default function Contact() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  };

  return (
    <Container>
      <Content>
        <div>
          <h1>Contact</h1>
          <Contacts>
            <h2>
              Telefone: <p>(71) 99662-2771</p>
            </h2>
            <h2>
              E-mail: <p>felip.3lima@hotmail.com</p>
            </h2>
            <h2>
              Instagram: <p>@lipe_vlima</p>
            </h2>
          </Contacts>
        </div>
        <Lottie
          options={defaultOptions}
          height={575}
          width={800}
          style={{ marginRight: -100, marginTop: 80 }}
        />
      </Content>
    </Container>
  );
}
