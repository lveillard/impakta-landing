import React, { useState, useEffect, useContext } from "react";

import { Input, Help, Field, Icon, Section, Control, Card, Content, Label, Image, Heading } from 'react-bulma-components';


import { useGlobal } from "../store/store";

const Login = props => {
    const [globalState, globalActions] = useGlobal();

    return (
        <div className="login">

            <Section style={{ backgroundColor: '#232323' }}>
                <Content>
                    <Image src="/icon.svg" size={64} />
                    <Card style={{ backgroundColor: '#ffd44a' }}>
                        <Card.Content>
                            <Heading > Inicia sesión en tu cuenta </Heading>
                            <div class="field">
                                <label class="label">Name</label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="Text input" />
                                </div>
                            </div>
                        </Card.Content>
                    </Card>
                </Content>
            </Section>

        </div>
    );
};

export default Login;
