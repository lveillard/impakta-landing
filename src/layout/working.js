import React, { useState, useEffect, useContext } from "react";

import { Modal, Section, Columns, Card, Content, Media, Image, Heading } from 'react-bulma-components';


import { useGlobal } from "../store/store";

const Working = props => {
    const [globalState, globalActions] = useGlobal();

    return (
        <div className="working">

            <Section style={{ backgroundColor: 'white' }}>
                <Heading > En construcción </Heading>
                <img className="image" style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    maxHeight: "60vh"
                }} src={"img/building.svg"} alt="IA" />


                <p> {props.text} </p>
            </Section>

        </div>
    );
};

export default Working;
