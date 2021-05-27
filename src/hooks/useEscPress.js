import { useState, useEffect } from 'react';
import { getConstants } from '../helpers/constants';

const constants = getConstants();

export function useEscPress() {

	const [ pressed, setPressed ] = useState(false);

	useEffect(() => {
		function handleEscPress(event) {
			setPressed(event && event.keyCode === constants.KEY_ESC);
		}
		if (window) {
			window.addEventListener('keyup', handleEscPress, false);
		}
		handleEscPress();
		return () => {
			if (window) {
				window.removeEventListener('keyup', handleEscPress, false)
			}
		};
	}, []);

	return pressed;
}
