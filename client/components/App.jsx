import React from 'react';

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
      <h1>Hello world!</h1>
    )
  }
}

export default App;