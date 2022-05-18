import { Component } from "react";

class CardList extends Component {
  render() {
      const {monsters} = this.props
    return (
      <div>
        {monsters.map(({ name }) => (
          <div key={name}>
            <h1>{name}</h1>
          </div>
        ))}
      </div>
    );
  }
}
export default CardList;
