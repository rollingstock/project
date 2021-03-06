import React, {useState, useContext, Fragment} from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../context/context";
import Form from "../../components/Form/Form";
import Col from "../../components/Layout/Col";
import Row from "../../components/Layout/Row";
import List from "../../components/List";
//TODO: add vetted supplier as search criteria. 
function SupplierSearch() {

    const [suppliers, setSuppliers] = useState([]);
    const {organization, currentUser, forms: {supplierSearchForm}, supplierSearchResults, createDraftRFP,...rest} = useContext(Context);

    function addSupplier(name, id){
        if (!suppliers.some(s => s.id === id)) {
            suppliers.push({name, id});
            const updatedList = [...suppliers];
            setSuppliers(updatedList);
        } 
    }

    function removeSupplier(id){
        const updatedList = suppliers.filter(s => s.id !== id);
        setSuppliers(updatedList);
    }

    function newRfpButton(createDraftRFP, organization, currentUser){
        if (suppliers.length > 0) {
            return (
                <button 
                    className="btn btn-info" 
                    onClick={() => createDraftRFP({suppliers: suppliers.map(s => s), organizationId: organization.id, userId: currentUser.uid})}
                >
                    <NavLink to={"/initialize-rfp"}>Next Step To Initialize RFP</NavLink>
                </button>
            )
        }
    }

    const renderSuppliers = suppliers.map(s => (
        <div key={s.id}>
            <p style={{display: "inline"}}>{s.name}</p>
            <button className="btn btn-danger" onClick={() => removeSupplier(s.id)}>X</button>
        </div>
        )
    )
    const isOrg = Boolean(organization);
    const items = supplierSearchResults ? supplierSearchResults.map(supplier => <SearchItem supplier={supplier} addSupplier={addSupplier} isOrg={isOrg} />) : null;

    return(
        <Fragment>
            {/* <Col colClass="col-xs-12 col-sm-8 offset-sm-2 col-md-4 offset-md-4"> */}
                <Row rowClass="col-xs-12 col-sm-8 offset-sm-2 col-md-4 offset-md-4">
                    <Form form={supplierSearchForm} formName={supplierSearchForm.formName} {...rest} />
                </Row>
                <Row rowClass={"col-12 mx-0"}>
                        {renderSuppliers}
                        {isOrg && newRfpButton(createDraftRFP, organization, currentUser)}
                        {!!supplierSearchResults && supplierSearchResults.length > 0 ? 
                            <List 
                            items={items} 
                            itemClass={"my-2"}
                            />
                            :
                            null
                        }
                </Row>
            {/* </Col> */}
        </Fragment>
    );
}

export default SupplierSearch

function SearchItem({supplier, addSupplier, isOrg}) {
    return (
        <div>
            <div className="row">
            <div className="d-flex col-3">
                <div>
                    <h5 className="mr-3">{supplier.name}</h5>
                    <p className="mr-1">{supplier.address.city}, {supplier.address.state_province}</p>
                </div>
            </div>

            <div className="d-flex col-3">
                <div>
                    <h5 className="mr-3">Diversity and Certifications</h5>
                    <p className="mr-1">{supplier.womanOwned && "Woman Owned"}</p>
                    <p className="mr-1">{supplier.minorityOwned && "Minority Owned"}</p>
                    <p className="mr-1">{supplier.veteranOwned && "Veteran Owned"}</p>
                    <p className="mr-1">{supplier.byAmerica && "By America"}</p>
                    <p className="mr-1">{supplier.buyAmerica && "Buy America"}</p>
                    <p className="mr-1">{supplier.isoCertified && "ISO Certified"}</p>
                    <p className="mr-1">{supplier.greenCertified && "Green Certified"}</p>
                    <p className="mr-1">{supplier.establishedProduct && "Established Product(s)"}</p>
                </div>
            </div>

            <button className="col-2 btn btn-link">Portfolio</button>
            <button className="col-2 btn btn-link">Save to Favorites</button>
            {isOrg && <button className="col-2 btn btn-link" onClick={() => addSupplier(supplier.name, supplier.id)} >Add To New RFP</button>}

            </div>
        </div>
    )
}