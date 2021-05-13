import React, { Component, useRef } from 'react';
import styled from 'styled-components';

import Card from './Card';
import { Droppable, Draggable } from 'react-beautiful-dnd';


const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
`;

const Paper = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
`;






const Column = (props) =>{
  const columnRef = useRef(null)

  return(
    <div >
      <h1>{props.header}</h1>
        <Droppable droppableId={props.column} key={props.column}>
          {(provided, snapshot) => (
            <Container className='taskList'
            ref={provided.innerRef}
            {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >




          {props.taskIds.map((task, index) => 

        <Draggable key={task} draggableId={task} index={index}>
           {(provided, snapshot) => (
             <Paper ref={columnRef}
             {...provided.draggableProps}
             {...provided.dragHandleProps}
             ref={provided.innerRef}
             >


             <Card 
             key={task} 
             index={index}
             title={task} 
             taskId={task} 
             content={task}
             />
                
                  </Paper>
                  )}
                  </Draggable>
          )} 




          {provided.placeholder}
      </Container>
        
    )}
    </Droppable>
    </div>
  );
};


export default Column;




{/*
import React from "react";
import { Droppable } from "react-beautiful-dnd";
import ListItem from "./ListItem";
export default function List({ data }) {
const { id, title, items } = data;
return (
<div className="list">
<h1>{title}</h1>
<Droppable droppableId={id}>
{provided => (
<div
className="list-content"
{...provided.droppableProps}
ref={provided.innerRef}
>
{items.map(item => (
<ListItem key={item.id} item={item} />
))}
{provided.placeholder}
</div>
)}
</Droppable>
</div>
);
}

*/

/*
{provided => (
<div
className="list-content"
{...provided.droppableProps}
ref={provided.innerRef}
>
*/


/* <Droppable droppableId="columns-div">
          {(provided, snapshot) => (
            <div id="columns-div" {...provided.droppableProps}
            ref={provided.innerRef}
          {...provided.droppableProps}> */}