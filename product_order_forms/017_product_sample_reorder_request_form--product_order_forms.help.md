# Product Sample Reorder Request Form - Help Guide
## Purpose
This form is used to request the reorder of product samples for customers. It's essential for providing accurate information to the customer service team to process the reorder efficiently.

## How To Complete This Form
To complete this form, follow these steps:
1. Ensure that you have already spoken with the customer and have their approval to proceed with the reorder.
2. Make sure you haven't already submitted this form for the same product and customer to avoid duplicate requests.

## Field-by-Field Explanation
* **Product Sample Reorder Request Form** (`product_sample_reorder_request_form`, text, required): This is the main form title that indicates the purpose of the form.
* **Sample ID** (`sample_id`, number, optional): Enter the unique identifier for the sample.
* **Product ID** (`product_id`, select_one, optional):
	+ Select 'Yes' if the product is a reorderable product.
	+ Select 'No' otherwise.
* **Sample Quantity** (`sample_quantity`, number, optional): Enter the desired quantity of the sample to be reordered.
* **Reorder Reason** (`reorder_reason`, text, optional): Briefly describe the reason for the reorder.
* **Reorders** (`reorders`, select_multiple, optional):
	+ Select 'Yes' if the product requires immediate reordering.
	+ Select 'No' otherwise.
* **Customer Name** (`customer_name`, text, optional): Enter the customer's name.
* **Order Date** (`order_date`, date, optional): Enter the date the order is needed.
* **Order Time** (`order_time`, time, optional): Enter the time the order is needed.
