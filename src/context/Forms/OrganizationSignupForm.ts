import { IForm, inputTypes, Columns, Variant, IInput, SecondaryActions, Components } from "./FormInterfaces";
import { IOrganization } from "../Models/Organizations";

export const organizationSignupForm: IForm  = {
    formName: "organizationSignupForm",
    inputs: [
        {
            name: "name",
            label: true,
            displayName: "Company Name",
            value: "",
            type: inputTypes.text,
            columns: Columns.col12,
            inputClass: "",
            validation: {
                validationType: "string",
                valid: null,
                required: true,
                lengthRequired: false,
                validationMessage: "",
            }
        },
        {
            name: "address",
            label: true,
            displayName: "Address",
            value: "",
            type: inputTypes.text,
            columns: Columns.col12,
            inputClass: "",
            validation: {
                validationType: "string",
                valid: null,
                required: true,
                lengthRequired: false,
                validationMessage: "",
            }
        },
        {
            name: "city",
            label: true,
            displayName: "City",
            value: "",
            type: inputTypes.text,
            columns: Columns.col12,
            inputClass: "",
            validation: {
                validationType: "string",
                valid: null,
                required: true,
                lengthRequired: false,
                validationMessage: "",
            }
        },
        {
            name: "state_province",
            displayName: "State",
            label: true,
            type: inputTypes.select,
            inputClass: "",
            wrapperClass: "",
            columns: Columns.col6,
            value: "",
            multiSelect: false,
            validation: {
                validationType: "string",
                valid: null,
                required: true,
                lengthRequired: false,
                validationMessage: "",

            },
            choices: [ // TODO: verify spelling and codes
                {name: "state_province", displayName: "",      value: ""},
                {name: "state_province", displayName: "Alabama",      value: "AL"},
                {name: "state_province", displayName: "Alaska",      value: "AK"},
                {name: "state_province", displayName: "Arizona",      value: "AZ"},
                {name: "state_province", displayName: "Arkansas",      value: "AR"},
                {name: "state_province", displayName: "California",      value: "CA"},
                {name: "state_province", displayName: "Colorado",      value: "CO"},
                {name: "state_province", displayName: "Connecticut",      value: "CT"},
                {name: "state_province", displayName: "Deleware",      value: "DE"},
                {name: "state_province", displayName: "District of Columbia",      value: "DC"},
                {name: "state_province", displayName: "Florida",      value: "FL"},
                {name: "state_province", displayName: "Georgia",      value: "GA"},
                {name: "state_province", displayName: "Hawaii",      value: "HI"},
                {name: "state_province", displayName: "Idaho",      value: "ID"},
                {name: "state_province", displayName: "Illinois",      value: "IL"},
                {name: "state_province", displayName: "Indiana",      value: "IN"},
                {name: "state_province", displayName: "Iowa",      value: "IA"},
                {name: "state_province", displayName: "Kansas",      value: "KS"},
                {name: "state_province", displayName: "Kentucky",      value: "KY"},
                {name: "state_province", displayName: "Louisiana",      value: "LA"},
                {name: "state_province", displayName: "Maine",      value: "ME"},
                {name: "state_province", displayName: "Maryland",      value: "MD"},
                {name: "state_province", displayName: "Massachusetts",      value: "MA"},
                {name: "state_province", displayName: "Michigan",      value: "MI"},
                {name: "state_province", displayName: "Minnesota",      value: "MN"},
                {name: "state_province", displayName: "Mississippi",      value: "MS"},
                {name: "state_province", displayName: "Missouri",      value: "MO"},
                {name: "state_province", displayName: "Montana",      value: "MT"},
                {name: "state_province", displayName: "Nebraska",      value: "NE"},
                {name: "state_province", displayName: "Nevada",      value: "NV"},
                {name: "state_province", displayName: "New Hampshire",      value: "NH"},
                {name: "state_province", displayName: "New Jersey",      value: "NJ"},
                {name: "state_province", displayName: "New Mexico",      value: "NM"},
                {name: "state_province", displayName: "New York",      value: "NY"},
                {name: "state_province", displayName: "North Carolina",      value: "NC"},
                {name: "state_province", displayName: "North Dakota",      value: "ND"},
                {name: "state_province", displayName: "Ohio",      value: "OH"},
                {name: "state_province", displayName: "Oklahoma",      value: "OK"},
                {name: "state_province", displayName: "Oregon",      value: "OR"},
                {name: "state_province", displayName: "Pennsylvania",      value: "PA"},
                {name: "state_province", displayName: "Rhode Island",      value: "RI"},
                {name: "state_province", displayName: "South Carolina",      value: "SC"},
                {name: "state_province", displayName: "South Dakota",      value: "SD"},
                {name: "state_province", displayName: "Tennessee",      value: "TN"},
                {name: "state_province", displayName: "Texas",      value: "TX"},
                {name: "state_province", displayName: "Utah",      value: "UT"},
                {name: "state_province", displayName: "Vermont",      value: "VT"},
                {name: "state_province", displayName: "Virginia",      value: "VA"},
                {name: "state_province", displayName: "Washington",      value: "WA"},
                {name: "state_province", displayName: "West Virginia",      value: "WV"},
                {name: "state_province", displayName: "Wisconsin",      value: "WI"},
            ]
        },
        {
            name: "postalCode",
            label: true,
            displayName: "Postal Code",
            value: "",
            type: inputTypes.text,
            columns: Columns.col6,
            inputClass: "",
            validation: {
                validationType: "string number",
                valid: null,
                required: true,
                lengthRequired: true,
                length: {min: 5, max: 10},
                validationMessage: "",
            }
        },
        {
            name: "country",
            displayName: "Country",
            label: true,
            type: inputTypes.select,
            inputClass: "",
            wrapperClass: "hidden",
            columns: Columns.col6,
            value: "US",
            multiSelect: false,
            validation: {
                validationType: "string",
                valid: null,
                required: false,
                lengthRequired: false,
                validationMessage: "",

            },
            choices: [
                {name: "country", displayName: "Select Country",      value: ""},
                {name: "country", displayName: "United States",      value: "US"},
            ]
        },
        {
            name: "phoneNumber",
            label: true,
            displayName:"Phone Number",
            value: "",
            type: inputTypes.tel,
            pattern: "[0-9]*",
            columns: Columns.col6,
            inputClass: "",
            validation: {
                validationType: "string number",
                valid: null,
                required: true,
                lengthRequired: true,
                length: {min: 10, max: 10},
                validationMessage: "",
            }
        },
        {
            name: "website",
            label: true,
            displayName:"Website",
            value: "",
            type: inputTypes.text,
            columns:Columns.col6,
            inputClass: "",
            validation: {
                validationType: "string",
                valid: null,
                lengthRequired: false,
                required: false,
                validationMessage: "",
            }
        },
        {
            name: "yearFounded",
            label: true,
            displayName:"Year Founded",
            value: "",
            type: inputTypes.number,
            columns: Columns.col6,
            inputClass: "",
            validation: {
                validationType: "number",
                valid: null,
                required: true,
                lengthRequired: true,
                length: {min: 4, max: 4},
                validationMessage: "",
            }
        },
        {
            name: "numberOfLocations",
            label: true,
            displayName:"Number Of Locations",
            value: "",
            type: inputTypes.number,
            columns: Columns.col6,
            inputClass: "",
            validation: {
                validationType: inputTypes.number,
                valid: null,
                required: true,
                lengthRequired: true,
                length: {min: 1, max: 3},
                validationMessage: "",
            }
        },
        {
            name: "numberOfEmployees",
            label: true,
            displayName:"Employee Size",
            value: "",
            type: inputTypes.number,
            columns: Columns.col6,
            inputClass: "",
            validation: {
                validationType: inputTypes.number,
                valid: null,
                required: true,
                lengthRequired: false,
                validationMessage: "",
            }
        },
        {
            name: "annualSales",
            label: true,
            displayName:"Annual Sales",
            value: "",
            type: inputTypes.number,
            columns: Columns.col6,
            inputClass: "",
            validation: {
                validationType: inputTypes.number,
                valid: null,
                required: false,
                lengthRequired: false,
                validationMessage: "",
            },
        },
        {
            name: "yearsInOperation",
            displayName: "Years in Operation",
            label: true,
            type: inputTypes.dropdown,
            inputClass: "hidden",
            columns: Columns.none,
            value: "10",
            validation: {
                validationType: "string",
                valid: null,
                required: true,
                lengthRequired: false,
                validationMessage: "",

            },
            choices: [
                {name: "yearsInOperation", displayName: "",            value: " "},
                {name: "yearsInOperation", displayName: "Any",         value: "Any"},
                {name: "yearsInOperation", displayName: "0-5 Years",   value: "0-5"},
                {name: "yearsInOperation", displayName: "5-10 Years",  value: "5-10"},
                {name: "yearsInOperation", displayName: "10-15 Years", value: "10-15"},
                {name: "yearsInOperation", displayName: "20+ Years",   value: "20+"},
            ]
        },
        {
            name: "classification",
            displayName: "Classification",
            label: false,
            type: inputTypes.dropdown,
            inputClass: "",
            wrapperClass: "mt-1 mb-3",
            columns: Columns.col12,
            value: "",
            multiSelect: false,
            validation: {
                validationType: "string",
                valid: null,
                required: true,
                lengthRequired: false,
                validationMessage: "",

            },
            choices: [
                {name: "classification", displayName: "None",      value: ""},
                {name: "classification", displayName: "Classification 1",      value: "Classification 1"},
                {name: "classification", displayName: "Classification 2",      value: "Classification 2"},
            ]
        },
        {
            name: "qualityCertifications",
            displayName: "Quality Certifications",
            label: false,
            type: inputTypes.dropdown,
            inputClass: "",
            wrapperClass: "mt-1 mb-2",
            columns: Columns.col12,
            value: "",
            multiSelect: false,
            validation: {
                validationType: "string",
                valid: null,
                required: false,
                lengthRequired: false,
                validationMessage: "",

            },
            choices: [
                {name: "qualityCertifications", displayName: "Select Component",      value: ""},
                {name: "qualityCertifications", displayName: "Certification 1",      value: "Certification 1"},
                {name: "qualityCertifications", displayName: "Certification 2",      value: "Certification 2"},
            ]
        },
        {
            name: "components",
            displayName: "Components",
            label: false,
            type: inputTypes.dropdown,
            inputClass: "",
            wrapperClass: "hidden mt-3 mb-2 col-12",
            columns: Columns.none,
            value: "none",
            validation: {
                validationType: "string",
                valid: null,
                required: true,
                lengthRequired: false,
                validationMessage: "",

            },
            choices: [
                {name: "components", displayName: "",                           value: " "},
                {name: "components", displayName: "Doorways",                   value: Components.doorways},
                {name: "components", displayName: "Floors",                     value: Components.floors},
                {name: "components", displayName: "Floor Panels",               value: Components.floorPanels},
                {name: "components", displayName: "Handrails and Stanchions",   value: Components.handrailsAndStanchions},
                {name: "components", displayName: "Lighting",                   value: Components.lighting},
                {name: "components", displayName: "Public Information Systems", value: Components.publicInformationSystems},
                {name: "components", displayName: "Restrooms",                  value: Components.restrooms},
                {name: "components", displayName: "Sleeping Compartments",      value: Components.sleepingCompartments},
            ]
        },
        {
            name: "supplier",
            displayName: "Designate Organization as Supplier", // TODO: force user to choose yes or no.
            type: inputTypes.checkbox,
            label: false,
            inline: false,
            inputClass: "",
            labelClass: "",
            wrapperClass: "form-checkbox",
            columns: Columns.col12,
            value: false, 
            secondaryAction: SecondaryActions.toggleProductsList,
        },
        {
            name: "veteranOwned",
            displayName: "Veteran Owned",
            type: inputTypes.checkbox,
            label: false,
            inline: false,
            inputClass: "",
            labelClass: "",
            wrapperClass: "form-checkbox",
            columns: Columns.col12,
            value: false, 
        },
        {
            name: "minorityOwned",
            displayName: "Minority Owned",
            type: inputTypes.checkbox,
            label: false,
            inline: false,
            inputClass: "",
            labelClass: "",
            wrapperClass: "form-checkbox",
            columns: Columns.col12,
            value: false, 
        },
        {
            name: "womanOwned",
            displayName: "Woman Owned",
            type: inputTypes.checkbox,
            label: false,
            inline: false,
            inputClass: "",
            labelClass: "",
            wrapperClass: "form-checkbox",
            columns: Columns.col12,
            value: false, 
        },
        {
            name: "buyAmerica",
            displayName: "Buy America Company",
            type: inputTypes.checkbox,
            label: false,
            inline: false,
            inputClass: "",
            labelClass: "",
            wrapperClass: "form-checkbox",
            columns: Columns.col12,
            value: false, 
        },
        {
            name: "byAmerica",
            displayName: "By America",
            type: inputTypes.checkbox,
            label: false,
            inline: false,
            inputClass: "",
            labelClass: "",
            wrapperClass: "form-checkbox",
            columns: Columns.col12,
            value: false, 
        },
        {
            name: "isoCertified",
            displayName: "ISO Certified",
            type: inputTypes.checkbox,
            label: false,
            inline: false,
            inputClass: "",
            labelClass: "",
            wrapperClass: "form-checkbox",
            columns: Columns.col12,
            value: false, 
        },
        {
            name: "greenCertified",
            displayName: "Green Certified",
            type: inputTypes.checkbox,
            label: false,
            inline: false,
            inputClass: "",
            labelClass: "",
            wrapperClass: "form-checkbox",
            columns: Columns.col12,
            value: false, 
        },
        {
            name: "establishedProduct",
            displayName: "Established Product",
            type: inputTypes.checkbox,
            label: false,
            inline: false,
            inputClass: "",
            labelClass: "",
            wrapperClass: "form-checkbox",
            columns: Columns.col12,
            value: false, 
        },
        // {
        //     name: "portfolio",
        //     displayName: "Portfolio",
        //     type: inputTypes.checkbox,
        //     label: false,
        //     inline: false,
        //     inputClass: "",
        //     labelClass: "",
        //     columns: Columns.col12,
        //     value: false,
        // },
        {
            name: "organizationSignupSubmit",
            displayName: "Submit",
            disabled: false,
            label: false,
            value: "",
            type: inputTypes.button,
            submitType: "organizationSignup",        
            variant: Variant.primary,
            wrapperClass: "",
            inputClass: "",
            columns: Columns.col12,
        },
    ],
    getValues: getValues,
    getValuesHelper: getValuesHelper,
}

function getValues(this: IForm): IOrganization {
    return {
        name:               getValuesHelper(this, "name"),
        phoneNumber:        getValuesHelper(this, "phoneNumber"), 
        website:            getValuesHelper(this, "website"),
        yearFounded:        getValuesHelper(this, "yearFounded"),
        numberOfEmployees:  getValuesHelper(this, "numberOfEmployees"),
        numberOfLocations:  getValuesHelper(this, "numberOfLocations"),
        annualSales:        getValuesHelper(this, "annualSales"),
        supplier:           getValuesHelper(this, "supplier"),
        buyAmerica:         getValuesHelper(this, "buyAmerica"),
        byAmerica:          getValuesHelper(this, "byAmerica"),
        minorityOwned:      getValuesHelper(this, "minorityOwned"),
        womanOwned:         getValuesHelper(this, "womanOwned"),
        veteranOwned:       getValuesHelper(this, "veteranOwned"),
        isoCertified:       getValuesHelper(this, "isoCertified"),
        greenCertified:     getValuesHelper(this, "greenCertified"),
        establishedProduct: getValuesHelper(this, "establishedProduct"),
        yearsInOperation:   getValuesHelper(this, "yearsInOperation"),
        classifications:    getValuesHelper(this, "classification"),
        address: {
            street:         getValuesHelper(this, "address"),
            city:           getValuesHelper(this, "city"),
            state_province: getValuesHelper(this, "state_province"),
            postalCode:     getValuesHelper(this, "postalCode"),
            country:        getValuesHelper(this, "country"),
        },
        components:         getValuesHelper(this, "supplier") === true ? getValuesHelper(this, "components") : "",
        adminUsers: [],
        users: []
    }
}

function getValuesHelper(form: IForm, name: string): any { 
    const input: any = form.inputs.find((input: IInput) => input.name === name);
    return input.value;
}