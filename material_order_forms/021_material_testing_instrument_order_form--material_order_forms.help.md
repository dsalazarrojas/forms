# Material Testing Instrument Order Form - Help Guide
## Purpose
This form is designed to collect information from customers for material testing instrument orders. It gathers details about the instrument's ID, type, model, price, quantity, and other relevant information.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the relevant pages from the drop-down menu.
2. Fill in the required fields:
	* Instrument ID: Enter the unique identifier of the instrument.
	* Customer Name: Enter the customer's name.
	* Customer Email: Enter the customer's email.
	* Order Date: Choose the date for the order.
3. Optional fields can be filled in based on the customer's specific needs:
	* Instrument Type: Choose the type of instrument (Yes/No).
	* Instrument Model: Enter the model of the instrument.
	* Quantity: Enter the quantity required.
	* Price: Enter the price of the instrument.
	* Customer Phone: Enter the customer's phone number.
	* Customer Address: Enter the customer's address.
	* Material Testing: Choose whether material testing is required (Yes/No).
	* Instrument Testing: Choose whether instrument testing is required (Yes/No).
	* Material Sourcing: Choose whether material sourcing is required (Yes/No).
	* Instrument Requisition: Choose whether instrument requisition is required (Yes/No).
	* Instrument Return: Choose whether instrument return is required (Yes/No).
	* Additional Comments: Enter any additional comments or notes about the order.

## Field-by-Field Explanation
* **Instrument ID** (`instrument_id`, number, required): Enter the unique identifier of the instrument.
* **Instrument Type** (`instrument_type`, select one, required): Choose the type of instrument (Yes/No).
* **Instrument Model** (`instrument_model`, text, required): Enter the model of the instrument.
* **Quantity** (`quantity`, number, required): Enter the quantity required.
* **Instrument Price** (`instrument_price`, number, required): Enter the price of the instrument.
* **Customer Name** (`customer_name`, text, required): Enter the customer's name.
* **Customer Email** (`customer_email`, email, required): Enter the customer's email.
* **Customer Phone** (`customer_phone`, text, required): Enter the customer's phone number.
* **Customer Address** (`customer_address`, text, required): Enter the customer address.
* **Order Date** (`order_date`, date, required): Choose the date for the order.
* **Order Note** (`order_note`, note, required): Enter any notes or comments about the order.
* **Material Testing** (`material_testing`, select one, required): Choose whether material testing is required (Yes/No).
* **Instrument Testing** (`instrument_testing`, select multiple, required): Choose whether instrument testing is required (Yes/No).
* **Material Sourcing** (`material_sourcing`, select multiple, required): Choose whether material sourcing is required (Yes/No).
* **Instrument Requisition** (`instrument_requisition`, select multiple, required): Choose whether instrument requisition is required (Yes/No).
* **Instrument Return** (`instrument_return`, select multiple, required): Choose whether instrument return is required (Yes/No).
* **Additional Comments** (`additional_comments`, text, required): Enter any additional comments or notes about the order.
