export const supplierForm = [
    {
        name: "firstName",
        displayName: "First Name",
        value: "",
        type: "text",
        columns: "col-6",
        validation: {
            length: 40,
        }
    },
    {
        name: "lastName",
        displayName: "Last Name",
        value: "",
        type: "text",
        columns: "col-6",
        validation: {
            length: 40,
        }
    },
    {
        name: "jobTitle",
        displayName: "Job Title",
        value: "",
        type: "text",
        columns: "col-6",
        validation: {
            length: 40,
        }
    },
    {
        name: "companyName",
        displayName: "Company Name",
        value: "",
        type: "text",
        columns: "col-6",
        validation: {
            length: 40,
        }
    },
    {
        name: "address",
        displayName: "Address",
        value: "",
        type: "text",
        columns: "col-6",
        validation: {
            length: 240,
        }
    },
    {
        name: "stateOrProvince",
        displayName: "State or Province",
        value: "",
        columns: "col-6",
        type: "text",
        validation: {
            length: 40,
        }
    },
    {
        name: "city",
        displayName: "City",
        value: "",
        type: "text",
        columns: "col-6",
        validation: {
            length: 100,
        }
    },
    {
        name: "postalCode",
        displayName: "Postal Code",
        value: "",
        type: "text",
        validation: {
            length: 5,
        }
    },
    {
        name: "country",
        displayName:"Country",
        value: "",
        type: "text",
        validation: {
            length: 100,
        }
    },
    {
        name: "mobileNumber",
        displayName:"Mobile Number",
        value: "",
        type: "text",
        validation: {
            length: 10,
        }
    },
    {
        name: "officeNumber",
        displayName:"Office Number",
        value: "",
        type: "text",
        validation: {
            length: 10,
        }
    },
    {
        name: "email",
        displayName:"Email",
        value: "",
        type: "email",
        validation: {
            type: "email",
            length: 100,
        }
    },
    {
        name: "classification",
        displayName:"Classification",
        value: "",
        type: "text",
        validation: {
            length: 20,
        }
    },
    {
        name: "yearFounded",
        displayName:"Year Founded",
        value: "",
        type: "text",
        validation: {
            length: 4,
        }
    },
    {
        name: "website",
        displayName:"Website",
        value: "",
        type: "text",
        validation: {
            length: 100,
        }
    },
    {
        name: "qualityCertifications",
        displayName:"Quality Certifications",
        value: "",
        type: "text",
        validation: {
            length: 20,
        }
    },
    {
        name: "numberOfLocations",
        displayName:"Number Of Locations",
        value: "",
        type: "text",
        validation: {
            type: "number",
            length: 4,
        }
    },
    {
        name: "employeeSize",
        displayName:"Employee Size",
        value: "",
        type: "text",
        validation: {
            type: "number",
            length: 6,
        }
    },
    {
        name: "annualSales",
        displayName:"Annual Sales",
        value: "",
        type: "number",
        validation: {
            type: "number",
            length: 11,
        },
    },
    {
        name: "diversityAndOwnership",
        header: "Diversity and Ownership",
        type: "checkbox",
        list: true,
        withHeader: true,
        choices: [
            {name: "veteranOwned", displayName: "Veteran Owned", value: false,},
            {name: "minorityOwned", displayName: "Minority Owned", value: false,},
            {name: "womanOwned", displayName: "Woman Owned", value: false,},
            {name: "buyAmericaCompany", displayName: "Buy America Company", value: false,},
        ],
    },
    {
        name: "portfolio",
        header: "Portfolio",
        type: "checkbox",
        list: false,
        withHeader: true,
        choices: [{name: "portfolio", displayName: "Portfolio", value: false}],
    },
    {
        name: "SupplierSignupSubmit",
        displayName: "Submit",
        withAction: true,
        disabled: false,
        action: "handleSubmit",
        type: "button",
        variant: "primary",
        wrapperClass: "",
        columns: "col-3",
    },

]

export const form = supplierForm.reduce((acc, {name, value, choices, type}) => {
    if (type === "checkbox") {
        choices.map(choice => acc[choice.name] = choice.value)
    } 
    else acc[name] = value;
    return acc
}, {});
