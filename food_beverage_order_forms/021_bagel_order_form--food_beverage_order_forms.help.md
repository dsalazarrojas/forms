<thinking>
This form is designed to collect customer information and order details for bagels. The form will guide the user through several steps to collect all necessary information. 
</thinking>

# Bagel Order Form - Help Guide
## Purpose
This form is for customers to place an order for bagels. It will collect information about the customer, bagel selection, spread and toppings, delivery information, and payment method.

## How To Complete This Form
1. Fill out the customer information section with your name, email, and phone number.
2. Select the types of bagels you would like to order and specify the quantity for each variety.
3. Choose your preferred spread and toppings by selecting all that apply.
4. If you have any special instructions or dietary needs, please include them in the special instructions field.
5. Choose your preferred delivery date and time.
6. Enter your delivery address.
7. Select your payment method.
8. Finally, confirm that the order is accurate and complete.

## Field-by-Field Explanation
- **Full Name** (`customer_name`, text, required): Enter your full name as you would like it to be displayed on your order.
- **Email Address** (`customer_email`, email, required): Enter your email address for us to contact you with order updates.
- **Phone Number** (`customer_phone`, phone, required): Enter your phone number so we can contact you with order updates or special instructions.
- **Bagel Types (Select Quantities)** (`bagel_types`, text, required): Select the types of bagels you would like to order and specify the quantity for each variety.
- **Plain Bagels - Quantity** (`plain_bagels`, integer, optional): Enter the quantity of plain bagels you would like to order.
- **Everything Bagels - Quantity** (`everything_bagels`, integer, optional): Enter the quantity of everything bagels you would like to order.
- **Sesame Bagels - Quantity** (`sesame_bagels`, integer, optional): Enter the quantity of sesame bagels you would like to order.
- **Poppy Seed Bagels - Quantity** (`poppy_bagels`, integer, optional): Enter the quantity of poppy seed bagels you would like to order.
- **Onion Bagels - Quantity** (`onion_bagels`, integer, optional): Enter the quantity of onion bagels you would like to order.
- **Garlic Bagels - Quantity** (`garlic_bagels`, integer, optional): Enter the quantity of garlic bagels you would like to order.
- **Sweet Varieties - Quantity** (`sweet_bagels`, integer, optional): Enter the quantity of sweet bagel varieties you would like to order.
- **Spread Preference** (`spread_preference`, select_multiple, optional): Select all the spreads and toppings you would like on your bagels.
- **Cream Cheese Type (if selected)** (`cream_cheese_type`, select_one, optional): If you selected cream cheese, choose the type of cream cheese you would like.
- **Bagel Toasting Preference** (`toasting_preference`, select_one, required): Choose the level of toasting you would like for your bagels.
- **Desired Delivery Date** (`delivery_date`, date, required): Enter the date you would like to receive your order.
- **Preferred Delivery Time** (`delivery_time`, time, optional): Enter the time you would like to receive your order.
- **Delivery Address** (`delivery_address`, text, required): Enter the address where you would like to receive your order.
- **Special Instructions or Dietary Needs** (`special_instructions`, text, optional): If you have any special instructions or dietary needs, please include them here.
- **Order Total (Calculated)** (`order_total`, decimal, optional): This field will be populated automatically with the total cost of your order.
- **Payment Method** (`payment_method`, select_one, required): Choose your preferred payment method.
- **I Confirm This Order is Accurate and Complete** (`order_confirmation`, select_one, required): Confirm that the order is accurate and complete.
