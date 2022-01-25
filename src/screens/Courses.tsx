import React from 'react';
import Main from '../components/Main';
import SideBar from '../components/Menus/SideBar';
import  styled  from 'styled-components';
import createGlobalStyle from '../styles/global';
import CoursesGrid from '../components/CoursesGrid';

const GlobalStyle = createGlobalStyle;
const Container = styled.div`

    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;

`

const Courses:React.FC = () =>(
    <Container>
        <GlobalStyle />
        <SideBar />
        <CoursesGrid  welcome="Cursos" route="cursos" />
    </Container>
)


export default Courses;