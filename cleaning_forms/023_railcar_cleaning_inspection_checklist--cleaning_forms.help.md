# Railcar Cleaning Inspection Checklist - Help Guide

## Purpose
This form is used to track and document the cleaning inspections of railcars. It collects information on the railcar's condition, maintenance history, and inspection results.

## How To Complete This Form
1. Select the relevant options for the **Maintenance Team** that conducted the cleaning inspection.
2. Choose the type of **Railcar Type** being inspected.
3. Enter the **Inspection Date** of the cleaning inspection.
4. Select the **Cleaning Method** used during the inspection.
5. Add any **Notes** regarding the inspection.
6. Report the **Railcar Condition** after the inspection.
7. Choose the **Inspection Frequency** of the cleaning process.
8. Select the **Assigned Inspector** who performed the inspection.
9. Check the **Cleaning Supplies** used during the inspection.
10. Record the **Railcar Status** after the inspection.
11. Select the **Location** of the railcar.
12. Enter the **Next Inspection Date** for the railcar.
13. Mark the **Completed** status of the inspection.
14. Choose the **Inspection Status** of the cleaning process.
15. Report the **Inspection Result** of the cleaning process.

## Field-by-Field Explanation

* **Maintenance Team** (`maintenance_team`, select_one, required: false):
	+ Select the team that conducted the cleaning inspection.
* **Railcar Type** (`railcar_type`, select_multiple, required: false):
	+ Choose the type of railcar being inspected.
* **Inspection Date** (`inspection_date`, date, required: false):
	+ Enter the date of the cleaning inspection.
* **Cleaning Method** (`cleaning_method`, select_one, required: false):
	+ Select the method used for cleaning the railcar.
* **Notes** (`notes`, note, required: false):
	+ Add any notes or comments about the inspection.
* **Railcar Condition** (`railcar_condition`, select_one, required: false):
	+ Report the condition of the railcar after the inspection.
* **Inspection Frequency** (`inspection_frequency`, select_one, required: false):
	+ Choose the frequency of the cleaning process.
* **Assigned Inspector** (`assigned_inspector`, select_one, required: false):
	+ Select the inspector assigned to perform the cleaning inspection.
* **Cleaning Supplies** (`cleaning_supplies`, select_multiple, required: false):
	+ Check the cleaning supplies used during the inspection.
* **Railcar Status** (`railcar_status`, select_multiple, required: false):
	+ Report the status of the railcar after the inspection.
* **Location** (`location`, select_one, required: false):
	+ Select the location of the railcar.
* **Next Inspection Date** (`next_inspection_date`, date, required: false):
	+ Enter the next inspection date for the railcar.
* **Completed** (`completed`, select_one, required: false):
	+ Mark the status of the inspection as completed or pending.
* **Inspection Status** (`inspection_status`, select_one, required: false):
	+ Choose the status of the cleaning process.
* **Inspection Result** (`inspection_result`, select_one, required: false):
	+ Report the result of the cleaning inspection.

Note: This help guide assumes that the form is not mandatory and users can skip fields as necessary. However, please ensure that all required fields are completed before submitting the form.
