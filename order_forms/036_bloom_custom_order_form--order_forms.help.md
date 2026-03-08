<thinking>...</thinking>

# Bloom Custom Order Form - Help Guide

## Purpose
The Bloom Custom Order Form is a user-friendly form designed to help you create your perfect custom cake for special events like birthdays, weddings, and corporate events. Please fill out the form with accurate information to ensure a smooth and efficient ordering process.

## How To Complete This Form
1. Start by reading this guide carefully before filling out the form.
2. Click on each page to navigate through the form.
3. Fill in all required fields, indicated by an asterisk (*).
4. For optional fields, choose your preferences or leave them blank.
5. Once you've completed the form, click "Submit" to place your order.

## Field-by-Field Explanation
* **Custom Cake Order --** (`order_intro`, `note`, required: false):
	+ This is the introduction page to our custom cake order form. Read this page carefully to understand the options available.
* **Full Name** (`customer_name`, `text`, required: true):
	+ Enter your full name as it appears on your identification.
* **Email Address** (`customer_email`, `email`, required: true):
	+ Provide a valid email address where we can contact you about your order.
* **Phone Number** (`customer_phone`, `text`, required: true):
	+ Enter your phone number so we can contact you in case of any issues with your order.
* **Type of Event** (`event_type`, `select_one`, required: true):
	+ Choose the type of event for which you're ordering the custom cake. This will help us better understand your needs.
* **Event Date** (`event_date`, `date`, required: true):
	+ Provide the date of the event when you'd like to have the cake delivered.
* **Cake Size** (`cake_size`, `select_one`, required: true):
	+ Choose the size of the cake that suits your needs. We offer 6, 8, 10, 12, 14 inch, and multiple tiers.
* **Number of Servings Needed** (`servings_needed`, `number`, required: true):
	+ Indicate the number of servings you need for the cake.
* **Cake Flavor** (`cake_flavor`, `select_one`, required: true):
	+ Select the flavor of the cake that you'd like. We offer vanilla, chocolate, red velvet, strawberry, carrot cake, lemon, and customized flavors.
* **Frosting Type** (`frosting_type`, `select_one`, required: true):
	+ Choose the type of frosting you'd like to have on your cake. We offer buttercream, ganache, fondant, cream cheese, and whipped cream.
* **Frosting Flavor** (`frosting_flavor`, `text`, required: true):
	+ Enter the flavor of the frosting if you've selected a specific type.
* **Frosting Color** (`frosting_color`, `select_one`, required: true):
	+ Select the color of the frosting that you'd like. We offer white, chocolate, vanilla, custom color, and ombre.
* **Filling Options** (`filling_options`, `select_multiple`, required: true):
	+ Select all the filling options that you'd like to have in your cake. You can choose from buttercream, chocolate ganache, fresh fruit, custard, caramel, and none.
* **Decoration Style** (`decoration_style`, `select_one`, required: true):
	+ Choose the decoration style that suits your event theme. We offer simple and elegant, floral design, themed/character, metallic accents, and custom design.
* **Custom Design Description** (`custom_design_description`, `text`, required: false):
	+ If you have any custom design ideas, describe them here.
* **Special Requests or Dietary Restrictions** (`special_requests`, `text`, required: false):
	+ If you have any special requests or dietary restrictions, let us know here.
* **Delivery Location** (`delivery_location`, `text`, required: true):
	+ Provide the address where you'd like to have the cake delivered.
* **Preferred Delivery Time** (`delivery_time`, `select_one`, required: true):
	+ Choose the time of day when you'd like to have the cake delivered. We offer morning, afternoon, evening, and early morning.
* **Order Placement Date** (`order_deadline`, `date`, required: true):
	+ Indicate the date by which you'd like to place your order.
