# Employee Transfer And Pay Rate Survey - Help Guide
## Purpose
This form is designed to collect information about employee transfers and pay rate changes. It helps track and document employee movement, pay changes, and associated details.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the category that best describes the transfer type in the "Which category does this transfer belong to?" field.
2. Enter the employee's name in the "What is the employee's name?" field.
3. Choose the type of transfer in the "What type of transfer is this?" field.
4. Indicate whether the transfer is for a pay change in the "Is this transfer for a pay change?" field.
5. Enter the date the pay change occurred in the "On what date did the pay change occur?" field.
6. Enter the old pay rate in the "What was the old pay rate?" field.
7. Enter the new pay rate in the "What is the new pay rate?" field.
8. Explain the reason for the pay change in the "What is the reason for the pay change?" field.
9. Describe the impact on the employee's work schedule in the "What is the impact on the employee's work schedule?" field.

## Field-by-Field Explanation
* **Which category does this transfer belong to?** (`transfer_category`, select_one, required): Select the category that best describes the transfer type. This will help track and categorize transfers for future reference.
* **What is the employee's name?** (`employee_name`, text, required): Enter the employee's full name, as it appears on their official documents.
* **What type of transfer is this?** (`transfer_type`, select_one, required): Choose the type of transfer that best describes the transfer. This can be internal (within the company) or external (to a different company).
* **Is this transfer for a pay change?** (`pay_change`, select_one, required): Indicate whether the transfer is related to a pay change or not.
* **On what date did the pay change occur?** (`date_of_transfer`, date, required): Enter the date when the pay change happened.
* **What was the old pay rate?** (`old_pay_rate`, number, required): Enter the previous pay rate of the employee.
* **What is the new pay rate?** (`new_pay_rate`, number, required): Enter the new pay rate of the employee.
* **What is the reason for the pay change?** (`reason_for_pay_change`, text, required): Explain the reason for the pay change, such as a promotion or new responsibilities.
* **What is the impact on the employee's work schedule?** (`impact_on_schedule`, text, required): Describe how the pay change affects the employee's work schedule.
* **Are there any comments about the transfer or pay change?** (`comments`, note, optional): Add any additional comments or information about the transfer.
* **What is the category of the transfer?** (`transfer_category_2`, select_multiple, optional): Select any applicable categories for the transfer. This can be used to further categorize and track transfers.
* **Is the transfer approved?** (`is_transfer_approved`, select_one, required): Indicate whether the transfer is approved or not.
