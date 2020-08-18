import React, { useState, FormEvent, useEffect } from 'react';

import { Header, RepositoryInfo, Issues } from './style'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import logoImg from '../../assets/logo.svg'
import api from '../../services/api';
import { Link, useRouteMatch } from 'react-router-dom';

interface RepositoryParams {
  repository: string
}

const Repository:React.FC = () =>{
  const {params} = useRouteMatch<RepositoryParams>()

  
  return (
    <>
    <Header>
      <img src={logoImg} alt="Github Explorer"/>
      <Link to='/'>
        <FiChevronLeft size={16} />   
        Voltar   
      </Link>
    </Header>
    <RepositoryInfo>
      <header>
        <img src="https://avatars3.githubusercontent.com/u/69631?v=4" alt="Roc"/>
        <div>
          <strong>angular/angular</strong>
          <p>descrição de repo</p>
          </div>
      </header>
      <ul>
        <li>
          <strong>1532</strong>
          <span>Start</span>
        </li>
        <li>
          <strong>854</strong>
          <span>Forks</span>
        </li>
        <li>
          <strong>1532</strong>
          <span>Start</span>
        </li>
      </ul>
    </RepositoryInfo>

    <Issues>
        <Link  to='ssasdasdasd'>
            <div>
               <strong>dfgsdfgsdfg</strong>
               <p>sdfgsdfgsdfgs</p>
            </div>
         <FiChevronRight size={20} />
        </Link>

    </Issues>
    </>
)}

export default Repository;
