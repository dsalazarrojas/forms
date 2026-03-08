# Elderly Meals Request Form - Help Guide
## Purpose
The Elderly Meals Request Form is used to request meals for elderly individuals. It gathers information about the user's meal preferences and dietary needs, allowing our team to provide personalized meal services.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill out the required information in each field.
2. Review your selection before submitting the form.

## Field-by-Field Explanation
- **User Info** (`user_info`, text, required/optional): Enter your name and contact information so our team can reach out to you about your meal request.
  This field is required.
- **Meal Request** (`meal_request`, text, required/optional): Describe your meal preferences, including any dietary restrictions or allergies.
  This field is required.
- **Meal Options** (`meal_options`, select_multiple, required/optional): Select one or more meal types you are interested in (e.g., "Yes" for each option you prefer).
  This field is optional, but selecting options will help our team provide more tailored meal services.
- **Delivery Date** (`delivery_date`, date, required/optional): Choose a date for meal delivery.
  This field is optional, but selecting a date will help our team plan meal delivery.
- **Delivery Time** (`delivery_time`, time, required/optional): Select a time for meal delivery.
  This field is optional, and you can choose one of the available times.
- **Payment Method** (`payment_method`, select_one, required/optional): Select "Yes" if you are paying for the meal request.
  This field is optional, but selecting "Yes" will help our team process your request.
- **Payment Details** (`payment_details`, text, required/optional): Provide payment details, if you selected "Yes" as the payment method.
  This field is optional.
- **Submit Request** (`submit_request`, note, required/optional): This field is not used for submitting the request, but rather to display a note to the user.

## Tips
* Please select one or more meal options if you have preferences or dietary restrictions.
* You can select "No" if you do not wish for our team to contact you about your meal request.
* You can select a date and time that works best for you, but if none are selected, our team will contact you to discuss further.
