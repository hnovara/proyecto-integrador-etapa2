import React, { useState } from 'react'
import Text from '../components/Text'
import Form from '../components/Form'
import Banner from '../components/Banner';
import InputGroup from '../components/InputGroup'

import { useForm } from "../hooks/useForm";
import { postMessage } from '../util/api';

const INITIAL_STATE = {
    name: "",
    email: "",
    subject: "",
    body: ""
}

function Contacto() {
    const {values, handleInputChange, resetForm} = useForm(INITIAL_STATE)
    const [loadingForm, setLoadingForm] = useState(false)
    
    const inputProps = {
        name: {
            inputLabel: "Nombre",
        },
        email: {
            inputLabel: "Email",
            inputType: "email"
        },
        subject: {
            inputLabel: "Asunto",
        },
        body: {
            inputLabel: "Comentarios",
            inputType: "textarea"
        }
    }

    return (
        <div className='contact__container'>
            <Banner/>
            <div className='contact__container__sec'>
                <Text renderAs="h2" content="Contacto"/>
                <Form 
                    onSubmit={() => {
                        setLoadingForm(true)
                        postMessage(values)
                            .then( data => console.log(data))
                            .catch( err => console.error(err))
                            .finally( () => {
                                setLoadingForm(false)
                                resetForm()})
                    }}
                    labelButton="Enviar mensaje"
                    loading={loadingForm}
                    >
                    {
                        Object.entries(inputProps)
                            .map(
                                ([key, props]) =>
                                    <InputGroup
                                        key={key}
                                        id={key}
                                        onChange={handleInputChange}
                                        values={values}
                                        {...props}
                                    />
                            )
                    }
                </Form>
            </div>
        </div>
    )
}

export default Contacto