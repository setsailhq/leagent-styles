
import smoothscroll from 'smoothscroll-polyfill';

import { constants } from './constants';

export function randomKey() {
	return (Math.random() * 10000001);
}
export function findGetParameter(url, parameterName) {
	let urlObj = new URL(url);
	let params = new URLSearchParams(urlObj.search);
	return params.has(parameterName) ? params.get(parameterName) : '';
}
export function getWalk3dPreviewImg(url) {
	const model = findGetParameter(url, 'm');
	return model.length ? `https://my.matterport.com/api/v1/player/models/${model}/thumb` : '';
}
export function getVideoPreviewImg(url) {
	return (url.indexOf('youtu') > 0) ? `https://img.youtube.com/vi/${getVideoId(url)}/0.jpg` : '';
}
export function getVideoId(url) {
	return url.split('/').slice(-1).pop();
}
export function randomLat() {
	return (Math.random() - 0.5) * 0.01 + 49.11153390;
}
export function randomLng() {
	return (Math.random() - 0.5) * 0.01 - 122.73494260;
}
export function randomCoords() {
	return { 'lat': randomLat(), 'lng': randomLng() };
}
export function pageSize() {
	const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	return { width: width, height: height };
}

export function deviceType() {
	const size = pageSize();
	const type = size.width < constants.DEVICE_WIDTH_TABLET_MAX ? constants.DEVICE_TABLET : constants.DEVICE_DESKTOP;
	return size.width < constants.DEVICE_WIDTH_MOBILE_MAX ? constants.DEVICE_MOBILE : type;
}

export function debounce(fn, ms = 150) {
	let timer;
	return () => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			timer = null;
			fn.apply(this, arguments);
		}, ms);
	};
}

export function getIcon(iconName) {
	const iconObj = constants.icons.find(i => i.name === iconName);
	return iconObj ? iconObj : null;
}

export function getFeatureIcon(featureName) {
	let featureObj = constants.features.find(f => f.feature === featureName.toLowerCase());
	featureObj = featureObj ? featureObj : constants.features.find(f => f.feature === 'default');
	return getIcon(featureObj.icon);
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

export function hashCode(s) {
	return s.split('').reduce(function (a, b) { a = ((a << 5) - a) + b.charCodeAt(0); return a & a; }, 0);
}

export function isNumeric(value) {
	return /^-?\d+$/.test(value);
}

export function formatDate(val) {
	const curDate = new Date(val);
	const date = curDate.getDate();
	const month = curDate.getMonth() + 1;
	const year = curDate.getFullYear();
	return date + '/' + month + '/' + year;
}

export function addCommas(intNum) {
	const parts = intNum.toString().split('.');
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	return parts.join('.');
}

export function splitValue(valueStr) {
	let str = valueStr.replace(',', '').replace(' ', '');
	let amount = parseFloat(str.match(/[\d.]/g).join(''));
	let units = str.match(/[^\d.]/g).join('');
	amount = (valueStr.slice(-1).toUpperCase() === 'K') ? amount * 1000 : amount; // last char is "K", meaning x1000
	amount = (valueStr.slice(-1).toUpperCase() === 'M') ? amount * 1000000 : amount; // last char is "M", meaning x1000000
	units = (valueStr.slice(-1).toUpperCase() === 'K') ? units.replace(valueStr.slice(-1), '') : units;
	units = (valueStr.slice(-1).toUpperCase() === 'M') ? units.replace(valueStr.slice(-1), '') : units;
	return { amount: amount, units: units.replace(' ', '') };
}

export function splitAddress(address) {
	const parts = address.split(',');
	return { street: parts[0] ? parts[0] : '', city: parts[1] ? parts[1] : '', region: parts[2] ? parts[2] : '' };
}

export function splitText(string, split) {
	let middle = Math.floor(string.length / 2);
	let before = string.lastIndexOf(' ', middle);
	let after = string.indexOf(' ', middle + 1);
	if (split === 'before') {
		middle = before;
	} else if (split === 'after') {
		middle = after;
	} else {
		if (before === -1 || (after !== -1 && middle - before >= after - middle)) {
			middle = after;
		} else {
			middle = before;
		}
	}
	return [ string.substr(0, middle), string.substr(middle + 1) ];
}

export function strToSlug(str) {
	return str.trim().replace(/[^a-z0-9-]/gi, '_').replace(/-+/g, '_').replace(/^-|-$/g, '');
}

export function replaceWithRandom(str, maxLen) {
	const len = str.length;
	const max = maxLen ? maxLen : 25;
	const arr = new Uint8Array((len || 40) / 2);
	window.crypto.getRandomValues(arr);
	return Array.from(arr, (dec) => dec.toString(16).padStart(2, '0')).join('').substr(0, max);
}

export function textWidth(text, font) {
	font = font ? font : 'bold 15px Helvetica Neue';
	let canvas = textWidth.canvas || (textWidth.canvas = document.createElement('canvas'));
	const context = canvas.getContext('2d');
	context.font = font;
	const metrics = context.measureText(text);
	return metrics.width * 2; // empirically defined
}

export function hexToRgb(hex) {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	} : null;
}

export function iOS() {
	return [
		'iPad Simulator',
		'iPhone Simulator',
		'iPod Simulator',
		'iPad',
		'iPhone',
		'iPod'
	].includes(navigator.platform)
	// iPad on iOS 13 detection
	|| (navigator.userAgent.includes('Mac') && 'ontouchend' in document);
}
