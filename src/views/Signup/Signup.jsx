import React, { Component, Fragment } from "react";
import Col from "../../components/Layout/Col";
import Form from "../../components/Form/Form";
import { Context } from "../../context/context";
// variant, action, buttonClass, text
// TODO: deadline for submittal, document specification upload
//
export default class Signup extends Component {
    render(){
        console.log(this.props)
        return(
            <Col colSize={`col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3`}>
                <Context.Consumer>
                    {({state: {signupFormAndData: {signupForm, signupFormData}},handleOnChange, handleOnBlur, handleSubmit}) => {
                        return <Form form={signupForm} formState={signupFormData} handleOnChange={handleOnChange} handleOnBlur={handleOnBlur} handleSubmit={handleSubmit} formDataName={"loginAndSignupFormData"} />
                    }}
                </Context.Consumer>
            </Col>
        );
    }
}