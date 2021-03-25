import { useState, useEffect } from 'react';
import { constants } from '../helpers/constants';

export function useEscPress() {

	const [ pressed, setPressed ] = useState(false);

	useEffect(() => {
		function handleEscPress(event) {
			setPressed(event && event.keyCode === constants.KEY_ESC);
		}
		window.addEventListener('keyup', handleEscPress, false);
		handleEscPress();
		return () => window.removeEventListener('keyup', handleEscPress, false);
	}, []);

	return pressed;
}
