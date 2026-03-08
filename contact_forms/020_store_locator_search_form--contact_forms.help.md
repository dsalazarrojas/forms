# store_locator_search_form - Help Guide
## Purpose
The store_locator_search_form is a search form used to find store locations based on user preferences. Users can input their search preferences, such as the type of store, location type, and zip code, to get a list of matching store locations.

## How To Complete This Form
To complete this form, follow these steps:

1.  Select the type of store you are looking for by choosing from the options provided.
2.  Choose the location type you prefer (e.g., nearby, within walking distance, within driving distance).
3.  Enter the zip code of the location you want to search.
4.  Enter the city and state of the location you want to search.
5.  If required, enter your phone number and email address to receive updates or contact information.
6.  Click the "Submit" button to get a list of matching store locations.

## Field-by-Field Explanation
*   **Search Preferences** (`search_preferences`, text, required: false):
    This field allows you to specify the type of store you are looking for, such as "store", "mall", "strip", or "market".
*   **Store Location** (`search_preferences_store`, select_one, required: false):
    This field is used in conjunction with the "Search Preferences" field to narrow down your search results.
*   **Location Type** (`location_type`, select_multiple, required: false):
    This field allows you to choose where you want to visit, such as "nearby", "within walking distance", or "within driving distance".
*   **Zip Code** (`zip_code`, text, required: false):
    Enter the zip code of the location you want to search.
*   **City** (`city`, text, required: false):
    Enter the city of the location you want to search.
*   **State** (`state`, text, required: false):
    Enter the state of the location you want to search.
*   **Country** (`country`, text, required: false):
    Enter the country of the location you want to search.
*   **Phone Number** (`phone_number`, text, required: false):
    Enter your phone number for store updates or contact information.
*   **Email** (`email`, email, required: false):
    Enter your email address for store updates or contact information.

## Tips
*   Make sure to complete all the required fields to ensure accurate search results.
*   Be as specific as possible when filling out the form to get the most relevant search results.
*   If you are having trouble finding a matching store location, try adjusting your search preferences.
