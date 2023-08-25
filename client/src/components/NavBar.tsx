import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Icon } from './UserIcon';

export const NavBar = () => {
    return (
        <Navbar expand="lg" style={{backgroundColor: "#2C3639"}}>
            <Container className="d-flex">
                <Navbar.Brand style={{color: "white", fontFamily: "Kodchasan", fontWeight: 500}}>ExpenseControl</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                </Navbar.Collapse>
                <Icon />
            </Container>
        </Navbar>
    )
};