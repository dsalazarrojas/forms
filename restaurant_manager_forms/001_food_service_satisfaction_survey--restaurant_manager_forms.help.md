<thinking> 
This form is intended to gather feedback from customers about their experience at a restaurant. The purpose is to collect data on the quality of the food service, customer service, cleanliness, and overall satisfaction. This form should only be filled out by customers who have dined in the restaurant. The data collected will help the restaurant management team to identify areas of improvement and make necessary adjustments to provide better service to their customers.</thinking>

# food_service_satisfaction_survey - Help Guide
## Purpose
The food service satisfaction survey is designed to gather feedback from customers on their experience at a restaurant.

## How To Complete This Form
To complete this form, follow these steps:

1. Answer each question truthfully based on your experience at the restaurant.
2. Select the rating options that best match your opinion.
3. Fill out all the fields, if required.
4. Submit the form once you have completed all the fields.

## Field-by-Field Explanation
* **food_service_satisfaction_survey** (`food_service_satisfaction_survey`, , false): This is the title of the survey.
* **customer_service** (`customer_service`, select_one, false): Rate how you feel about the customer service you received at the restaurant.
	+ Excellent
	+ Good
	+ Average
	+ Poor
* **cleanliness** (`cleanliness`, select_multiple, false): Rate how clean you found the restaurant to be.
	+ Very clean
	+ Clean
	+ Average
	+ Dirty
* **food_quality** (`food_quality`, select_one, false): Rate the quality of the food you were served.
	+ Excellent
	+ Good
	+ Average
	+ Poor
* **service_time** (`service_time`, select_one, false): Rate how long it took to receive your food and service.
	+ Under 5 minutes
	+ 5-15 minutes
	+ 15-30 minutes
	+ Over 30 minutes
* **will_return** (`will_return`, select_one, false): Would you return to this restaurant?
	+ True
	+ False
* **will_recommend** (`will_recommend`, select_one, false): Will you recommend this restaurant to friends?
	+ True
	+ False
* **food_service_satisfaction_rating** (`food_service_satisfaction_rating`, number, false): Rate your overall satisfaction with the food service.
* **have_dined** (`have_dined`, select_one, false): Have you dined in this restaurant before?
	+ True
	+ False
* **visit_frequency** (`visit_frequency`, select_one, false): How often do you visit this restaurant?
	+ Very often
	+ Occasionally
	+ Rarely
* **age_group** (`age_group`, select_one, false): What is your age group?
	+ 18-24 years
	+ 25-34 years
	+ 35-44 years
	+ 45-54 years
	+ 55-64 years
	+ 65+ years
* **gender** (`gender`, select_one, false): What is your gender?
	+ Male
	+ Female
* **contact_method** (`contact_method`, select_one, false): How do you prefer to be contacted?
	+ Email
	+ Phone
	+ SMS
	+ In-person
* **contact_number** (`contact_number`, text, false): If you would like to be contacted via phone, please enter your phone number.
* **contact_email** (`contact_email`, email, false): If you would like to be contacted via email, please enter your email address.
* **contact_phone** (`contact_phone`, text, false): If you would like to be contacted via phone, please enter your phone number.
* **restaurant_name** (`restaurant_name`, text, false): Name of the restaurant.
* **restaurant_address** (`restaurant_address`, text, false): Address of the restaurant.
* **restaurant_city** (`restaurant_city`, text, false): City where the restaurant is located.
* **restaurant_state** (`restaurant_state`, text, false): State where the restaurant is located.
* **restaurant_zip** (`restaurant_zip`, text, false): Zip of the restaurant.
* **feedback** (`feedback`, text, false): Any additional feedback about your experience.
* **food_service_satisfaction_survey_id** (`food_service_satisfaction_survey_id`, text, false): Unique identifier of the survey.
* **restaurant_id** (`restaurant_id`, text, false): Unique identifier of the restaurant.
* **form_id** (`form_id`, text, false): Unique identifier of the form.
