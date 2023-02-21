import React from "react";

function User_tel(props) {
    const tab = props.liste;
    return (tab.map((item, index2) => <p key={index2}>Telephone: {item.tel}</p>));
}

export default User_tel;