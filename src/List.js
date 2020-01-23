import React from 'react';
import Card from './Card';

export default class List extends React.Component {
  
  
  render() {
    const cards = store.map((_,i) =>
      <Card id={a} title={title} />
    )

    return(
      <section className="List">
        <header className="List-header">
          <h2>First List</h2>
        </header>
        <div className="List-cards">
          {cards}
        </div>
      </section>
    )
  }
}