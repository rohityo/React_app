import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn,MDBCard, MDBCardBody } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import {Link} from 'react-router-dom';

const Login = () => {
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="9" lg="6" className="mx-auto mt-5">
    <MDBCard>
      <MDBCardBody>
      <form>
        <p className="h5 text-center mb-4">Sign in</p>
        <div className="black-text">
          <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Type your password" icon="lock" group type="password" validate />
        </div>
        <div className="text-center">
          <MDBBtn color="black">Login</MDBBtn>
          <MDBBtn color="yellow"><Link to="/signup">signup</Link></MDBBtn>

        </div>
      </form>
      </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default Login;