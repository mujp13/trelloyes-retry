import React from 'react';
import Card from './Card';

export default class List extends React.Component {
  

  
  render() {
    return(
      <section className="List">
        <header className="List-header">
          <h2>{this.props.store.lists.header}</h2>
        </header>
        <div className="List-cards">
          <Card store={this.props.store} />
        </div>
      </section>
    )
  }
}