import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Friend from './friend';

const Container = styled.div`
    background-color: #eaeaea;
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 5px;
`;
const Title = styled.h2`
    padding: 8px;
`;
const FriendList = styled.div`
    padding: 8px;
    transition: background-color 0.2s ease;
    background-color: ${props => (props.isDraggingOver ? 'darkgrey' : 'white')};
    max-width:768px;
`;

export default class Column extends React.Component {
    render() {
        return (
            <Container id={this.props.column.title}>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id} className="gap">
                    {(provided, snapshot) => (
                        <FriendList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            isDraggingOver={snapshot.isDraggingOver}
                            style={{ height: '295px' }}
                        >
                            
                            {this.props.friends.map((friend, index) => <Friend key={friend.id} friend={friend} index={index}/>)}
                            {provided.placeholder}

                        </FriendList>  
                    )}
                </Droppable>
            </Container>
        );
    }
}