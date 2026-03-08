<thinking>
To confirm that this form is intended to collect information for nominating online series, and that no other form with the same purpose exists, we'll review the provided YAML form schema. The form collects personal and selection data from users, aiming to determine the best online series. We'll focus on providing clear and practical explanations for end-users.

</thinking>

# Best Online Series Nomination Form - Help Guide
## Purpose
This form is for users to nominate their best online series. Please help us identify the best online series out there by submitting your personal information and selection.

## How To Complete This Form
- Fill out the form in the following sections: Personal Information, Selection, and Comments.
- Enter your legal full name in the field labeled "Full name".
- Provide a valid email address for contact purposes.
- Enter a phone number with an international code if you're outside our region.
- Choose the most relevant date for this nomination.
- Select the primary option that best suits your nomination.
- Provide a whole number or a rating for quantity or rating (if applicable).
- Enter any additional details that might be helpful.
- Confirm your agreement (select any that apply).
- Enter an estimated value (in decimal format) if necessary.
- Provide a preferred time for scheduling purposes (if required).
- Add any final comments or notes.

## Field-by-Field Explanation
* **Full name (Full name)** (`full_name`, text, **required**: true): Enter your legal full name as it appears on your identification documents.
* **Email address (Email address)** (`email`, email, **required**: true): Enter a valid email address that we can use to contact you regarding your nomination.
* **Phone number (Phone number)** (`phone`, text, **required**: false): Include your country code if you're outside our local region. Enter your phone number as it appears on your identification documents or the device associated with your email address.
* **Date (Date)** (`reference_date`, date, **required**: true): Select the date that best suits your nomination. This could be the release date, start date, or the date it ended.
* **Primary selection (Primary selection)** (`primary_selection`, select_one, **required**: true): Choose the option that best applies to your nomination. This could be a genre, category, or any other relevant attribute.
* **Quantity or rating (Quantity or rating)** (`quantity_or_rating`, number, **required**: false): Provide a whole number or a rating if applicable. This could be the number of seasons, number of episodes, or a rating out of 5.
* **Additional details (Additional details)** (`additional_details`, text, **required**: false): Enter any additional details that might be helpful for us to understand your nomination.
* **Agreement (Agreement)** (`agreement`, select_multiple, **required**: true): Confirm your agreement to the following options. Select any that apply.
* **Estimated value (Estimated value)** (`estimated_value`, number, **required**: false): Enter an estimated value in decimal format if necessary.
* **Preferred time (Preferred time)** (`preferred_time`, time, **required**: false): Provide a preferred time for scheduling purposes if required.
* **Final comments or notes (Final comments or notes)** (`final_comments`, text, **required**: false): Add any final comments or notes that might be helpful for us to understand your nomination.

Note: This guide is based on the provided YAML form schema.
