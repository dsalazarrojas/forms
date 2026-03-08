<thinking>
We need to ensure that the form is used for its intended purpose, which is to gather feedback from users after a guided tour. This will help us understand the user's experience and identify areas of improvement. The form should only be filled out once per user, and the answers should be sincere and honest.
</thinking>

# guided_tour_experience_feedback_form - Help Guide
## Purpose
The "guided_tour_experience_feedback_form" is used to gather feedback from users after a guided tour. This feedback will help us understand the user's experience and identify areas of improvement.
## How To Complete This Form
To complete this form, follow these steps:

1. Click on the "Submit Feedback" button to start.
2. Select the type of tour you were on by choosing one of the options in the "What type of tour are you on?" dropdown menu.
3. Rate your experience by selecting one of the options in the "How would you rate the tour?" dropdown menu.
4. If you have any comments about your experience, type them in the "Do you have any comments about the tour?" text field.
5. Select the date of the tour from the "Tour Date" field.
6. If you were on tour at a specific time, select the time from the "Tour Time" field.
7. Enter the duration of the tour in the "Duration of tour" field.
8. If you were not the only participant on the tour, enter the number of participants in the "Number of participants" field.
9. Select your overall experience rating by choosing one of the options in the "How would you rate your overall experience?" dropdown menu.
10. If you have any suggestions for improvement, select all that apply in the "Have we made any improvements?" multiple-choice field.
11. Enter your email address in the "Email" field.
12. Enter your name in the "Name" field.
13. If you're not part of an organization, you can leave this field blank.
14. Enter your job title in the "Job Title" field.
15. If you have a contact number, enter it in the "Contact Number" field.
16. If you have any additional comments, you can enter them in the "Comments" field.
17. If you have visited this venue before, select all that apply in the "Have you visited this venue before?" multiple-choice field.

## Field-by-Field Explanation

* **What type of tour are you on?** (`tour_type`, select_one, required): This field asks you to select the type of tour you were on.
* **How would you rate the tour?** (`feedback`, number, required): This field asks you to rate your experience on a scale of 1-10.
* **Do you have any comments about the tour?** (`comment`, text, optional): If you have any thoughts or suggestions about your experience, you can enter them here.
* **Tour Date** (`tour_date`, date, required): Enter the date of the tour.
* **Tour Time** (`tour_time`, time, optional): If you were on tour at a specific time, select the time from this field.
* **Duration of tour** (`tour_duration`, number, required): Enter the duration of the tour in hours.
* **Number of participants** (`participants`, number, optional): If you were not the only participant on the tour, enter the number of participants.
* **How would you rate your overall experience?** (`rating`, select_one, required): Rate your overall experience on a scale of 1-5.
* **Have we made any improvements?** (`suggestion`, select_multiple, required): If you have any suggestions for improvement, select all that apply.
* **Email** (`email`, email, optional): Enter your email address.
* **Name** (`name`, text, required): Enter your name.
* **Organization** (`organization`, text, optional): If you're part of an organization, enter its name.
* **Job Title** (`job_title`, text, optional): Enter your job title.
* **Contact Number** (`contact_number`, text, optional): If you have a contact number, enter it.
* **Comments** (`feedback_comments`, note, optional): If you have any additional comments, enter them here.
* **Have you visited this venue before?** (`suggestion2`, select_multiple, required): If you have visited this venue before, select all that apply.
