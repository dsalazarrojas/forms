<thinking>
We will need to ensure that the form is only filled out by the correct users, i.e., customers who have accounts with the bank. This form is intended to gather feedback from existing customers to improve the bank's services and products. We should also avoid duplication of data. For example, we should not allow customers with non-existent or closed accounts to fill out the form. The data collected will be used to understand customer satisfaction, identify areas of improvement, and make data-driven decisions to enhance customer experience. We will make sure the form is accessible and easy to use.
</thinking>

# Banking Relationship Feedback Survey - Help Guide

## Purpose
The Banking Relationship Feedback Survey is a tool used by the bank to gather feedback from our customers about their overall experience and perception of our services. This form is designed to help us understand what we do well and what we need to improve.

## How To Complete This Form
To complete the form, please follow these steps:

1. Answer all questions honestly and to the best of your ability.
2. Fill out the form carefully, as any information you provide will help us better understand your needs and preferences.
3. Select the correct options for each question from the provided choices.

## Field-by-Field Explanation

* **Customer Full Name** (`customer_full_name`, `text`, required): Please enter your full name as it appears on your account.
* **Email Address** (`customer_email`, `email`, required): Enter your contact email address.
* **Phone Number** (`customer_phone`, `text`, optional): If you would like to provide your phone number for contact purposes, please enter it here.
* **Account Type** (`account_type`, `select_multiple`, required): Select all the types of accounts you have with us:
	+ Checking
	+ Savings
	+ Credit Card
	+ Mortgage
	+ Auto Loan
	+ Personal Loan
	+ Investment
	+ Business Account
* **How Long Have You Been a Customer** (`customer_tenure`, `select_one`, required): Choose how long you have been a customer:
	+ Less than 6 months
	+ 6 months to 1 year
	+ 1-3 years
	+ 3-5 years
	+ 5-10 years
	+ Over 10 years
* **Overall Satisfaction** (`overall_satisfaction`, `select_one`, required): Rate your overall satisfaction with our services:
	+ Very Satisfied
	+ Satisfied
	+ Neutral
	+ Dissatisfied
	+ Very Dissatisfied
* **Net Promoter Score** (`net_promoter_score`, `number`, required): Rate how likely you are to recommend us to a friend or colleague:
	+ 1 (Very Unlikely) to 10 (Very Likely)
* **Are We Your Primary Bank** (`primary_bank`, `select_one`, required): Choose how we fit into your banking needs:
	+ Yes, primary bank
	+ No, secondary bank
	+ One of several banks
* **How Many Products Do You Use** (`number_of_products`, `number`, required): Count the number of our products you use (e.g., checking, savings, credit card).
* **Online Banking Satisfaction** (`online_banking_satisfaction`, `select_one`, required): Rate your satisfaction with our online banking services:
	+ Excellent
	+ Very Good
	+ Good
	+ Fair
	+ Poor
	+ Not Used
* **Mobile App Satisfaction** (`mobile_app_satisfaction`, `select_one`, required): Rate your satisfaction with our mobile app:
	+ Excellent
	+ Very Good
	+ Good
	+ Fair
	+ Poor
	+ Not Used
* **Branch Service Satisfaction** (`branch_service_satisfaction`, `select_one`, required): Rate your satisfaction with our branch services:
	+ Excellent
	+ Very Good
	+ Good
	+ Fair
	+ Poor
	+ Never Visited
* **Customer Service Satisfaction** (`customer_service_satisfaction`, `select_one`, required): Rate your satisfaction with our customer service:
	+ Excellent
	+ Very Good
	+ Good
	+ Fair
	+ Poor
* **Value for Money** (`value_for_money`, `select_one`, required): Rate how you perceive the value of our services:
	+ Excellent
	+ Very Good
	+ Good
	+ Fair
	+ Poor
* **Trust Level** (`trust_level`, `select_one`, required): Rate how much you trust us:
	+ Complete Trust
	+ High Trust
	+ Moderate Trust
	+ Low Trust
	+ No Trust
* **Communication Rating** (`communication_rating`, `select_one`, required): Rate our communication:
	+ Excellent
	+ Very Good
	+ Good
	+ Fair
	+ Poor
* **Product Variety Satisfaction** (`product_variety_satisfaction`, `select_one`, required): Rate the variety of our products:
	+ Excellent
	+ Very Good
	+ Good
	+ Fair
	+ Poor
* **Likelihood to Recommend** (`likelihood_to_recommend`, `select_one`, required): Rate how likely you are to recommend us:
	+ Very Likely
	+ Likely
	+ Neutral
	+ Unlikely
	+ Very Unlikely
* **Likelihood to Stay** (`likelihood_to_stay`, `select_one`, required): Rate how likely you are to remain a customer:
	+ Very Likely
	+ Likely
	+ Neutral
	+ Unlikely
	+ Very Unlikely
* **What Do We Do Best** (`best_aspect`, `text`, optional): If you have any feedback on what we do best, please mention it here.
* **What Should We Improve** (`improvement_areas`, `text`, optional): If you have any suggestions for improvement, please mention them here.
* **Additional Services of Interest** (`additional_services_interest`, `select_multiple`, optional): Select any additional services you are interested in:
	+ Wealth Management
	+ Insurance
	+ Business Services
	+ International Banking
	+ Merchant Services
	+ None
* **Additional Comments** (`additional_comments`, `text`, optional): If you have any other feedback or comments, please mention them here.

## Tips

* Please answer all questions truthfully and thoroughly.
* If you have any doubts or concerns, please don't hesitate to contact us.
* Your feedback is crucial to helping us improve our services and provide better experiences for our customers.
