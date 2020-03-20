import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput,MDBCardBody,MDBCard } from 'mdbreact';

const Addblog = () => {
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="9" lg="6" className="mx-auto mt-5">
    <MDBCard>
      <MDBCardBody>
      <form>
        <p className="h5 text-center mb-4">Write to us</p>
        <div className="grey-text">
          <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Text" icon="tag" group type="text" validate error="wrong" success="right" />
          <MDBInput type="textarea" rows="2" label="Description" icon="pencil-alt" />
        </div>
        <div className="text-center">
          <MDBBtn outline color="secondary">
            Send
            <MDBIcon far icon="paper-plane" className="ml-1" />
          </MDBBtn>
        </div>
      </form>
      
      </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default Addblog;