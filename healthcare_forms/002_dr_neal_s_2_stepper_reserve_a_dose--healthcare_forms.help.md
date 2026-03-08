<thinking>
This form appears to be for reserving a dose of Dr. Neal's 2-Stepper. It allows users to input their name, details about the doses available, and their needs, and finally, confirm their reservation. The form seems to be used for administrative or organizational purposes within a healthcare setting. It's likely used for tracking and organizing medication or supplement reservations. I will make sure to provide a detailed and accurate help guide for users to navigate this form efficiently.</thinking>

# dr-neal-s-2-stepper-reserve-a-dose - Help Guide
## Purpose
This form is designed for reserving doses of Dr. Neal's 2-Stepper, a medication or supplement. It helps healthcare staff track and organize reservations to ensure accurate distribution and inventory management.

## How To Complete This Form
To complete the form, follow these steps:

1. Enter your name in the "What is your name" field.
2. Provide the number of doses available in the "how-many-doses-are-available" field.
3. Indicate the dates when these doses are available in the "what-dates-are-available" field.
4. Enter the number of doses you need in the "how-many-doses-do-you-need" field.
5. Select the dates when you need the doses in the "what-dates-doses-needed" field.
6. Confirm your reservation by selecting one or more of the options in the "confirm-reservation" field.
7. Enter your email address in the "email" field (optional).

## Field-by-Field Explanation
* **What is your name**: (`step_1_name`, text, required: false)
    Enter your name as it appears on your medical record or identification.
* **how-many-doses-are-available**: (`step_1_doses_available`, number, required: false)
    Enter the total number of doses available for reservation.
* **what-dates-are-available**: (`step_1_dates_available`, date, required: false)
    Enter the dates when the doses are available for reservation.
* **how-many-doses-do-you-need**: (`step_2_quantity`, number, required: false)
    Enter the number of doses you need to reserve.
* **what-dates-doses-needed**: (`step_2_dates_needed`, date, required: false)
    Enter the dates when you need the reserved doses.
* **confirm-reservation**: (`step_2_confirmation`, select_multiple, required: false)
    Confirm your reservation by selecting one or more of the options provided.
* **email**: (`email`, email, required: false)
    Enter your email address for contact and follow-up purposes (optional).
