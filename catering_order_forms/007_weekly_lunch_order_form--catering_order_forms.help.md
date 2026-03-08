# Weekly Lunch Order Form - Help Guide
## Purpose
This form is designed to collect information about employees' meal orders for the week. It's intended to provide the catering team with the necessary details to prepare and deliver meals to each employee's preferred location during their designated meal time. Please fill out the form thoroughly to ensure that your order is processed correctly.

## How To Complete This Form

To complete the form, follow these steps:

1. Fill in your Employee ID number for quick identification.
2. Enter the date you plan to order for (this will help the catering team schedule your order).
3. Select your meal preferences from the options provided (Burger, Sandwich, Salad, Soup, or Fruit).
4. Provide any special requests, such as dietary restrictions or modifications, in the Special Requests field.
5. Choose your preferred meal time (e.g., lunch break or mid-morning).
6. Specify the location where you'd like to pick up your meal.
7. Indicate the type of order (e.g., takeout or delivery).
8. Include any additional comments or feedback in the Comments field.
9. Enter your email and phone number for contact purposes.
10. Fill out the Name field with your full name.
11. Specify your department for catering team reference.
12. Identify your supervisor's name for catering team's information.
13. Provide any special instructions for your order, such as food allergies or special requests.

## Field-by-Field Explanation

* **Employee ID** (`employee_id`, text, required: false):
  Enter your Employee ID number for quick identification by the catering team.
* **Order Date** (`order_date`, date, required: false):
  Choose the date you plan to order for to ensure the catering team schedules your order correctly.
* **Meal Choice** (`meal_choice`, select_multiple, required: false):
  Select your meal preferences from the options provided (Burger, Sandwich, Salad, Soup, or Fruit).
* **Special Requests** (`special_requests`, text, required: false):
  Provide any special requests or dietary restrictions you may have, such as gluten-free or vegetarian options.
* **Meal Time** (`meal_time`, time, required: false):
  Choose your preferred meal time, such as lunch or mid-morning, to help the catering team prepare your order.
* **Meal Location** (`meal_location`, text, required: false):
  Specify where you'd like to pick up your meal for convenience.
* **Order Type** (`order_type`, text, required: false):
  Indicate the type of order you'd like, such as takeout or delivery.
* **Comments** (`comments`, note, required: false):
  Include any additional comments or feedback you'd like to share with the catering team.
* **Email** (`email`, email, required: false):
  Enter your email address for contact purposes in case of any issues with your order.
* **Phone** (`phone`, text, required: false):
  Provide your phone number for the catering team to reach you with any questions.
* **Name** (`employee_name`, text, required: false):
  Fill out your full name for catering team reference.
* **Department** (`department`, text, required: false):
  Specify your department for the catering team's reference.
* **Supervisor** (`supervisor`, text, required: false):
  Identify your supervisor's name for the catering team's information.
* **Special Instructions** (`special_instruct`, text, required: false):
  Provide any special instructions, such as food allergies or special requests.
