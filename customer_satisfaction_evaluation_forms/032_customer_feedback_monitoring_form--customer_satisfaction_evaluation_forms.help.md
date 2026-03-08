<thinking>...</thinking>

# Customer Satisfaction Evaluation Form - Help Guide
## Purpose
This form is used to collect feedback and satisfaction ratings from customers, allowing us to monitor and improve our customer experience.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter the **customer feedback monitoring form title** in the `form_title` field.
2. Enter your company's name in the `company` field.
3. Provide a question that you'd like to ask the customer in the `feedback_question` field.
4. Rate the customer's **overall satisfaction** on a scale from 0 to 10 in the `satisfaction_level` field.
5. Enter any additional feedback or comments in the `feedback_message` field.
6. Identify the person who can best assist with their inquiry in the `contact_person` field.
7. Enter their email address in the `email` field.
8. Provide their phone number in the `phone` field.
9. Select the primary **category** (e.g., Category 1, Other) that best represents their feedback in the `category` field.
10. Select all relevant **subcategories** (e.g., 1, 2) that apply to their feedback in the `subcategory` field.
11. Add any additional **additional feedback** in the `note` field.
12. Select the person or team that this feedback is assigned to in the `assigned_to` field.

## Field-by-Field Explanation
- **customer_feedback_monitoring_form** (`form_title`, text, required): Enter the title of this form.
- **company** (`company`, text, required): Enter your company's name.
- **feedback_question** (`feedback_question`, text, required): Provide a question for the customer to answer.
- **overall_satisfaction** (`satisfaction_level`, number, required): Rate the customer's overall satisfaction on a scale from 0 to 10.
- **feedback_message** (`feedback_message`, text, required): Enter any additional feedback or comments.
- **contact_person** (`contact_person`, text, required): Identify the person who can assist with their inquiry.
- **email** (`email`, email, required): Enter their email address.
- **phone** (`phone`, text, required): Provide their phone number.
- **category** (`category`, select_one, required): Select the primary category that best represents their feedback.
- **subcategory** (`subcategory`, select_multiple, required): Select all relevant subcategories.
- **additional_feedback** (`note`, note, required): Add any additional feedback.
- **assigned_to** (`assigned_to`, select_one, required): Select the person or team that this feedback is assigned to.
