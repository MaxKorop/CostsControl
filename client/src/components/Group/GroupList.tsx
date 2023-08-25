import React, { HTMLProps, useContext } from "react";
import { Container, ContainerProps } from "react-bootstrap";
import { Group } from "./Group";
import { AddGroup } from "../addingComponents/AddGroup";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

export const GroupList: React.FC<HTMLProps<ContainerProps>> = observer(() => {

    const { user } = useContext(Context);

    return (
        <Container className="d-flex justify-content-between align-items-start">
            <Container className="d-flex flex-column position-relative" style={{ flexBasis: "85%", flexShrink: 0 }}>
                {user.groups.map((group: any) => {
                    return <Group key={group.id} group={group}/>
                })}
            </Container>
            <AddGroup />
        </Container>
    )
});