import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, ButtonToolbar } from 'react-bootstrap';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import {FieldGroup, Radio, Checkbox} from 'react-bootstrap';
import './Client.css';



export default class Client extends Component {
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
       placeholder="Name"
     />
     <FieldGroup
       id="formControlsAddress"
       type="text"
       placeholder="Address"
     />
     <FieldGroup
       id="formControlsEmail"
       type="email"
       placeholder="Email"
     />
     <FieldGroup className="file_upload"
       id="formControlsFile"
       type="file"
       label=" Please upload a copy of your Citizen Card"
     />
     <ButtonToolbar>
     <Button type="submit" className="buttonForm_submit" bsStyle="custom">Activate Card</Button>
     <Link to="/">
     <Button type="goBack" className="back_button" bsStyle="custom">Go Back</Button>
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
