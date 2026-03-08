# Christmas Menu Pre Order Form - Help Guide
## Purpose
The Christmas Menu Pre-Order Form is designed to guide you through the process of placing an order for Christmas menu items.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the customer information section with your contact details.
2. Provide the party details, including party size and service date.
3. Select the type of service you need (dine-in, takeout, catering, or delivery).
4. Choose your menu package and main course.
5. Select any side dishes, appetizers, and desserts.
6. Choose any beverages.
7. Specify any dietary restrictions or special requests.
8. Enter any allergy or dietary details.
9. Enter any special requests or notes.
10. If you need delivery, enter the delivery address.
11. Choose if any setup service is needed.

## Field-by-Field Explanation

* **First Name** (`first_name`, `text`, required): Enter your first name.
* **Last Name** (`last_name`, `text`, required): Enter your last name.
* **Email Address** (`email`, `email`, required): Enter your email address.
* **Phone Number** (`phone`, `text`, required): Enter your phone number.
* **Party Size (number of people)** (`party_size`, `number`, required): Enter the number of people in your party.
* **Service Date** (`service_date`, `date`, required): Enter the date you'd like to have your order serviced.
* **Service Time** (`service_time`, `time`, required): Enter the time you'd like to have your order serviced.
* **Type of Service** (`dining_type`, `select_one`, required): Select the type of service you need (dine-in, takeout, catering, or delivery).
* **Menu Package** (`menu_type`, `select_one`, required): Select your menu package (Traditional Christmas, Premium Holiday, Gourmet Selection, Vegetarian Special, Mixed Menu, or Custom).
* **Main Course Selection** (`main_course`, `select_one`, required): Select your main course (Turkey, Ham, Prime rib, Chicken, Fish, Mixed selections, or Vegetarian option).
* **Side Dishes (Select all that apply)** (`side_dishes`, `select_multiple`, optional): Select up to 5 side dishes you'd like to have with your order.
* **Appetizers** (`appetizers`, `select_multiple`, optional): Select up to 3 appetizers you'd like to have with your order.
* **Dessert Selection** (`dessert_selection`, `select_one`, optional): Select your dessert option (Pie assortment, Cake, Pudding, Cookie platter, Mixed desserts, or None).
* **Beverages** (`beverages`, `select_multiple`, optional): Select up to 3 beverages you'd like to have with your order.
* **Dietary Requirements** (`dietary_needs`, `note`, optional): Specify any dietary requirements (Vegetarian, Vegan, Gluten-free, Nut allergies, Shellfish allergies, or Dairy-free).
* **Dietary Restrictions** (`dietary_restrictions`, `select_multiple`, optional): Select up to 3 dietary restrictions you'd like to have considered.
* **Allergy or Dietary Details** (`allergy_details`, `text`, optional): Specify any allergy or dietary details.
* **Special Requests or Notes** (`special_requests`, `text`, optional): Enter any special requests or notes.
* **Delivery Address** (`delivery_address`, `text`, optional): Enter the delivery address if you need delivery.
* **Setup Service Needed** (`setup_service`, `select_one`, optional): Choose if any setup service is needed (Yes, full setup, Yes, partial setup, or No setup needed).
