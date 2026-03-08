# Storage Humidity Control Report Form - Help Guide

## Purpose
This form is designed to collect information about storage humidity control in a facility. The goal is to report on the location of storage, start date, corrective actions taken, frequency of environmental monitoring, temperature checks, storage humidity controls, and any additional comments or notes.

## How To Complete This Form
- To start, fill out the "What is the storage location for this report?" field with the actual location where the storage is taking place.
- Next, enter the "When was the start date for this storage?" field with the date when the storage started.
- Select all corrective actions taken in the "What corrective actions were taken?" field that apply to the situation.
- Choose how often environmental monitoring is conducted in the "How often is environmental monitoring conducted?" field.
- Select all temperature checks conducted in the "What temperature checks were conducted?" field that apply to the situation.
- Enter the "What storage humidity controls are in place?" field with a description of the controls in place.
- If applicable, enter any additional notes or comments in the "Are there any other comments or notes?" field.

## Field-by-Field Explanation
- **What is the storage location for this report?** (`storage_location`, text, optional): This field is used to identify the specific location where the storage is taking place. Enter a brief description of the location, such as the name of the facility, building, or room.
- **When was the start date for this storage?** (`start_date`, date, required): Enter the date when the storage started.
- **What corrective actions were taken?** (`corrective_actions`, select_multiple, required): Select all corrective actions taken to address the storage humidity issue. Examples include:
	+ corrective-action-1
	+ corrective-action-2
	+ corrective-action-3
- **How often is environmental monitoring conducted?** (`environmental_monitoring`, select_one, required): Choose the frequency of environmental monitoring:
	+ environmental-monitoring-1
	+ environmental-monitoring-2
	+ environmental-monitoring-3
- **What temperature checks were conducted?** (`temperature_checks`, select_multiple, required): Select all temperature checks conducted:
	+ temperature-check-1
	+ temperature-check-2
	+ temperature-check-3
- **What storage humidity controls are in place?** (`storage_humidity_controls`, text, required): Enter a description of the controls in place, such as the type of controls and their settings.
- **Are there any other comments or notes?** (`other_comments`, text, optional): Enter any additional comments or notes about the storage humidity control.

## Tips
- Make sure to fill out all required fields.
- If you are unsure about any field, refer back to this help guide for clarification.
- Double-check your entries for accuracy before submitting the form.
