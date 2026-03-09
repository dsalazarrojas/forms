# Virtual Event Patron Evaluation Form - Help Guide
## Purpose
This form is designed to gather feedback and evaluation from patrons about virtual events organized by the organization. It is used to collect information on patron's experience, satisfaction, and suggestions for improvement.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the date of the virtual event you are evaluating.
2. Enter the time of the virtual event you are evaluating.
3. Rate your satisfaction with the event on a scale of 1-5 (Not Satisfied, Somewhat Satisfied, Very Satisfied).
4. Enter any questions or comments about the event.
5. If you have any comments about the rating you gave, enter them in the text box provided.
6. Select whether or not you would recommend the program to others.
7. Submit the form.

## Field-by-Field Explanation

- **Event Date** (`event_date`, date, required: false): This field is where you enter the date of the virtual event you attended. This is an optional field, but it is helpful to provide context for your evaluation.
- **Event Time** (`event_time`, time, required: false): This field is where you enter the time of the virtual event you attended. Like the event date, this is an optional field.
- **Rating** (`rating`, number, required: false): This field is where you rate your overall satisfaction with the event on a scale of 1-5. Please refer to the scale below for explanation:
	* Not Satisfied (1)
	* Somewhat Satisfied (2-3)
	* Very Satisfied (4-5)
- **Questions or Comments** (`questions_list`, text, required: false): This field is where you enter any questions or comments you may have about the event.
- **Rating Comment** (`rating_comment`, text, required: false): This field is where you can enter any additional comments about the rating you gave.
- **Overall Satisfaction** (`overall_satisfaction`, select_one, required: true): This field is where you select your overall level of satisfaction with the event.
- **Recommend Program** (`recommend_program`, select_multiple, required: true): This field is where you select whether or not you would recommend the program to others. Please select all that apply.

## Tips

* Make sure to provide specific feedback about your experience with the event.
* If you have multiple comments, you can enter them in the "Questions or Comments" field.
* Please be honest in your evaluation and rating.
