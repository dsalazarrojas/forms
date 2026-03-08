# Fluffy Cakes Order Form - Help Guide
## Purpose
The Fluffy Cakes Order Form is designed for customers to place orders for custom cakes and other bakery products. It collects necessary information to fulfill their orders accurately and efficiently.

## How To Complete This Form
1. Fill out the form with your information and order details.
2. Select the desired delivery date and time.
3. Choose your preferred payment method.
4. Add any special instructions or messages for the bakery staff.
5. Review your order carefully before submitting it.

## Field-by-Field Explanation

* **Customer Info** (`customer_info`, `text`, required/optional): Enter your name, contact information, and any other relevant details.
* **Address** (`address`, `text`, required/optional): Type in your address where you'd like the order delivered.
* **Date** (`date`, `date`, required/optional): Choose the date you'd like to pick up or have your order delivered on.
* **Time** (`time`, `time`, required/optional): Select the time for delivery or pickup.
* **Order Details** (`order_details`, `text`, required/optional): Enter any specific details about your order.
* **Contact Number** (`contact_number`, `text`, required/optional): Enter your phone number in case the bakery needs to contact you.
* **E-mail** (`email`, `email`, required/optional): Enter your email address in case the bakery needs to send you updates.
* **Delivery Address** (`delivery_address`, `text`, required/optional): Enter the address where you'd like the order delivered.
* **Delivery Date** (`delivery_date`, `date`, required/optional): Choose the date you'd like to have your order delivered.
* **Delivery Time** (`delivery_time`, `time`, required/optional): Select the time for delivery.
* **Special Instructions** (`special_instructions`, `text`, required/optional): Add any special requests or instructions for the bakery staff.
* **Order Type** (`order_type`, `select_one`, required/optional): Choose the type of order: Cake, Cake with Ice Cream, Cake with Ice Cream and Fruit, etc.
* **Cake Size** (`cake_size`, `select_multiple`, required/optional): Choose the size of the cake: Small, Large, Extra Large.
* **Cake Type** (`cake_type`, `select_multiple`, required/optional): Choose the type of cake: Cheesecake, Chocolate Cake, Lemon Cake, etc.
* **Cake Flavor** (`cake_flavor`, `select_multiple`, required/optional): Choose the flavor of cake: Vanilla, Chocolate, Strawberry, etc.
* **Message** (`message`, `text`, required/optional): Enter a message for the bakery staff.
* **Order Notes** (`order_notes`, `text`, required/optional): Enter any other notes or comments about your order.
* **Customer Message** (`customer_message`, `text`, required/optional): Enter a message for the bakery staff.
* **Form Submit** (`form_submit`, `select_one`, required/optional): Choose to submit or reset the form.
* **Special Instructions 2** (`special_instructions_2`, `text`, required/optional): Add any special requests or instructions for the bakery staff.
* **Delivery Instructions** (`delivery_instructions`, `text`, required/optional): Add any delivery instructions or requests.
* **Order Comments** (`order_comments`, `text`, required/optional): Enter any comments or notes about your order.
* **Cake Price** (`cake_price`, `select_one`, required/optional): Choose the price of the cake: 5, 10, 15, 20, 25.
* **Payment Method** (`payment_method`, `select_multiple`, required/optional): Choose the payment method: Cash, Credit Card.
* **Special Instructions 3** (`special_instructions_2`, `text`, required/optional): (This field seems to be a duplicate of `special_instructions_2` and will not be included in the final guide)
