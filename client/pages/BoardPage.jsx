import React, { Component, useState, useEffect, useRef } from 'react';
import Column from '../components/Column'
import { useParams } from "react-router-dom";
import initialData from '../../initialData'
import { DragDropContext, Droppable} from 'react-beautiful-dnd';
import styled from 'styled-components';
import InputBase from '@material-ui/core/InputBase';

const Paper = styled.div`
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
`;

const BoardPage = (props) => {

  
  // new state
  const [boardData, setBoardData] = useState(initialData);

  const bID = window.location.href.slice(window.location.href.indexOf('d/') + 2);
  let newData;
  console.log(initialData)

  useEffect(() => {
    fetch(`/api/${bID}`)
      .then(res => res.json())
      .then(data => {
        setBoardData(data);
      })
      .catch(err => console.log(err))
  }, [])

  const addThings = (e) => {
    console.log(e.ref)
  }

  const updateContent = (e) => {
  //  console.log(e.target.value)
  //  console.log(boardData.tasks[e.target.id].content)
   const key = e.target.id
   const value = e.target.value
  //  props.taskData[props.taskId].content
  const content = value
   setBoardData({
     ...boardData,
     tasks: {
       ...boardData.tasks,
       [key]:{
         id: key,
         content: content
       }
   },
   ...boardData.columns,
   ...boardData.columnOrder
  })
  }
  // const refBoard = useRef(null)

  const onDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type==='column') {
      const newColumnOrder = Array.from(boardData.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState= {
        ...boardData,
        columnOrder: newColumnOrder,
      }
      setBoardData(newState);
      return;
    }

    const start = boardData.columns[source.droppableId];
    const finish = boardData.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...boardData,
        columns: {
          ...boardData.columns,
          [newColumn.id]: newColumn,
        },
      };

      setBoardData(newState);
      return;
    }

 // Moving from one list to another
 const startTaskIds = Array.from(start.taskIds);
 startTaskIds.splice(source.index, 1);
 const newStart = {
   ...start,
   taskIds: startTaskIds,
 };

 const finishTaskIds = Array.from(finish.taskIds);
 finishTaskIds.splice(destination.index, 0, draggableId);
 const newFinish = {
   ...finish,
   taskIds: finishTaskIds,
 };

 const newState = {
   ...boardData,
   columns: {
     ...boardData.columns,
     [newStart.id]: newStart,
     [newFinish.id]: newFinish,
   },
 };
 setBoardData(newState);
};

  return(
    <div id='board-page-div'>
      <h2 id='board-page-title'>Board1</h2>

      <DragDropContext onDragEnd={onDragEnd}>
    <Droppable 
      droppableId="all-columns" 
      direction="horizontal" 
      type="column"
    >
    {(provided) => (
      <Paper id="columns-div" 
      {...provided.droppableProps}
      ref={provided.innerRef}
      >
        { boardData.columnOrder.map((column, index) => {
          
          
          
          return <Column 
          index={index}
          key={boardData.columns[column].title} 
          className='columns' 
          column={boardData.columns[column].id} 
          header={boardData.columns[column].title} 
          taskIds={boardData.columns[column].taskIds}
          updateContent={updateContent}
          taskData={boardData.tasks}
          addThings={addThings}
          >
          </Column>
        })}
        {provided.placeholder}
        <InputBase
// className={classes.margin}
inputProps={{ 'aria-label': 'naked' }}
placeholder='Add a new column'
style={{alignSelf:'flex-start'}}
/>
      </Paper>
        )}
      </Droppable>
      </DragDropContext>






    </div>
  );
};


export default BoardPage;

/*
{provided => (
<div
className="list-content"
{...provided.droppableProps}
ref={provided.innerRef}
>
*/