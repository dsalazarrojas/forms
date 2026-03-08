# COVID 19 Restaurant Online Ordering Template - Help Guide
## Purpose
This form is designed to help customers place orders for their meals at our restaurant. It provides options for various aspects of the order, such as order date, time, type, and payment method.

## How To Complete This Form
1. Fill out the required fields marked with an asterisk (*). These fields are essential for processing your order.
2. Review the available options carefully and select the correct choices for each field.
3. Double-check your information before submitting the form.
4. If you have any special requests or comments, you can add them in the "Additional Comments" field.

## Field-by-Field Explanation
### Order Information
* **Order Date** (`order_date`, `date`, *): Date of order
* **Order Time** (`order_time`, `time`, *): Preferred pickup or delivery time
* **Order Type** (`order_type`, `select_one`, *): Select one of the following options:
	+ Pickup
	+ Delivery
	+ Dine-in

### Customer Information
* **First Name** (`customer_first_name`, `text`, *): Legal first name
* **Last Name** (`customer_last_name`, `text`, *): Legal last name
* **Email Address** (`customer_email`, `email`, *): For order confirmation
* **Phone Number** (`customer_phone`, `text`, *): Contact number

### Delivery Information
* **Delivery Address** (`delivery_address`, `text`, ): Street address for delivery (optional)
* **Delivery City** (`delivery_city`, `text`, ): City (optional)
* **Delivery State** (`delivery_state`, `text`, ): State (optional)
* **Delivery ZIP Code** (`delivery_zip`, `text`, ): Postal code (optional)
* **Delivery Instructions** (`delivery_instructions`, `text`, ): Gate codes, building info, etc. (optional)

### Meal Selection
* **Subscription Plan** (`subscription_plan`, `select_one`, *): Select meal plan:
	+ Weekly Meal Plan
	+ Bi-weekly Meal Plan
	+ Monthly Meal Plan
	+ One-time Order
* **Meal Preference** (`meal_preference`, `select_one`, *): Type of cuisine:
	+ American
	+ Italian
	+ Mexican
	+ Asian
	+ Mediterranean
	+ Vegetarian
	+ Vegan
	+ Mixed Variety
* **Dietary Restrictions** (`dietary_restrictions`, `select_multiple`, *): Select all that apply:
	+ None
	+ Gluten-free
	+ Dairy-free
	+ Nut allergy
	+ Shellfish allergy
	+ Vegetarian
	+ Vegan
	+ Keto
	+ Low-carb
	+ Halal
	+ Kosher
* **Number of Servings** (`number_of_servings`, `number`, *): How many people
* **Appetizers** (`appetizers`, `select_multiple`, ): Select appetizers:
	+ None
	+ Garlic Bread
	+ Caesar Salad
	+ Soup of the Day
	+ Spring Rolls
	+ Nachos
	+ Wings
	+ Bruschetta
* **Main Course** (`main_course`, `select_one`, *): Select main dish:
	+ Grilled Chicken
	+ Salmon
	+ Beef Steak
	+ Pasta Primavera
	+ Vegetarian Bowl
	+ Burger
	+ Fish and Chips
	+ Chef Special
* **Side Dish** (`side_dish`, `select_one`, *): Select side:
	+ French Fries
	+ Rice Pilaf
	+ Steamed Vegetables
	+ Mashed Potatoes
	+ Garden Salad
	+ Coleslaw
	+ Onion Rings
* **Dessert** (`dessert`, `select_one`, ): Select dessert:
	+ None
	+ Chocolate Cake
	+ Cheesecake
	+ Ice Cream
	+ Fruit Salad
	+ Tiramisu
	+ Cookie Platter
* **Beverage** (`beverage`, `select_one`, ): Select drink:
	+ Water
	+ Soda
	+ Iced Tea
	+ Lemonade
	+ Juice
	+ Coffee
	+ Beer
	+ Wine

### Payment Information
* **Payment Method** (`payment_method`, `select_one`, *): Select one of the following options:
	+ Credit Card
	+ Debit Card
	+ Cash on Pickup
	+ PayPal
	+ Apple Pay
	+ Google Pay
* **Tip Amount** (`tip_amount`, `number`, ): Optional tip for staff
* **Promo Code** (`promo_code`, `text`, ): If you have one
* **Contactless Preference** (`contactless_preference`, `select_one`, ): Select one of the following options:
	+ Contactless delivery preferred
	+ Standard delivery
	+ Leave at door
	+ Hand to customer

### Additional Information
* **Additional Comments** (`additional_comments`, `text`, ): Anything else

Note to the user: Please review each field carefully and ensure you are selecting the correct options for your order. If you have any questions or concerns, don't hesitate to reach out to us.
