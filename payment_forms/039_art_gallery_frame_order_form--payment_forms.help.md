# Art Gallery Frame Order Form - Help Guide
## Purpose
The Art Gallery Frame Order Form is used to collect information for a customer's art gallery frame order.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in your full name as the customer.
2. Provide your email address for invoice and receipt purposes.
3. List the items and prices of the order items you'd like to purchase.
4. Enter the subtotal amount of the order before tax.
5. Calculate and enter the tax amount applied to the order.
6. Enter the total amount charged to the customer.
7. Choose your preferred payment method (Credit card, Bank transfer, or Cash on pickup).
8. (Optional) Enter a transaction ID for reference, if you have one.
9. Select how you would like to receive your order (Pickup or Delivery).
10. Add any special instructions or notes to your order.

## Field-by-Field Explanation
### 1. **Customer name**: 
* **Customer name** (`customer_name`, `text`, required): Please enter your full name as the customer.

### 2. **Contact email**: 
* **Contact email** (`contact_email`, `email`, required): Enter your valid email address for invoice and receipt purposes.

### 3. **Order items**: 
* **Order items** (`order_items`, `text`, required): List the items you'd like to purchase, including prices.

### 4. **Subtotal amount**: 
* **Subtotal amount** (`subtotal`, `number`, required): Enter the total amount before tax.

### 5. **Tax amount**: 
* **Tax amount** (`tax`, `number`, required): Enter the tax amount applied to the order.

### 6. **Total amount**: 
* **Total amount** (`total_amount`, `number`, required): This is the total amount charged to the customer, which includes tax.

### 7. **Payment method**: 
* **Payment method** (`payment_method`, `select_one`, required): Choose one of the following payment methods: Credit card, Bank transfer, or Cash on pickup.

### 8. **Transaction ID** (Optional):
* **Transaction ID** (`transaction_id`, `text`, optional): If you have a transaction ID, please enter it for reference.

### 9. **Pickup or delivery**: 
* **Pickup or delivery** (`pickup_or_delivery`, `select_one`, required): Select how you would like to receive your order: Pickup or Delivery.

### 10. **Additional notes**: 
* **Additional notes** (`additional_notes`, `text`, optional): Add any special instructions or notes about your order.
