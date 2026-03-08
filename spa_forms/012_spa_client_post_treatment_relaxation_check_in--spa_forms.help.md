# spa_client_post_treatment_relaxation_check_in - Help Guide

## Purpose
This form is designed to gather information from clients after they have received a treatment at the spa. The purpose of this form is to assess their comfort level, relaxation level, and overall satisfaction with their treatment experience. This helps us to improve our services and provide better care for our clients.

## How To Complete This Form
To complete this form, simply follow these steps:

1. Select "Treatment Type" and "Treatment Area" to describe your recent treatment experience.
2. Rate your comfort level during the treatment on a scale from 1-10.
3. Select your relaxation level after the treatment.
4. Indicate if you would recommend our spa to others.
5. Add any comments or feedback about your experience.
6. Enter your email address and phone number (if you'd like to be contacted for further feedback).

## Field-by-Field Explanation
* **Treatment Date** (`treatment_date`, date, required: false): Please enter the date you received your recent treatment.
* **Practitioner Name** (`practitioner_name`, text, required: false): This is the name of the practitioner who provided your treatment. If you can remember their name, please enter it.
* **Treatment Type** (`treatment_type`, select_one, required: false): Select the type of treatment you received (e.g., massage, facial, etc.).
* **Treatment Area** (`treatment_area`, select_one, required: false): Select the area of your body that was treated (e.g., back, neck, etc.).
* **Client Rating** (`client_rating`, number, required: false): Rate your comfort level during the treatment on a scale from 1-10.
* **Comfort Level** (`comfort_level`, select_one, required: false): Select your overall comfort level after the treatment.
* **Relaxation Level** (`relaxation_level`, select_one, required: false): Select your relaxation level after the treatment.
* **Would Recommend** (`would_recommend`, select_multiple, required: false): Indicate if you would recommend our spa to others.
* **Comments** (`comments`, text, required: false): Add any comments or feedback about your experience.
* **Email** (`email`, email, required: false): Enter your email address if you'd like to be contacted for further feedback.
* **Phone** (`phone`, text, required: false): Enter your phone number if you'd like to be contacted for further feedback.
* **Notes** (`notes`, text, required: false): Add any additional notes or comments about your experience.
