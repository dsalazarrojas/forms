# Modeling Consultant Feedback - Help Guide
## Purpose
This form is used to collect feedback from clients or customers about the performance of a modeling consultant.

## How To Complete This Form
To complete this form, follow these steps:

* Fill in your first name, last name, and email address in the respective fields.
* Choose a rating for the consultant's performance (Excellent, Good, Fair, or Poor).
* Choose a rating for the project's quality (Excellent, Good, Fair, or Poor).
* Select the level of satisfaction with the consultant's communication skills (Excellent, Good, Fair, or Poor).
* Provide any additional feedback about your experience with the consultant in the "Feedback" field.
* Optionally, provide your phone number to help the consultant contact you for follow-up.

## Field-by-Field Explanation
* **FirstName** (`first_name`, text, required: false): Enter your first name to help us identify you.
* **LastName** (`last_name`, text, required: false): Enter your last name to help us identify you.
* **Email** (`email`, email, required: false): Enter your email address so the consultant can contact you.
* **Phone** (`phone`, text, required: false): Enter your phone number to allow the consultant to contact you directly (optional).
* **ConsultantRating** (`consultant_rating`, select_one, required: false): Rate the consultant's performance (Excellent, Good, Fair, or Poor).
* **ProjectRating** (`project_rating`, select_one, required: false): Rate the project's quality (Excellent, Good, Fair, or Poor).
* **Communication** (`communication`, select_multiple, required: false): Select all levels of satisfaction with the consultant's communication skills (Excellent, Good, Fair, or Poor).
* **ResponseTime** (`response_time`, select_one, required: false): Rate the response time (Excellent, Good, Fair, or Poor).
* **Feedback** (`feedback`, note, required: false): Provide any additional feedback you may have about your experience with the consultant.
* **SubmittedBy** (`submitted_by`, text, required: false): Enter your name for tracking purposes (optional).
