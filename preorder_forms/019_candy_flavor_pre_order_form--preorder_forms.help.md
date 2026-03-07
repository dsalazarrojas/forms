<thinking>

This form is designed to collect information from customers who want to preorder candy flavors. The form will guide the customer through a series of fields to gather essential details such as contact information, flavor preferences, delivery details, and payment options. The form is divided into multiple pages to make it easier for customers to provide the necessary information without feeling overwhelmed. By following this guide, customers will be able to submit their preorders successfully.

</thinking>

# Candy Flavor Pre Order Form - Help Guide
## Purpose
This form is designed to collect information from customers who want to preorder candy flavors. It will help you determine the customer's contact information, flavor preferences, and delivery details.

## How To Complete This Form

1. Fill out your first name and last name in the **First Name** and **Last Name** fields.
2. Enter your email address in the **Email Address** field.
3. Provide your phone number in the **Phone Number** field.
4. Select the first flavor you would like to order from the **First Flavor Choice** dropdown menu.
5. Enter the quantity of the first flavor you would like to order in the **Quantity for First Flavor** field.
6. If you would like to order more flavors, select the next flavor from the **Second Flavor Choice** dropdown menu and enter the quantity in the **Quantity for Second Flavor** field.
7. Select your preferred candy size from the **Candy Size** dropdown menu.
8. Check any dietary restrictions you may have in the **Dietary Requirements** field.
9. Choose your preferred packaging preference from the **Packaging Preference** dropdown menu.
10. Select your preferred fulfillment method from the **Fulfillment Method** dropdown menu.
11. If applicable, enter your preferred pickup or delivery date.
12. Enter your special instructions or delivery notes in the **Special Instructions** field.
13. If you would like to include a gift message, enter it in the **Gift Message** field.
14. Select your preferred payment method from the **Payment Method** dropdown menu.
15. Enter the total quantity of candies you would like to order in the **Total Quantity** field.
16. Enter any additional details in the **Order Notes** field.
17. Review and agree to the **Terms and Conditions** by selecting **Yes - I agree**.
18. Finally, enter the date of your order in the **Order Date** field.

## Field-by-Field Explanation

* **Customer First Name** (`customer_first_name`, text, required): Enter your first name.
* **Customer Last Name** (`customer_last_name`, text, required): Enter your last name.
* **Email Address** (`customer_email`, email, required): Enter your email address for order confirmation.
* **Phone Number** (`customer_phone`, text, required): Enter your contact phone number.
* **Delivery Address** (`customer_address`, text, optional): Enter your full address for delivery.
* **City** (`customer_city`, text, optional): Enter the city for delivery.
* **ZIP Code** (`customer_zip`, text, optional): Enter your ZIP code for delivery.
* **First Flavor Choice** (`flavor_selection_1`, select_one, required): Select the first flavor you would like to order.
* **Quantity for First Flavor** (`quantity_flavor_1`, number, required): Enter the quantity of the first flavor.
* **Second Flavor Choice** (`flavor_selection_2`, select_one, optional): Select the second flavor you would like to order.
* **Quantity for Second Flavor** (`quantity_flavor_2`, number, optional): Enter the quantity of the second flavor.
* **Third Flavor Choice** (`flavor_selection_3`, select_one, optional): Select the third flavor you would like to order.
* **Quantity for Third Flavor** (`quantity_flavor_3`, number, optional): Enter the quantity of the third flavor.
* **Candy Size** (`candy_size`, select_one, required): Select your preferred candy size.
* **Dietary Requirements** (`dietary_requirements`, select_multiple, required): Check any dietary restrictions you may have.
* **Packaging Preference** (`packaging_preference`, select_one, required): Choose your preferred packaging preference.
* **Fulfillment Method** (`fulfillment_method`, select_one, required): Select your preferred fulfillment method.
* **Preferred Pickup Date** (`pickup_date`, date, optional): Enter the date you would like to pickup your order.
* **Preferred Delivery Date** (`delivery_date`, date, optional): Enter the date you would like to deliver your order.
* **Special Instructions** (`special_instructions`, text, optional): Enter any special instructions or delivery notes.
* **Gift Message** (`gift_message`, text, optional): Enter a gift message if applicable.
* **Payment Method** (`payment_method`, select_one, required): Select your preferred payment method.
* **Total Quantity** (`total_quantity`, number, required): Enter the total quantity of candies you would like to order.
* **Order Notes** (`order_notes`, text, optional): Enter any additional details.
* **Terms and Conditions Accepted** (`terms_accepted`, select_one, required): Review and agree to the terms and conditions.
* **Order Date** (`order_date`, date, required): Enter the date of your order.
