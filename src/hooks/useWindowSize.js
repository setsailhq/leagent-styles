import { useState, useEffect } from 'react';

import { getConstants } from '../helpers/constants';
import { debounce, deviceType } from '../helpers/func_helpers';

const constants = getConstants();

export function useWindowSize() {

	const [ windowSize, setWindowSize ] = useState({
		width: typeof window !== 'undefined' ? window.innerWidth : 0,
		height: typeof window !== 'undefined' ? window.innerHeight : 0,
		device: deviceType(),
	});

	useEffect(() => {
		function handleResize() {
			let type = typeof window !== 'undefined' && window.innerWidth < constants.DEVICE_WIDTH_TABLET_MAX ? constants.DEVICE_TABLET : constants.DEVICE_DESKTOP;
			type = typeof window !== 'undefined' && window.innerWidth < constants.DEVICE_WIDTH_MOBILE_MAX ? constants.DEVICE_MOBILE : type;
			setWindowSize({
				width: typeof window !== 'undefined' ? window.innerWidth : 0,
				height: typeof window !== 'undefined' ? window.innerHeight : 0,
				device: type,
			});
		}
		const debouncedHandleResize = debounce(handleResize, 150);
		if (typeof window !== 'undefined') {
			window.addEventListener('resize', debouncedHandleResize);
		}
		debouncedHandleResize();
		return () => {
			if (typeof window !== 'undefined') {
				window.removeEventListener('resize', debouncedHandleResize)
			}
		};
	}, []);

	return windowSize;
}
