# Key Night Drop Envelope Form - Help Guide
## Purpose
The Key Night Drop Envelope Form is a tool for clients to request key night drop services for their vehicle. This form is designed to collect information about the client's vehicle and the services they need.

## How To Complete This Form
To complete this form, please follow these steps:
1. Enter the client's name in the Client Name field.
2. Enter the client's phone number in the Phone field.
3. Enter the client's email address in the Email field.
4. Select the type of vehicle from the Vehicle Type field.
5. Enter the year of the vehicle in the Vehicle Year field.
6. Select the type of service the client requires from the Service Type field.
7. Enter a brief description of the service in the Service Details field (optional).
8. Enter the vehicle license plate number in the Vehicle License Plate field.
9. If applicable, describe any damage to the vehicle in the Damage Report field.
10. Provide a detailed description of the damage in the Damage Description field (optional).
11. Check all that apply in the Consent field to confirm the client's understanding and agreement to the services.
12. Enter any additional comments or information in the Comments field (optional).

## Field-by-Field Explanation
* **Client Name** (`client_name`, `text`, required): Enter the client's name in this field.
* **Phone** (`phone`, `text`, required): Enter the client's phone number.
* **Email** (`email`, `email`, required): Enter the client's email address.
* **Vehicle Type** (`vehicle_type`, `text`, required): Select the type of vehicle from the provided options.
* **Vehicle Year** (`vehicle_year`, `number`, required): Enter the year of the vehicle.
* **Service Type** (`service_type`, `select_one`, required): Select the type of service the client requires.
* **Service Details** (`service_details`, `text`, optional): Enter a brief description of the service.
* **Vehicle License Plate** (`vehicle_license_plate`, `text`, optional): Enter the vehicle license plate number.
* **Damage Report** (`damage_report`, `note`, optional): If applicable, describe any damage to the vehicle.
* **Damage Description** (`damage_description`, `text`, optional): Provide a detailed description of the damage (if applicable).
* **Consent** (`consent`, `select_multiple`, required): Check all that apply to confirm the client's understanding and agreement to the services.
* **Comments** (`comments`, `text`, optional): Enter any additional comments or information about the service.
