<thinking>

This form is for restaurant delivery vehicle inspection data collection. It is used to gather information about vehicles used for delivery purposes. The form is part of a larger inspection process, which might be part of a regulatory or compliance requirement for restaurants. The inspection report submitted through this form would be reviewed and used to verify the status of a vehicle.

</thinking>

# restaurant_delivery_vehicle_inspection_form - Help Guide
## Purpose
The restaurant delivery vehicle inspection form is used to collect information about delivery vehicles and inspection data.

## How To Complete This Form
To complete this form, follow these general steps:

1. Fill in the vehicle's basic information in the "Vehicle Info" field.
2. Select the type of vehicle (e.g., car, truck, bike).
3. If relevant, add notes about photo documentation in the "Photo Documentation" field.
4. Enter the vehicle's condition using the "Vehicle Condition" field.
5. Record the odometer reading using the "Odometer Reading" field.
6. Select which personnel signed the inspection report in the "Signed Inspection" field.
7. If selected "Manager", provide the manager's name, email, and phone number.
8. Enter the date of the inspection in the "Inspection Date" field.

## Field-by-Field Explanation
- **Vehicle Info** (`vehicle_info`, text, required: false): Enter the vehicle's make, model, and year, as well as any other relevant information.
- **vehicle_type** (`vehicle_type`, select_one, required: false): Select the type of vehicle used for delivery, such as "Car", "Truck", or "Bike".
- **Photo Documentation** (`photo_documentation`, note, required: false): Add any additional information about photo documentation, such as "Photos taken of all four corners and interior".
- **Vehicle Condition** (`vehicle_condition`, number, required: false): Rate the vehicle's condition using a numerical scale (e.g., 1-10).
- **Odometer Reading** (`odometer_reading`, number, required: false): Record the current odometer reading of the vehicle.
- **Signed Inspection** (`signed_inspection`, select_multiple, required: false): Select which personnel signed the inspection report, such as "Manager" or "Supervisor".
- **Manager Name** (`manager_name`, text, required: false): Enter the name of the personnel who signed the inspection report if "Manager" is selected.
- **Manager Email** (`manager_email`, email, required: false): Enter the email address of the personnel who signed the inspection report if "Manager" is selected.
- **Manager Phone** (`manager_phone`, text, required: false): Enter the phone number of the personnel who signed the inspection report if "Manager" is selected.
- **Inspection Date** (`inspection_date`, date, required: false): Enter the date of the inspection in the format YYYY-MM-DD.
