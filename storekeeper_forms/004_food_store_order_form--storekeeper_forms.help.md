# Food Store Order Form - Help Guide
## Purpose
The "Food Store Order Form" is used by storekeepers to create, edit, or manage store orders. This form captures essential information for each order, ensuring accurate and efficient order processing.

## How To Complete This Form
To complete this form, follow the steps below:

1. Enter your First Name.
2. Enter your Last Name.
3. Enter your Email.
4. Enter your Phone Number.
5. Enter your Date of Birth.
6. Enter the Order Date.
7. Select the Store ID.
8. Select the Items for the order.
9. Select the Payment Method.
10. Enter the Payment Amount.
11. (Optional) Enter any additional notes.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, required): Enter your name as it appears on your identification documents.
* **Last Name** (`last_name`, text, required): Enter your surname as it appears on your identification documents.
* **Email** (`email`, email, required): Enter your email address that we can use to contact you.
* **Phone** (`phone`, text, required): Enter your phone number that we can use to contact you.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in the format mm/dd/yyyy.
* **Order Date** (`order_date`, date, required): Enter the date you are making the order for.
* **Store ID** (`store_id`, select_one, required): Select the store ID where you will be making the order.
* **Items** (`item_ids`, select_multiple, required): Select the items you want to order.
* **Payment Method** (`payment_method`, select_multiple, required): Select the payment method you will be using for this order.
* **Payment Amount** (`payment_amount`, number, required): Enter the total amount you will be paying for this order.
* **Note** (`note`, note, optional): Enter any additional comments or notes about this order.

## Tips
* Make sure to enter all required fields.
* Double-check your selections before submitting the form.
* If you have any issues or need assistance, please contact us.
