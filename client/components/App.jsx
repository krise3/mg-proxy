import React from 'react';
import axios from 'axios';

import Search from './Search/Search';
import Form from './Insert/Form';
import Browse from './Browse/Browse';

const BASE_ROUTE = '/api/album/?'

class App extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      currentPage: 'SEARCH',
      queryResults: [],
      currentAlbum: {}
    }

    this.changeView = this.changeView.bind(this);
    this.queryHandler = this.queryHandler.bind(this);
  }

  changeView(e, view) {
    view = view || e.target.className
    this.setState({ currentPage: view });
  }

  queryHandler(e) {
    const category = e.target.parentNode.children[0].children[0].value;
    const query = e.target.previousSibling.value.replace(/( |&|\$|#|=)/g, '+');
    const PATH = BASE_ROUTE + category + '=' + query;

    axios.get(PATH)
    .then(response => {
      this.setState({
        queryResults: response.data
      });
      this.changeView(e, 'BROWSE');
    })
    .catch(error => console.error(error));
  }

  render() {
    switch (this.state.currentPage) {
      case 'BROWSE':
        return <Browse albumList={this.state.queryResults} changeView={this.changeView} />;
      case 'INSERT':
        return <Form changeView={this.changeView} />;
      default:
        return <Search queryHandler={this.queryHandler} changeView={this.changeView} />;
    }
  }
}

export default App;