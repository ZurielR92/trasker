import React from 'react';
import styles from './AppHeader.module.css';
import LogoTrasker from '@/components/icons/LogoTrasker';

export interface AppHeaderProps {
	// types...
}

const AppHeader: React.FC<AppHeaderProps>  = ({}) => {
	return (
		<header className={styles.appheader}>
			<LogoTrasker width={120}/>
 		</header>
	);
};

export default AppHeader;
