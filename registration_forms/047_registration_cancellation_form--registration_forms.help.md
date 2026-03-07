<thinking>
This form is used to register a cancellation request for a user's registration in a program or service. The purpose of this form is to provide a structured way for users to communicate their cancellation reason and details. This form should only be filled out by users who have already been registered for the program or service and are seeking to cancel their registration. It is assumed that the user has already been registered and is familiar with the registration process. 

The form will only be displayed after the user has already been registered and has access to this form. This form does not serve as a registration form for new registrations, so users should not fill it out if they have not already been registered.

To complete this form, the user will be able to provide their information, select a reason for cancellation, confirm their cancellation, and optionally provide additional details such as cancellation date and time, and notes. The fields in this form are designed to be straightforward and intuitive, making it easy for the user to complete without confusion.
</thinking>

# Registration Cancellation Form - Help Guide
## Purpose
The Registration Cancellation Form is used to register a cancellation request for a user's registration in a program or service. 

## How To Complete This Form
- First, make sure you are filling out this form because you have already been registered for the program or service and are seeking to cancel your registration.
- Click on the "Submit" button to begin filling out the form.
- Enter your personal details on the "User Information" page.
- On the "Activity Information" page, provide any relevant details about your registration.
- On the "Reason for Cancellation" page, select one of the provided reasons for why you are cancelling your registration.
- On the "Confirm Cancellation" page, select "Cancel" to confirm your cancellation request.
- Optionally, provide additional details such as "Cancellation Date" and "Cancellation Time" if applicable.
- You can also add any notes if you want to provide further explanation for your cancellation.
- Finally, review the form before clicking "Submit" to ensure all fields are filled out correctly.

## Field-by-Field Explanation
- **User Information** (`user_info`, text, required: false): This is the first page where you will enter your personal details, such as your name, address, and contact information.
- **Activity Information** (`activity_info`, text, required: false): This is the second page where you will provide any relevant information about your registration, such as any relevant dates or times.
- **Reason for Cancellation** (`reason`, select_one, required: false): Select one of the provided reasons for why you are cancelling your registration.
  - Cancelled on doctor's orders
  - Other
  - Unable to attend
  - Unforeseen personal circumstances
- **Confirm Cancellation** (`confirmation`, select_one, required: false): Select "Cancel" to confirm your cancellation request.
- **Cancellation Date** (`cancellation_date`, date, required: false): If you have a specific date for your cancellation, enter it here.
- **Cancellation Time** (`cancellation_time`, time, required: false): If you have a specific time for your cancellation, enter it here.
- **Notes** (`notes`, note, required: false): Provide any additional details or explanation for your cancellation.
- **Email** (`email`, email, required: false): Enter your email address.
- **Phone** (`phone`, text, required: false): Enter your phone number.
- **Submit** (`submit`, select_one, required: false): Select "Submit" to complete your cancellation request. 

## Tips
- Make sure to select "Cancel" on the "Confirm Cancellation" page to confirm your cancellation request.
- If you have a specific date and time for your cancellation, enter it in the "Cancellation Date" and "Cancellation Time" fields.
- If you have additional details for your cancellation, provide them in the "Notes" field.
