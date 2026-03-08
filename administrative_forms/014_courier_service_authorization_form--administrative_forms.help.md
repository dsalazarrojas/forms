# Courier Service Authorization Form - Help Guide
## Purpose
This form is designed to collect information from customers to facilitate the delivery of packages or items. It helps ensure that the delivery process is efficient and secure.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out your name and phone number in the "Customer Name" field.
2. Enter the details of the package, including any relevant information, in the "Package Details" field.
3. Provide the address where the package needs to be delivered in the "Delivery Address" field.
4. If you need the package to be picked up, enter the "Pickup Details" in the "Pickup Details" field.
5. Choose the type of service you need from the "Service Type" options.
6. Select the date when you need the package delivered in the "Delivery Date" field.
7. Choose a time for delivery in the "Delivery Time" field.
8. Enter the monetary value of the package or item being delivered in the "Package Value" field.

## Field-by-Field Explanation
* **Customer Name** (`customer_name`, text, required): Enter your name as it appears on your identification documents.
* **Customer Phone** (`customer_phone`, text, required): Enter your phone number for contact purposes.
* **Package Details** (`package_details`, text, required): Enter a detailed description of the package or item, including any special instructions or information.
* **Delivery Address** (`delivery_address`, text, required): Enter the delivery address where the package needs to be delivered.
* **Pickup Details** (`pickup_details`, text, optional): If you want the package to be picked up, enter the pickup address or instructions here.
* **Service Type** (`service_type`, select_multiple, optional): Choose the type of service you need from the available options, such as yes or no.
* **Delivery Date** (`delivery_date`, date, required): Select the date when you need the package delivered.
* **Delivery Time** (`delivery_time`, time, required): Choose a time for delivery.
* **Package Value** (`package_value`, number, required): Enter the monetary value of the package or item being delivered.
