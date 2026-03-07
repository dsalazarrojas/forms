<thinking>
This form is intended for customers to pre-order a custom guitar model. The form will guide them through selecting the guitar's model number, builder, finish, neck width, string length, and pickup selection. This form should not be filled out by customers who have already placed an order for a custom guitar model, as it is intended for new pre-orders.
</thinking>

# guitar_model_pre_order_form - Help Guide
## Purpose
This form is for customers who want to pre-order a custom guitar model. Select the options that best fit your needs and we will create your custom guitar.

## How To Complete This Form
To complete this form:

1. Select the model number of the guitar model you are interested in pre-ordering.
2. Choose the builder of your guitar from the available options.
3. Select the finish for your guitar.
4. Choose the width of the neck.
5. Select the string length for your guitar.
6. Choose the type of pickup selection you want on your guitar.
7. (Optional) Add any notes for your pickup selection.
8. (Optional) Add any additional notes for your pickup selection.

## Field-by-Field Explanation
* **Model Number** (`model_number`, text, required: false):
	+ Enter the model number of the guitar model you are interested in pre-ordering.
* **Builder** (`builder`, select_one, required: false):
	+ Choose the builder of your guitar from the options: Gibson, Fender, Taylor.
* **Finish** (`finish`, select_multiple, required: false):
	+ Select the finish for your guitar. Options include Gloss, Satin, and Semi-gloss.
* **Neck Width** (`neck_width`, number, required: false):
	+ Enter the width of the neck in inches.
* **String Length** (`string_length`, select_one, required: false):
	+ Choose the string length for your guitar from the options: 24.75, 25.5, 27.
* **Pickup Selection** (`pickup_selection`, select_multiple, required: false):
	+ Select the type of pickup you want on your guitar. Options include Bridge, Humbucker, and Singlecoil.
* **Pickup Selection Note** (`pickup_selection_note`, note, required: false):
	+ Add any notes about your pickup selection.
* **Pickup Selection Note 2** (`pickup_selection_note_2`, note, required: false):
	+ Add any additional notes about your pickup selection.
