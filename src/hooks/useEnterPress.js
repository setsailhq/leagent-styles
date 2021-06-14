import { useState, useEffect } from 'react';
import { getConstants } from '../helpers/constants';

const constants = getConstants();

export function useEnterPress(resetVal) {

	const [ pressed, setPressed ] = useState(false);

	useEffect(() => setPressed(resetVal), [resetVal]);
	useEffect(() => {
		function handleEnterPress(event) {
			setPressed(event && event.keyCode === constants.KEY_ENTER);
		}
		if (typeof window !== 'undefined') {
			window.addEventListener('keyup', handleEnterPress, false);
		}
		return () => {
			if (typeof window !== 'undefined') {
				window.removeEventListener('keyup', handleEnterPress, false)
			}
		};
	}, []);

	return pressed;
}
