import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput,MDBCardBody,MDBCard,MDBCardText,MDBCardTitle,MDBCardImage } from 'mdbreact';

const getblog = () => {
return (
    <MDBCol md="9" lg="6" className="mx-auto mt-5">
      <MDBCard style={{ width: "20 rem" }}>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quae,
                dolores dicta. Blanditiis rem amet repellat, dolores nihil quae in mollitia 
                asperiores ut rerum repellendus, voluptatum eum, officia laudantium quaerat 
                Some quick example text to build on the card title and makeup the bulk of the 
                card&apos;s content.
          </MDBCardText>
          <MDBBtn href="#">MDBBtn</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
);
};

export default getblog;