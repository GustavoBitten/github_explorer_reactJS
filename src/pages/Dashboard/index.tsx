import React from 'react';

import {Title, Form, Reposotories, } from './style'
import { FiChevronRight } from "react-icons/fi";

import logoImg from '../../assets/logo.svg'
const Dashboard:React.FC = () =>{
 return (
    <>
    <img src={logoImg} alt="Github Explorer"/>
    <Title>Explore repositórios no Github</Title>

    <Form>
       <input placeholder="Digite o nome do repositótio" />
       <button type="submit">Pesquisar</button>
    </Form>

    <Reposotories>
       <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/60633383?s=460&u=7ed245ae1e451d3e042000946a2d0439dbefdfc0&v=4" 
            alt="Gustavo Duarte" 
            />
            <div>
               <strong>gustavo/duarte</strong>
               <p>jovem sonhador apaixonado por tecnologia</p>
            </div>
         <FiChevronRight size={20} />
       </a>
    </Reposotories>
    </>
 )   

}

export default Dashboard;
