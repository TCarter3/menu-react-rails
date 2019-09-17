import React from 'react';
import MenuForm from './components/MenuForm';
import Menus from './components/Menus'
import { Container, Header, } from "semantic-ui-react";
import axios from "axios";

class App extends React.Component {
  state = { menus: [], };

  componentDidMount() {
    axios.get("/api/menus")
      .then( res => {
        this.setState({ menus: res.data, });
      })
      .catch( err => {
        console.log(err);
      })
  }

  addMenu = (name) => {
    axios.post(`/api/menus`, { name })
    .then( res => {
      const { menus, } =this.state;
      this.setState({ menus: [...menus, res.data], })
    })

  };

  updateMenu = (id) => {

  };

  deleteMenu = (id) => {

  }

  render() {
    return (
      <Container style={{ padding: "30px 0",}}>
      <Header
        textAlign="center"
        as="h1">Welcome to Baguetteaboudit!</Header>
        <br/>
        <MenuForm addMenu={this.addMenu}/>
        <br/>
        <br/>

      <Menus
      menus={this.state.menus}

       />
    </Container>

    );
  };
};

export default App;
