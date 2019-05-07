import React from 'react';

import { album, song, additional } from '../../datashapes';

import Song from './Song';
import Additional from './Additional';

const albumKeys = Object.keys(album);

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = Object.assign({}, album);

    this.addSong = this.addSong.bind(this);
    this.rmSong = this.rmSong.bind(this);
    this.addInfo = this.addInfo.bind(this);
    this.rmInfo = this.rmInfo.bind(this);

    this.handleChange = this.handleChange.bind(this);

    this.submit = this.submit.bind(this);
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

  handleChange(e) {
    e.preventDefault();
    const parent = e.target.parentElement.className;
    if (parent === 'songs' || parent === 'additional_info') {
      let array = this.state[parent];
      array[e.target.id][e.target.name] = e.target.value;
      this.setState({
        [parent]: array
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  }

  submit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <br></br>
        <form id='insert-form'>
          <div id='insert-flexbox'>
          <div className='button-container'>
            <button onClick={this.submit} id='button-submit'>Submit</button>
          </div>
            {albumKeys.map((key, index) => {
              switch (key) {
                
                case 'additional_info':
                return (
                  <div key={key}>
                  <button onClick={this.addInfo}>Add metadata field</button>
                  <button onClick={this.rmInfo}>Remove metadata field</button>
                      {this.state[key].map((element, index) =>
                        <Additional
                        number={index + 1}
                        handleChange={this.handleChange}
                        />
                        )}
                    </div>
                  );
                    
                case 'songs':
                return (
                  <div key={key}>
                  <button onClick={this.addSong}>Add song</button>
                  <button onClick={this.rmSong}>Remove song</button>
                    {this.state[key].map((element, index) =>
                      <Song
                      number={index + 1}
                      handleChange={this.handleChange}
                      />
                    )}
                  </div>
                );

                default:
                  return (
                    <div className='base-flexrow'>
                      <label
                      key={'label-' + index.toString()}
                      className='form-label'
                      >{album[key] + ' '}</label>
                      <input
                      key={'input-' + index.toString()}
                      type='text' name={key}
                      onChange={this.handleChange}
                      className='form-input-line-a'
                      ></input>
                    </div>
                  );
              }
            })}
          </div>
        </form>
      </div>
    );
  }
}

export default Form;