import React from "react";
import BasicInfo from "./Medium";

const InformationList = () => {
    const individualInfo = [

        {name:"Dominic Momoh",
        number: "11",
        DOB: "07/18/22",
        City: "Freetown",
        Country: "Sierra Leone"
    },

    {name:"Edwin edwards",
    number: "13",
    DOB: "06/28/22",
    City: "Reading",
    Country: "England"
},

{name:"Nannette Hajallie",
number: "3",
DOB: "08/08/22",
City: "Freetown",
Country: "Sierra Leone"
},

{name:"Gregory Stuart",
number: "39",
DOB: "02/48/32",
City: "New York",
Country: "U S of A"
}
    ];
return (
    <div className="individualList"> 
    {individualInfo.map((info) => (
        <BasicInfo name={info.name} number={info.number} DOB={info.DOB} City={info.City} Country={info.Country} />
    ))}
    </div>
);
};

export default InformationList;