<thinking>
This form is designed to collect information about a fleet vehicle inspection. It's essential to ensure that the form is completed accurately and thoroughly to capture all relevant details. Before proceeding, please check if you have already completed this form for the same vehicle. If you are updating information for a vehicle that has previously been inspected, ensure that you are using the most up-to-date version of the form.

The form is divided into several sections, each focusing on a specific aspect of the vehicle inspection. Please follow these steps to complete the form:

1.  Start by selecting the "vehicle id" of the fleet vehicle being inspected.
2.  Enter the "vehicle year" of the fleet vehicle being inspected.
3.  Enter the current "vehicle milage" of the fleet vehicle being inspected.
4.  Identify the owner or prophet of the fleet vehicle being inspected.
5.  If applicable, enter the "inspection date" and "inspection time" for the current inspection.
6.  Provide any additional "notes" about the inspection.
7.  Enter the vehicle's "email" address.
8.  Enter the vehicle's "phone" number.
9.  Evaluate the "vehicle condition" (select from Good, Fair, or Poor).
10.  Evaluate the "vehicle status" (select from Active, Inactive, or Unknown).
11.  Select the vehicle's location (select from Inside, Outside, or Unknown).
12.  Identify the "assigned inspector" conducting the inspection.
13.  Enter the vehicle's "vehicle make".
14.  Enter the vehicle's "vehicle model".
15.  Enter the vehicle's "year manufactured".
16.  Enter the vehicle's "vin".
17.  Select the "vin status" (select from Clean, Dirty, or Unknown).

</thinking>

# fleet_inspection_form - Help Guide
## Purpose
This form is designed to collect information about a fleet vehicle inspection.

## How To Complete This Form

To complete this form, please follow the steps outlined above.

## Field-by-Field Explanation

* **Vehicle ID** (`vehicle_id`, Number, Required): Enter the unique identifier of the vehicle being inspected.
* **Vehicle Year** (`vehicle_year`, Number, Required): Enter the year of the vehicle being inspected.
* **Vehicle Milage** (`vehicle_milage`, Number, Required): Enter the current milage of the vehicle being inspected.
* **Owner/Prophet** (`owner`, Text, Required): Enter the name of the vehicle's owner or prophet.
* **Inspection Date** (`inspection_date`, Date, Optional): Enter the date of the current inspection (if applicable).
* **Inspection Time** (`inspection_time`, Time, Optional): Enter the time of the current inspection (if applicable).
* **Notes** (`notes`, Note, Optional): Provide any additional comments or notes about the inspection.
* **Email** (`email`, Email, Required): Enter the vehicle's email address.
* **Phone** (`phone`, Text, Required): Enter the vehicle's phone number.
* **Vehicle Condition** (`vehicle_condition`, Select One, Optional): Evaluate the vehicle's condition (select from Good, Fair, or Poor).
* **Vehicle Status** (`vehicle_status`, Select One, Optional): Evaluate the vehicle's status (select from Active, Inactive, or Unknown).
* **Vehicle Location** (`vehicle_location`, Select Multiple, Optional): Select the location of the vehicle (select from Inside, Outside, or Unknown).
* **Assigned Inspector** (`assigned_inspector`, Text, Required): Identify the inspector assigned to conduct the inspection.
* **Vehicle Make** (`vehicle_make`, Text, Required): Enter the vehicle's make.
* **Vehicle Model** (`vehicle_model`, Text, Required): Enter the vehicle's model.
* **Year Manufactured** (`vehicle_year_manufactured`, Text, Required): Enter the vehicle's year of manufacture.
* **VIN** (`vin`, Text, Required): Enter the Vehicle Identification Number (VIN) of the vehicle.
* **VIN Status** (`vin_status`, Select Multiple, Optional): Select the status of the vehicle's VIN (select from Clean, Dirty, or Unknown).
