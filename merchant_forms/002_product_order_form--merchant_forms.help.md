# Product Order Form - Help Guide
## Purpose
The Product Order Form is designed to collect information for product orders, including product name, quantity, unit price, shipping address, and payment method.

## How To Complete This Form
1.  Select the payment method: This field is required to determine how the payment will be handled.
2.  Enter the product name, quantity, and unit price: These fields are used to create a record of the product being ordered.
3.  Enter the shipping address, city, and zip code: These fields are used to determine the shipping location.
4.  Enter the billing name, address, city, and zip: These fields are used to determine the billing location.
5.  Enter any additional comments or details about the order: This field can be used to include any further information about the order.

## Field-by-Field Explanation

*   **product_name** (`product_name`, text, required): Enter the name of the product being ordered.
*   **quantity** (`quantity`, number, required): Enter the quantity of the product being ordered.
*   **unit_price** (`unit_price`, number, required): Enter the price of the product per unit.
*   **shipping_address** (`shipping_address`, text, required): Enter the address where the product will be shipped.
*   **shipping_city** (`shipping_city`, text, required): Enter the city where the product will be shipped.
*   **shipping_state** (`shipping_state`, text, required): Enter the state where the product will be shipped.
*   **shipping_zip** (`shipping_zip`, text, required): Enter the zip code where the product will be shipped.
*   **billing_name** (`billing_name`, text, required): Enter the name of the person or entity being billed.
*   **billing_address** (`billing_address`, text, required): Enter the address where the billing will be sent.
*   **billing_city** (`billing_city`, text, required): Enter the city where the billing will be sent.
*   **billing_state** (`billing_state`, text, required): Enter the state where the billing will be sent.
*   **billing_zip** (`billing_zip`, text, required): Enter the zip code where the billing will be sent.
*   **total_price** (`total_price`, number, required): This field is automatically calculated based on the product name, quantity, and unit price.
*   **payment_method** (`payment_method`, select_one, required): Select the method of payment used (e.g. credit card, PayPal, bank transfer).
*   **order_comments** (`order_comments`, text, optional): Enter any additional comments about the order.
*   **order_details** (`order_details`, text, optional): Enter any further details about the order.

## Tips

*   Make sure to select a valid payment method to ensure proper processing of the order.
*   Double-check the total price to ensure it is correct.
*   Enter accurate shipping and billing information to ensure timely and correct delivery.
