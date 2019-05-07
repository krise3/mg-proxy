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
    this.changeView = this.changeView.bind(this);
  }

  changeView(e) {
    this.setState({ currentPage: e.target.className });
  }

  queryHandler() {
    this.setState({ currentPage: 'INSERT' });
  }

  render() {
    switch (this.state.currentPage) {
      case 'INSERT':
        return <Insert />;
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