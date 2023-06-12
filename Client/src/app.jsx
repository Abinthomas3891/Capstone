

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>onTheGo</h1>
      </div>
    );
  }
}

const RouterElement = (
  <App/>
);
ReactDOM.render(RouterElement, document.getElementById("content1"));
