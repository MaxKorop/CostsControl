import React, { HTMLProps, useContext, useEffect } from "react";
import { Container, ContainerProps } from "react-bootstrap";
import { Group } from "./Group";
import { AddGroup } from "../addingComponents/AddGroup";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import { fetchGroups } from "../../http/expensesAPI";
import { IGroup } from "../../interfaces";

export const GroupList: React.FC<HTMLProps<ContainerProps>> = observer(() => {

    const { user } = useContext(Context);

    useEffect(() => {
        fetchGroups(user.user.groups as string[]).then(result => user.groups = result.groups as Array<IGroup>);
    }, [user.user]);

    return (
        <Container className="d-flex justify-content-between align-items-start">
            <Container className="d-flex flex-column position-relative" style={{ flexBasis: "85%", flexShrink: 0 }}>
                {user.groups.map((group: IGroup) => {
                    return <Group key={group._id} group={group}/>
                })}
            </Container>
            <AddGroup />
        </Container>
    )
});