import React from 'react';

import Search from './Search';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearch: true,
      queryResults: [],
      currentAlbum: {}
    }
  }

  render() {
    return (
      <div>
        {this.state.showSearch ? <Search /> : <div>Nothing here yet!</div>}
      </div>
    );
  }
}

export default App;