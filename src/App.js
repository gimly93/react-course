import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: "",
    };
    console.log("constructor");
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => console.log(this.state)
        )
      );
    console.log("componentDidMount");
  }

  searchMonster = (event) => {
    this.setState({ search: event.target.value });
  };
  render() {
    const filterdMonsters = this.state.monsters.filter(({ name }) =>
      name.toLocaleLowerCase().includes(this.state.search)
    );

    console.log("render");
    return (
      <div className="App">
        <input
          className="search-box"
          onChange={this.searchMonster}
          type="search"
          placeholder="search monsters"
        />
        <CardList monsters={filterdMonsters} />
      </div>
    );
  }
}

export default App;
