import React from 'react';
import styles from './ListItem.module.css';
import { TaskInterface, } from '@/types/Task.interface';
import dynamic from 'next/dynamic';
const Draggable = dynamic(()=>import('react-beautiful-dnd').then((mod)=>mod.Draggable),{ssr:false})


export interface ListItemProps {
	task: TaskInterface
	index:number
	column: any
	data:any
}

const ListItem: React.FC<ListItemProps>  = ({column,data,index,task}) => {
	return (
		<Draggable draggableId={task.id} index={index}>
			{
				provided => (
					<li 
						className={styles.listitem}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						ref={provided.innerRef}
					>
							{task.content}
					</li>
				)
			}
		</Draggable>
	);
};

export default ListItem;
