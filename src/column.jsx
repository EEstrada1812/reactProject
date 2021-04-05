import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './task';

const Container = styled.div`
    background-color: #eaeaea;
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 5px;
`;
const Title = styled.h3`
    padding: 8px;
`;
const TaskList = styled.div`
    padding: 8px;
    transition: background-color 0.2s ease;
    background-color: ${props => (props.isDraggingOver ? 'darkgrey' : 'white')};
    max-width:768px;
`;

export default class Column extends React.Component {
    render() {
        return (
            <Container id={this.props.column.title}>
                <Title><h4>{this.props.column.title}</h4></Title>
                <Droppable droppableId={this.props.column.id} className="gap">
                    {(provided, snapshot) => (
                      <TaskList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                      >
                        {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index}/>)}
                        {provided.placeholder}
                        </TaskList>  
                    )}
                </Droppable>
            </Container>
        );
    }
}