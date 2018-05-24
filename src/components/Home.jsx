import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, ButtonToolbar } from 'react-bootstrap';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, Popover, Tooltip, Modal } from 'react-bootstrap';
import {FieldGroup} from 'react-bootstrap';
import Webcam from 'react-webcam';

import './Home.css';

export default class Home extends Component {

    setRef = (webcam) => {
      this.webcam = webcam;
    }

    capture = () => {
      const imageSrc = this.webcam.getScreenshot();
    };

    constructor(props, context) {
      super(props, context);

      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);

      this.state = {
        show: false
      };
    }

    handleClose() {
      this.setState({ show: false });
    }

    handleShow() {
      this.setState({ show: true });
    }
    render() {
      const popover = (
        <Popover id="modal-popover" title="popover">
        very popover. such engagement
        </Popover>
      );
      function FieldGroup({ id, label, help, ...props }) {
        return (
          <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
          </FormGroup>
        );
      }
      const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
      return (
        <Grid className="home_container">
        <Row className="show-grid">
        <Col xs={12} md={8} className="main_text">
        <div className="mainHeader_wrapper">
        <h1><span>Forget about carrying around money
        <br />
        We will take care of your assets for you
        </span></h1>
        </div>
        <p><span>
        Coimbra Bank is an institution that specializes in credit cards and bank security.
        To get a credit card, please click the button below and fill out our form with your personal details.
        </span></p>
        {/*
        //////////////////////////////////////////////////////////////////////////////////
        MODAL WITH FORM
        */
        }
        <ButtonToolbar>
          <Button className="main_button" bsStyle="custom" onClick={this.handleShow}>
          Credit Card Form
          </Button>
          <Link to="/login">
          <Button className="main_button2"
          bsStyle="custom"> Login
          </Button>
          </Link>
        </ButtonToolbar>
        <h5>©2018</h5>
        <h6>Created for Service Design/Engineering by <a href="https://github.com/RitaOak"> Rita Carvalho</a>, Luís Coimbra and Rodrigo Santos.</h6>
        </Col>
        <Col xs={6} md={4} className="image_main">

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Body>

          {/*
            //////////////////////////////////////////////////////////////////////////////////////////////////////////
            FORM FOR CREDIT CARD VALIDATION
          */}
          <h2>Credit Card Activation Form</h2>

          <form className="form_creditcard">
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

              <Webcam
                audio={false}
                height={350}
                ref={this.setRef}
                screenshotFormat="image/jpeg"
                width={350}
        />
              <button bsStyle="custom" className="buttonForm_captureimg" onClick={this.capture}>Capture photo</button>
              <ButtonToolbar>
                <Button type="submit" className="buttonForm_submit" bsStyle="custom">Activate Card</Button>
                <Link to="/">
                <Button type="goBack" className="back_button" bsStyle="custom" onClick={this.handleClose}>Close</Button>
                </Link>
              </ButtonToolbar>
          </form>

          </Modal.Body>
        </Modal>


        </Col>
        </Row>
        </Grid>
      )
    }
  }
