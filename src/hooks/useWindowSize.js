import { useState, useEffect } from 'react';

import { getConstants } from '../helpers/constants';
import { debounce, deviceType } from '../helpers/func_helpers';

const constants = getConstants();

export function useWindowSize() {

	const [ windowSize, setWindowSize ] = useState({
		width: window ? window.innerWidth : 0,
		height: window ? window.innerHeight : 0,
		device: deviceType(),
	});

	useEffect(() => {
		if (window) {
			function handleResize() {
				let type = window.innerWidth < constants.DEVICE_WIDTH_TABLET_MAX ? constants.DEVICE_TABLET : constants.DEVICE_DESKTOP;
				type = window.innerWidth < constants.DEVICE_WIDTH_MOBILE_MAX ? constants.DEVICE_MOBILE : type;
				setWindowSize({width: window.innerWidth, height: window.innerHeight, device: type});
			}

			const debouncedHandleResize = debounce(handleResize, 150);
			window.addEventListener('resize', debouncedHandleResize);
			debouncedHandleResize();
		}
		return () => {
			if (window) {
				window.removeEventListener('resize', debouncedHandleResize)
			}
		};
	}, []);

	return windowSize;
}
