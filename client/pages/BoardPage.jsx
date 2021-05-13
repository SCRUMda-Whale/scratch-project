import React, { Component, useState, useEffect, useRef } from 'react';
import Column from '../components/Column'
import { useParams } from "react-router-dom";
import initialData from '../../initialData'
import { DragDropContext } from 'react-beautiful-dnd';


const BoardPage = () => {


  // new state
  const [boardData, setBoardData] = useState(initialData);

  // const refBoard = useRef(null)

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
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
      <div id="columns-div" >
        { boardData.columnOrder.map(column => {return <Column 
          key={boardData.columns[column].title} 
          className='columns' 
          column={boardData.columns[column].id} 
          header={boardData.columns[column].title} 
          taskIds={boardData.columns[column].taskIds}>
          </Column>
        })}
      </div>
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