# medical_order_form - Help Guide
## Purpose
The medical order form is a critical tool for healthcare professionals to create, manage, and track medical orders. This form helps healthcare providers to gather and document patient information, medical products, and order details accurately and efficiently.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in the Order Details section with all the necessary information about the patient's order.
2. Provide patient information in the patient_info section.
3. In the Medical Products section, select all the required medical products for the order.
4. Enter the quantity and price of each selected medical product.
5. Add any additional order notes in the Order Notes section.
6. Choose the submit order option to finalize the order.
7. Confirm or deny the contact info in the Contact Info section.
8. Select the payment terms in the Payment Terms section.

## Field-by-Field Explanation
* **Order Details** (`order_details`, `text`, required: false): This section is where you enter all the necessary information about the patient's order, such as order date, order type, etc.
* **patient_info** (`patient_info`, `text`, required: false): Enter patient information, such as name, date of birth, and contact details.
* **order_summary** (`order_summary`, `text`, required: false): In this section, provide a summary of the order, including any relevant medical details or concerns.
* **Medical Products** (`medical_products`, `select_multiple`, required: false): Select all the required medical products for the order from the available options.
* **Quantity** (`quantity`, `number`, required: false): Enter the quantity of each selected medical product.
* **Price** (`price`, `number`, required: false): Enter the price of each selected medical product.
* **Order Notes** (`order_notes`, `note`, required: false): Add any additional notes or comments about the order.
* **Submit Order** (`submit_order`, `select_one`, required: true): Select the submit order option to finalize the order and send it for processing.
* **Contact Info** (`contact_info`, `select_one`, required: false): Confirm or deny the contact info for the patient, as necessary.
* **Payment Terms** (`payment_terms`, `select_multiple`, required: false): Select the payment terms for the order, as required.
