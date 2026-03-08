# General Quality Feedback Form - Help Guide
## Purpose
The General Quality Feedback Form is used to collect general quality feedback from customers about their experience with the company's products or services.

## How To Complete This Form

To complete this form, follow these steps:

1. Please provide your name and contact information (if you would like us to follow up with you about your feedback).
2. Describe your experience with the company's product or service (Customer Feedback, if provided).
3. Rate the quality of the product or service (Product Rating and Service Rating).
4. Check if you would contact us about this issue (Would Contact).
5. Check if you are interested in promotions (Promotion Interest).
6. If you have any further comments, please provide them here (Customer Feedback, if provided).

## Field-by-Field Explanation

* **Customer Service** (`customer_service`, `text`, required/optional): Enter a brief description of your experience with our customer service team.
* **Dessert Taste** (`dessert_taste`, `number`, **required**): Please rate the taste of the dessert (1-10).
* **Appearance** (`appearance`, `select_one`, **required**): Choose the type of dessert appearance that best fits your experience:
	+ Apple Pie
	+ Cherry Pie
	+ Pecan Pie
* **Customer Email** (`customer_email`, `email`, **required**): Enter your email address so we can follow up with you about your feedback.
* **Customer Phone** (`customer_phone`, `text`, **required**): Enter your phone number so we can contact you about your feedback.
* **Would Contact** (`would_contact`, `select_multiple`, optional): Check if you would like us to contact you about this issue:
	+ True
	+ False
* **Promotion Interest** (`promotion_interest`, `select_multiple`, **required**): Check if you are interested in promotions:
	+ True
	+ False
* **Customer Feedback** (`customer_feedback`, `note`, optional): If you have any further comments, please provide them here.
* **Product Rating** (`product_rating`, `number`, **required**): Rate the quality of the product (1-10).
* **Service Rating** (`service_rating`, `number`, **required**): Rate the quality of the service (1-10).

## Tips

* Make sure to enter your email and phone number so we can follow up with you.
* If you would like us to contact you about this issue, please check the "Would Contact" field.
* If you are interested in promotions, please check the "Promotion Interest" field.
* Your feedback is valuable to us, so please take a moment to provide detailed comments in the "Customer Feedback" field.
