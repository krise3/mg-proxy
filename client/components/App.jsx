import React from 'react';
import axios from 'axios';

import Search from './Search/Search';
import Form from './Insert/Form';

const BASE_ROUTE = '/api/?'

class App extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      currentPage: 'SEARCH',
      queryResults: [],
      currentAlbum: {}
    }

    this.changeView = this.changeView.bind(this);
  }

  changeView(e) {
    this.setState({ currentPage: e.target.className });
  }

  queryHandler(e) {
    const category = e.target.previousSibling.previousSibling.value;
    const query = e.target.previousSibling.value.replace(/( |&|\$|#|=)/g, '+');
    const PATH = BASE_ROUTE + category + '=' + query;

    axios.get(PATH)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => console.error(error));
  }

  render() {
    switch (this.state.currentPage) {
      case 'INSERT':
        return <Form />;
      default:
        return (
          <div>
            <button onClick={this.changeView} className='INSERT'>Contribute an album</button>
            <Search queryHandler={this.queryHandler} />
          </div>
        );
    }
  }
}

export default App;