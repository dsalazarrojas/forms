<thinking>
This form is used to gather information from users to offer them free email updates. The internal reasoning will check if the user wants to receive updates on a specific mailing list and if they are subscribing to a newsletter. The user's email will only be collected if they opt-in for the updates on a relevant mailing list and if the form is marked as required. If a user does not select at least one mailing list, the form will not ask for their email.
</thinking>

# opt_in_form_get_free_email_updates - Help Guide
## Purpose
This form is designed to gather information from users to offer them free email updates on various topics. The form will ask users to select the mailing lists they are interested in, and if they want to receive updates, it will ask for their email address.

## How To Complete This Form
To complete this form, please follow these steps:
1. Select the mailing lists you are interested in by checking the boxes next to each list.
2. If you want to receive updates, select the "Newsletter" option.
3. If you have any additional comments or questions, you can provide them in the "Note" field.
4. Enter your email address in the "Email" field. This is required to receive updates.
5. If you are representing an organization, please provide the name of the organization in the "Organization" field.

## Field-by-Field Explanation
- **Email Updates** (`email_updates`, select_multiple, required/optional): Select the mailing lists you are interested in to receive updates. You can check multiple options.
- **Mailing Lists** (`mailing_lists`, select_multiple, required): Choose which mailing lists you would like to receive updates on.
  * If "Mailing Lists" is selected, you will be prompted for your email address.
- **Newsletter** (`newsletter`, select_one, optional): Check this box to receive newsletters.
- **Note** (`note`, note, optional): If you have any additional comments or questions, please provide them here.
  * This field is not required, but it will help us better understand your needs.
- **Email** (`email`, email, required): Enter your email address to receive updates on the selected mailing lists.
  * Make sure to enter a valid email address.
- **Phone** (`phone`, text, optional): This field is not required, but it will help us contact you.
- **Organization** (`organization`, text, optional): If you are representing an organization, please provide the name of the organization.
  * This field is not required, but it will help us understand your affiliation.
- **Assigned Tool** (`tool`, text, optional): Please specify which tool is assigned to you for this project.
  * This field is not required, but it will help us understand your project setup.
- **Project Category** (`project_category`, text, optional): Describe the category of your project.
  * This field is not required, but it will help us understand your project type.
- **Project Description** (`project_description`, text, optional): Provide a brief description of your project.
  * This field is not required, but it will help us understand your project context.
- **Other Questions or Feedback** (`other_questions`, text, optional): Do you have any other questions or feedback for us?
  * This field is not required, but it will help us better understand your needs.
- **Questions** (`questions`, checkbox, optional): Check this box if you have questions.
  * This field is not required, but it will help us understand your needs.
