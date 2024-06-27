import React from 'react';
import styles from './AppSidebar.module.css';

export interface AppSidebarProps {
	// types...
}

const AppSidebar: React.FC<AppSidebarProps>  = ({}) => {
	return (
		<div className={styles.appsidebar}>
 			AppSidebar works!
 		</div>
	);
};

export default AppSidebar;
