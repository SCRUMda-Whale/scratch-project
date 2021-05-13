import React, { Component, useState, useRef } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import InputBase from '@material-ui/core/InputBase';


const Card = (props) => {
  // const cardRef = useRef(null)
  return(
    //Draggable starts here
<div className='card-component'>
      {props.taskId}
      <InputBase
        // className={classes.margin}
        inputProps={{ 'aria-label': 'naked' }}
        value={props.taskData[props.taskId].content}
        id={props.content}
        onChange={props.updateContent}
      />
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