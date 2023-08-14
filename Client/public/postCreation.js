import React from 'react';
import { Container, Row, Col, Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import Header from "./userheader.jsx";
import Footer from "./footer.jsx";
import './assets/css/style.css';
class PostCreation extends React.Component {
  onSubmit = async event => {
    event.preventDefault();
    const inputForm = document.forms.ad;
    const postData = {
      Title: inputForm.PostTitle.value,
      Desc: inputForm.PostDescription.value,
      price: inputForm.Price.value,
      Type: inputForm.PostType.value,
      Bed: inputForm.bed.value,
      Bath: inputForm.bath.value,
      parking: inputForm.park.value,
      Location: inputForm.location.value,
      image: inputForm.photos.value
    };
    await this.userDetInsert(postData);
  };
  userDetInsert = async postData => {
    const query = `mutation {
                addPostDetails(posts:{

                        Title: "${postData.Title}",
                        Desc: "${postData.Desc}",
                        price: "${postData.price}",
                        Type: "${postData.Type}",
                        Bed: "${postData.Bed}",
                        Bath: "${postData.Bath}",
                        parking: "${postData.parking}",
                        Location: "${postData.Location}",
                        image: "${postData.image}"
                      
                      
              }) {
                
                Title
                Desc
                price
                Type
                Bed
                Bath
                parking
                Location
                image
              }}`;
    console.log(postData, "ill");
    const Pdata = await graphQLFetch(query, {
      postData
    });
    console.log(Pdata, "ull");
    async function graphQLFetch(query, variables = {}) {
      try {
        const response = await fetch("http://localhost:4500/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            query,
            variables
          })
        });
        const res = await response.text();
        const resResult = JSON.parse(res);
        console.log(resResult, "result");
        if (resResult.errors) {
          const resError = resResult.errors[0];
          if (resError.extensions.code === "BAD_USER_INPUT") {
            const errDetails = resError.extensions.exception.errors.join("\n ");
            alert(`${resError.message}:\n ${errDetails}`);
          } else {
            alert(`${resError.extensions.code}: ${resError.message}`);
          }
        }
        return resResult.data;
      } catch (err) {
        alert(`sending data to server failed: ${err.message}`);
      }
    }
  };
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
      className: "container-fluid bg-light p-5 create-post"
    }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
      className: "card-view"
    }, /*#__PURE__*/React.createElement("h4", null, "Create your new property"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(Form, {
      name: "ad",
      onSubmit: this.onSubmit
    }, /*#__PURE__*/React.createElement(Row, {
      className: ""
    }, /*#__PURE__*/React.createElement(Col, {
      md: 6,
      className: "contact-form"
    }, /*#__PURE__*/React.createElement(FormGroup, null, /*#__PURE__*/React.createElement(FormLabel, {
      id: "posttitle"
    }, "Post Title"), /*#__PURE__*/React.createElement(FormControl, {
      type: "text",
      name: "PostTitle"
    }))), /*#__PURE__*/React.createElement(Col, {
      md: 6,
      className: "contact-form"
    }, /*#__PURE__*/React.createElement(FormGroup, {
      className: "mb-3"
    }, /*#__PURE__*/React.createElement(FormLabel, {
      id: "postdescription"
    }, "Post description"), /*#__PURE__*/React.createElement(FormControl, {
      type: "text",
      name: "PostDescription"
    }))), /*#__PURE__*/React.createElement(Col, {
      md: 6,
      className: "contact-form"
    }, /*#__PURE__*/React.createElement(FormGroup, {
      className: "mb-3"
    }, /*#__PURE__*/React.createElement(FormLabel, {
      id: "price"
    }, "Price"), /*#__PURE__*/React.createElement(FormControl, {
      type: "number",
      name: "Price"
    }))), /*#__PURE__*/React.createElement(Col, {
      md: 6,
      className: "contact-form"
    }, /*#__PURE__*/React.createElement(FormGroup, {
      as: Col,
      className: "mb-3",
      controlId: "formGridState"
    }, /*#__PURE__*/React.createElement(FormLabel, null, "Apartment Type"), /*#__PURE__*/React.createElement(Form.Select, {
      name: "PostType",
      defaultValue: "Choose..."
    }, /*#__PURE__*/React.createElement("option", null, "Choose..."), /*#__PURE__*/React.createElement("option", null, "House"), /*#__PURE__*/React.createElement("option", null, "Town House"), /*#__PURE__*/React.createElement("option", null, "Apartment"), /*#__PURE__*/React.createElement("option", null, "Basement"), /*#__PURE__*/React.createElement("option", null, "Villa")))), /*#__PURE__*/React.createElement(Col, {
      md: 4,
      className: "contact-form"
    }, /*#__PURE__*/React.createElement(FormGroup, {
      className: "mb-3"
    }, /*#__PURE__*/React.createElement(FormLabel, {
      id: "bed-label"
    }, "Bedroom"), /*#__PURE__*/React.createElement("div", {
      className: "d-flex"
    }, /*#__PURE__*/React.createElement(Form.Check, {
      type: "radio",
      id: "bed-radio",
      label: "1",
      value: "1",
      name: "bed"
    }), /*#__PURE__*/React.createElement(Form.Check, {
      type: "radio",
      id: "room-radio",
      label: "2",
      value: "2",
      name: "bed"
    }), /*#__PURE__*/React.createElement(Form.Check, {
      type: "radio",
      id: "bedroom-radio",
      label: "3",
      value: "3",
      name: "bed"
    }), /*#__PURE__*/React.createElement(Form.Check, {
      type: "radio",
      id: "bed",
      label: "4",
      value: "4",
      name: "bed"
    }), /*#__PURE__*/React.createElement(Form.Check, {
      type: "radio",
      id: "bedroom",
      label: "5",
      value: "5",
      name: "bed"
    })))), /*#__PURE__*/React.createElement(Col, {
      md: 4,
      className: "contact-form"
    }, /*#__PURE__*/React.createElement(FormGroup, {
      className: "mb-3"
    }, /*#__PURE__*/React.createElement(FormLabel, {
      id: "bath-label"
    }, "Bathroom"), /*#__PURE__*/React.createElement("div", {
      className: "d-flex"
    }, /*#__PURE__*/React.createElement(Form.Check, {
      type: "radio",
      id: "bath-radio",
      label: "1",
      value: "1",
      name: "bath"
    }), /*#__PURE__*/React.createElement(Form.Check, {
      type: "radio",
      id: "radio",
      label: "1.5",
      value: "1.5",
      name: "bath"
    }), /*#__PURE__*/React.createElement(Form.Check, {
      type: "radio",
      id: "bathroom-radio",
      label: "2",
      value: "2",
      name: "bath"
    }), /*#__PURE__*/React.createElement(Form.Check, {
      type: "radio",
      id: "bedroom",
      label: "3",
      value: "3",
      name: "bath"
    })))), /*#__PURE__*/React.createElement(Col, {
      md: 4,
      className: "contact-form"
    }, /*#__PURE__*/React.createElement(FormGroup, {
      className: "mb-3"
    }, /*#__PURE__*/React.createElement(FormLabel, {
      id: "parking-label"
    }, "Parking"), /*#__PURE__*/React.createElement("div", {
      className: "d-flex"
    }, /*#__PURE__*/React.createElement(Form.Check, {
      type: "radio",
      id: "parking-radio",
      label: "Yes",
      value: "Yes",
      name: "park"
    }), /*#__PURE__*/React.createElement(Form.Check, {
      type: "radio",
      id: "parking",
      label: "No",
      value: "No",
      name: "park"
    })))), /*#__PURE__*/React.createElement(Col, {
      md: 6,
      className: "contact-form"
    }, /*#__PURE__*/React.createElement(FormGroup, {
      className: "mb-3"
    }, /*#__PURE__*/React.createElement(FormLabel, {
      id: "location"
    }, "Location"), /*#__PURE__*/React.createElement(FormControl, {
      type: "text",
      name: "location"
    }))), /*#__PURE__*/React.createElement(Col, {
      md: 6,
      className: "contact-form"
    }, /*#__PURE__*/React.createElement(Row, {
      className: "mb-3"
    }, /*#__PURE__*/React.createElement(FormGroup, {
      className: "col-md-9"
    }, /*#__PURE__*/React.createElement(FormLabel, {
      id: "location"
    }, "Upload Images"), /*#__PURE__*/React.createElement(FormControl, {
      type: "file",
      name: "photos"
    })), /*#__PURE__*/React.createElement(FormGroup, {
      className: "col-md-3 upload-product"
    }, /*#__PURE__*/React.createElement(Button, {
      className: "primary-btn btn",
      type: "submit"
    }, "Upload")))), /*#__PURE__*/React.createElement(Col, {
      md: 12,
      className: "contact-form d-flex justify-content-center post-submit"
    }, /*#__PURE__*/React.createElement(Button, {
      className: "primary-btn btn",
      type: "submit"
    }, "Add New Post"))))))), /*#__PURE__*/React.createElement(Footer, null));
  }
}
export default PostCreation;