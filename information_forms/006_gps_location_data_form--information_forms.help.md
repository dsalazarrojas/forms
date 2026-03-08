<thinking>
This form is designed to collect GPS location data, which is essential for various purposes such as mapping, tracking, and visualization. The form is intended to gather specific information about a location, including its latitude, longitude, altitude, and accuracy. The location source, description, and time zone are also collected to provide further context. Additionally, the form captures information about the creator and updater of the location data, as well as any users assigned to the location. This form serves as a comprehensive data collection tool for location-related information.
</thinking>

# gps_location_data_form - Help Guide
## Purpose
The gps_location_data_form is designed to collect GPS location data for various applications such as mapping, tracking, and visualization.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the GPS location information in the "Enter GPS Location Info" field.
2. Provide the location's latitude value in the "Latitude" field.
3. Provide the location's longitude value in the "Longitude" field.
4. (Optional) Enter the altitude value in the "Altitude" field.
5. Select the location source from the options provided in the "Location Source" field.
6. Enter a brief description of the location in the "Location Description" field.
7. Select the time zone of the location from the options provided in the "Time Zone" field.
8. (Optional) Select the users assigned to the location in the "Assigned To" field.
9. Leave the "Created By", "Updated By", "Updated At", "Updated Time", and "Updated Date" fields blank as they are automatically populated.

## Field-by-Field Explanation
* **Enter GPS Location Info** (`location_info`, text, optional): Enter a brief description of the location.
* **Latitude** (`latitude`, number, required): Enter the latitude value of the location.
* **Longitude** (`longitude`, number, required): Enter the longitude value of the location.
* **Altitude** (`altitude`, number, optional): Enter the altitude value of the location.
* **Location Accuracy** (`location_accuracy`, text, optional): Enter the location's accuracy.
* **Location Source** (`location_source`, select_one, required): Select the source of the location data (GPS, Google Maps, Apple Maps, or Manual).
* **Location Description** (`location_description`, text, optional): Enter a brief description of the location.
* **Time Zone** (`time_zone`, select_one, optional): Select the time zone of the location (Eastern, Central, Mountain, Pacific, or Alaska).
* **Created By** (`created_by`, select_multiple, optional): Select the user who created the location data.
* **Updated By** (`updated_by`, select_multiple, optional): Select the user who last updated the location data.
* **Updated At** (`updated_at`, date, optional): Leave this field blank as it is automatically populated.
* **Updated Time** (`updated_time`, time, optional): Leave this field blank as it is automatically populated.
* **Updated Date** (`updated_date`, date, optional): Leave this field blank as it is automatically populated.
* **Assigned To** (`assigned_to`, select_multiple, required): Select the users assigned to the location.

## Tips
* Please ensure that you are entering accurate location data to ensure that the location is correctly displayed on the map.
* Make sure to select the correct location source and time zone to ensure that the location data is accurately reflected.
* If you are experiencing issues with entering location data, please contact support.
