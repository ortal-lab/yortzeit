import {React, useState, useRef} from "react"
import {Form, Button,ButtonGroup} from "react-bootstrap"
import UserMethods from "../../services/userService"
import MemberDetails from "../memberDetails/memberDetails.component"

export default function YortzeitForm(){
   
    const [user,setUser]=useState({
        firstName:"",
        lastName:"",
        email:"",
        nameOfDec:"",
        hebDate:"",
        greDate:""
    });

    const submit = async (e) => {
        e.preventDefault();
        try {
            debugger;
            const response= await UserMethods.CreateUser(user);
            
        } catch (error) {
            alert(error.message)
        }
    
        
    };    
    
    return (


 <Form onSubmit={(e) => submit(e)}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder="Enter First Name" onChange={(e) =>
                        setUser({ ...user, firstName: e.target.value })}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group> 
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Last Name" onChange={(e) =>
                        setUser({ ...user, lastName: e.target.value })} />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(e) =>
                        setUser({ ...user, email: e.target.value })} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>

    <MemberDetails user={user} setUser={setUser}>
        
    </MemberDetails>
     </Form.Group>
      <Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form.Group>
</Form>

    )
}

