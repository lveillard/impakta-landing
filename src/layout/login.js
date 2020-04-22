import React, { useState, useRef, useCallback, useEffect, useContext } from "react";

import { Section, Card, Content, Image, Heading } from 'react-bulma-components';
import { Field, Control, Label, Input, Textarea, Select, Checkbox, Radio, Help, InputFile } from 'react-bulma-components/lib/components/form';
import Icon from 'react-bulma-components/lib/components/icon';
import Button from 'react-bulma-components/lib/components/button';

import { useGlobal } from "../store/store";

import { FcKey } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';

import { toast } from 'react-toastify';
import Loader from 'react-bulma-components/lib/components/loader';




const Login = (props) => {

    const [globalState, globalActions] = useGlobal();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const inputElement = useRef(null);



    function login(e) {
        globalActions.setStatus("LOADING")

        const timer = setTimeout(() => {
            toast("❌ Usuario o contraseña incorrectos", { type: toast.TYPE.ERROR })
            globalActions.setStatus("LOADED")

        }, 1000);
        return () => clearTimeout(timer);

    }



    return (
        <div className="login"   >

            <Content>
                <Card className="modal-card is-shady" >
                    <Card.Content style={{ background: "#fff8bc" }}>
                        <Heading size={4}> Inicia sesión en tu cuenta </Heading>
                        <Field>
                            <Label>Email</Label>
                            <Control iconLeft>
                                <Input autoFocus={true} value={email}
                                    onKeyDown={(event) => { console.log(event.key) }}
                                    onChange={(event) => setEmail(event.target.value)}
                                    name="email" type="email" placeholder="" />
                                <Icon style={{ color: "#ffd44a" }} align="left"><MdEmail /></Icon>

                            </Control>
                        </Field>
                        <Field>
                            <Label>Password</Label>
                            <Control iconLeft >
                                <Input value={password}
                                    onKeyDown={(event) => { event.key == "Enter" && login() }}
                                    onChange={(event) => setPassword(event.target.value)}
                                    name="password" type="password" placeholder=""
                                />
                                <Icon align="left" ><FcKey /></Icon>
                            </Control>
                        </Field>
                        <br />
                        <Button disabled={globalState.status === "LOADING" ? true : false} color="warning" style={{ background: "#ffd44a" }} fullwidth
                            onClick={login}>   {globalState.status === "LOADING" ? <Loader style={{ width: '30px', border: '4px solid white' }} /> : "Sign In"}
                        </Button>
                    </Card.Content>
                </Card>
            </Content>

        </div >
    );
};

export default Login;
