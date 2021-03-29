import { hashCode } from './functions';

export function getSessionId() {
	return hashCode('NU3NHexkAr6kEDxZahOcZ4sWGqiIinuT');
}

export function getData(key, defaultVal = null) {
	let res = defaultVal;
	try {
		const data = localStorage.getItem(`${getSessionId()}__${key}`);
		res = data && data.length && data !== 'undefined' ? JSON.parse(data) : defaultVal;
	} catch (e) {
		console.log('Error: getData from local storage failed', e);
	}
	return res;
}
export function setData(key, data) {
	let res = null;
	try {
		res = localStorage.setItem(`${getSessionId()}__${key}`, JSON.stringify(data));
	} catch (e) {
		console.log('Error: setData from local storage failed', e);
	}
	return res;
}
export function setUserData(data) {
	return setData('userData', data);
}
export function getUserData() {
	return getData('userData');
}
