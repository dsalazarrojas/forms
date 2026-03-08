<thinking>
This form is designed to collect information from customers who want to subscribe to a gardening supply service. The form will ask for customer and gardener information, delivery details, and payment methods. The form is divided into several sections, each with its own set of fields. To complete the form, please follow the steps below.
</thinking>

# Gardening Supply Subscription Form - Help Guide
## Purpose
The Gardening Supply Subscription Form is designed to collect information from customers who want to subscribe to our gardening supply service. This form helps us understand their subscription preferences and payment methods.

## How To Complete This Form
To complete the form, please follow these steps:

1. Enter your customer information, including your name and contact email address.
2. Select the delivery address for your gardening supply.
3. Choose your subscription plan (Monthly, Weekly, or Quarterly).
4. Choose the frequency of your deliveries (Monthly, Weekly, or Quarterly).
5. Enter the date you want your deliveries to start.
6. Confirm your payment method (Bank Transfer, Cash, Check, or Credit Card).
7. Optionally, you can add delivery notes if you have any special requirements.

## Field-by-Field Explanation
### Page 1: Customer Information
* **customer_name** (`customer_name`, text, required/optional): Enter your name as it appears on your ID or passport.
* **customer_email** (`customer_email`, email, required): Enter a valid email address associated with your account.
* **customer_phone** (`customer_phone`, text, optional): Enter your phone number for future contact.

### Page 2: Delivery Address
* **delivery_address** (`delivery_address`, text, required/optional): Enter the address where you want your gardening supplies delivered.
* **customer_address** (`customer_address`, text, optional): Enter the address of your customer's business or office location (if different from the delivery address).

### Page 3: Subscription Details
* **subscription_plan** (`subscription_plan`, select_one, required): Choose your subscription plan: Monthly, Weekly, or Quarterly.
* **delivery_frequency** (`delivery_frequency`, select_multiple, required): Choose the frequency of your deliveries: Monthly, Weekly, or Quarterly.
* **delivery_date** (`delivery_date`, date, required): Enter the date you want your deliveries to start.
* **start_date** (`start_date`, date, required): Enter the date you want your subscription to start.

### Page 4: Payment Method
* **payment_method** (`payment_method`, select_one, required): Choose your payment method: Bank Transfer, Cash, Check, or Credit Card.

### Page 5: Gardener Information
* **gardener_name** (`gardener_name`, text, optional): Enter the name of the gardener who will be delivering your supplies.
* **gardener_phone** (`gardener_phone`, text, optional): Enter the phone number of the gardener who will be delivering your supplies.
* **gardener_email** (`gardener_email`, email, optional): Enter the email address of the gardener who will be delivering your supplies.
* **gardener_notes** (`gardener_notes`, text, optional): Enter any notes or instructions for the gardener.

### Page 6: Additional Information
* **customer_comments** (`customer_comments`, text, optional): Enter any additional comments or requests you may have.
* **order_notes** (`order_notes`, text, optional): Enter any additional notes or instructions for your order.
* **order_total** (`order_total`, number, optional): Enter the total value of your order (if applicable).
* **customer_address_2** (`customer_address_2`, text, optional): Enter any additional address information (if necessary).
