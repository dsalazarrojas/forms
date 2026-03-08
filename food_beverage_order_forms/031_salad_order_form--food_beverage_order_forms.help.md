# salad_order_form - Help Guide
## Purpose
The salad_order_form is a user-facing form designed to collect information from customers to place salad orders. This form helps the customer choose their desired salad size, protein, and total price. 

## How To Complete This Form
To complete this form, follow these steps:
- Fill out the form with your desired salad options.
- Select your preferred salad size from the dropdown menu.
- Choose your preferred protein(s) from the list.
- Enter the total price for your order (optional).
- Click the "Submit" button to complete your order.

## Field-by-Field Explanation
- **Order Details** (`order_details`, text, required: false): Enter a brief description of your order.
- **Select Salad** (`select_salad`, select_one, required: false): Choose between "small salad", "large salad", and "extra large salad" for your order.
  Example: If you want a small salad, select "small salad".
- **Select Protein** (`select_protein`, select_multiple, required: false): Choose your preferred protein(s) for your salad.
  Example: If you want chicken and steak, select both "chicken" and "steak".
- **Select Size** (`select_size`, select_one, required: false): Choose your preferred salad size from "small", "medium", and "large".
- **Total Price** (`total_price`, number, required: false): Enter the total price for your order.
  Example: Enter the total price if you want to specify it manually.
- **Submit** (`submit`, note, required: false): Click this button to complete and submit your order.
- **Customer Name** (`customer_name`, text, required: false): Enter your name.
- **Customer Phone** (`customer_phone`, text, required: false): Enter your phone number.
  Example: If you want to provide your contact information, fill out this field.
