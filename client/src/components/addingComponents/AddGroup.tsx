import React, { useContext, useState } from "react"
import { Button, ButtonProps, Container, Form } from "react-bootstrap"
import { Context } from "../..";

export const AddGroup: React.FC<ButtonProps> = () => {

    const { user } = useContext(Context);

    const [isVisibleBlock, setIsVisibleBlock] = useState<boolean>(false);
    const [groupName, setGroupName] = useState<string>("");

    const checkGroupName = (): boolean => {
        return user.groups.some((group) => groupName === group.name);
    }

    return (
        <Container className="d-flex flex-column justify-content-center align-items-center mt-4">
            <div className="mb-5" onClick={() => { setIsVisibleBlock(!isVisibleBlock) }}>
                <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27 2V52" stroke="#0086A1" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M52 27H2" stroke="#0086A1" strokeWidth="3" strokeLinecap="round"/>
                </svg>
            </div>
            {isVisibleBlock ? <Container style={{ position: "absolute", top: "23%", height: "auto", width: "160px", zIndex: "999", backgroundColor: "#161b1caa" }} className="d-flex flex-column justify-content-center rounded-4">
                <Form className="m-3">
                    <Form.Control placeholder="Type name of group here..." onChange={(e) => setGroupName(e.target.value)}/>
                </Form>
                <Button
                    className="mb-3"
                    style={{ backgroundColor: "#0086A1", borderColor: "#0086A1" }}
                    onClick={() => { checkGroupName() ? alert("The group name should be unique") : user.addNewGroup(groupName) }}
                >
                    Add group
                </Button>
            </Container> : <></>}
        </Container>
    )
}