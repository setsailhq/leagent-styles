
import star from '../assets/icons/star.svg';
import down from '../assets/icons/down.svg';
import search from '../assets/icons/search.svg';
import search_black from '../assets/icons/search_black.svg';

import icon_feature_air from '../assets/icons/features/feature_air-conditioner.svg';
import icon_feature_beer from '../assets/icons/features/feature_beer.svg';
import icon_feature_box from '../assets/icons/features/feature_box.svg';
import icon_feature_dinner from '../assets/icons/features/feature_dinner-table.svg';
import icon_feature_fireplace from '../assets/icons/features/feature_fireplace.svg';
import icon_feature_microwave from '../assets/icons/features/feature_microwave-oven.svg';
import icon_feature_oven from '../assets/icons/features/feature_oven.svg';
import icon_feature_refrigerator from '../assets/icons/features/feature_refrigerator.svg';
import icon_feature_shopping from '../assets/icons/features/feature_shopping.svg';
import icon_feature_train from '../assets/icons/features/feature_train-station.svg';
import icon_feature_wash from '../assets/icons/features/feature_washing-machine.svg';
import icon_feature_pool from '../assets/icons/features/feature_water.svg';
import icon_feature_stove from '../assets/icons/features/feature_stove.svg';
import icon_feature_dishwasher from '../assets/icons/features/feature_dish-washer.svg';
import icon_feature_basement from '../assets/icons/features/feature_basement.svg';
import icon_feature_parking from '../assets/icons/features/feature_parking.svg';
import icon_feature_furniture from '../assets/icons/features/feature_furniture.svg';
import icon_feature_tv from '../assets/icons/features/feature_tv.svg';
import icon_feature_cd from '../assets/icons/features/feature_cd.svg';
import icon_feature_hair from '../assets/icons/features/feature_hair-dryer.svg';
import icon_feature_cleaning from '../assets/icons/features/feature_cleaning.svg';
import icon_feature_dishes from '../assets/icons/features/feature_dishes.svg';
import icon_feature_satelite from '../assets/icons/features/feature_satelite.svg';
import icon_feature_tel from '../assets/icons/features/feature_tel.svg';
import icon_feature_towels from '../assets/icons/features/feature_towels.svg';
import icon_feature_bath from '../assets/icons/features/feature_bath.svg';
import icon_feature_iron from '../assets/icons/features/feature_iron.svg';
import icon_feature_internet from '../assets/icons/features/feature_internet.svg';
import icon_feature_jacuzzi from '../assets/icons/features/feature_jacuzzi.svg';
import icon_feature_balcony from '../assets/icons/features/feature_balcony.svg';
import icon_feature_gym from '../assets/icons/features/feature_gym.svg';
import icon_feature_location from '../assets/icons/features/feature_location.svg';

import icon_map_school from '../assets/icons/map/map_school.svg';
import icon_map_park from '../assets/icons/map/map_park.svg';
import icon_map_restaurant from '../assets/icons/map/map_restaurant.svg';
import icon_map_transit from '../assets/icons/map/map_transit.svg';
import icon_map_grocery from '../assets/icons/map/map_grocery.svg';

import icon_pdf_email from '../assets/icons/pdf/pdf_email.svg';
import icon_pdf_location from '../assets/icons/pdf/pdf_location.svg';
import icon_pdf_calculator from '../assets/icons/pdf/pdf_calculator.svg';
import icon_pdf_house from '../assets/icons/pdf/pdf_house.svg';
import icon_pdf_bath from '../assets/icons/pdf/pdf_bath.svg';
import icon_pdf_bed from '../assets/icons/pdf/pdf_bed.svg';
import icon_pdf_mls from '../assets/icons/pdf/pdf_mls.svg';
import icon_pdf_phone from '../assets/icons/pdf/pdf_phone.svg';
import icon_pdf_title from '../assets/icons/pdf/pdf_title.svg';

const constants = {

	SKELETON_ANIMATION_DURATION: 2,
	SKELETON_COLOR_TEXT: '#C8CED6',
	SKELETON_COLOR_BG: '#ECEEF1',
	SKELETON_COLOR_HIGHLIGHT: '#ECEEF1',

	KEY_ESC: 27,
	KEY_ENTER: 13,
	SCROLL_GAP: 10,

	DEVICE_MOBILE: 'mobile',
	DEVICE_TABLET: 'tablet',
	DEVICE_DESKTOP: 'desktop',
	DEVICE_WIDTH_MOBILE_MAX: 520,
	DEVICE_WIDTH_PORTRAIT_MAX: 700,
	DEVICE_WIDTH_TABLET_PORTRAIT_MAX: 1000,
	DEVICE_WIDTH_TABLET_MAX: 1200,

	icons: [
		// generic
		{ icon: star, name: 'star' },
		{ icon: search, name: 'search' },
		{ icon: search_black, name: 'search_black' },
		{ icon: down, name: 'down' },

		// features
		{ icon: icon_feature_air, name: 'air-conditioning' },
		{ icon: icon_feature_beer, name: 'beer' },
		{ icon: icon_feature_box, name: 'box' },
		{ icon: icon_feature_dinner, name: 'dinner' },
		{ icon: icon_feature_fireplace, name: 'fireplace' },
		{ icon: icon_feature_microwave, name: 'microwave' },
		{ icon: icon_feature_oven, name: 'oven' },
		{ icon: icon_feature_refrigerator, name: 'refrigerator' },
		{ icon: icon_feature_shopping, name: 'shopping' },
		{ icon: icon_feature_train, name: 'train' },
		{ icon: icon_feature_wash, name: 'wash' },
		{ icon: icon_feature_pool, name: 'pool' },
		{ icon: icon_feature_basement, name: 'basement' },
		{ icon: icon_feature_parking, name: 'parking' },
		{ icon: icon_feature_stove, name: 'stove' },
		{ icon: icon_feature_dishwasher, name: 'dishwasher' },

		// map
		{ icon: icon_map_school, name: 'secondary_school' },
		{ icon: icon_map_park, name: 'park' },
		{ icon: icon_map_transit, name: 'transit_station' },
		{ icon: icon_map_restaurant, name: 'restaurant' },
		{ icon: icon_map_grocery, name: 'store' },

		// pdf
		{ icon: icon_pdf_email, name: 'email' },
		{ icon: icon_pdf_location, name: 'location' },
		{ icon: icon_pdf_calculator, name: 'calculator' },
		{ icon: icon_pdf_house, name: 'house' },
		{ icon: icon_pdf_bath, name: 'bath' },
		{ icon: icon_pdf_bed, name: 'bed' },
		{ icon: icon_pdf_mls, name: 'mls' },
		{ icon: icon_pdf_phone, name: 'phone' },
		{ icon: icon_pdf_title, name: 'title' },
	],
	iconNames: {
		STAR: 'star',
		SEARCH: 'search',
		SEARCH_BLACK: 'search_black',
		DOWN: 'down',
	},
	features: [
		{ icon: 'air-conditioning', feature: 'heating system', name: 'heating system' },
		{ icon: 'basement', feature: 'basement', name: 'basement' },
		{ icon: 'parking', feature: 'parking', name: 'parking' },
		{ icon: 'fireplace', name: 'fireplace', feature: 'fireplace fueled by' },
		{ icon: 'fireplace', name: 'fireplace', feature: 'fireplace' },
		{ icon: 'wash', feature: 'clothes washer/dryer', name: 'Clothes Washer/Dryer' },
		{ icon: 'stove', feature: 'stove', name: 'stove' },
		{ icon: 'oven', feature: 'oven - built in', name: 'oven' },
		{ icon: 'microwave', feature: 'microwave', name: 'microwave' },
		{ icon: 'refrigerator', feature: 'refrigerator', name: 'refrigerator' },
		{ icon: 'dishwasher', feature: 'dishwasher', name: 'dishwasher' },
		{ icon: 'box', feature: 'storage shed', name: 'storage shed' },

		// TODO: assign those to some features/appliances
		{ icon: 'dinner', feature: 'floor finish' },
		{ icon: 'pool', feature: 'water supply' },
		{ icon: 'shopping', feature: 'construction' },
		{ icon: 'beer', feature: 'exterior finish' },
		{ icon: 'train', feature: 'parking access' },
		{ icon: 'shopping', feature: 'outdoor area' },
		{ icon: 'box', feature: 'default' },
	],
};

export function getConstants() {
	return constants;
}
