<thinking>
We need to create a user-facing help guide for the "upspring_resource_collaborative_order_form" form. This form is likely used for households to provide information for resource ordering, such as demographic information and emergency contacts. To ensure that users understand the form's purpose and can complete it correctly, we need to provide clear explanations and examples for each field. We also need to check that the field labels are clear and concise, and if not, explain their intended purpose based on the YAML fields.

Form fields seem to be mostly self-explanatory, but we might need to add additional explanations or hints for some fields to avoid confusion.

Before starting this help guide, we have confirmed that the form purpose is to collect demographic information and contact details from household members, and it's used for resource ordering.

The form is not strictly necessary for users to have a specific household type or relationship with an emergency contact, but it's a useful optional field for categorization and emergency contact identification.

After reviewing the form fields, we have confirmed that the form is not meant to be a comprehensive resource ordering application but rather a basic information collection tool for household members.

</thinking>

# upspring_resource_collaborative_order_form - Help Guide
## Purpose
The "upspring_resource_collaborative_order_form" is a form designed to collect demographic information and emergency contact details from household members for resource ordering purposes.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your household information.
2. Enter your first and last name.
3. Provide your email address and phone number.
4. Answer questions about your household income and type.
5. For optional fields, provide details about your household members (if applicable).
6. Add emergency contact information.

## Field-by-Field Explanation
- **Household** (`household`, `text`, optional):
  * This field allows you to enter any relevant details about your household. You can provide a brief description or a specific household name.

- **First Name** (`first_name`, `text`, required):
  * Enter the first name of the household member or primary contact person.

- **Last Name** (`last_name`, `text`, required):
  * Enter the last name of the household member or primary contact person.

- **Email** (`email`, `email`, optional):
  * Enter the email address of the household member or primary contact person.

- **Phone** (`phone`, `text`, optional):
  * Enter the phone number of the household member or primary contact person.

- **Household Income** (`household_income`, `text`, optional):
  * Enter your household's current income.

- **Household Type** (`household_type`, `select_one`, optional):
  * Choose a category that best describes your household type:
    - Family
    - Single Adult
    - Two-Adult
    - Other
  * If "Other" is selected, please enter a brief description of your household type in the **Household Type Other** field.

- **Household Type Other** (`household_type_other`, `text`, optional):
  * Enter the description of your household type (if "Other" was selected).

- **Number of Children** (`number_of_children`, `number`, optional):
  * Enter the number of children in the household (if applicable).

- **Birth Date** (`birth_date`, `date`, optional):
  * Enter the date of birth of the primary contact person or a household member (if applicable).

- **Date of Birth** (`date_of_birth`, `date`, optional):
  * Enter the date of birth of the primary contact person or a household member (if applicable).

- **Household Member 1 First Name** (`household_member_1_first_name`, `text`, optional):
  * Enter the first name of a household member.

- **Household Member 1 Last Name** (`household_member_1_last_name`, `text`, optional):
  * Enter the last name of a household member.

- **Household Member 1 Email** (`household_member_1_email`, `email`, optional):
  * Enter the email address of a household member.

- **Household Member 1 Phone** (`household_member_1_phone`, `text`, optional):
  * Enter the phone number of a household member.

- **Household Member 2 First Name** (`household_member_2_first_name`, `text`, optional):
  * Enter the first name of another household member (if applicable).

- **Household Member 2 Last Name** (`household_member_2_last_name`, `text`, optional):
  * Enter the last name of another household member (if applicable).

- **Household Member 2 Email** (`household_member_2_email`, `email`, optional):
  * Enter the email address of another household member (if applicable).

- **Household Member 2 Phone** (`household_member_2_phone`, `text`, optional):
  * Enter the phone number of another household member (if applicable).

- **Emergency Reporting Date** (`emergency_reporting_date`, `date`, optional):
  * Enter a date for emergency reporting purposes (if applicable).

- **Emergency Contact First Name** (`emergency_contact_first_name`, `text`, optional):
  * Enter the first name of an emergency contact person.

- **Emergency Contact Last Name** (`emergency_contact_last_name`, `text`, optional):
  * Enter the last name of an emergency contact person.

- **Emergency Contact Email** (`emergency_contact_email`, `email`, optional):
  * Enter the email address of an emergency contact person.

- **Emergency Contact Phone** (`emergency_contact_phone`, `text`, optional):
  * Enter the phone number of an emergency contact person.

- **Emergency Contact Relationship** (`emergency_contact_relationship`, `text`, optional):
  * Briefly describe the relationship between you and the emergency contact person.

- **Household Income** (`household_income`, `text`, optional):
  * Enter your household's current income.
