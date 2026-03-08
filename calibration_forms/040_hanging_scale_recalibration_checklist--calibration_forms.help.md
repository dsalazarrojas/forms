# Hanging Scale Recalibration Checklist - Help Guide
## Purpose

This form is used to collect and track the recalcibration status of hanging scales in a warehouse.

## How To Complete This Form

To complete this form, follow these steps:

1. Enter the warehouse scale information in the "Warehouse Scale Info" field.
2. Select the location of the scale from the options provided.
3. Choose the type of scale from the options provided (Analog, Digital, Mechanical, or Other).
4. Enter the model of the scale.
5. Specify the calibration interval (e.g. monthly, annually, etc.) and choose the unit of measurement (Months, Years, etc.).
6. Enter the date of the last calibration and the person who performed it.
7. Enter the date of the next calibration and the person responsible for performing it.
8. Select the current condition of the scale (Good, Fair, Poor).
9. Enter any additional notes about the scale.

## Field-by-Field Explanation

* **Warehouse Scale Info** (`warehouse_scale_info`, `text`, required): Enter the unique identifier or description of the scale.
* **Location** (`location`, `text`, required): Enter the location of the scale in the warehouse.
* **Scale Type** (`scale_type`, `select_one`, optional): Choose the type of scale (Analog, Digital, Mechanical, or Other).
* **Scale Model** (`scale_model`, `text`, optional): Enter the model of the scale.
* **Calibration Interval** (`calibration_interval`, `number`, optional): Enter the interval at which the scale is to be calibrated.
* **Calibration Interval Unit** (`calibration_interval_unit`, `select_one`, optional): Choose the unit of measurement for the calibration interval (Months, Years, etc.).
* **Last Calibration Date** (`last_calibration_date`, `date`, optional): Enter the date of the last calibration.
* **Last Calibration By** (`last_calibration_by`, `text`, optional): Enter the person who performed the last calibration.
* **Next Calibration Date** (`next_calibration_date`, `date`, optional): Enter the date of the next calibration.
* **Next Calibration Due By** (`next_calibration_by`, `text`, optional): Enter the person responsible for performing the next calibration.
* **Scale Condition** (`scale_condition`, `select_multiple`, optional): Select the current condition of the scale (Good, Fair, Poor).
* **Notes** (`notes`, `note`, optional): Enter any additional notes about the scale.
