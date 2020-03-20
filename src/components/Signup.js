import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCard,MDBCardBody } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import {Link} from 'react-router-dom'

const Signup = () => {
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="9" lg="6" className="mx-auto mt-5">
    <MDBCard>
      <MDBCardBody>

      <form>
        <p className="h5 text-center mb-4">Sign up</p>
        <div className="black-text">
          <MDBInput label="Your name" icon="user"  group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Confirm your email" icon="exclamation-triangle" group type="text" validate
            error="wrong" success="right" />
          <MDBInput label="Your password" icon="lock" group type="password" validate />
        </div>
        <div className="text-center">
          <MDBBtn color="black">Register</MDBBtn>
          <MDBBtn color="yellow"><Link to="/Login">Login</Link></MDBBtn>

        </div>
      </form>
      </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default Signup;