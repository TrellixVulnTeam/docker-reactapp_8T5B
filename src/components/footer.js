import { React, useState } from 'react'
import { Button, Form } from 'react-bootstrap'


function Footer() {
    const [form, setForm] = useState({})

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Tu mensaje ha sido enviado con exito!");
        console.log(form);
    }

    return (
        <footer className="footer">
            <div className="row-footer">
            <div className="col-md-10 col-md-offset-2">
                <Form id="contact-form" className="form form-contact" onSubmit={handleSubmit}>
                    <div className="col-md-12">
                        <input id="input-name" 
                        name="name" 
                        type="text" 
                        placeholder="NOMBRE*" 
                        required="required" 
                        className="form-control input-md"
                        value={form.nombre}
                        onChange={handleChange}
                        /> 
                    </div>
                    <div className="field row">
                    <div className="col-md-6">
                        <input id="input-email" 
                        name="email" 
                        type="email" 
                        placeholder="EMAIL*" 
                        required="required" 
                        className="form-control input-md"
                        value={form.email}
                        onChange={handleChange}
                        />
                    </div> 
                    <div className="col-md-6">
                        <input id="input-company" 
                        name="subject" 
                        type="text" 
                        placeholder="ASUNTO" 
                        className="form-control input-md"
                        value={form.asunto}
                        onChange={handleChange}
                        />
                    </div>
                    </div>
                    <div className="col-md-12 field">
                        <textarea id="input-message"
                        name="message" 
                        placeholder="MENSAJE*"
                        required="required" 
                        className="form-control input-md"
                        value={form.mensaje}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6 field">
                    <Button type="submit" className="button btn btn-coffee btn-medium btn__orange">
                    <span>Enviar mensaje</span>
                    </Button>
                    </div>
                </Form>
            </div>
            </div>
        </footer>
    )
}

export default Footer

