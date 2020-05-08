import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';


class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email:'',
            password:'',
            address:'',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false,
                password: false,
                address: false,
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        console.log("Current state is :" + JSON.stringify(this.state));
        alert("Current state is :" + JSON.stringify(this.state));
        event.preventDefault();
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true}
        });
    }

    validate(firstname, lastname, telnum, email, password, address) {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            password: '',
            address:''
        }
       
        if (this.state.touched.firstname && firstname.length < 3)
            errors.firstname = 'First name should be >= 3 characters';
        else if (this.state.touched.firstname && firstname.length > 10)
            errors.firstname = 'First name should be <= 10 characters';      
            
        if (this.state.touched.lastname && lastname.length < 3)
            errors.lastname = 'Last name should be >= 3 characters';
        else if (this.state.touched.lastname && lastname.length > 10)
            errors.lastname = 'Last name should be <= 10 characters';  

        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(telnum))
            errors.telnum = 'Tel. Number should contain only numbers';
        else if (this.state.touched.telnum && reg.test(telnum) && telnum.length !== 10 )
            errors.telnum = 'Tel. Number can only be 10 integers';  

        if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1) 
            errors.email = 'Email should contain a @';

        if (this.state.touched.password && !reg.test(password))
            errors.password = 'Password should contain only numbers';
        if (this.state.touched.password && reg.test(password) && password.length !== 10 )
            errors.password = 'Password can only be 10 integers';    
            
        if (this.state.touched.address && address.length === 0)
            errors.address = 'Address should not be left blank';
        else if (this.state.touched.address && firstname.address > 64)
            errors.address = 'Address should be <= 64 characters';
         
        return errors;    
    }

    render() {
        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email, this.state.password, this.state.address)
        return(
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Form for 91social's assessment </h3>
                        <br></br>
                        <br></br>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                                <Col md={{size:3,offset:2}}>
                                    <FormGroup check>
                                        <Label check>
                                             <strong>Please Select Title</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size:3,}}>
                                    <Input type="select" name="contactType"
                                    value={this.state.contactType} 
                                    onChange={this.handleInputChange}>
                                        <option>Mr</option>
                                        <option>Mrs</option>
                                        <option>Ms</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor ="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type ="text" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        value={this.state.firstname}
                                        valid={errors.firstname === ''}
                                        invalid={errors.firstname !== ''}
                                        onBlur={this.handleBlur('firstname')} 
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.firstname}</FormFeedback>    
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor ="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type ="text" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        value={this.state.lastname}
                                        valid={errors.lastname === ''}
                                        invalid={errors.lastname !== ''}
                                        onBlur={this.handleBlur('lastname')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.lastname}</FormFeedback>    
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor ="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type ="tel" id="telnum" name="telnum"
                                        placeholder="Tel. Number"
                                        value={this.state.telnum}
                                        valid={errors.telnum === ''}
                                        invalid={errors.telnum !== ''}
                                        onBlur={this.handleBlur('telnum')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.telnum}</FormFeedback>    
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor ="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type ="email" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        valid={errors.email === ''}
                                        invalid={errors.email !== ''}
                                        onBlur={this.handleBlur('email')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.email}</FormFeedback>    
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor ="password" md={2}>Password</Label>
                                <Col md={10}>
                                    <Input type ="password" id="password" name="password"
                                        placeholder="Password"
                                        value={this.state.password}
                                        valid={errors.password === ''}
                                        invalid={errors.password !== ''}
                                        onBlur={this.handleBlur('password')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.password}</FormFeedback>    
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor ="address" md={2}>Address</Label>
                                <Col md={10}>
                                    <Input type ="address" id="address" name="address"
                                        placeholder="Address"
                                        value={this.state.address}
                                        valid={errors.address === ''}
                                        invalid={errors.address !== ''}
                                        onBlur={this.handleBlur('address')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.address}</FormFeedback>    
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:6, offset:2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree"
                                             checked={this.state.agree}
                                             onChange={this.handleInputChange} /> {' '}
                                             <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size:3, offset:1}}>
                                    <Input type="select" name="contactType"
                                    value={this.state.contactType} 
                                    onChange={this.handleInputChange}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor ="feedback" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type ="textarea" id="message" name="message" rows="12"
                                        value={this.state.message}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:10, offset:2}}>
                                    <Button type="submit" color="primary">
                                        Submit 
                                    </Button>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:10,offset:2}}>
                                <div className="btn-group" role="group">
                                        <a role="button" className="btn btn-primary" href="tel:+91943757685"><i className="fa fa-phone"></i> Call</a>
                                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                                        <a role="button" className="btn btn-success" href="mailto:animeshmohantyblitz@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
                                    </div>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Contact;