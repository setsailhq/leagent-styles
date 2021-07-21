
import FsLightbox from 'fslightbox-react';

// hooks
import { useCarouselTouch as useHookCarouselTouch } from './hooks/useCarouselTouch';
import { useCloseOnOuterClick as useHookCloseOnOuterClick } from './hooks/useCloseOnOuterClick';
import { useEscPress as useHookEscPress } from './hooks/useEscPress';
import { useEnterPress as useHookEnterPress } from './hooks/useEnterPress';
import { useScrolled as useHookScrolled } from './hooks/useScrolled';
import { useWindowSize as useHookWindowSize } from './hooks/useWindowSize';
import { setClientVh as setHookClientVh } from './hooks/setClientVh';
import { initScripts as useHookLoadScripts } from './hooks/useLoadScript';
import { useGoogleCallback as useHookGoogleCallback } from './hooks/useGoogleCallback';

// functions
import {
	randomKey,
	findGetParameter,
	getWalk3dPreviewImg,
	getVideoPreviewImg,
	getVideoId,
	randomLat,
	randomLng,
	randomCoords,
	pageSize,
	deviceType,
	debounce,
	hashCode,
	isNumeric,
	formatDate,
	addCommas,
	splitValue,
	splitAddress,
	splitText,
	strToSlug,
	replaceWithRandom,
	textWidth,
	hexToRgb,
	iOS
} from './helpers/func_helpers'

import {
	insertIcon,
	insertFeatureIcon,
	featureName,
	scrollTo
} from './helpers/func_libs'

// framer
import { collapseModal as framerCollapseModal, fadeIn as framerFadeIn } from './helpers/framer'

// story
import {
	getSessionId as getStoreSessionId,
	getData as getStoreData,
	setData as setStoreData,
	setUserData as setStoreUserData,
	getUserData as getStoreUserData
} from './helpers/store'

// constants
import { getConstants } from './helpers/constants'

module.exports = {
	// components
	FsLightbox,

	// hooks
	useHookCarouselTouch,
	useHookCloseOnOuterClick,
	useHookEscPress,
	useHookEnterPress,
	useHookScrolled,
	useHookWindowSize,
	setHookClientVh,
	useHookLoadScripts,
	useHookGoogleCallback,

	// functions
	randomKey,
	findGetParameter,
	getWalk3dPreviewImg,
	getVideoPreviewImg,
	getVideoId,
	randomLat,
	randomLng,
	randomCoords,
	pageSize,
	deviceType,
	debounce,
	insertIcon,
	insertFeatureIcon,
	featureName,
	scrollTo,
	hashCode,
	isNumeric,
	formatDate,
	addCommas,
	splitValue,
	splitAddress,
	splitText,
	strToSlug,
	replaceWithRandom,
	textWidth,
	hexToRgb,
	iOS,

	// framer
	framerCollapseModal,
	framerFadeIn,

	// local store
	getStoreSessionId,
	getStoreData,
	setStoreData,
	setStoreUserData,
	getStoreUserData,

	// constants
	getConstants
}
