import React from 'react';
import { Outlet } from 'react-router';

export  default function Cadastro(){
    return(
          <>
          <Outlet/>
            <div className="body">
                <h1>Hello World!!</h1>
                <div className="LoginAndSenha">
                    <form action="">
                        <label htmlFor="">
                            Name
                        </label>
                        <input type="email" name="" id="" />
                        <label htmlFor="">
                            Username
                        </label>
                        <input type="email" name="" id="" />
                        <label htmlFor="">
                            Passwords
                        </label>
                        <input type="password" name="" id="" />ss
                        <label htmlFor="">
                            Re-Passwords
                        </label>
                        <input type="password" name="" id="" />
                    </form>
                </div>

            <button>Salve</button>
            </div>
         </>
          
    ) 
}