<thinking>
This form is used for registering dryers for a queue, allowing users to provide personal details and scheduling information. It is recommended that users only fill out this form if they have a dryer that needs to be placed in the queue. If you have already registered your dryer in the past, please make sure to check the existing registration before filling out this form to avoid duplication.
</thinking>

# Dryer Queue Registration - Help Guide
## Purpose
This form is used to register a dryer for a queue, providing details for personal and scheduling information.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the required fields, marked with a *.
2. Enter your first and last name in the "First Name" and "Last Name" fields, respectively.
3. Provide your email address in the "Email" field.
4. Enter your phone number in the "Phone" field.
5. Select the type of dryer you are registering in the "Dryer Type" field.
6. Enter the time you would like to start the dryer queue in the "Start Time" field.
7. Enter the time you would like to end the dryer queue in the "End Time" field.
8. Indicate if there are any conflicts, such as multiple users trying to use the same time slot, by checking "Yes" or "No" in the "Conflict" field.
9. Enter any additional notes or comments about your dryer or the queue in the "Description" field.
10. Provide any additional information about conflicts in the "Conflict Options" field.
10. Enter any additional information or comments about your dryer or the queue in the "Notes" field.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, required): Enter your first name.
* **Last Name** (`last_name`, text, required): Enter your last name.
* **Email** (`email`, email, required): Enter your email address.
* **Phone** (`phone`, text, required): Enter your phone number.
* **Dryer Type** (`dryer_type`, select_one, required): Select the type of dryer you are registering.
* **Dryer Type Options** (`dryer_type_options`, text, optional): Enter any additional information about the dryer type.
* **Start Time** (`start_time`, time, optional): Enter the time you would like to start the dryer queue.
* **End Time** (`end_time`, time, optional): Enter the time you would like to end the dryer queue.
* **Conflict** (`conflict`, select_multiple, optional): Indicate if there are any conflicts, such as multiple users trying to use the same time slot.
* **Conflict Options** (`conflict_options`, text, optional): Enter any additional information about conflicts.
* **Description** (`description`, text, optional): Enter any additional information or comments about your dryer or the queue.
* **Additional Notes** (`notes`, note, optional): Enter any additional information or comments about your dryer or the queue.
