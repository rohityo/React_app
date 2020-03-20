import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput,MDBCardBody,MDBCard,MDBCardText,MDBCardTitle,MDBCardImage } from 'mdbreact';

const allblog = () => {
return (
    <MDBCol md="9" lg="6" className="mx-auto mt-5">
      <MDBCard style={{ width: "20 rem" }}>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/photo5.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>Descriptions</MDBCardTitle>
          <MDBCardText>
                Some quick example text to build on the card title and make
                up the bulk of the card&apos;s content.
                voluptatum eum, officia laudantium quaerat 
                Some quick example text to build on the card title and makeup the bulk of the 
                card&apos;s content.
          </MDBCardText>
          <MDBBtn href="#">MDBBtn</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
);
};

export default allblog;