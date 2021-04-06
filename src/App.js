import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initial-data';
import Column from './column';
import Header from './header';

const Container = styled.div``;

class App extends React.Component {
  state = initialData;

  onDragEnd = result => {
    document.body.style.color = "inherit";

    const { destination, source, draggableId } = result;
    
    if (!destination) {
      return; 
    }

    if (destination.droppableId === source.droppableId &&
        destination.index === source.index) {
          return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish) {
      const newFriendIds = Array.from(start.friendIds);
      newFriendIds.splice(source.index, 1);
      newFriendIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        friendIds: newFriendIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };

      this.setState(newState);
      return;
      }

      //moving from one list to another
      const startFriendIds = Array.from(start.friendIds);
      startFriendIds.splice(source.index, 1);
      const newStart = {
        ...start,
        friendIds: startFriendIds,
      };

      const finishFriendIds = Array.from(finish.friendIds);
      finishFriendIds.splice(destination.index, 0, draggableId);
      const newFinish = {
        ...finish,
        friendIds: finishFriendIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      };

      this.setState(newState);

  };

  render() {
    

    return (
      <div>
        <Header />
    
        <DragDropContext
          onDragEnd={this.onDragEnd}
          onDragStart={this.onDragStart}
          onDragUpdate={this.onDragUpdate}
        >
          <Container id="grid-container">
            
            {this.state.columnOrder.map((columnId) => {
              const column = this.state.columns[columnId];
              const friends = column.friendIds.map(friendId => this.state.friends[friendId]);

              return <Column key={column.id} column={column} friends={friends} />;
            })}
          </Container>
      </DragDropContext>
    </div>  
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
