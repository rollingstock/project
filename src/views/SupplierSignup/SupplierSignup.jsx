import React, { Component } from "react";
import Col from "../../components/Layout/Col";
import Form from "../../components/Form/Form";
import { Context } from "../../context/context";


export default  class SupplierSignup extends Component {
    render(){
        return(
            <Col colSize={`col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3`}>
                <Context.Consumer>
                {({forms: {organizationSignupForm},...rest}) => {
                        return <Form form={organizationSignupForm} formName={"organizationSignupForm"} {...rest} />
                    }}
                </Context.Consumer>
            </Col>
        );
    }
}