import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, ButtonToolbar } from 'react-bootstrap';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, Table, Checkbox } from 'react-bootstrap';
import {FieldGroup} from 'react-bootstrap';
import { slide as Menu } from 'react-burger-menu';
import './Worker_Area.css';



export default class Worker_Area extends Component {
  constructor (props) {
      super(props)
      this.state = {
        menuOpen: true
      }
    }

    // This keeps your state in sync with the opening/closing of the menu
    // via the default means, e.g. clicking the X, pressing the ESC key etc.
    handleStateChange (state) {
      this.setState({menuOpen: state.isOpen})
    }

    // This can be used to close the menu, e.g. when a user clicks a menu item
    closeMenu () {
      this.setState({menuOpen: false})
    }

    // This can be used to toggle the menu, e.g. when using a custom icon
    // Tip: You probably want to hide either/both default icons if using a custom icon
    // See https://github.com/negomi/react-burger-menu#custom-icons
    toggleMenu () {
      this.setState({menuOpen: !this.state.menuOpen})
    }

  render() {
    return (
      <div>
      <Menu>
        <a id="main" className="menu-item" href="/worker_area">Main</a>
        <a id="accounts" className="menu-item" href="/accounts">Accounts</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="/">Logout</a>
      </Menu>

      <Grid className="container_worker_main">
      <h1 className="worker_main_header">Hello, [insert name].
      <br/>
      You have [x] pending requests.</h1>
      <form>
        <FormGroup controlId="formValidationNull" validationState={null}>
          <ControlLabel>Search</ControlLabel>
          <FormControl type="text" />
          <HelpBlock>Search database for user.</HelpBlock>
        </FormGroup>
      </form>
  {/*
  //////////////////////////////////////////////////////////////////////////////////
  TABLE WITH PENDING REQUESTS
  */
  }
  <h4>Pending Requests</h4>
  <Table responsive>
  <thead>
    <tr>
      <th>ID</th>
      <th>Photo</th>
      <th>Name</th>
      <th>Address</th>
      <th>Email</th>
      <th>Citizen Card</th>
      <th>Validation</th>
      <th>Download Files</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td> <Image src=".\assets\images\test.jpg" responsive rounded /> </td>
      <td>Luís Coimbra</td>
      <td>Quinta da Maia</td>
      <td>luiscoimbra@student.dei.uc.pt</td>
      <td>Y/N</td>
      <td>
      <Checkbox readOnly>
      </Checkbox>
      </td>
      <td><a href="">Download</a></td>
    </tr>
    <tr>
      <td>2</td>
      <td> <Image src=".\assets\images\test.jpg" responsive rounded /> </td>
      <td>Luís Coimbra</td>
      <td>Quinta da Maia</td>
      <td>luiscoimbra@student.dei.uc.pt</td>
      <td>Y/N</td>
      <td>
      <Checkbox readOnly>
      </Checkbox>
      </td>
      <td><a href="">Download</a></td>
    </tr>
    <tr>
      <td>3</td>
      <td> <Image src=".\assets\images\test.jpg" responsive rounded /> </td>
      <td>Luís Coimbra</td>
      <td>Quinta da Maia</td>
      <td>luiscoimbra@student.dei.uc.pt</td>
      <td>Y/N</td>
      <td>
      <Checkbox readOnly>
      </Checkbox>
      </td>
      <td><a href="">Download</a></td>
    </tr>
    <tr>
      <td>4</td>
      <td> <Image src=".\assets\images\test.jpg" responsive rounded /> </td>
      <td>Luís Coimbra</td>
      <td>Quinta da Maia</td>
      <td>luiscoimbra@student.dei.uc.pt</td>
      <td>Y/N</td>
      <td>
      <Checkbox readOnly>
      </Checkbox>
      </td>
      <td><a href="">Download</a></td>
    </tr>
    <tr>
      <td>4</td>
      <td> <Image src=".\assets\images\test.jpg" responsive rounded /> </td>
      <td>Luís Coimbra</td>
      <td>Quinta da Maia</td>
      <td>luiscoimbra@student.dei.uc.pt</td>
      <td>Y/N</td>
      <td>
      <Checkbox readOnly>
      </Checkbox>
      </td>
      <td><a href="">Download</a></td>
    </tr>
    <tr>
      <td>4</td>
      <td> <Image src=".\assets\images\test.jpg" responsive rounded /> </td>
      <td>Luís Coimbra</td>
      <td>Quinta da Maia</td>
      <td>luiscoimbra@student.dei.uc.pt</td>
      <td>Y/N</td>
      <td>
      <Checkbox readOnly>
      </Checkbox>
      </td>
      <td><a href="">Download</a></td>
    </tr>
    <tr>
      <td>4</td>
      <td> <Image src=".\assets\images\test.jpg" responsive rounded /> </td>
      <td>Luís Coimbra</td>
      <td>Quinta da Maia</td>
      <td>luiscoimbra@student.dei.uc.pt</td>
      <td>Y/N</td>
      <td>
      <Checkbox readOnly>
      </Checkbox>
      </td>
      <td><a href="">Download</a></td>
    </tr>
  </tbody>
</Table>
<Button bsStyle="success" className="button_worker_validate">Validate</Button>
<Button bsStyle="danger" className="button_worker_invalidate">Invalidate</Button>

      </Grid>
      </div>


    )
  }
}
