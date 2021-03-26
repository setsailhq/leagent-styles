
import FsLightbox from 'fslightbox-react';

// hooks
import { useCarouselTouch } from './hooks/useCarouselTouch';
import { useCloseOnOuterClick } from './hooks/useCloseOnOuterClick';
import { useEscPress } from './hooks/useEscPress';
import { useScrolled } from './hooks/useScrolled';
import { useWindowSize } from './hooks/useWindowSize';

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
	getIcon,
	getFeatureIcon,
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
	iOS } from './helpers/functions'

// framer
import { collapseModal, fadeIn } from './helpers/framer'

// story
import { getSessionId, getData, setData } from './helpers/store'

// constants
import { constants } from './helpers/constants'

export {
	constants,
	getSessionId,
	getData,
	setData,
	collapseModal,
	fadeIn,
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
	getIcon,
	getFeatureIcon,
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
	useCarouselTouch,
	useCloseOnOuterClick,
	useEscPress,
	useScrolled,
	useWindowSize,
	FsLightbox
}
