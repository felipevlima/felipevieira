import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import { Container, Logo, Pages, Icons, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <Logo>FV</Logo>

        <Pages>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Project</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </Pages>

        <Icons>
          <a href="https://www.github.com/felipevlima">
            <FaGithub color="#FFF" size={38} />
          </a>
          <a href="https://www.linkedin.com/in/felipe-vieira-a6983513a/">
            <FaLinkedin color="#FFF" size={38} />
          </a>
        </Icons>
      </Content>
    </Container>
  );
}
