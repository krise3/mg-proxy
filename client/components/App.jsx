import React from 'react';

import Search from './Search';
import Insert from './Insert';

class App extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      currentPage: 'SEARCH',
      queryResults: [],
      currentAlbum: {}
    }

    this.queryHandler = this.queryHandler.bind(this);

  }

  queryHandler() {
    this.setState({ currentPage: 'INSERT' });
  }

  render() {
    switch (this.state.currentPage) {
      case 'INSERT':
        return <Insert />;
      default:
        return <Search queryHandler={this.queryHandler} />;
    }
  }
}

export default App;