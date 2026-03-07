<thinking>

This form is used for customers to place orders for smart facility energy meters. To check if this form is relevant, the customer information (customer name, email, phone number) must be present. This form should not be completed if the customer has previously ordered a smart facility energy meter. To avoid duplication, we should check for existing orders for the same customer and meter type.

</thinking>

# smart_facility_energy_meter_order_form - Help Guide
## Purpose
This form is used for customers to place orders for smart facility energy meters.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in the customer information, including name, email, and phone number.
2. Specify the type of meter you need.
3. Choose the meter size.
4. Enter the customer's address, city, zip, and country.
5. Select the date and time for the order.
6. Specify the quantity of meters needed.
7. Provide any additional notes about the order.
8. If applicable, select that the order is assigned to someone.

## Field-by-Field Explanation
* **Customer Name** (`customer_name`, `text`, required): Enter the customer's name.
* **Customer Email** (`customer_email`, `email`, required): Enter a valid email address for the customer.
* **Customer Phone** (`customer_phone`, `text`, required): Enter the customer's phone number.
* **Meter Type** (`meter_type`, `select_one`, required): Choose the type of meter you need.
* **Meter Size** (`meter_size`, `select_multiple`, required): Choose the size of the meter you need.
* **Address** (`address`, `text`, required): Enter the customer's address.
* **City** (`city`, `text`, required): Enter the city of the customer's address.
* **Zip** (`zip`, `text`, required): Enter the customer's zip code.
* **Country** (`country`, `text`, required): Enter the customer's country.
* **Date** (`date`, `date`, required): Choose the date for the order.
* **Time** (`time`, `time`, required): Choose the time for the order.
* **Quantity** (`quantity`, `number`, required): Specify the quantity of meters needed.
* **Notes** (`notes`, `note`, optional): Provide any additional notes about the order.
* **Assigned To** (`assigned_to`, `select_one`, required): Select if the order is assigned to someone.
