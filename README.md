# leagent-styles

## Installation
To install the library you need to either 
run 

`npm i git+https://github.com/setsailhq/leagent-styles.git` 

or 

`yarn add git+https://github.com/setsailhq/leagent-styles.git`

This will add the lib to your project, so thus you can use styles and JS methods from it.

## Using styles
You can simply include it in your `.scss` file as `@import "leagent-style/src/styles";`, which will add all of the styles. 
Another possibility is to add the styles granularly, like
```
@import "leagent-style/src/styles/normalize";
@import "leagent-style/src/styles/variables";
@import "leagent-style/src/styles/mixins";
@import "leagent-style/src/styles/mixins_skeleton";
...
```
Also, assets are included to the styles, so thus you can use icons of arrows or blank image for the placehokder of the person's photo, etc.

## JS functions available
```


module.exports = {
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
	setStoreUserData,
	getStoreUserData,

	// constants
	getConstants
}

```
