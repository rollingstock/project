import React, {Component} from "react";
import Col from "../../components/Layout/Col";
import Input from "../../components/Forms/Input";
import Checkbox from "../../components/Forms/Checkbox";

export default class SupplierSearch extends Component {

    checkboxList = [
        {value: "all"},
        {value: "buy-america"},
        {value: "by-america"},
        {value: "woman-owned"},
        {value: "minority-owned"},
        {value: "green-certified"},
        {value: "established-product"},
        {value: "iso-certified"},
        {value: "years-in-operation"}, // select
        {value: "local"}, // range select
    ]

    render(){
        return(
            <Col colClass="col-xs-12 col-md-12 col-lg-10 offset-lg-1 col-xl-8 offset-lg-2">
                <form>
                    <Checkbox checkboxList={this.checkboxList} />
                    <Input inputClass="col-6" type="text" placeholder="Subject" />
                </form>
            </Col>
        );
    }
}