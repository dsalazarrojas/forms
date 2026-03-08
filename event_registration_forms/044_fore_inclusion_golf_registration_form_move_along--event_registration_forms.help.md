# fore_inclusion_golf_registration_form_move_along - Help Guide
## Purpose
This form is used to register participants in a golf tournament event.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the participant's name in the "participant_name" field.
2. Enter the participant's email address in the "participant_email" field.
3. Enter the participant's phone number in the "participant_phone" field.
4. Confirm the participant's email address in the "participant_email_confirmation" field.
5. Confirm the participant's phone number in the "participant_phone_confirmation" field.
6. Enter any additional information about the participant in the "participant_additional_info" field.
7. Select the participant's date of birth from the calendar in the "participant_dob" field.
8. Select the participant's gender from the options in the "participant_gender" field.
9. If the participant has a handicap index, enter it in the "participant_handicap_index" field.
10. If the participant has a HC index, enter it in the "participant_hc_index" field.
11. Select the participant's HC level from the options in the "participant_hc_level" field.
12. Select whether or not the participant will play on a course from the options in the "participant_course" field.
13. Enter any other options for the participant's handicap in the "participant_handicap_options" field.
14. Enter any other options for the participant's gender in the "participant_gender_options" field.
15. If the participant's gender is not listed, enter the custom gender in the "participant_gender_other" field.

## Field-by-Field Explanation
* **participant_name** (`participant_name`, text, required): Enter the participant's name.
* **participant_email** (`participant_email`, email, required): Enter the participant's email address.
* **participant_phone** (`participant_phone`, text, required): Enter the participant's phone number.
* **participant_email_confirmation** (`participant_email_confirmation`, email, required): Confirm the participant's email address.
* **participant_phone_confirmation** (`participant_phone_confirmation`, text, required): Confirm the participant's phone number.
* **participant_form_data** (`participant_form_data`, note, required): Enter any additional information about the participant.
* **participant_additional_info** (`participant_additional_info`, text, required): Enter any additional information about the participant.
* **participant_dob** (`participant_dob`, date, required): Select the participant's date of birth.
* **participant_gender** (`participant_gender`, select_multiple, required): Select the participant's gender.
* **participant_gender_options** (`participant_gender_options`, text, required): Enter any other options for the participant's gender.
* **participant_gender_other** (`participant_gender_other`, text, required): Enter a custom gender if not listed.
* **participant_handicap_index** (`participant_handicap_index`, number, required): Enter the participant's handicap index.
* **participant_hc_index** (`participant_hc_index`, number, required): Enter the participant's HC index.
* **participant_hc_level** (`participant_hc_level`, select_one, required): Select the participant's HC level.
* **participant_hc_level_options** (`participant_hc_level_options`, text, required): Enter any other options for the participant's HC level.
* **participant_course** (`participant_course`, select_one, required): Select whether or not the participant will play on a course.
* **participant_handicap** (`participant_handicap`, number, required): Enter the participant's handicap.
* **participant_hc** (`participant_hc`, number, required): Enter the participant's HC.
* **participant_handicap_options** (`participant_handicap_options`, text, required): Enter any other options for the participant's handicap.
* **participant_course_options** (`participant_course_options`, text, required): Enter any other options for the participant's course.
* **participant_hc_level_options** (`participant_hc_level_options`, text, required): Enter any other options for the participant's HC level.
