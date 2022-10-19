import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/searchBox/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
    console.log('constructor');
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
    console.log('componentdidmount');
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    console.log('render method');

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="Search Monsters"
          className="monster-search-box"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
