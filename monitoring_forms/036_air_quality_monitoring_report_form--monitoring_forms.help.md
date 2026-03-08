<thinking>
We need to consider what the purpose of this form is and what information is being captured. The purpose of this form is to collect data on air quality monitoring. This involves collecting information on the monitoring station name, the date of measurement, the pollutant measured, its concentration value, units of measurement, the sampling method, weather conditions during sampling, exceedances observed, recommended actions to address poor air quality, and the person preparing the report. This form seems to be designed to gather data for monitoring and reporting purposes, possibly for regulatory compliance or environmental management. We should also consider that some fields are marked as optional, which might indicate that they are not required for all cases but rather for additional context or specific situations.
</thinking>

# Air Quality Monitoring Report Form - Help Guide
## Purpose
This form is used to report air quality data for monitoring stations. It captures essential information on pollutant measurements, sampling conditions, and reporting details.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the monitoring station name, which is a unique identifier for the location.
2. Select the date of the measurement from the calendar or enter it manually.
3. Choose the pollutant measured from the list of available options (PM2.5, PM10, NO2, O3, SO2, CO, or Other).
4. Enter the concentration value measured for the selected pollutant.
5. Specify the units of measurement (e.g., ug/m3 or ppm).
6. If not required, provide the sampling method used for the measurement.
7. If not required, describe the weather conditions during sampling (e.g., wind, temperature, humidity).
8. Indicate whether any exceedances were observed above guideline thresholds.
9. If necessary, suggest recommended actions to address poor air quality.
10. Finally, provide your name and title as the person preparing the report.

## Field-by-Field Explanation

* **Monitoring Station Name** (`monitoring_station`, `text`, required): Enter the unique identifier for the monitoring location.
* **Monitoring Date** (`monitoring_date`, `date`, required): Enter the date of measurement.
* **Pollutant Measured** (`pollutant_measured`, `select_one`, required): Choose the type of pollutant measured from the available options (PM2.5, PM10, NO2, O3, SO2, CO, or Other).
* **Concentration Value** (`concentration_value`, `number`, required): Enter the measured concentration value for the selected pollutant.
* **Units of Measurement** (`units`, `text`, required): Specify the units of measurement for the concentration value (e.g., ug/m3 or ppm).
* **Sampling Method** (`sampling_method`, `text`, optional): If applicable, describe the sampling method used for this measurement.
* **Weather Conditions** (`weather_conditions`, `text`, optional): If applicable, provide details on the weather conditions during sampling (e.g., wind, temperature, humidity).
* **Exceedances Observed** (`exceedances_observed`, `select_one`, required): Indicate whether any exceedances were observed above guideline thresholds.
* **Recommended Actions** (`recommended_actions`, `text`, optional): If necessary, suggest recommended actions to address poor air quality.
* **Reported By** (`reported_by`, `text`, required): Enter your name and title as the person preparing the report.
