# Scented Sachet Opinion Survey - Help Guide
## Purpose
The Scented Sachet Opinion Survey is a form designed to collect opinions and feedback from users about scented satchels. The survey aims to gather information on user preferences, usage habits, satisfaction levels, and potential areas for improvement.

## How To Complete This Form
To complete this form, follow these steps:

1. The first question is a title field where you can provide a brief description of your experience with scented satchels.
2. In the second section, select all the scented options that you like. You can choose more than one option.
3. In the third section, select how often you use scented products.
4. In the fourth section, rate your satisfaction level with scented products.
5. In the fifth section, provide any suggestions or ideas on how to improve scented satchels.
6. In the sixth section, select if you would like to be contacted by us for follow-up questions or discussions.
7. If you selected to be contacted, provide your email address in the seventh section.
8. If you selected to be contacted, provide your phone number in the eighth section.
9. In the ninth section, type any additional message or comments you would like to share with us.

## Field-by-Field Explanation
* **Scented Sachet Opinion Survey** (`survey_title`, text, required: false): This is the title field where you can provide a brief description of your experience with scented satchels.
* **What scents do you like** (`scent_preferences`, select_multiple, required: false): Select all the scented options that you like.
* **How often do you use scented products** (`scent_usage`, select_one, required: false): Rate how often you use scented products.
* **How satisfied are you with scented products** (`satisfaction_level`, select_one, required: false): Rate your satisfaction level with scented products.
* **What do you recommend we improve on?** (`recommendations`, text, required: false): Provide any suggestions or ideas on how to improve scented satchels.
* **Would you like to be contacted by us?** (`follow_up`, select_one, required: false): Select if you would like to be contacted by us for follow-up questions or discussions.
* **Email** (`follow_up_email`, email, required: false): If you selected to be contacted, provide your email address.
* **Phone** (`follow_up_phone`, text, required: false): If you selected to be contacted, provide your phone number.
* **Message** (`follow_up_message`, note, required: false): If you selected to be contacted, type any additional message or comments you would like to share with us.
