import React, { Component } from 'react';
import './List.css';

interface Song {
  id: number;
  artist: string;
  title: string;
  thumnail: string;
}

interface Item {
  moodTitle: string;
  songs: Array<Song>;
}

interface ListProps {
  items: Array<Item>;
}

class List extends Component<ListProps> {
  state: ListProps = {
    items: this.props.items,
  };

  render() {
    return (
      <div>
        <h3>{this.state.items[0].moodTitle}</h3>
        <div>목록</div>
      </div>
    );
  }
}

export default List;
