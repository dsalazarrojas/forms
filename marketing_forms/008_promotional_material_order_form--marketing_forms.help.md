<thinking>
The form purpose is to enable users to order promotional materials from the company. The form will be used by customers or potential customers to provide information about the promotional materials they need. The form should not be completed by employees or internal staff unless they are acting as a customer representative or for internal testing purposes. The form is intended for external customers and should not be filled out for test runs or internal use. It's essential to ensure that the form is completed correctly and in the correct format to ensure that the order is processed accurately and efficiently.
</thinking>

# promotional_material_order_form - Help Guide
## Purpose
The promotional material order form is a form used to order promotional materials from the company. This form should be used by customers or potential customers to provide information about the promotional materials they need.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the **promotional material** information in the text field. This is where you provide a description of the promotional material you are interested in ordering.
2. Enter the **quantity** you want to order. This will determine how many units of the promotional material you need.
3. Select the **color** of the promotional material from the options provided.
4. Select the **size** of the promotional material from the options provided.
5. Select the **material type** from the options provided. You can select multiple options if needed.
6. Enter the **quantity ordered**. This is where you enter the quantity of the promotional material you selected in step 2.
7. Enter the **cost** of the promotional material.
8. Enter a **material description** for the promotional material you are ordering.
9. Enter your **customer name** to associate with the order.
10. Enter your **customer email** address. This will be used to contact you with order updates.
11. Enter your **customer phone** number. This will be used to contact you for any additional information required.

## Field-by-Field Explanation
* **promotional material** (`promotional_material`, `text`, required: false): A brief description of the promotional material you are interested in ordering.
* **quantity** (`quantity`, `number`, required: false): The number of units of the promotional material you need.
* **color** (`color`, `select_one`, required: false):
	+ Select the color of the promotional material.
* **size** (`size`, `select_multiple`, required: false):
	+ Select the size of the promotional material.
* **material_type** (`material_type`, `select_multiple`, required: false):
	+ Select the type of material (if multiple options are required, you can select multiple).
* **quantity_ordered** (`quantity_ordered`, `number`, required: false): Confirm the quantity of the promotional material you selected.
* **cost** (`cost`, `number`, required: false): The cost of the promotional material.
* **material_description** (`material_description`, `text`, required: false): A detailed description of the promotional material you are ordering.
* **customer_name** (`customer_name`, `text`, required: false): Enter your name associated with the order.
* **customer_email** (`customer_email`, `email`, required: false): Enter your email address associated with the order.
* **customer_phone** (`customer_phone`, `text`, required: false): Enter your phone number associated with the order.
