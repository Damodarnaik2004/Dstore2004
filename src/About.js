import React from 'react'
import styled  from 'styled-components'
import HeroSection from './components/HeroSection';
import { useProductContext } from './context/ProductContext';
const About = () => {
  
  const {myName}=useProductContext();

  const name='Dstore Ecommers'
  return (
    <Wrapper className='test'>
      {myName}
      <HeroSection name={name}/>
    </Wrapper>
  )
}

const Wrapper=styled.section`
  background-color:${({theme})=>theme.colors.bg};
  height: 100vh;
`;
export default About