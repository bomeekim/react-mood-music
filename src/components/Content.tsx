import React, { Component } from 'react';
import Billboard from './contents/Billboard';
import List from './contents/List';
import './Content.css';

interface ContentProps {
  listInfo: Array<Object>;
}

class Content extends Component<ContentProps> {
  state: ContentProps = {
    listInfo: [
      {
        moodTitle: 'MOOD',
        songs: [
          { id: 1, title: 'I wanna hold you', artist: 'TVXQ', thumnail: '' },
        ],
      },
    ],
  };

  render() {
    return (
      <div className="content">
        <Billboard></Billboard>
        <List items={this.state.listInfo}></List>
      </div>
    );
  }
}

export default Content;
