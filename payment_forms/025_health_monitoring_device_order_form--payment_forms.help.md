# health_monitoring_device_order_form - Help Guide
## Purpose

This form is used to gather information for ordering health monitoring devices. It ensures that all necessary details are captured for the ordering process.

## How To Complete This Form

1. Fill in the form title to describe the purpose of the order.
2. Enter the patient's name.
3. Specify the healthcare provider's name.
4. Select the type of health monitoring device you wish to order (Yes/No).
5. Enter the desired date for the order.

## Field-by-Field Explanation

* **Form Title** (`form_title`, text, optional): A brief description of the order purpose.
* **Patient Name** (`patient_name`, text, optional): Enter the name of the patient.
* **Healthcare Provider** (`healthcare_provider`, text, optional): Specify the name of the healthcare provider.
* **Device Selection** (`device_selection`, select multiple, optional): Choose one or more health monitoring devices to order.
	+ 'Yes': Select this option to order the device(s) specified.
	+ 'No': Select this option to indicate no device will be ordered.
* **Order Date** (`order_date`, date, optional): Enter the date you wish to place the order.
