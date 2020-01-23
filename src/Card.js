import React from 'react';

export default class Card extends React.Component {
  
  render() {
    return(
      <div>
        <button type="button">delete</button>
        <h3>{this.props.store.title}</h3>
        <p>{this.props.store.content}</p>
      </div>
    )
  }
}