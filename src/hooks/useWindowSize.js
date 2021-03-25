import { useState, useEffect } from 'react';

import { constants } from '../helpers/constants';
import { debounce, deviceType } from '../helpers/functions';

export function useWindowSize() {

	const [ windowSize, setWindowSize ] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
		device: deviceType(),
	});

	useEffect(() => {
		function handleResize() {
			let type = window.innerWidth < constants.DEVICE_WIDTH_TABLET_MAX ? constants.DEVICE_TABLET : constants.DEVICE_DESKTOP;
			type = window.innerWidth < constants.DEVICE_WIDTH_MOBILE_MAX ? constants.DEVICE_MOBILE : type;
			setWindowSize({ width: window.innerWidth, height: window.innerHeight, device: type });
		}
		const debouncedHandleResize = debounce(handleResize, 150);
		window.addEventListener('resize', debouncedHandleResize);
		debouncedHandleResize();
		return () => window.removeEventListener('resize', debouncedHandleResize);
	}, []);

	return windowSize;
}
