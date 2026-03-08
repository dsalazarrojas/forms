<thinking>

This form is used to request a water testing appointment. To ensure that the form is being filled out correctly, the following internal reasoning is applied:
- The form is not duplicated if a customer has already submitted a testing appointment request in the past week.
- If a customer has a testing location, it is checked if the location is one of the allowed locations in the system.
- If a customer selects "Other" in the testing frequency field, they must provide more information in the "Testing Frequency Other (Specify)" field.

</thinking>

# Wastewater Testing Appointment Request Form - Help Guide
## Purpose
The Wastewater Testing Appointment Request Form is used to request a water testing appointment. It helps customers provide necessary information about their water testing requirements so that the relevant authorities can schedule and perform the necessary tests.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill out the customer information section with your name, address, and contact details.
2. Indicate whether you need water testing.
3. Select the testing location.
4. Choose a specific date and time for the testing.
5. Determine the testing frequency (e.g., once, bi-weekly, etc.).
6. If your testing frequency is "Other", specify it in the "Testing Frequency Other (Specify)" field.
7. Choose your preferred contact method (e.g., email, phone, etc.).
8. Add any additional notes about your water testing needs.
9. Finally, submit the form to request a water testing appointment.

## Field-by-Field Explanation
- **Customer Info** (`customer_info`, text, required): Enter your name and address in this field.
- **Testing Info** (`testing_info`, select_one, optional): Check "Yes" if you need water testing.
- **Testing Location** (`testing_location`, select_one, optional): Select the location where you need the testing done.
- **Testing Date** (`testing_date`, date, optional): Choose a date for the testing.
- **Testing Time** (`testing_time`, time, optional): Select a time slot for the testing.
- **Testing Frequency** (`testing_frequency`, select_one, optional): Choose how often you want the testing to be done (e.g., once, bi-weekly, etc.).
- **Testing Frequency Other (Specify)** (`testing_frequency_other`, text, optional): If you select "Other", provide the specific frequency in this field.
- **Contact Method** (`contact_method`, select_one, optional): Choose how you want to be contacted (e.g., email, phone, etc.).
- **Contact Info** (`contact_info`, text, optional): Enter your contact details (e.g., email, phone number).
- **Notes** (`notes`, note, optional): Add any additional information about your water testing needs.
- **Submit** (`submit`, text, optional): Click this button to submit your request.

**Tips:** Make sure to fill out all required fields and double-check your information before submitting the form.
