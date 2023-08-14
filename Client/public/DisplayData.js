import InsertTest from "./insertTest.jsx";
import React from 'react';
export default class dispUser extends React.Component {
  constructor() {
    super();
    this.state = {
      usr: []
    };
  }
  componentDidMount() {
    this.displayUsrDetails();
  }
  displayUsrDetails = async () => {
    const query = `query UserDetails {
          userDetails {
            id
            FirstName
            LastName
            Phone
            Email
          }
        }`;
    const response = await fetch("http://localhost:4500/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query
      })
    });
    const dataResult = await response.text();
    console.log(dataResult, "oll");
    const responseData = JSON.parse(dataResult);
    if (responseData.errors) {
      console.log("error");
    } else {
      this.setState({
        emp: responseData.data.userDetails
      });
    }
  };
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "titlediv"
    }, "display data"), /*#__PURE__*/React.createElement(InsertTest, {
      displayUsrDetails: this.displayUsrDetails,
      usr: this.state.usr
    }))));
  }
}