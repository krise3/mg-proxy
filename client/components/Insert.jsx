import React from 'react';

const formShape = {
  label: 'Label',
  album_arist: 'Album Artist',
  published: 'Publish Date',
  catalog_number: 'Catalog Number',
  title: 'Title',
  additional_info: [],
  songs: []
};

const formKeys = Object.keys(formShape);

class Insert extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, formShape);
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
        {formKeys.map((key, index) => {
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
                <label key={'label-' + index.toString()}>{formShape[key] + ' '}
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