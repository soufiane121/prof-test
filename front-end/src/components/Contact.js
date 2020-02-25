import React,{useState} from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import 'react-toastify/dist/ReactToastify.css';

const URL = 'http://localhost:3000'
const Contact=(props)=>{

const [fname, setFname] = useState('')
const [lname, setLname] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')
const [errors, setErros]= useState([])
const [display, setDisplay]= useState(true)

    const handleChange=(e)=>{
        let vls = e.target.value

    switch (e.target.name) {
        case "fname":
            setFname(vls)
            break;
        case "lname":
            setLname(vls)
            break;
        case "email":
            setEmail(vls)
                break;
        case "message":
            setMessage(vls)
            break;
        default:
            break;
    }
    }

    const handleSubmitForm=(e)=>{
        e.preventDefault()
    fetch(`${URL}/guests`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            first_name: fname,
            last_name: lname,
            email: email,
            message: message
        })
      })
    .then(resp => resp.json())
    .then(data=> {
        if (data.hasOwnProperty("errors") ) {
            setErros(data)
        } else if (data.hasOwnProperty("greate") ) {
            setDisplay(false)
        }
    })
    }

    return (
        <div className="formcss">
            {display
            ?
        <Form onSubmit={handleSubmitForm}>
        <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label className="formLabel" >First Name *</Form.Label>
        <Form.Control name="fname" value={fname} onChange={handleChange}/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label className="formLabel">Last Name *</Form.Label>
        <Form.Control name="lname" value={lname} onChange={handleChange}/>
        </Form.Group>
        </Form.Row>
        <Form.Group controlId="formGridAddress1">
        <Form.Label className="formLabel">Email *</Form.Label>
        <Form.Control type='email' name="email" value={email} onChange={handleChange}/>
        </Form.Group>
        <div className="form-group">
        <textarea placeholder="Message" className="form-control" name="message" value={message} onChange={handleChange} id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <Button variant="secondary btn-block" type="submit" className="formbtn" >
        Send
        </Button>
            {errors.errors && errors.errors.map(error => <li>{error} </li>)} 
        </Form>   
        : 
        <div className="msgForm"> 
            <p>Thank you! we will be in touch with you soon </p>
        </div>
    }
        </div>
    )
    
}

export default Contact;

// {errors.errors && errors.errors.map(error => <li>{error} </li>)} after line 81