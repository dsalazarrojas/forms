# Ocean Alkalinity Assessment Form - Help Guide
## Purpose
The Ocean Alkalinity Assessment Form is a tool used to gather information about the ocean's alkalinity levels in a specific location. It is designed to help understand the overall status of the ocean's alkalinity levels and identify areas that may require further investigation.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill out the sampling location field with the exact location where the sampling was taken.
2. Enter the date of the sampling in the date of sampling field.
3. Enter the water temperature in the water temperature field.
4. Enter the salinity level in the salinity field.
5. Select the ocean alkalinity level from the options provided.
6. If necessary, select one or more of the other locations from the options provided.
7. Check the box if the water temperature was within the range.
8. Check the box if the salinity was within the range.
9. Enter any additional notes in the additional notes field.

## Field-by-Field Explanation
* **Sampling Location** (`sampling_location`, text, required: false): Enter the exact location where the sampling was taken.
* **Date of Sampling** (`sampling_date`, date, required: false): Enter the date of the sampling in the format MM/DD/YYYY.
* **Water Temperature** (`water_temperature`, number, required: false): Enter the water temperature in degrees Celsius or Fahrenheit.
* **Salinity** (`salinity`, number, required: false): Enter the salinity level, typically measured in parts per thousand (ppt).
* **Ocean Alkalinity Level** (`ocean_alkalinity_level`, select_one, required: false): Select the ocean alkalinity level from the options provided: Low, Moderate, High, Very Low, or Very High.
* **Other Locations** (`has_other_locations`, checkbox, required: false): Select one or more of the other locations that may be relevant to the assessment.
* **Was Water Temperature within Range?** (`is_temperature_range`, checkbox, required: false): Check the box if the water temperature was within the expected range.
* **Was Salinity within Range?** (`is_salinity_range`, checkbox, required: false): Check the box if the salinity was within the expected range.
* **Additional Notes** (`note`, note, required: false): Enter any additional notes or comments about the assessment.
