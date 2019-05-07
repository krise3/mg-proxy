import React from 'react';

import { album, song, additional } from '../datashapes';

const albumKeys = Object.keys(album);

class Insert extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, album);
  }

  render() {
    return (
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
    );
  }
}

export default Insert;