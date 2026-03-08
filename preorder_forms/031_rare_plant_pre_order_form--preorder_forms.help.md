# Rare Plant Pre Order Form - Help Guide
## Purpose
The Rare Plant Pre Order Form is designed to collect information for pre-ordering rare plants. This form ensures that customers provide accurate and complete information for their pre-order.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide your user information in the "User information" section.
2. Enter the plant information in the "Plant information" section.
3. Select your payment method in the "Payment information" section.
4. Enter the delivery information in the "Delivery information" section.
5. Confirm your payment method, quantity, delivery date, and delivery address.

## Field-by-Field Explanation

### User information
* **User information** (`user_info`, `text`, required): Please enter your name and contact information here.

### Plant information
* **Plant name** (`plant_name`, `text`, required): Please enter the name of the plant you are interested in.
* **Plant price** (`plant_price`, `number`, required): Please enter the price of the plant you are interested in.
* **Quantity** (`plant_quantity`, `number`, required): Please enter the quantity of the plant you are interested in.

### Payment information
* **Payment method** (`payment_method`, `select_one`, required): Please select the payment method you would like to use. Options include Card, PayPal, Stripe, Apple Pay, Google Pay, and Bank transfer.
* **Card number** (`payment_card_number`, `text`, required): Please enter your card number.
* **Expiration date** (`payment_expiration_date`, `date`, required): Please enter the expiration date of your card.
* **CVC** (`payment_cvc`, `text`, required): Please enter the CVC of your card.
* **Payment amount** (`payment_amount`, `number`, required): Please enter the total payment amount.

### Delivery information
* **Delivery date** (`delivery_date`, `date`, required): Please enter the delivery date you prefer.
* **Delivery time** (`delivery_time`, `time`, required): Please enter the delivery time you prefer.
* **Delivery address** (`delivery_address`, `text`, required): Please enter the delivery address you prefer.

### Confirmation
* **Confirm payment method** (`confirm_payment_method`, `select_multiple`, required): Please confirm your payment method.
* **Confirm quantity** (`confirm_quantity`, `select_one`, required): Please confirm the quantity of the plant.
* **Confirm delivery date** (`confirm_delivery_date`, `select_one`, required): Please confirm the delivery date.
* **Confirm delivery address** (`confirm_delivery_address`, `select_multiple`, required): Please confirm the delivery address.
* **Confirm delivery time** (`confirm_delivery_time`, `select_one`, required): Please confirm the delivery time.
* **Submit** (`submit`, `text`, required): Please submit your order.

**Tips:**

* Double-check your input for accuracy before submitting the form.
* Make sure to select the correct payment method and confirm it.
* Enter the correct quantity and confirm it.
* Enter the correct delivery date and confirm it.
* Enter the correct delivery address and confirm it.
* Make sure to enter the correct payment amount.
* Make sure to enter the correct expiration date and CVC of your card.
