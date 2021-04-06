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

export default class Friend extends React.Component {
    render() {
        return (
            
            <Draggable draggableId={this.props.friend.id} index={this.props.index}>
                
                {(provided, snapshot) => (
                    
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                    >
                        <div className="card-container">
                            <div className="customer-thumb image-container">
                                <img src={this.props.friend.content} className="image" alt="profile-img" /> 
                            </div>

                            <div className="card-title">
                                <p>{this.props.friend.info}</p>
                            </div>

                        </div>
                        
                    </Container>
                )}

            </Draggable>
        );
    }
}
