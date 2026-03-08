# local_business_review_request - Help Guide
## Purpose
This form is designed to collect local business reviews from customers and users. It is meant to gather feedback about a specific business and its services. The form includes questions that help us understand the customer's experience and satisfaction with the business.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the name of the business you are reviewing.
2. Provide your email address so we can follow up with you for any further clarification or follow-up questions.
3. Rate the business on a scale from Excellent to Bad.
4. Enter your comments about the business.
5. Provide your phone number if you have any questions or concerns.
6. Choose a date for the review.
7. Explain why you rated the business as you did.
8. Let us know if you recommend this business or not.

## Field-by-Field Explanation

* **Business name** (`business_name`, text, required: false): Enter the name of the business you are reviewing.
* **Email** (`email`, email, required: false): This is your email address so we can follow up with you for any further clarification or follow-up questions.
* **Rating** (`rating`, select_one, required: true): Rate the business on a scale from Excellent to Bad.
	+ Select one of the options: Excellent, Good, Fair, Bad.
* **Comment** (`comment`, text, required: true): Enter your comments about the business.
* **Phone number** (`phone`, text, required: false): If you have any questions or concerns, provide your phone number so we can contact you.
* **Review date** (`review_date`, date, required: false): Choose a date for the review. Please format it as MM/DD/YYYY.
* **Why did you rate this business like this?** (`rating_why`, text, required: true): Explain why you rated the business as you did.
* **Do you recommend this business?** (`recommendation`, select_one, required: true): Let us know if you recommend this business or not.
	+ Select one of the options: True, False.
