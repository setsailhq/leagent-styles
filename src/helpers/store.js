import Cryptr from 'cryptr';
import Cookies from 'universal-cookie';
import { hashCode } from './func_helpers';

const HASH_CODE = 'NU3NHexkAr6kEDxZahOcZ4sWGqiIinuT';
const cookies = new Cookies(HASH_CODE);

export function getSessionId() {
	return hashCode(HASH_CODE);
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
	const cryptr = new Cryptr(HASH_CODE);
	const string = cryptr.encrypt(JSON.stringify(data));
	return cookies.set('userData', string);
}
export function getUserData() {
	const cryptr = new Cryptr(HASH_CODE);
	let string = cookies.get('userData');
	string = string ? cryptr.decrypt(string) : string;
	return string && string.length && string !== 'undefined' ? JSON.parse(data) : null;
}
