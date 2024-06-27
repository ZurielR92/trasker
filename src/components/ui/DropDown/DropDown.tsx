'use client'
import { ButtonHTMLAttributes, Dispatch, FC, useEffect, useRef } from 'react';
import styles from './DropDown.module.css';

export interface DropDownProps {
	children: React.ReactNode
	isOpen: boolean
	setIsOpen: Dispatch<React.SetStateAction<boolean>>
	Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> | any
}

const DropDown: React.FC<DropDownProps>  = ({ Button, children, isOpen, setIsOpen }) => {

	const ref = useRef<HTMLDivElement>(null);

	const handleClickOutside = (event:any) => {
		if (ref.current && !ref.current.contains(event.target)) {
		  setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	return (
		<div ref={ref} className={styles.dropdown}>
			{Button}
			{
				isOpen && (
					<div className={styles.menu}>
						{children}						
					</div>
				)
			}
 		</div>
	);
};

export default DropDown;
