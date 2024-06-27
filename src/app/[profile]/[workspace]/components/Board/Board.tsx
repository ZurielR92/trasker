'use client'
import React, { useState } from 'react';
import styles from './Board.module.css';
import { List } from '../List';
import board from '@/data/data';
import dynamic from 'next/dynamic';
import { DropResult, OnDragEndResponder } from 'react-beautiful-dnd';
const DragDropContext = dynamic(()=>import('react-beautiful-dnd').then((mod)=>mod.DragDropContext),{ssr:false})
const Droppable = dynamic(()=>import('react-beautiful-dnd').then((mod)=>mod.Droppable),{ssr:false})
export interface BoardProps {
	// types...
}


const Board: React.FC<BoardProps>  = ({}) => {
	
	const [columns, setColumns] = useState(board)
	const [addColumn, setAddColumn] = useState(false)
	const [columnName, setColumnName] = useState({ column: '' })
	
	const onDragEnd = (results:DropResult) => {
		const { destination, source, draggableId, type } = results
		if(!destination) return;
		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
		return
		}

		if(type==='column') {
			const newColumnOrder = Array.from(columns.columnOrder)
			newColumnOrder.splice(source.index, 1)
			newColumnOrder.splice(destination.index, 0, draggableId)

			const newState = {
				...columns,
				columnOrder:newColumnOrder
			}
			setColumns(newState)
			return;
		}
		console.log(destination);
		console.log(source);
		console.log('DraggableId: ' + draggableId);
		console.log('type: ' + type);
	}

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className={styles.board}>
				<Droppable
					droppableId='all-columns'
					direction='horizontal'
					type='column'
				>
					{
						provided => (
							<div 
								className={styles.boardcolumns}
								{...provided.droppableProps}
								ref={provided.innerRef}
							>
								{
									columns.columnOrder.map((columnValue:string, index)=>{

										const column:any = columns.columnsData.find(col=>col.id===columnValue)
										const tasks = column.taskIds.map( (taskId:string) => columns.tasks.find(task=>task.id===taskId) )
										
										return (
											<List
												column={column}
												key={column.id}
												tasks={tasks}
												index={index}
												data={columns}
											/>
										)
									})
								}
								{provided.placeholder}
							</div>
						)
					}	
				</Droppable>
			</div>
		</DragDropContext>
	);
};

export default Board;