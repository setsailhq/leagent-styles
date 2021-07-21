import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';

import { getConstants } from './constants';

const constants = getConstants();

export function insertIcon(iconName) {
	const iconObj = constants.icons.find(i => i.name === iconName);
	return iconObj ? <img src={iconObj.icon} alt={iconObj.name} /> : '';
}

export function insertFeatureIcon(featureName) {
	let featureObj = constants.features.find(f => f.feature === featureName.toLowerCase());
	featureObj = featureObj ? featureObj : constants.features.find(f => f.feature === 'default');
	return insertIcon(featureObj.icon);
}
export function featureName(featureName) {
	let featureObj = constants.features.find(f => f.feature === featureName.toLowerCase());
	return featureObj && featureObj.name ? featureObj.name : '';
}

export function scrollTo(element, spacing, win) {
	spacing = spacing ? spacing : 0;
	smoothscroll.polyfill();
	window.__forceSmoothScrollPolyfill__ = true;
	const elToScroll = win ? win : window;
	if (element) {
		elToScroll.scroll({
			behavior: 'smooth',
			left: 0,
			top: element.offsetTop + spacing
		});
	}
}
