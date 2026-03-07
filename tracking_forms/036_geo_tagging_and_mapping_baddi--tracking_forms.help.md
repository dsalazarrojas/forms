<thinking>
To ensure the form purpose is clear and the explanation is concrete and concise, let's break down the form's purpose and required fields. The form appears to be for collecting information about a crime incident, with fields for crime type, location, date, time, description, and additional geospatial information (latitude, longitude, elevation, and accuracy). This form likely serves for tracking or reporting crimes, but without further information, we'll assume it's a general form for data collection.

We don't see any explicit validation for form duplication or non-sequencing, so we'll create the user help guide based on the provided information, keeping in mind that users may fill out fields in any order due to the form's structure.</thinking>

# Geo Tagging And Mapping Baddi - Help Guide
## Purpose
This form collects information about a crime incident. It's intended to help track or report crimes.

## How To Complete This Form
1.  Fill out the form in any order.
2.  Select a crime type from the dropdown menu (`crime_type` field).
3.  Enter a brief description of the crime (`crime_description` field).
4.  Enter a date and time of the crime (`crime_date` and `crime_time` fields).
5.  Provide the location of the crime using the latitude, longitude, elevation, and accuracy fields (`crime_location_lat`, `crime_location_long`, `crime_location_elevation`, and `crime_location_accuracy` fields).
6.  Click the 'Submit' button to save your information.

## Field-by-Field Explanation
* **crime_type** (`crime_type`, select_one): Select the type of crime you are reporting.
* **crime_description** (`crime_description`, text): Enter a brief description of the crime.
* **crime_date** (`crime_date`, date): Enter the date of the crime in the correct format.
* **crime_time** (`crime_time`, time): Enter the time of the crime in the correct format.
* **crime_location** (`crime_location`, text): Enter a brief description of the crime location.
* **crime_location_lat** (`crime_location_lat`, number): Enter the latitude of the crime location.
* **crime_location_long** (`crime_location_long`, number): Enter the longitude of the crime location.
* **crime_location_elevation** (`crime_location_elevation`, number): Enter the elevation of the crime location.
* **crime_location_accuracy** (`crime_location_accuracy`, number): Enter the accuracy of the geospatial location.
* **crime_location_accuracy_radius** (`crime_location_accuracy_radius`, number): Enter the radius of the geospatial location.

## Tips
* Make sure to enter accurate geospatial information for precise location tracking.
* Enter dates and times in the correct format.
* Enter a clear description of the crime for easy reference.
* If you're unsure about any field, try to fill it out as best as you can, and submit the form for review.
