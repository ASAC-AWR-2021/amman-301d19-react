import React from 'react';
import Board from './component/Board';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h2> Board Games </h2>
        <Board />
      </div>
    )
  };
}

export default App;