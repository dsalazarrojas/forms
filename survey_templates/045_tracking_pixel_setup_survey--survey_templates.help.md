# tracking_pixel_setup_survey - Help Guide
## Purpose
The "tracking_pixel_setup_survey" form is used to collect information for setting up tracking pixels for various platforms, such as Google and Facebook.

## How To Complete This Form
1. Carefully read each field's label and description to ensure you understand what is required.
2. Fill in the required fields with accurate and relevant information.
3. Double-check your answers before submitting the form to avoid errors.

## Field-by-Field Explanation
* **tracking_pixel_requirements** (`setup_details`, `note`, required: false): This field is a general description of the tracking pixel requirements. Please provide any additional details about the tracking pixel you are setting up.
* **tracking_code** (`tracking_code`, `text`, required: false): Enter the unique tracking code provided by the platform for your tracking pixel.
* **data_format** (`data_format`, `select_one`, required: false):
	+ Choose the data format for your tracking pixel. The options are:
		- Google
		- Facebook
		- Custom
* **data_collection_frequency** (`data_collection_frequency`, `number`, required: false): Enter the frequency of data collection for your tracking pixel.
* **tracking_pixel_location** (`tracking_pixel_location`, `text`, required: false): Enter the location where your tracking pixel will be used.
* **data_storage_solution** (`data_storage_solution`, `select_multiple`, required: false):
	+ Choose the data storage solution for your tracking pixel. The options are:
		- Google BigQuery
		- AWS S3
		- Custom
* **data_analysis_tool** (`data_analysis_tool`, `select_multiple`, required: false):
	+ Choose the data analysis tool for your tracking pixel. The options are:
		- Google
		- Tableau
		- Custom
* **pixel_id** (`pixel_id`, `text`, required: false): Enter a unique ID for your tracking pixel.
* **event_data_collection** (`event_data_collection`, `select_multiple`, required: false):
	+ Choose the type of event data to collect for your tracking pixel. The options are:
		- pageviews
		- clicks
		- conversions
* **event_data_source** (`event_data_source`, `select_multiple`, required: false):
	+ Choose the source of event data for your tracking pixel. The options are:
		- Google
		- Facebook
* **event_data_destination** (`event_data_destination`, `select_one`, required: false):
	+ Choose the destination for event data for your tracking pixel. The options are:
		- Google Analytics
		- Facebook Events
		- Custom
* **tracking_pixel_description** (`tracking_pixel_description`, `text`, required: false): Provide a brief description of your tracking pixel.
* **custom_tracking_pixel_code** (`custom_tracking_pixel_code`, `text`, required: false): If you are setting up a custom tracking pixel, enter the custom tracking code here.
* **tracking_pixel_status** (`tracking_pixel_status`, `select_one`, required: false):
	+ Choose the status of your tracking pixel. The options are:
		- Live
		- Disabled
		- Pending
* **additional_comments** (`additional_comments`, `note`, required: false): Add any additional comments about your tracking pixel setup.
