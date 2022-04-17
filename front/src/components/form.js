import { React, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import "../styles/about.css";
import "../styles/form.css";


function FormBox() {
    const [form, setForm] = useState({})

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        fetch('/api', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(form), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          })
          .then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(() => alert(`Thank you ${form.name}. Your message has been sent!`));
    }

    return (
        <section id="contact">
        <div className="container_form">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main heading-sec__main--lt">Contact</span>
          <span className="heading-sec__sub heading-sec__sub--lt">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </span>
        </h2>
        <footer className="footer">
            <div className="row-footer">
            <div className="col-md-10 col-md-offset-2">
                <Form id="contact-form" className="form form-contact" onSubmit={handleSubmit}>
                    <div className="col-md-12">
                        <label className="contact__form-label">Name</label>
                        <input id="input-name" 
                        name="name" 
                        type="text" 
                        placeholder="Enter your name" 
                        required="required" 
                        className="form-control input-md"
                        value={form.nombre}
                        onChange={handleChange}
                        /> 
                    </div>
                    <div className="field row">
                    <div className="col-md-12">
                        <label className="contact__form-label">Email</label>
                        <input id="input-email" 
                        name="email" 
                        type="email" 
                        placeholder="Enter your email" 
                        required="required" 
                        className="form-control input-md"
                        value={form.email}
                        onChange={handleChange}
                        />
                    </div> 
                    </div>
                    <div className="col-md-12 field">
                        <label className="contact__form-label">Message</label>
                        <textarea id="input-message"
                        cols="30"
                        rows="10"
                        name="message" 
                        placeholder="Enter your message"
                        required="required" 
                        className="form-control input-md"
                        value={form.mensaje}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6 field">
                    <Button type="submit" className="button btn btn-coffee btn-medium btn__orange">
                    <span>SUBMIT</span>
                    </Button>
                    </div>
                </Form>
            </div>
            </div>
        </footer>
        </div>
        </section>
    )
}

export default FormBox

