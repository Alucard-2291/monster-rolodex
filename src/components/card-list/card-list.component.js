import { Component } from 'react';
import CardContainer from '../card/card.compnent';
import './card-list.style.css';

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return (
            <CardContainer monster = {monster} key={monster.id}/>
          );
        })}
      </div>
    );
  }
}

export default CardList;
