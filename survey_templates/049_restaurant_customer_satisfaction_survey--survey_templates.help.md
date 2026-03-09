# Restaurant Customer Satisfaction Survey - Help Guide
## Purpose
This form is designed to collect feedback from customers about their experience in a restaurant. By filling out this form, customers can rate their satisfaction with the restaurant and provide information about their visit.

## How To Complete This Form
1. Fill out the form completely and accurately to provide the most useful feedback to the restaurant.
2. Answer each question truthfully, based on your own experience.
3. If you have any additional comments or concerns, please include them in the "Reason for visiting" field.

## Field-by-Field Explanation

* **Restaurant Name** (`restaurant_name`, text, required): This field is where you can enter the name of the restaurant you visited.
* **Contact Info** (`contact_info`, text, optional): This field is where you can enter your contact information, such as your email or phone number, in case the restaurant needs to follow up with you.
* **Date of Visit** (`date_visit`, date, optional): This field is where you can select the date of your visit to the restaurant.
* **Time of Visit** (`time_visit`, time, optional): This field is where you can select the time of your visit to the restaurant.
* **Rating** (`rating`, select_one, optional): This field allows you to rate your overall satisfaction with the restaurant's service and food.
	+ **Good**: You were very satisfied with your experience.
	+ **Fair**: You were somewhat satisfied with your experience.
	+ **Poor**: You were not satisfied with your experience.
* **How likely are you to recommend** (`rating_value`, select_one, optional): This field allows you to rate how likely you are to recommend the restaurant to others.
	+ **Very likely**: You would definitely recommend the restaurant.
	+ **Likely**: You might recommend the restaurant.
	+ **Not likely**: You would not recommend the restaurant.
* **Reason for visiting** (`reason`, select_one, optional): This field allows you to select the reason you visited the restaurant.
	+ **To dine in**: You visited the restaurant to eat there.
	+ **To take an order**: You visited the restaurant to order takeout or delivery.
	+ **To meet a friend**: You visited the restaurant to meet a friend or group.
* **How satisfied were you with your experience** (`satisfaction`, select_one, optional): This field allows you to rate your overall satisfaction with the restaurant's experience.
	+ **Very satisfied**: You were very satisfied with your experience.
	+ **Somewhat satisfied**: You were somewhat satisfied with your experience.
	+ **Not satisfied**: You were not satisfied with your experience.
