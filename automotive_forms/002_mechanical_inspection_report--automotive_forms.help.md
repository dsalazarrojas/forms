# Mechanical Inspection Report - Help Guide
## Purpose
This form is used to create a mechanical inspection report for vehicles. It gathers information about the vehicle's characteristics, inspection results, and the technician who conducted the inspection.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the vehicle's details: customer name, year, type, color, make, model, license plate, and VIN (Vehicle Identification Number).
2. Indicate whether the vehicle has a specific condition or issue.
3. Enter the vehicle's mileage.
4. Select the inspection result (Yes/No) and provide any comments.
5. Enter the technician's name, title, and any additional comments.
6. Record the inspection date and time.
7. Enter the assigned technician's information (name, vehicle, date, time, and tool used).

## Field-by-Field Explanation
* **Customer Name** (`customer_name`, text, required: false): Enter the name of the vehicle's owner or customer.
* **Vehicle Year** (`vehicle_year`, text, required: false): Enter the year of the vehicle.
* **Vehicle Type** (`vehicle_type`, select_one, required: false): Select whether the vehicle has a specific condition or issue.
* **Vehicle Color** (`vehicle_color`, text, required: false): Enter the color of the vehicle.
* **Vehicle Make** (`vehicle_make`, text, required: false): Enter the make of the vehicle.
* **Vehicle Model** (`vehicle_model`, text, required: false): Enter the model of the vehicle.
* **Vehicle License Plate** (`vehicle_license_plate`, text, required: false): Enter the license plate number of the vehicle.
* **Vehicle VIN** (`vehicle_vin`, text, required: false): Enter the Vehicle Identification Number (VIN) of the vehicle.
* **Vehicle Engine Number** (`vehicle_engine_number`, text, required: false): Enter the engine number of the vehicle.
* **Vehicle OE Number** (`vehicle_oem_number`, text, required: false): Enter the Original Equipment Manufacturer (OEM) number of the vehicle.
* **Vehicle Mileage** (`vehicle_mileage`, number, required: false): Enter the current mileage of the vehicle.
* **Vehicle Condition** (`vehicle_condition`, select_one, required: false): Indicate whether the vehicle has a specific condition or issue.
* **Vehicle Notes** (`vehicle_notes`, note, required: false): Enter any additional comments or notes about the vehicle.
* **Technician Name** (`technician_name`, text, required: false): Enter the name of the technician who conducted the inspection.
* **Technician Title** (`technician_title`, text, required: false): Enter the title of the technician who conducted the inspection.
* **Inspection Date** (`inspection_date`, date, required: false): Enter the date of the inspection.
* **Inspection Time** (`inspection_time`, time, required: false): Enter the time of the inspection.
* **Inspection Result** (`inspection_result`, select_one, required: false): Select whether the inspection was successful or not.
* **Inspection Comments** (`inspection_comments`, note, required: false): Enter any comments or notes about the inspection.
* **Assigned Technician** (`assigned_technician`, text, required: false): Enter the name of the technician assigned to the vehicle.
* **Assigned Vehicle** (`assigned_vehicle`, text, required: false): Enter the vehicle assigned to the technician.
* **Assigned Date** (`assigned_date`, text, required: false): Enter the date the vehicle was assigned to the technician.
* **Assigned Time** (`assigned_time`, text, required: false): Enter the time the vehicle was assigned to the technician.
* **Assigned Tool** (`assigned_tool`, text, required: false): Enter the tool used for the inspection.
* **Vehicle Image URLs** (`vehicle_image_urls`, text, required: false): Enter any URLs for images related to the vehicle inspection.

## Tips
* Make sure to fill in all required fields.
* Use the correct formatting for dates and times (MM/DD/YYYY, HH:MM AM/PM).
* If a field is optional, fill it in if it's relevant to the inspection.
* Double-check the information before submitting the form.
