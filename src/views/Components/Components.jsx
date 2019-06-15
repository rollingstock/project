import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Context } from "../../context/context.js";

export default class Components extends Component {
    renderComponents = () => {
        const { params } = this.props.match;
        return (
            <Context.Consumer>
                { ({data}) =>
                    data[`tier${params.tier}`].requirements.components.map(({name, displayName}) => {
                        return (
                            <NavLink key={name} className={["d-block w-100 my-2"].join(" ")} to={`/components/tier/${params.tier}/${name}`}>
                                <Button variant="primary" className={["w-100 text-capitalize"].join(" ")}>
                                    {displayName}
                                </Button>
                            </NavLink>
                        )
                    })
                }
            </Context.Consumer>
        )
    }
                
    render(){
        const { params } = this.props.match;
        return(              
            <Row>
                <Col xs={12} className="py-2">
                    <p className="text-light text-center my-0">Railway US Requirements</p>
                    <p className="text-light text-center my-0">-Coaches-</p>
                    <p className="text-light text-center my-0">*Interior Components Only*</p>
                    <p className="text-light text-center my-0">Tier {params.tier} Requirements</p>
                </Col>
                <Col xs={12} className="d-flex flex-wrap justify-content-center">
                    {this.renderComponents()}
                </Col>
            </Row>
        );
    }
}