<thinking>

The fitness_logger_form is used to log a user's workout sessions, tracking relevant information such as exercise name, set count, and rest time. The form is designed to capture the client's personal data, including their name, email, and phone number. The form also allows users to select the workout type and who submitted the form - whether it was the client or a trainer. 

We want to ensure that users understand the purpose and functionality of each field to complete the form accurately and efficiently. To avoid duplication of data, please fill out the form only once per workout session.

</thinking>

# fitness_logger_form - Help Guide
## Purpose
The fitness_logger_form is used to record and track a client's workout sessions, including details such as exercise name, weight used, and rest time. This form helps to gather essential information about the client's fitness routine.

## How To Complete This Form
To fill out the fitness_logger_form, follow these steps:

1. Fill in the client's name.
2. Select the workout type (weightlifting or cardio).
3. Enter the exercise name.
4. Provide the set count.
5. Enter the rep count.
6. Enter the weight used.
7. Enter the rest time.
8. Add any additional notes about the session.
9. Enter the client's email address.
10. Enter the client's phone number.
11. Select who submitted the form (Client or Trainer).
12. Finally, click submit to complete and submit the form.

## Field-by-Field Explanation

* **Client Name** (`client_name`, text, required): Enter the name of the client who performed the workout.
* **Form ID** (`form_id`, number, optional): A unique ID for the form, if you want to track multiple sessions.
* **Date** (`date`, date, optional): The date the workout was performed.
* **Workout Type** (`workout_type`, select_one, optional): Select either "weightlifting" or "cardio".
* **Exercise Name** (`exercise_name`, text, optional): Enter the name of the exercise performed.
* **Set Count** (`set_count`, number, optional): Enter the number of sets performed.
* **Rep Count** (`rep_count`, number, optional): Enter the number of reps performed.
* **Weight Used** (`weight_used`, number, optional): Enter the weight used during the workout.
* **Rest Time** (`rest_time`, time, optional): Enter the total rest time taken between sets.
* **Note** (`note`, note, optional): Add any additional notes about the session.
* **Email** (`email`, email, optional): Enter the client's email address.
* **Phone Number** (`phone_number`, text, optional): Enter the client's phone number.
* **Submitted By** (`submitted_by`, select_one, optional): Select whether the form was submitted by the client or a trainer.
* **Submitted At** (`submitted_at`, time, optional): The date and time the form was submitted.

## Tips
* Please ensure that you fill out the form accurately and honestly to provide valuable data for the client's fitness routine tracking.
* If you are unsure about any field, refer to the client's fitness plan or consult with the trainer for guidance.
* Remember to save the form once complete to track the client's progress and receive accurate results.
