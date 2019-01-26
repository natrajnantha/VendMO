import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  InputGroupAddon,
  Input,
  Alert
} from "reactstrap";

const SignUp = props => (
  <div>
    <Modal
      isOpen={props.modal}
      toggle={props.toggleModal}
      className={props.className}
    >
      <ModalHeader toggle={props.toggleModal}>{props.modalTitle}</ModalHeader>
      <ModalBody>
        {props.signedUp ? (
          <Alert color="success">
            Account Created for {props.first_name} {props.last_name}
          </Alert>
        ) : (
          <div>
            <InputGroup>
              <InputGroupAddon addonType="prepend">@</InputGroupAddon>
              <Input
                placeholder="Username"
                name="username"
                value={props.username}
                onChange={props.inputHandler}
              />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">@</InputGroupAddon>
              <Input
                placeholder="Vendor or Customer"
                name="userType"
                value={props.userType}
                onChange={props.inputHandler}
              />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">@</InputGroupAddon>
              <Input
                placeholder="Password"
                type="password"
                name="password"
                value={props.password}
                onChange={props.inputHandler}
              />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">@</InputGroupAddon>
              <Input
                placeholder="E-mail"
                type="email"
                name="email"
                value={props.email}
                onChange={props.inputHandler}
              />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">@</InputGroupAddon>
              <Input
                placeholder="Phone Number"
                name="phone"
                value={props.phone}
                onChange={props.inputHandler}
              />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">@</InputGroupAddon>
              <Input
                placeholder="First Name"
                type="first_name"
                name="first_name"
                value={props.first_name}
                onChange={props.inputHandler}
              />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">@</InputGroupAddon>
              <Input
                placeholder="Last Name"
                type="last_name"
                name="last_name"
                value={props.last_name}
                onChange={props.inputHandler}
              />
            </InputGroup>

            <InputGroup>
              <InputGroupAddon addonType="prepend">@</InputGroupAddon>
              <Input
                placeholder="House Number"
                name="number"
                value={props.number}
                onChange={props.inputHandler}
              />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">@</InputGroupAddon>
              <Input
                placeholder="Street Name"
                name="street"
                value={props.street}
                onChange={props.inputHandler}
              />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">@</InputGroupAddon>
              <Input
                placeholder="City"
                name="city"
                value={props.city}
                onChange={props.inputHandler}
              />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">@</InputGroupAddon>
              <Input
                placeholder="State"
                name="state"
                value={props.state}
                onChange={props.inputHandler}
              />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">@</InputGroupAddon>
              <Input
                placeholder="Zip"
                name="zip"
                value={props.zip}
                onChange={props.inputHandler}
              />
            </InputGroup>
          </div>
        )}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={props.signUp}>
          SignUp
        </Button>
        <Button color="secondary" onClick={props.toggleModal}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  </div>
);

export default SignUp;
