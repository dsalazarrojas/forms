<thinking>
This form is a tool for processing orders for marine corps uniforms. The form collects information about the customer, including their name, rank, duty title, unit assignment, and shipping details. It also captures information about the payment type and method, as well as any order notes or comments. The form's purpose is to gather all the necessary information for processing and fulfilling the order efficiently. I will ensure that each field explanation is accurate and concise, without inventing unsupported business logic. I will also check for duplication of information to ensure the guide is not redundant.
</thinking>

# Marine Corps Uniform Order Form - Help Guide
## Purpose
The Marine Corps Uniform Order Form is a tool used to process orders for marine corps uniforms.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your personal details, including your first name, last name, rank, duty title, and unit assignment.
2. Provide your contact information, including phone number and email.
3. Select your payment type and method.
4. Enter the shipping details, including address, city, state, zip, and country.
5. Enter the order items, comments, and notes.
6. Set the order status and submit the form.

## Field-by-Field Explanation

* **Customer First Name** (`customer_first_name`, `text`, required/optional): Enter your first name.
* **Customer Last Name** (`customer_last_name`, `text`, required/optional): Enter your last name.
* **Customer Rank** (`customer_rank`, `select_one`, required/optional): Select your rank (O-1, O-2, or O-3).
* **Customer Duty Title** (`customer_duty_title`, `select_one`, required/optional): Select your duty title (Officer, Warrant Officer, or Enlisted).
* **Unit Assignment** (`customer_unit`, `select_one`, required/optional): Select your unit assignment (1st, 2nd, or 3rd).
* **Date Of Birth** (`customer_date_of_birth`, `date`, required/optional): Enter your date of birth in the format DD/MM/YYYY.
* **Customer Phone** (`customer_phone`, `text`, required/optional): Enter your phone number.
* **Customer Email** (`customer_email`, `email`, required/optional): Enter your email.
* **Customer Shipping Address** (`customer_shipping_address`, `text`, required/optional): Enter your shipping address.
* **Customer Shipping City** (`customer_shipping_city`, `text`, required/optional): Enter your shipping city.
* **Customer Shipping State** (`customer_shipping_state`, `text`, required/optional): Enter your shipping state.
* **Customer Shipping Zip** (`customer_shipping_zip`, `text`, required/optional): Enter your shipping zip.
* **Customer Shipping Country** (`customer_shipping_country`, `text`, required/optional): Enter your shipping country.
* **Payment Type** (`payment_type`, `select_one`, required/optional): Select your payment type (Cash, Credit Card, or Bank Draft).
* **Total Cost** (`total_cost`, `number`, required/optional): Enter the total cost.
* **Payment Method** (`payment_method`, `select_one`, required/optional): Select your payment method (PayPal, Check, or Cash).
* **Order Items** (`order_items`, `text`, required/optional): Enter the order items.
* **Order Comments** (`order_comments`, `text`, required/optional): Enter any comments about the order.
* **Order Notes** (`order_notes`, `text`, required/optional): Enter any notes about the order.
* **Order Date** (`order_date`, `date`, required/optional): Enter the order date in the format DD/MM/YYYY.
* **Order Time** (`order_time`, `time`, required/optional): Enter the order time.
* **Order Status** (`order_status`, `select_one`, required/optional): Select the order status (Pending, Completed, or Cancelled).
* **Form Submitter** (`form_submitter`, `text`, required/optional): Enter your name.
* **Order Number** (`order_number`, `text`, required/optional): Enter the order number.
