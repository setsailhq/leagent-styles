import React from 'react';

export function useCloseOnOuterClick (handleClose) {
	const wrapperRef = React.useRef(null);

	const outerClick = React.useCallback((event) => {
		if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
			if (handleClose) {
				handleClose(event);
			}
		}
	}, [handleClose]);
	React.useEffect(() => {
		if (document) {
			document.addEventListener('mousedown', outerClick, false);
			document.addEventListener('touchend', outerClick, false);
		}
		return () => {
			if (document) {
				document.removeEventListener('mousedown', outerClick, false);
				document.removeEventListener('touchend', outerClick, false);
			}
		};
	});

	return wrapperRef;
}
