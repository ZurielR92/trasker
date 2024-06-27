import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './IconButton.module.css';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon:ReactNode
}

const IconButton: React.FC<IconButtonProps>  = (props) => {
	return (
		<button className={styles.iconbutton} {...props}>
 			{props.icon}
 		</button>
	);
};

export default IconButton;
