import React from 'react'
import Text from '../components/Text'
import Form from '../components/Form'

function Contacto() {
    return (
        <div className='contact__container'>
            <Text renderAs="h2" content="Envíanos un mensaje"/>
            <Form />
        </div>
    )
}

export default Contacto