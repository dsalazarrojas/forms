<thinking>
The Vegetable Order Form is used for customers to place orders for vegetables. 
The form allows customers to input their name, email, phone number, address, and order details.
 Customers can select multiple vegetables to add to their order. 
 The form also requires the customer to input the quantity and price of each vegetable.
</thinking>

# Vegetable Order Form - Help Guide
## Purpose
The Vegetable Order Form is used for customers to place orders for vegetables. This form helps the customer to submit their order details for processing.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your name and email address in the "Customer Name" and "Customer Email" fields respectively.
2. Enter your phone number in the "Phone Number" field.
3. Type your address in the "Customer Address" field.
4. Provide a brief description of your order in the "Order Details" field.
5. Select the vegetables you would like to order from the "Select Vegetables" dropdown list.
6. Enter the quantity of each vegetable you have selected.
7. Fill in the price of each vegetable in the "Price" field.

## Field-by-Field Explanation
### 1. Customer Name (<required>)
* **Customer Name** (`customer_name`, text, required): Please enter your name as it appears on your identification documents.

### 2. Customer Email (<optional>)
* **Customer Email** (`email`, email, optional): Enter your email address to receive updates on your order.

### 3. Phone Number (<optional>)
* **Phone Number** (`phone_number`, text, optional): Enter your phone number for us to contact you.

### 4. Customer Address (<optional>)
* **Customer Address** (`customer_address`, text, optional): Enter your address for delivery or pickup.

### 5. Order Details (<optional>)
* **Order Details** (`order_details`, text, optional): Provide a brief description of your order.

### 6. Select Vegetables (<optional>)
* **Select Vegetables** (`select_vegetables`, select_multiple, optional): Choose the vegetables you would like to order:
	+ Broccoli
	+ Carrot
	+ Kale
	+ Spinach

### 7. Quantity (<optional>)
* **Quantity** (`quantity`, number, optional): Enter the quantity of each vegetable you have selected.

### 8. Price (<optional>)
* **Price** (`price`, number, optional): Enter the price of each vegetable.

**Tips**

* Make sure to enter accurate information in all fields for efficient processing.
* Select all applicable vegetables for accurate pricing.
* Double-check your order details before submitting.
