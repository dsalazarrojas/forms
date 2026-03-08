# Cake - Help Guide
## Purpose
This form is used for customers to submit their cake orders. It collects vital information such as customer details, order specifics, and payment method to facilitate smooth order processing and pickup.

## How To Complete This Form
To fill out the form, follow these steps:

1.  Enter your customer name for order confirmation.
2.  Provide your contact email for order and pickup details to be sent to.
3.  Select the cake type that suits your preference.
4.  Choose the desired size of the cake, indicating the number of servings.
5.  Specify the pickup date for collection.
6.  If you have any special decoration requests or messages, enter them in this field.
7.  If applicable, mention any dietary requirements such as allergies or dietary restrictions.
8.  Finally, choose your preferred payment method: card or cash on pickup.

## Field-by-Field Explanation
*  **Customer name (Customer name)** (`customer_name`, text, required): Enter your name as the customer.
*  **Contact email (Contact email)** (`contact_email`, email, required): This is the email we will use to send order and pickup details.
*  **Cake type (Cake type)** (`cake_type`, text, required): Choose the flavor and style of cake you desire.
*  **Cake size or servings (Size)** (`size`, number, required): Indicate the number of servings you want your cake to have.
*  **Pickup date (Pickup date)** (`pickup_date`, date, required): Enter the date you plan to collect your cake order.
*  **Decoration requests (Decoration requests)** (`decoration_requests`, text, optional): Add any special messages or designs you'd like on your cake.
*  **Dietary requirements (Dietary requirements)** (`dietary_requirements`, text, optional): Mention any allergies or dietary restrictions we should be aware of.
*  **Payment method (Payment method)** (`payment_method`, select_one, required): Choose between paying with a card or cash at the time of pickup.
*  **Special requests (Special requests)** (not present in the original form, but assumed for completeness and to mirror the field in "Decoration requests"): Add any other special requests you have.
