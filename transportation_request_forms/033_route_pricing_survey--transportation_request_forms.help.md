<thinking>
This form is designed to gather information about routes that need to be priced, such as transportation costs, travel time, and contact details. The form is intended to be used by users to provide information about specific routes, including their own routes or routes they are responsible for pricing. This guide will help users understand what the form is for, how to complete it, and what each field means.

The form is used to collect data that will be used to price transportation routes, so it's likely that users will need to fill out this form to submit their routes for pricing. Before starting, users should ensure that they have all necessary information about the route ready to fill out the form.

This guide will cover each field in detail, so users can understand what is being asked and how to provide the correct information. Users should read the entire guide before starting to ensure they fill out all necessary fields correctly.

</thinking>

# Route Pricing Survey - Help Guide
## Purpose
This form is used to gather information about transportation routes that need to be priced. It helps our team understand what routes are available and provides the necessary data to give an accurate price quote for each route.

## How To Complete This Form
1. Start by filling out the first field, "What is the route name?" This is the name of the route you are submitting for pricing.
2. Move on to the next field, "What is the departure time?" This is the time the route starts or leaves the starting point.
3. Enter the arrival time in the next field, "What is the arrival time?"
4. Choose the type of transportation used for this route in the "What type of transportation is used for this route?" field.
5. Enter the cost of the route in the "What is the cost of the route?" field.
6. If the route is available for delivery, select "True" in the "Is the route available for delivery?" field.
7. Choose a method to contact you in the "How would you like to contact us?" field.
8. If you have an email address, enter it in the "What is your email address?" field.
9. If you have any additional comments or notes about the route, enter them in the "Do you have any additional comments or notes about the route?" field.
10. Enter the estimated travel time for the route in the "What is the estimated travel time for the route?" field.
11. If you are traveling with a group, enter the number of people in the "How many people are traveling on this route?" field.
12. If there are any additional costs associated with the route, choose "True" in the "Are there any additional costs associated with the route?" field.

## Field-by-Field Explanation

* **What is the route name?** (`route_pricing_survey`, text, required: false): Enter the name of the route you are submitting for pricing.
* **What is the departure time?** (`departure_time`, time, required: false): Enter the time the route starts or leaves the starting point.
* **What is the arrival time?** (`arrival_time`, time, required: false): Enter the time the route ends or arrives at the final destination.
* **What type of transportation is used for this route?** (`transportation_type`, select_one, required: false): Choose the type of transportation used for this route. Options include:
	+ Car
	+ Plane
	+ Train
	+ Bus
	+ Bike
* **What is the cost of the route?** (`route_cost`, number, required: false): Enter the cost of the route.
* **Is the route available for delivery?** (`is_available_for_delivery`, select_one, required: false): If the route is available for delivery, select "True".
* **How would you like to contact us?** (`contact_method`, select_one, required: false): Choose how you would like to be contacted. Options include:
	+ Phone
	+ Email
	+ Mail
* **What is your email address?** (`email_address`, email, required: false): Enter your email address if you would like to be contacted via email.
* **Do you have any additional comments or notes about the route?** (`notes`, note, required: false): Enter any additional comments or notes about the route.
* **What is the estimated travel time for the route?** (`estimated_travel_time`, number, required: false): Enter the estimated travel time for the route.
* **How many people are traveling on this route?** (`number_of_people`, number, required: false): Enter the number of people traveling on the route.
* **Are there any additional costs associated with the route?** (`additional_costs`, select_one, required: false): If there are additional costs associated with the route, select "True".

## Tips

* Make sure to fill out all necessary fields to ensure we can give an accurate price quote for the route.
* If you are unsure about any field, contact us and we will help you complete the form.
* This form is used to gather data for pricing routes, so please provide accurate and complete information.
* If you have any questions or concerns, please let us know.
