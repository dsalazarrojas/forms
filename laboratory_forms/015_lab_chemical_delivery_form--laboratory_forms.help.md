# lab_chemical_delivery_form - Help Guide
## Purpose
The lab_chemical_delivery_form is used to input delivery information for a specific chemical order. This form helps track essential details about the delivery, such as delivery method, location, date, and time.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields:
	* `chemical_id`
	* `chemical_name`
	* `delivery_method`
	* `delivery_location`
	* `delivery_date`
	* `delivery_time`
	* `chemical_quantity`
	* `chemical_unit`
	* `lab_name`
	* `lab_address`
	* `lab_phone`
	* `lab_email`
	* `lab_fax`
2. Select the delivery method and any other options as required:
	* `delivery_method_repeated`
	* `chemical_name_repeated`
3. Enter any additional delivery notes if necessary:
	* `delivery_note`

## Field-by-Field Explanation
* **Chemical ID** (`chemical_id`, `text`, required):
	* Enter the unique identifier for the chemical being delivered.
* **Chemical Name** (`chemical_name`, `text`, required):
	* Enter the name of the chemical being delivered.
* **Delivery Method** (`delivery_method`, `select_one`, required):
	* Select the method of delivery, such as "Delivery Date" or "Delivery Time".
* **Delivery Location** (`delivery_location`, `text`, required):
	* Enter the location where the chemical will be delivered.
* **Delivery Date** (`delivery_date`, `date`, required):
	* Enter the date of the delivery.
* **Delivery Time** (`delivery_time`, `time`, required):
	* Enter the time of the delivery.
* **Chemical Quantity** (`chemical_quantity`, `number`, required):
	* Enter the quantity of the chemical being delivered.
* **Chemical Unit** (`chemical_unit`, `text`, required):
	* Enter the unit of measurement for the chemical quantity.
* **Lab Name** (`lab_name`, `text`, required):
	* Enter the name of the laboratory receiving the chemical.
* **Lab Address** (`lab_address`, `text`, required):
	* Enter the address of the laboratory receiving the chemical.
* **Lab Phone** (`lab_phone`, `text`, required):
	* Enter the phone number of the laboratory receiving the chemical.
* **Lab Email** (`lab_email`, `text`, required):
	* Enter the email address of the laboratory receiving the chemical.
* **Lab Fax** (`lab_fax`, `text`, required):
	* Enter the fax number of the laboratory receiving the chemical.
* **Delivery Instructions** (`delivery_instructions`, `text`, required):
	* Enter any special instructions for the delivery.
* **Delivery Note** (`delivery_note`, `text`, optional):
	* Enter any additional notes about the delivery.
* **Repeated Delivery Method** (`delivery_method_repeated`, `select_multiple`, required):
	* Select multiple delivery methods, such as both "Delivery Date" and "Delivery Time".
* **Repeated Chemical Name** (`chemical_name_repeated`, `select_multiple`, required):
	* Select multiple chemical names, such as "Yes" and "No".
* **Repeated Options for Repeated Chemical Name** (`chemical_name_repeated_options`, `text`, optional):
	* Enter any additional options for the repeated chemical name.
* **Delivery Date Repeated** (`delivery_date_repeated`, `select_multiple`, required):
	* Select multiple delivery dates.
* **Repeated Options for Delivery Date** (`delivery_date_repeated_options`, `text`, optional):
	* Enter any additional options for the delivery date.
* **Repeated Options for Delivery Method** (`delivery_method_repeated_options`, `text`, optional):
	* Enter any additional options for the delivery method.
* **Chemical ID** (`chemical_id`, `text`, required):
	* Enter the unique identifier for the chemical being delivered.
