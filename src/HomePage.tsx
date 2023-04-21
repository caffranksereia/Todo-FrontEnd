import React from 'react';
import { Outlet } from 'react-router';
import NavBar from './Navbar';
import FooterBar from './footbar';

export  default function HomePage(){
    return(
      <>
      <div>
        <NavBar/>
          <Outlet/>
          <FooterBar/>
        </div>
      </>
        
    ) 
}