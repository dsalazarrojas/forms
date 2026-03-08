# Lead Air Monitoring Log - Help Guide
## Purpose
The purpose of this form is to capture key information about lead air monitoring logs, including date, location, and air quality levels.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the date of the sampling event in the `monitor_date` field.
2. Select the location where the sampling occurred from the `air_monitoring_area` field.
3. Choose the sampling method used from the `sampling_method` field (optional).
4. Select the sampling frequency from the `sampling_frequency` field (optional).
5. Choose the air quality standard from the `air_quality_standard` field.
6. Enter the measured lead level in the `lead_level` field.
7. Optionally, enter any additional remarks in the `remarks` field.
8. Enter any additional notes in the `notes` field.

## Field-by-Field Explanation
- **sample_site** (`sample_site`, text, optional): Enter the name of the sample site.
- **monitor_date** (`monitor_date`, date, required): Enter the date of the sampling event.
- **air_monitoring_area** (`air_monitoring_area`, text, required): Enter the location where the sampling occurred.
- **sampling_method** (`sampling_method`, text, optional): Choose from available sampling methods, if applicable. This field helps to track the method used for sampling.
- **sampling_frequency** (`sampling_frequency`, text, optional): Choose from available sampling frequencies, if applicable. This field helps to track the frequency of sampling.
- **air_quality_standard** (`air_quality_standard`, select_one, required): Select the air quality standard from the available options. This field helps to classify the air quality level.
- **lead_level** (`lead_level`, number, required): Enter the measured lead level. Ensure to enter a valid number value.
- **sampling_location** (`sampling_location`, text, optional): Enter any additional location information if necessary.
- **remarks** (`remarks`, text, optional): Enter any additional remarks or comments about the sampling event.
- **notes** (`notes`, text, optional): Enter any additional notes about the sampling event.
