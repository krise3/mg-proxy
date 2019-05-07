import React from 'react';

import { album, song, additional } from '../datashapes';

import Song from './Song';

const albumKeys = Object.keys(album);

class Insert extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, album);
    this.addSong = this.addSong.bind(this);
    this.rmSong = this.rmSong.bind(this);
    this.addInfo = this.addInfo.bind(this);
    this.rmInfo = this.rmInfo.bind(this);
  }

  addSong(e) {
    e.preventDefault();
    this.setState({
      songs: [...this.state.songs, Object.assign({}, song)]
    });
  }

  rmSong(e) {
    e.preventDefault();
    let songs = [...this.state.songs];
    songs.pop()
    this.setState({ songs });
  }

  addInfo(e) {
    e.preventDefault();
    this.setState({
      additional_info: [...this.state.additional_info, Object.assign({}, additional)]
    });
  }

  rmInfo(e) {
    e.preventDefault();
    let additional_info = [...this.state.additional_info];
    additional_info.pop();
    this.setState({ additional_info });
  }

  render() {
    return (
      <div>
        <button onClick={this.addSong}>Add song</button>
        <button onClick={this.rmSong}>Remove song</button>
        <button onClick={this.addInfo}>Add additional info</button>
        <button onClick={this.rmInfo}>Remove additional info</button>
        <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'end',
          justifyContent: 'center',
        }}>
          {albumKeys.map((key, index) => {
            switch (key) {

              case 'additional_info':
                return <div key={key}>{this.state[key].map((element, index) => {
                  return (
                    <div>
                      <input key={'prop-' + index} type='text'></input><input key={'val-' + index} type='text'></input>
                    </div>
                  );
                })}</div>;

              case 'songs':
                return <div key={key}>{this.state[key].map((element, index) => <Song song={element} number={index + 1}/>)}</div>;

              default:
                return (
                  <label key={'label-' + index.toString()}>{album[key] + ' '}
                    <input key={'input-' + index.toString()} type='text' name={key}></input>
                  </label>
                );
            }
          })}
        </form>
      </div>
    );
  }
}

export default Insert;