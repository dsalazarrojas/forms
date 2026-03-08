# Subscription Order Form - Help Guide
## Purpose
The Subscription Order Form is used to collect and process subscription orders from customers or users. Please fill out the form accurately to ensure a smooth and efficient subscription process.

## How To Complete This Form
1. Fill out all required fields marked with an asterisk (\*).
2. Choose the desired subscription plan and billing cycle from the options provided.
3. Select a valid payment method and confirm the payment status.
4. Add any additional order notes or customer notes if necessary.

## Field-by-Field Explanation
* **First name** (`first_name`, text, required): Enter your first name.
* **Last name** (`last_name`, text, required): Enter your last name.
* **Email** (`email`, email, required): Enter your valid email address.
* **Phone** (`phone`, text, required): Enter your phone number.
* **Company** (`company`, text, optional): Enter your company name (if applicable).
* **Address** (`address`, text, optional): Enter your address (if applicable).
* **City** (`city`, text, required): Enter your city.
* **State** (`state`, text, required): Enter your state or province.
* **Zip** (`zip`, text, optional): Enter your zip or postal code (if applicable).
* **Subscription Plan** (`subscription_plan`, select_multiple, required): Choose one or more subscription plans from the options provided (Basic, Premium, Enterprise).
* **Billing Plan** (`billing_plan`, select_multiple, required): Choose one or more billing plans from the options provided (Monthly, Yearly).
* **Start Date** (`start_date`, date, optional): Enter the start date of your subscription (if applicable).
* **End Date** (`end_date`, date, optional): Enter the end date of your subscription (if applicable).
* **Subscription Status** (`subscription_status`, select_multiple, optional): Choose the subscription status from the options provided (Active, Inactive).
* **Billing Cycle** (`billing_cycle`, number, required): Choose the billing cycle from the options provided.
* **Price** (`price`, number, required): Enter the price of your subscription.
* **Terms and Conditions** (`terms_and_conditions`, note, optional): Read and agree to the terms and conditions of your subscription.
* **Accept Terms** (`accept_terms`, select_one, required): Choose whether you accept the terms and conditions.
* **Subscription Type** (`subscription_type`, select_one, required): Choose whether your subscription is Monthly or Yearly.
* **Product Code** (`product_code`, text, optional): Enter any product code (if applicable).
* **Customer Notes** (`customer_notes`, note, optional): Add any customer notes (if applicable).
* **Order Date** (`order_date`, date, optional): Enter the order date (if applicable).
* **Payment Method** (`payment_method`, select_one, required): Choose your preferred payment method (Bank Transfer, Credit Card).
* **Payment Status** (`payment_status`, select_one, required): Choose the payment status from the options provided (Paid, Pending).
* **Order Notes** (`order_notes`, note, optional): Add any order notes (if applicable).
