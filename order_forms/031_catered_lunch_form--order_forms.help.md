# Catered Lunch Form - Help Guide

## Purpose
The Catered Lunch Form is designed to gather information about participants' preferences for a catered lunch service. Please fill out this form to select your meal options and any special instructions for the kitchen.

## How To Complete This Form
To complete this form, simply follow these steps:

1. Fill in your participant information, including your full name, role, grade or department, and school location.
2. Select your main course and beverage choice.
3. Choose up to two side dishes that you'd like to have with your meal.
4. Select your preferred portion size.
5. If you have any food allergies, please let us know.
6. Choose your payment method.

## Field-by-Field Explanation

* **Full Name** (`participant_name`, text, required): Please enter your full name as it appears on your ID badge or student ID.
* **Role** (`role_type`, select_one, required): Select your role as "Student", "Staff/Teacher", or "Guest/Volunteer".
* **Grade or Department** (`grade_department`, text, required): Enter your grade or department as it appears on your ID badge or student ID.
* **Select School Location** (`school_location`, select_one, required): Choose the school location where you are affiliated with.
* **Date for Catered Lunch** (`lunch_date`, date, required): Please select the date you would like to have the catered lunch.
* **Main Course Selection** (`main_course_choice`, select_one, required): Choose one of the following main courses:
	+ "Menu A - Grilled Chicken with Rice"
	+ "Menu B - Beef Lasagna"
	+ "Menu C - Mediterranean Pasta (Vegetarian)"
	+ "Menu D - Turkey and Swiss Wrap"
* **Beverage Selection** (`beverage_choice`, select_one, required): Choose one of the following beverages:
	+ "Bottled Water"
	+ "Apple Juice"
	+ "Orange Juice"
	+ "Low-fat Milk"
	+ "Iced Tea"
* **Select Your Sides** (`sides_selection`, select_multiple, required): Choose up to two sides:
	+ "Seasonal Fruit Cup"
	+ "Mixed Green Salad"
	+ "Steamed Vegetables"
	+ "Yogurt Parfait"
	+ "Baked Chips"
* **Portion Size** (`portion_size`, select_one, required): Select your preferred portion size:
	+ "Standard"
	+ "Large (Adult)"
* **Dietary Restrictions** (`section_dietary`, note, optional): Please note if you have any dietary restrictions.
* **Does the participant have any food allergies** (`allergy_declaration`, select_one, required): Please select if you have any food allergies:
	+ "No known allergies"
	+ "Peanut/Tree Nut"
	+ "Dairy/Lactose"
	+ "Gluten/Celiac"
	+ "Egg"
	+ "Shellfish"
* **Payment Method** (`payment_status`, select_one, required): Please choose your payment method:
	+ "Pre-paid Meal Plan"
	+ "Pay on Delivery"
	+ "Staff Payroll Deduction"
* **Special Instructions for the Kitchen** (`additional_requests`, text, optional): If you have any special requests or instructions for the kitchen, please enter them here.
