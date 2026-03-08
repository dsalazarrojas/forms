</thinking>
# Raw Material Order Form - Help Guide

## Purpose
The Raw Material Order Form is used to record and track orders of raw materials for production purposes. This form is intended to be completed by purchasing managers or procurement specialists to capture essential details about the material being ordered.

## How To Complete This Form
To complete the form, follow these steps:

1. Enter the date of the order (order_date).
2. Select the material ID associated with the material being ordered (material_id).
3. Choose the supplier ID of the material being sourced from (supplier_id).
4. Enter the quantity of the material being ordered.
5. Enter the unit price of the material.
6. Enter the total price of the material (automatically calculated based on the unit price and quantity).
7. Add any additional notes about the material being ordered (material_notes).
8. Select the material type from the provided options (material_type).

## Field-by-Field Explanation

* **Order Date** (`order_date`, date, required/optional): Enter the date when the order was made. This field is not required, but it's useful for tracking order history.
* **Material ID** (`material_id`, number, required/optional): Enter the unique identifier of the material being ordered.
* **Supplier ID** (`supplier_id`, number, required/optional): Enter the ID of the supplier providing the material.
* **Quantity** (`quantity`, number, required/optional): Enter the number of units of the material being ordered.
* **Unit Price** (`unit_price`, number, required/optional): Enter the price of one unit of the material.
* **Total Price** (`total_price`, number, required/optional): This field is automatically calculated based on the unit price and quantity, but you can manually enter the total price if it differs from the calculated value.
* **Material Notes** (`material_notes`, note, required/optional): Add any relevant notes about the material being ordered, such as delivery instructions or special requirements.
* **Material Type** (`material_type`, select one, required/optional): Select the type of material being ordered from the provided options.
