import React, { Component, useState, useRef } from 'react';
import { Draggable } from 'react-beautiful-dnd';



const Card = (props) => {
  // const cardRef = useRef(null)
  return(
    //Draggable starts here
<div className='card-component'>
      {props.taskId}
    </div>
)}
// );


// };

{/* <Draggable draggableId={props.taskId} index={props.index}> */}
        {/* {(provided, snapshot) => ( */}
        // {...provided.draggableProps}
        // {...provided.dragHandleProps}
  // </Draggable>


export default Card;

/*<Draggable  key={props.header} draggableId={props.id} index={props.index}> */