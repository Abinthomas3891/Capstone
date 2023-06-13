export default class extends React.Component {
  onSubmit = async (e) => {
    e.preventDefault();
    console.log("hi");

    const userData = {
      FirstName: 'Nithin',
      LastName: 'jose',
      Phone:1234,
      Email:'nin'
    };

    await this.userDetInsert(userData);

  };

  userDetInsert = async (userData) => {
    const query = `mutation {
              addUserDetails(users:{
                      
                       FirstName: "nithin",
                       LastName: "js",
                       Phone: 1234,
                       Email: "sdfsd",
              }) {
                
                FirstName
                LastName
                Phone
                Email
              }}`;

              console.log(userData,"ill");
    const Udata = await graphQLFetch(query, {
      userData,
    });
    if (Udata) {
      this.props.displayUsrDetails();
    }
    async function graphQLFetch(query, variables = {}) {
      try {
        const response = await fetch("http://localhost:4500/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query,
            variables,
          }),
        });
        const res = await response.text();
        const resResult = JSON.parse(res);
        console.log(resResult, "result");
        if (resResult.errors) {
          const resError = resResult.errors[0];
          if (resError.extensions.code == "BAD_USER_INPUT") {
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
    return (
      <>
        <button name="test" className="createBtn" onClick={this.onSubmit}/>
      </>
    );
  }
}
