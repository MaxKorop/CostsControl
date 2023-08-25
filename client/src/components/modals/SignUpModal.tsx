import React, { useState } from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";
import { ModalProps } from "react-bootstrap";

export const SignUp: React.FC<ModalProps> = ({ show, onHide }) => {

    const [isSignUp, setIsSignUp] = useState<boolean>(true);
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isValidName, setIsValidName] = useState<boolean>(false);
    const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
    const [isValidPassword, setIsValidPassword] = useState<boolean>(false);

    const checkAndSetName = (value: string): void => {
        setIsValidName(true);
        const regex = /^(?!.*[!~\&\\/,\|]).{2,}/;
        if (value.match(regex)) setName(value);
        else setIsValidName(false);
    }

    const checkAndSetEmail = (value: string): void => {
        setIsValidEmail(true);
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (value.match(regex)) setEmail(value);
        else setIsValidEmail(false);
    }

    const checkAndSetPassword = (value: string): void => {
        setIsValidPassword(true);
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/;
        if (value.match(regex)) setPassword(value);
        else setIsValidPassword(false);
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            style={{color: "white"}}
        >
            <Modal.Header className="d-flex justify-content-center" style={{backgroundColor: "#2C3639"}}>
                <Modal.Title>{ isSignUp ? "Registration" : "Authorization" }</Modal.Title>
            </Modal.Header>

            <Modal.Body style={{backgroundColor: "#2C3639"}}>
                <Form className="mt-2 mb-2">
                    {isSignUp ? <Form.Control placeholder="Type your name here..." type="email" className="mt-3" onChange={(e) => { checkAndSetName(e.target.value) }} /> : null}
                    {isSignUp && !isValidName ? <p style={{ color: 'red', marginTop: '3px', marginLeft: "7px" }}>Your name is invalid</p> : null }
                    <Form.Control placeholder="Type your email here..." type="email" className="mt-3" onChange={(e) => { checkAndSetEmail(e.target.value) }} />
                    {!isValidEmail ? <p style={{ color: 'red', marginTop: '3px', marginLeft: "7px" }}>Your email is invalid</p> : null }
                    <Form.Control placeholder="Type your password here..." type="password" className="mt-3" onChange={(e) => { checkAndSetPassword(e.target.value) }} />
                    {!isValidPassword ? <p style={{ color: 'red', marginTop: '3px', marginLeft: "7px" }}>Your password is invalid</p> : null }
                </Form>
                <Col className='d-flex justify-content-between mt-3 pl-3 pr-3'>
                    { isSignUp ? <div>
                        Have an account? <a onClick={() => {setIsSignUp(false)}} style={{ textDecoration: "underline" }}>Sign In</a>
                    </div> : <div>
                        Don't have an account? <a onClick={() => {setIsSignUp(true)}} style={{ textDecoration: "underline" }}>Sign Up</a>
                    </div> }
                </Col>
            </Modal.Body>
            {isSignUp ? <Modal.Footer style={{ backgroundColor: "#2C3639" }}>
                { isValidName && isValidEmail && isValidPassword ?
                    <Button style={{ backgroundColor: "#0086A1", borderColor: "#0086A1" }} onClick={onHide}>
                        Sign Up
                    </Button> : <Button style={{ backgroundColor: "#0086A1", borderColor: "#0086A1" }} onClick={() => alert("Type valid name, email or password")}>
                        Sign Up
                    </Button>
                }                
            </Modal.Footer> : <Modal.Footer style={{ backgroundColor: "#2C3639" }}>
                { isValidEmail && isValidPassword ?
                    <Button style={{ backgroundColor: "#0086A1", borderColor: "#0086A1" }} onClick={onHide}>
                    Sign In
                    </Button> : <Button style={{ backgroundColor: "#0086A1", borderColor: "#0086A1" }} onClick={() => alert("Type valid email or password")}>
                        Sign In
                    </Button>
                }
            </Modal.Footer>}
        </Modal>
    )
};