import AppNavbar from './AppNavbar';
import React, { Component } from 'react';

import BackendService from '../../services/BackendService';
import { Alert } from "react-bootstrap";
import Bservice from './Bservice';
import './Service.css';
import Img1 from '../../images/f.jpg';
import Img2 from '../../images/sinistre.jpg';
import styled from "styled-components";
import Img3 from '../../images/segg2.jpg';
import { mobile } from "../../responsive";
import './Service.css';


const Container = styled.div`
     background-color: #fff;
     display: flex;
     ${mobile({ flexDirection: "column" })}
  `;
  
 
const UserPage = () =>{

  return (
      <>
        <AppNavbar/>
        <div className='services'>
          <div className='s-heading'>
          <h3>Vos opérations</h3>
          </div>
            <Container id='Nos service' className='cont_side'>
              <Bservice image={Img1} name="En Cas De Réclamation"/>
              <Bservice image={Img2} name="En Cas De Sinistre "/>
              <Bservice image={Img3} name="En Cas De Suggestion"/>
              
        </Container>
      </div>
      </>
    );
  }


export default UserPage;