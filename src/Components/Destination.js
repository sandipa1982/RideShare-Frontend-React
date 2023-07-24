
import React, { Component } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import "./Example.css";
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import DriverImage from './Images/driver.jpg';
import { Form, Input, Button } from "antd";
//import { locales } from "moment";

const stylePaper = {
  height: '360px',
  width: '375px',
  background: '#f8f8f9',
  position: 'relative',
  marginLeft:'35%',
  marginTop: '70px'
};

const styleText = {
    marginLeft: '20px',
    marginTop: '20px',
    fontSize: '1.21429rem',
    fontFamily: 'ff-clan-web-pro,"Helvetica Neue",Helvetica,sans-serif!important',
    fontWeight: '400'
};

const FormItem = Form.Item;

class Signup extends Component {
  state = {
    res: {},
    res_received: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (!err) {
        const values = {
          ...fieldsValue,
          role: 'driver'        
        };
        //delete values[""];
        console.log("Received values of form: ", values);
        localStorage.setItem('latitude', values.latitude);
        localStorage.setItem('longitude', values.longitude);
        const x = localStorage.getItem('latitude');
        const y = localStorage.getItem('longitude');
        alert('Click on Look for cabs near you!');
       
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    let result = null;
    if (this.state.res_received) {
      alert('Sign Up Succesful!');
      console.log(this.state.res_recieved);
    }

    return (
      <Paper style={stylePaper}>
        
        <Form onSubmit={this.handleSubmit} className="signup-form">
          <div style={{marginTop: '20px', marginBottom: '20px'}}> 
           </div>
          <FormItem>
            {getFieldDecorator("latitude", {
              rules: [{ required: true, message: "Please input your Pick up location: LATITUDE!" }]
            })(<Input placeholder="Pick up location: LATITUDE" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator("longitude", {
              rules: [{ required: true, message: "Please input your Pick up location: LONGITUDE!" }]
            })(<Input placeholder="Drop location: LONGITUDE" />)}
          </FormItem>
          {result}
        </Form>
        <Button
              style={{width:'300px', marginLeft: '37px', background: '#216C55', color: 'white'}}
              href="/map"
            >
            LOOK FOR CABS NEAR YOU!  
        </Button>
      </Paper>
    );
  }
}

const Sign_up = Form.create()(Signup);

export default Sign_up;
