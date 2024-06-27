'use client'
import React, { useState } from 'react';
import styles from './List.module.css';
import { ListInterface } from '@/types/List.interface';
import MoreIcon from '@/components/icons/MoreIcon';
import { IconButton } from '@/components/ui/IconButton';
import { DropDown } from '@/components/ui/DropDown';
import { ListItem } from '../ListItem';
import { TaskInterface, TasksInterface } from '@/types/Task.interface';
import dynamic from 'next/dynamic';
const Draggable = dynamic(()=>import('react-beautiful-dnd').then((mod)=>mod.Draggable),{ssr:false})
const Droppable = dynamic(()=>import('react-beautiful-dnd').then((mod)=>mod.Droppable),{ssr:false})

export interface ListProps {
	column: ListInterface
	tasks: TaskInterface[]
	index: number
	data:any
}

const List: React.FC<ListProps>  = ({column, index, tasks, data}) => {


	const [showMenu, setShowMenu] = useState<boolean>(false)

	return (
		<Draggable draggableId={column.id} index={index}>
			{
				provided => (
					<div 
						className={styles.list}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						ref={provided.innerRef}
					>
						<div className={styles.header}>
							<h2>{column.title}</h2>
							<DropDown isOpen={showMenu} setIsOpen={setShowMenu} Button={<IconButton onClick={()=>setShowMenu((prev)=>!prev)} icon={<MoreIcon/>}/>} >
								<ul className={styles.menulist}>
									<li>
										<button> Añadir Tarjeta </button>
									</li>
									<li>
										<button> Copiar Lista </button>
									</li>
								</ul>
							</DropDown>
							
						</div>
						{
							<Droppable droppableId={column.id} type='task'>
								{
									provided => (
										<ul 
											className={styles.listitems}
											{...provided.droppableProps}
											ref={provided.innerRef}
										>
											{
												tasks.map((task,index)=>(
													<ListItem
														task={task}
														index={index}
														key={task.id}
														column={column}
														data={data}
													/>
												))
											}
											{provided.placeholder}
										</ul>
									)
								}
							</Droppable>
						}
					</div>
				)
			}
			
		</Draggable>
	);
};

export default List;
