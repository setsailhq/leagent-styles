
import FsLightbox from 'fslightbox-react';

// hooks
import { useCarouselTouch as useHookCarouselTouch } from './hooks/useCarouselTouch';
import { useCloseOnOuterClick as useHookCloseOnOuterClick } from './hooks/useCloseOnOuterClick';
import { useEscPress as useHookEscPress } from './hooks/useEscPress';
import { useScrolled as useHookScrolled } from './hooks/useScrolled';
import { useWindowSize as useHookWindowSize } from './hooks/useWindowSize';

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
	iOS
} from './helpers/functions'

// framer
import { collapseModal as framerCollapseModal, fadeIn as framerFadeIn } from './helpers/framer'

// story
import {
	getSessionId as getStoreSessionId,
	getData as getStoreData,
	setData as setStoreData
} from './helpers/store'

// constants
import { constants as constantsUtils } from './helpers/constants'

export default {
	// components
	FsLightbox,

	// hooks
	useHookCarouselTouch,
	useHookCloseOnOuterClick,
	useHookEscPress,
	useHookScrolled,
	useHookWindowSize,

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

	// constants
	constantsUtils
}
