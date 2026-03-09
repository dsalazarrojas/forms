# Backhaul Order Submission Form - Help Guide

## Purpose
The purpose of this form is to collect information for backhaul orders, which are transportation requests that involve moving goods from one location to another.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the shipper information section with the details of the person or entity responsible for the shipment.
2. Provide the address and contact details of the pickup location.
3. Specify the desired pickup date and time.
4. Enter the address and contact details of the delivery location.
5. Enter the details of the cargo, including its description, weight, and any special handling requirements.
6. If applicable, select the freight class and indicate whether the cargo contains hazardous materials.
7. Finally, provide an estimated cost for the backhaul order.

## Field-by-Field Explanation
* **Shipper Name** (`shipper_name`, text, required): Enter the name of the person or entity responsible for the shipment.
* **Shipper Email** (`shipper_email`, email, required): Enter the email address of the person or entity responsible for the shipment.
* **Shipper Phone Number** (`shipper_phone`, phone, required): Enter the phone number of the person or entity responsible for the shipment.
* **Company Name** (`shipper_company`, text, optional): If you are representing a company, enter the name of your company.
* **Pickup Address** (`pickup_address`, text, required): Enter the address of the pickup location.
* **City** (`pickup_city`, text, required): Enter the city of the pickup location.
* **State/Province** (`pickup_state`, text, required): Enter the state or province of the pickup location.
* **ZIP/Postal Code** (`pickup_zip`, text, required): Enter the ZIP or postal code of the pickup location.
* **Desired Pickup Date** (`pickup_date`, date, required): Specify the date on which you would like the pickup to occur.
* **Preferred Pickup Time Window** (`pickup_time_window`, select_one, optional): Choose a time window for the pickup (morning, afternoon, evening, or flexible).
* **Delivery Address** (`delivery_address`, text, required): Enter the address of the delivery location.
* **City** (`delivery_city`, text, required): Enter the city of the delivery location.
* **State/Province** (`delivery_state`, text, required): Enter the state or province of the delivery location.
* **ZIP/Postal Code** (`delivery_zip`, text, required): Enter the ZIP or postal code of the delivery location.
* **Cargo Description** (`cargo_description`, text, required): Enter a brief description of the cargo or goods being transported.
* **Weight in Pounds** (`weight_lbs`, decimal, required): Enter the weight of the cargo in pounds.
* **Dimensions** (`dimensions`, text, optional): If applicable, enter the dimensions of the cargo (length x width x height) in feet.
* **Freight Class** (`freight_class`, select_one, optional): Choose a freight class for the cargo (50, 55, 60, 65, 70, 85, 100, or other).
* **Contains Hazardous Materials** (`hazmat`, select_one, required): Indicate whether the cargo contains hazardous materials (yes or no).
* **Special Handling Requirements** (`special_requirements`, text, optional): If necessary, specify any special handling requirements for the cargo (e.g. temperature controlled, fragile).
* **Estimated Cost** (`estimated_cost`, decimal, optional): Enter an estimated cost for the backhaul order in dollars.
