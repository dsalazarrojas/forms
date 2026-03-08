# Dot Inspection Form - Help Guide
## Purpose
This form is used for the mechanic's inspection of a vehicle and is typically completed after inspecting the vehicle. It is designed to capture and record important details about the vehicle and the inspection process.

## How To Complete This Form
To complete this form, follow the steps below:

1. Select the type of vehicle being inspected (Motorcycle, Bicycle, or Other).
2. Enter the vehicle's make.
3. Enter the vehicle's model.
4. Enter the year of the vehicle.
5. Enter the vehicle's mileage.
6. Enter the date the vehicle was received for inspection.
7. Enter the current odometer reading.
8. Select the location of the inspection (Home, Away, or Other).
9. Enter any additional notes about the vehicle.
10. Enter your email address (optional).
11. Enter your phone number (optional).
12. Enter your name for submission.
13. Enter the date the form was submitted.
14. Enter the inspection date.
15. Enter the inspection time.
16. Enter any comments from the mechanic.
17. Enter your signature.
18. Enter the shop's signature.
19. Enter the shop's name.
20. Enter the shop's street address.
21. Enter the shop's city.
22. Enter the shop's state.
23. Enter the shop's zip code.
24. Enter the shop's country.

## Field-by-Field Explanation
* **vehicle_type** (`vehicle_type`, `select_one`, required): Select the type of vehicle being inspected (Motorcycle, Bicycle, or Other).
* **vehicle_make** (`make`, `text`, required): Enter the vehicle's make.
* **vehicle_model** (`model`, `text`, required): Enter the vehicle's model.
* **year** (`year`, `number`, required): Enter the year of the vehicle.
* **vehicle_mileage** (`mileage`, `number`, required): Enter the vehicle's mileage.
* **date_received** (`date_received`, `date`, required): Enter the date the vehicle was received for inspection.
* **odometer_reading** (`odometer_reading`, `time`, required): Enter the current odometer reading.
* **inspection_location** (`inspection_location`, `select_multiple`, required): Select the location of the inspection (Home, Away, or Other).
* **notes** (`notes`, `note`, optional): Enter any additional notes about the vehicle.
* **email** (`email`, `email`, optional): Enter your email address.
* **phone** (`phone`, `text`, optional): Enter your phone number.
* **submitted_by** (`submitted_by`, `text`, required): Enter your name for submission.
* **submitted_on** (`submitted_on`, `date`, required): Enter the date the form was submitted.
* **inspection_date** (`inspection_date`, `date`, required): Enter the inspection date.
* **inspection_time** (`inspection_time`, `time`, required): Enter the inspection time.
* **comments** (`comments`, `text`, optional): Enter any comments from the mechanic.
* **signature** (`signature`, `text`, required): Enter your signature.
* **shop_signature** (`shop_signature`, `text`, required): Enter the shop's signature.
* **shop_name** (`shop_name`, `text`, required): Enter the shop's name.
* **shop_street** (`shop_street`, `text`, optional): Enter the shop's street address.
* **shop_city** (`shop_city`, `text`, optional): Enter the shop's city.
* **shop_state** (`shop_state`, `text`, required): Enter the shop's state.
* **shop_zip** (`shop_zip`, `text`, required): Enter the shop's zip code.
* **shop_country** (`shop_country`, `text`, optional): Enter the shop's country.
