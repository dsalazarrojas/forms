<thinking>
This form is used to log the details of a truck's hour meter reading, which is a measure of the total operating hours of a vehicle's engine. This form helps in tracking the driver, vehicle, and other relevant details for the hour meter reading. To ensure accuracy, please make sure to enter the correct details for each field. Please note that this form does not log the actual hours worked or the date of the activity; it only logs the hour meter reading details.</thinking>

# Truck_Hour_Meter_Log - Help Guide
## Purpose
The Truck_Hour_Meter_Log form is used to record the details of a truck's hour meter reading, including driver, vehicle, and other relevant information.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the driver's name and driver's license number in the respective fields.
2. Enter the vehicle's license number and vehicle make.
3. Enter the vehicle year.
4. Enter the engine hours.
5. Enter the start and end times of the route.

## Field-by-Field Explanation
* **Driver** (`driver_name`, text, required): The name of the driver who is logging the hour meter reading.
* **Driver's License** (`driver_license_number`, text, required): The driver's license number to identify the driver.
* **Vehicle License** (`vehicle_license_number`, text, required): The vehicle's license number to identify the vehicle.
* **Vehicle Year** (`vehicle_year`, number, required): The year of the vehicle.
* **Vehicle Make** (`vehicle_make`, text, required): The make of the vehicle.
* **Engine Hours** (`engine_hours`, number, required): The total operating hours of the vehicle's engine.
* **Start Time** (`route_start`, time, required): The time when the truck started the route.
* **End Time** (`route_end`, time, required): The time when the truck finished the route.
