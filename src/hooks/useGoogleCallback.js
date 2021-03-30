export const useGoogleCallback = (fieldId, onChange) => {
    const input = document.getElementById(fieldId);

    if (!input) return;

    const options = {
        componentRestrictions: { country: 'ca' },
        types: ['address']
    }

    const geoAutocomplete = new window.google.maps.places.Autocomplete((input), options)
    geoAutocomplete.addListener('place_changed', () => {
        const selectedPlace = geoAutocomplete.getPlace()

        const componentForm = {
            street_number: 'short_name',
            route: 'long_name',
            locality: 'long_name',
            administrative_area_level_1: 'long_name',
            country: 'long_name',
            postal_code: 'short_name'
        }
        // Get each component of the address from the place details
        // and fill the corresponding field on the form.
        let selectedSuggest = {}
        for (let addressComponent of selectedPlace.address_components) {
            const addressType = addressComponent.types[0]
            if (componentForm[addressType]) {
                selectedSuggest[addressType] = addressComponent[componentForm[addressType]]
            }
        }

        onChange(selectedSuggest);
    });
}