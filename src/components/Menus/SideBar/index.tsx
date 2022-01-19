import React from 'react';
import {SidebarNav} from './styles';

interface SideBarProps 


const SideBar:React.FC = ({menuLateralText}:SideBarProps){

    return(
    <>
         <SideBarNav>
             <div>Menu Lateral</div>
             <ul>
                 <li>Home</li>
                 <li>Quem Somos</li>
                 <li>Produtos</li>
                 <li>Serviços</li>
                 <li>Contato</li>
             </ul>

          </SideBarNav>
   </>              
)

