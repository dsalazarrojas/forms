# Cab Evaluation Form - Help Guide
## Purpose
This form is designed for taxi cab inspectors to evaluate and record the condition of a cab.

## How To Complete This Form
To complete this form, follow these steps:

1.  Review the provided form and understand the fields and sections.
2.  Fill out the form for each cab being inspected, starting with the "Vehicle Identification" section.
3.  Complete all required fields, marked with a red asterisk (*).
4.  Provide accurate and detailed answers to each question.
5.  Ensure that you have checked all relevant sections and fields before submitting the form.

## Field-by-Field Explanation

* **Vehicle Number or Unit ID** (`vehicle_number`, `text`, *Required*): Enter the unique identifier of the cab, such as a registration number or unit ID.
* **License Plate Number** (`license_plate`, `text`, *Required*): Enter the license plate number of the cab.
* **Vehicle Make and Model** (`vehicle_model`, `text`, *Required*): Enter the make and model of the cab, e.g., Toyota, Honda, or Toyota Corolla.
* **Current Odometer Reading** (`current_mileage`, `number`, *Required*): Record the current mileage of the cab.
* **Exterior Body Condition** (`exterior_body`, `select_one`, *Required*): Evaluate and select the condition of the cab's exterior body from:
	+ Excellent
	+ Good
	+ Fair
	+ Damaged
* **Interior Cleanliness** (`interior_cleanliness`, `select_one`, *Required*): Evaluate and select the cleanliness of the cab's interior from:
	+ Clean
	+ Acceptable
	+ Needs Cleaning
	+ Dirty
* **Upholstery and Seat Condition** (`upholstery_condition`, `select_one`, *Required*): Evaluate and select the condition of the cab's upholstery and seats from:
	+ Like New
	+ Worn
	+ Torn
	+ Needs Replacement
* **Lights and Signals Functioning** (`lighting_check`, `select_one`, *Required*): Evaluate and select the functioning status of the cab's lights and signals from:
	+ Pass
	+ Fail
* **Tire Condition and Tread Depth** (`tire_tread_status`, `select_one`, *Required*): Evaluate and select the condition of the cab's tires from:
	+ Good
	+ Fair
	+ Needs Replacement
* **Brake Performance Rating** (`brake_performance`, `select_one`, *Required*): Evaluate and select the brake performance of the cab from:
	+ Responsive
	+ Soft
	+ Noisy
	+ Needs Immediate Service
* **Engine Oil and Fluid Levels Checked** (`fluid_levels`, `select_one`, *Required*): Evaluate and select the engine oil and fluid levels of the cab from:
	+ Full
	+ Low
	+ Needs Service
* **Taxi Meter and Terminal Working Correct** (`taxi_meter_check`, `select_one`, *Required*): Evaluate and select the taxi meter and terminal status of the cab from:
	+ True
	+ False
* **Overall Inspection Result** (`inspection_result`, `select_one`, *Required*): Select the overall result of the inspection from:
	+ Roadworthy
	+ Minor Repairs Needed
	+ Unsafe for Service
* **Evaluated By** (`inspector_name`, `text`, *Required*): Enter the name of the inspector who evaluated the cab.
* **Date of Evaluation** (`evaluation_date`, `date`, *Required*): Enter the date of the evaluation.
* **Maintenance or Problem Report** (`service_notes`, `text`, Optional): Enter any maintenance or problems found during the evaluation in detail.
