# Dealership Inventory Registration Form - Help Guide
## Purpose
The Dealership Inventory Registration Form is used to collect information about a vehicle being registered for sale or inventory purposes. This form helps dealerships accurately record and update their vehicle inventory, ensuring accurate records and efficient operations.

## How To Complete This Form
1. Ensure you have all the necessary information about the vehicle.
2. Fill out the form with the correct information, paying attention to required fields.
3. Review the form for accuracy and completeness before submission.

## Field-by-Field Explanation
* **Vehicle Make** (`vehicle_make`, `text`, required: false):
	+ Enter the make of the vehicle (e.g., Toyota, Ford, etc.).
* **Vehicle Model** (`vehicle_model`, `text`, required: false):
	+ Enter the model of the vehicle (e.g., Corolla, Mustang, etc.).
* **Vehicle Year** (`vehicle_year`, `number`, required: false):
	+ Enter the year of the vehicle.
* **Is Vehicle Available for Purchase?** (`is_available_for_purchase`, `select_one`, required: true):
	+ Select "Yes" if the vehicle is available for purchase; "No" otherwise.
* **Register Multiple Models?** (`register_multiple_models`, `select_multiple`, required: true):
	+ Select "Yes" if the vehicle is part of a batch of similar vehicles being registered; "No" otherwise.
* **Is Vehicle Available for Immediate Delivery?** (`is_available_forimmediate_delivery`, `select_one`, required: true):
	+ Select "Yes" if the vehicle is available for immediate delivery; "No" otherwise.
* **Additional Notes** (`vehicle_note`, `note`, required: false):
	+ Enter any additional notes or comments about the vehicle.
* **Register Vehicle Immediately?** (`register_immediately`, `select_one`, required: true):
	+ Select "Yes" to register the vehicle immediately; "No" otherwise.
* **Is Vehicle Available for Trade-in?** (`is_vehicle_available_for_trade_in`, `select_one`, required: false):
	+ Select "Yes" if the vehicle is available for trade-in; "No" otherwise.
* **Is Vehicle in Good Condition?** (`is_vehicle_in_good_condition`, `select_one`, required: true):
	+ Select "Yes" if the vehicle is in good condition; "No" otherwise.
* **Vehicle Delivery Date** (`vehicle_delivery_date`, `date`, required: true):
	+ Enter the date the vehicle is scheduled for delivery.
* **Vehicle Delivery Time** (`vehicle_delivery_time`, `time`, required: false):
	+ Enter the time of the vehicle delivery.
