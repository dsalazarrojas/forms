<thinking>...</thinking>

# Vehicle Transport Quote Request - Help Guide
## Purpose
This form is a quote request for vehicle transport services. It gathers information about the vehicle being transported, the type of transport required, and contact details for the transport request.

## How To Complete This Form
To fill out this form, follow these steps:

1. Select the type of vehicle you want to transport (e.g., Car, Truck, Motorcycle).
2. Choose the size of the vehicle (e.g., Small, Medium, Large).
3. Enter the vehicle's make and model.
4. Select the transport type (e.g., Air, Land, Sea).
5. Choose the transport locations (e.g., New York, California, Florida).
6. Enter the pickup and delivery dates (in YYYY-MM-DD format).
7. Enter your contact phone number.
8. Enter your contact email.

## Field-by-Field Explanation
* **Vehicle Type** (`vehicle_type`, select_one, required): Select the type of vehicle you want to transport.
* **Vehicle Size** (`vehicle_size`, select_multiple, required): Choose the size of the vehicle.
* **Vehicle Make** (`vehicle_make`, text, required): Enter the vehicle's make (e.g., Toyota).
* **Vehicle Model** (`vehicle_model`, text, required): Enter the vehicle's model.
* **Vehicle Year** (`vehicle_year`, number, required): Enter the year of the vehicle (in YYYY format).
* **Transport Type** (`transport_type`, select_one, required): Select the type of transport you require (e.g., Air, Land, Sea).
* **Transport Location** (`transport_location`, select_multiple, required): Choose the transport locations.
* **Pickup Date** (`pickup_date`, date, required): Enter the pickup date (in YYYY-MM-DD format).
* **Delivery Date** (`delivery_date`, date, required): Enter the delivery date (in YYYY-MM-DD format).
* **Transport Provider** (`transport_provider`, text, required): Enter the transport provider's information.
* **Contact Phone** (`contact_phone`, text, required): Enter your contact phone number.
* **Contact Email** (`contact_email`, email, required): Enter your contact email address.
