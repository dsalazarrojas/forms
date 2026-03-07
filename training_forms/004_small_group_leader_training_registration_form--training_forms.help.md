<thinking>
We should check if the form is intended for training small group leaders and if it's not a duplicate form. This form is designed to collect information from small group leaders about their training sessions. It's essential to ensure that the form is completed correctly to get accurate and complete data. Please review the form fields carefully and let me know if you have any questions or need further clarification.
</thinking>

# small_group_leader_training_registration_form - Help Guide
## Purpose
The small group leader training registration form collects information from small group leaders to help us understand their training needs and preferences. 

## How To Complete This Form
To complete this form, please follow these steps:

1. Select the date of the training session
2. Choose whether you have participated in a training session (select "Yes" or "No")
3. Enter the group size for the training session
4. Choose the locations where you would like to have the training session
5. Enter the name of the contact person
6. Enter the contact email for the training facilitator
7. Enter the contact phone number for the training facilitator
8. Choose the desired level of training (High or Low)
9. Select the topics you would like to cover during the training
10. Confirm if you would like a facilitator for your training session (select "Yes" or "No")
11. Enter the expected length of the training session
12. Enter the start and end time of the training session
13. Enter any additional training notes

## Field-by-Field Explanation

* **Session Date** (`session_date`, date, required: false): Enter the date of the training session you are interested in.
* **Training Session** (`training_session`, select_one, required: false): Select "Yes" if you have participated in a training session, "No" otherwise.
* **Group Size** (`group_size`, number, required: false): Enter the number of people in your small group.
* **Training Location** (`training_location`, select_multiple, required: false): Choose one or multiple locations where you would like to have the training session.
* **Contact Name** (`contact_name`, text, required: false): Enter the name of the contact person for the training session.
* **Contact Email** (`contact_email`, email, required: false): Enter the email address of the contact person.
* **Contact Phone** (`contact_phone`, text, required: false): Enter the phone number of the contact person.
* **Training Level** (`training_level`, select_multiple, required: false): Choose the level of training you would like to have, High or Low.
* **Training Topic** (`training_topic`, select_multiple, required: false): Select one or multiple topics you would like to cover during the training session.
* **Training Facilitator** (`training_facilitator`, select_one, required: false): Select "Yes" if you would like a facilitator for your training session, "No" otherwise.
* **Training Length** (`training_length`, number, required: false): Enter the expected length of the training session in minutes.
* **Training Start Time** (`training_start_time`, time, required: false): Enter the start time of the training session.
* **Training End Time** (`training_end_time`, time, required: false): Enter the end time of the training session.
* **Training Notes** (`training_notes`, note, required: false): Add any additional notes about the training session.

## Tips
- Please ensure that you select the correct date and time for your training session
- If you have any special requirements or needs for your training session, please include them in the training notes field.
