<thinking>
The form is used to report on the completion rate of a workout. The user will input their name, email, and other relevant information about the workout they've completed or not completed. The form is likely used by gym staff or trainers to track progress and identify areas for improvement in a workout program. This form should only be filled out once for each workout completed and not multiple times for the same workout.
</thinking>

# Workout Completion Rate Report Form - Help Guide
## Purpose
This form is used to report on the completion rate of a workout. Gym staff or trainers will use this form to track progress and identify areas for improvement in a workout program.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter your name in the "User Name" field.
2. Enter your email address in the "User Email" field.
3. Enter the workout ID number in the "Workout ID" field.
4. Enter the name of the workout in the "Workout Name" field.
5. Choose whether you "Completed Workout" or not.
6. For each completed workout, select all the "Workout Completed" options that apply.
7. Add any progress notes in the "Progress Notes" field.
8. Enter the date you submitted your report in the "Submission Date" field.
9. Confirm that this is your submission by selecting "Confirm 1-12" accordingly.
10. Submit your report by selecting "Submit" and confirm your report by selecting "Confirm 10".

## Field-by-Field Explanation

* **User Name** (`user_name`, text, required): Enter your name as it appears on your ID or badge.
* **User Email** (`user_email`, email, required): Enter your email address.
* **Workout ID** (`workout_id`, text, required): Enter the ID number of the workout you're reporting on.
* **Workout Name** (`workout_name`, text, required): Enter the name of the workout.
* **Completed Workout** (`completed_workout`, select_one, required): Choose whether you completed the workout or not.
* **Workout Completed** (`workout_completed`, select_multiple, required): Select all options that apply to describe your completion rate.
* **Progress Notes** (`progress_notes`, text, required): Enter any progress notes about your workout.
* **Submission Date** (`submission_date`, date, required): Enter the date you're submitting this report.
* **Submitted By** (`submitted_by`, text, required): Confirm who submitted this report (you or someone else).
* **Additional Notes** (`notes`, text, required): Enter any additional notes or comments about your workout.
* **Confirm 1-12** (`confirm1`, `confirm2`, `confirm3`, `confirm4`, `confirm5`, `confirm6`, `confirm7`, `confirm8`, `confirm9`, `confirm10`, `confirm11`, `confirm12`, select_one, required): Confirm that each section of the form is accurate.
* **Submit** (`submit_button`, select_one, required): Confirm that this is your submission and submit your report.
* **Back** (`back`, select_one, optional): Go back to the previous page.
* **Cancel** (`cancel`, select_one, optional): Cancel your submission.
* **Save** (`save`, select_one, optional): Save your progress without submitting.
* **Reset** (`reset`, select_one, optional): Reset the form to its original state.
* **Next** (`next`, select_one, optional): Go to the next page.
* **Previous** (`previous`, select_one, optional): Go to the previous page.
* **Confirm 2-12** (`confirm2`, `confirm3`, `confirm4`, `confirm5`, `confirm6`, `confirm7`, `confirm8`, `confirm9`, `confirm10`, `confirm11`, `confirm12`, select_one, optional): Confirm each section of the form accurately.
* **Submit 10** (`submit_button`, select_one, required): Confirm that this is your submission and submit your report.

## Tips
- Make sure to fill out all required fields.
- Double-check that each confirm option matches the corresponding field.
- Review the "Progress Notes" field for any important information.
- Confirm your submission before proceeding.
