import React from 'react';

export default class Card extends React.Component {
  
  render() {
    console.log(this.props.children)
    return(
      <div>
        <button type="button">delete</button>
        <h3>Fist card</h3>
        <p>lorem ipsum</p>
      </div>
    )
  }
}