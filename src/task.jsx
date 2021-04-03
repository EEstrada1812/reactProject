import React from 'react'
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import "./index.css";


const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: ${props => (props.isDragging ? '#ff4d41' : 'white')};
`;


export default class Task extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {(provided, snapshot) => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                    >
                        <img src={this.props.task.content} className="image" alt="profile-img" />
                        <p>{this.props.task.info}</p>
                        {/* {this.props.task.content} */}
                    </Container>
                )}

            </Draggable>
        );
    }
}
