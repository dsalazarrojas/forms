# Shipping Pallet Rental Order Form - Help Guide

## Purpose
This form is designed to gather necessary information from customers for the purpose of renting shipping pallets.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the customer information section on the first page.
2. Provide the shipment details, including the delivery date and time.
3. Indicate whether you would like to be contacted via phone or email.
4. Specify the payment method and provide any additional payment details.
5. Enter the pallet quantity and rental period.
6. Enter the delivery address and any additional delivery details.
7. Specify the delivery status and any additional notes or instructions.

## Field-by-Field Explanation

- **Customer Information**: This section is where you will enter your personal contact information, including your email address, phone number, and physical address.
  - Customer Email (`customer_email`, email, required): Enter your email address.
  - Customer Phone (`customer_phone`, text, optional): Enter your phone number.
  - Customer Address (`customer_address`, text, optional): Enter your physical address.
  - Customer City (`customer_city`, text, optional): Enter your city.
  - Customer State (`customer_state`, text, optional): Enter your state or province.
  - Customer Zip (`customer_zip`, text, optional): Enter your postal code.
  - Customer Country (`customer_country`, text, optional): Enter your country.

- **Shipment Details**: This section is where you will enter information about the shipment.
  - Delivery Date (`shipment_date`, date, optional): Enter the date you would like to receive the shipment.
  - Delivery Time (`shipment_time`, time, optional): Enter the time you would like to receive the shipment.
  - Delivery Status (`delivery_status`, select_one, optional): Specify whether the shipment is active or inactive.
  - Delivery Location (`delivery_location`, text, optional): Enter any additional delivery location details.
  - Delivery Address Line 2 (`delivery_address_line2`, text, optional): Enter any additional delivery address line 2 details.
  - Delivery City (`delivery_city`, text, optional): Enter the city where the delivery is to be made.
  - Delivery State (`delivery_state`, text, optional): Enter the state or province where the delivery is to be made.
  - Delivery Zip (`delivery_zip`, text, optional): Enter the postal code where the delivery is to be made.

- **Rental Details**: This section is where you will enter information about the rental period.
  - Pallet Quantity (`pallet_quantity`, number, optional): Enter the number of pallets you would like to rent.
  - Rental Period (`rental_period`, number, optional): Enter the number of days or weeks you would like to rent the pallets for.

- **Additional Information**: This section is where you can provide any additional information or instructions.
  - Notes (`notes`, note, optional): Enter any additional notes or instructions for the shipment.

Please note that all fields are optional unless otherwise specified as required.
