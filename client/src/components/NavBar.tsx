import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Icon } from './UserIcon';
import { Context } from '..';
import { useContext } from 'react';

export const NavBar = () => {

    const { user } = useContext(Context);

    const logOut = () => {
        user.isAuth = false;
        user.user = {};
    }

    return (
        <Navbar expand="lg" style={{backgroundColor: "#2C3639"}}>
            <Container className="d-flex">
                <Navbar.Brand style={{color: "white", fontFamily: "Kodchasan", fontWeight: 500}}>ExpenseControl</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                </Navbar.Collapse>
                <a style={{color: "white", fontFamily: "Kodchasan", fontWeight: 200, marginRight: "1%"}} onClick={logOut}>Log Out</a>
                <Icon />
            </Container>
        </Navbar>
    )
};