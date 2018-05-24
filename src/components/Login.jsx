import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, ButtonToolbar } from 'react-bootstrap';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import {FieldGroup} from 'react-bootstrap';
import './Login.css';


export default class Login extends Component {
  render() {
    function FieldGroup({ id, label, help, ...props }) {
      return (
        <FormGroup controlId={id}>
          <ControlLabel>{label}</ControlLabel>
          <FormControl {...props} />
          {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
      );
    }
    return (
      <Grid>

      <Row className="show-grid">
   <Col xs={6} md={4}>

   </Col>
   <Col xs={6} md={4}>

     <form>
     <FieldGroup
       id="formControlsText"
       type="text"
       placeholder="Username"
     />
     <FieldGroup
       id="formControlsPassword"
       type="password"
       placeholder="Password"
     />

     <ButtonToolbar>
     <Link to="/worker_area">
     <Button type="submit" bsStyle="custom" className="login_button">Login</Button>
     </Link>
     <Link to="/">
     <Button type="goBack" className="back_button" bsStyle="custom" className="back_buttonLogin">Go Back</Button>
     </Link>
     </ButtonToolbar>
   </form>

   </Col>
   <Col xsHidden md={4}>
   </Col>
  </Row>




    </Grid>
  );
  }
  }
