import React from "react";
import { Header, Container} from "semantic-ui-react";

const Menu = ({ name, }) => (
    <Container>
        <Header as="h3" style={{ marginLeft: "15px", }}>{ name }</Header>
    </Container>
);


export default Menu;