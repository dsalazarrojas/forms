<thinking>...</thinking>

# shopping_by_appointment_form - Help Guide

## Purpose
This form is used to schedule a shopping appointment with a customer. It requires the customer's appointment preferences and details to be recorded accurately.

## How To Complete This Form
To complete this form, please follow these steps:

1. Select the appointment option from the "Appointment Form" dropdown menu.
2. Enter the session details in the "Session Details" field.
3. Choose the start and end dates of the appointment.
4. Specify the duration of the appointment.
5. Optionally, add any additional notes or comments.
6. Choose whether to include the customer on the shopping list.
7. Select whether the customer has provided customer details.
8. Enter the customer's contact number, email, and assigned user ID.
9. Confirm the form status as Active or Inactive.
10. Select the session type.
11. Confirm the session status as Active or Inactive.
12. Enter the customer ID and assigned user ID.
13. Enter the customer's name, email, phone number, address, and notes.
14. Optionally, add additional customer notes.

## Field-by-Field Explanation

* **Appointment Form** (`appointment_form`, `select_one`, required): Select the appointment option that best describes the reason for the appointment.
* **Session Details** (`session_details`, `text`, required): Enter the details of the session, such as the purpose or description.
* **Start Date** (`start_date`, `date`, required): Enter the start date of the appointment.
* **End Date** (`end_date`, `date`, required): Enter the end date of the appointment.
* **Duration** (`duration`, `number`, required): Enter the duration of the appointment.
* **Notes** (`notes`, `note`, optional): Add any additional notes or comments about the appointment.
* **Shopping List** (`shopping_list`, `select_multiple`, optional): Choose whether to include the customer on the shopping list.
* **Customer Details** (`customer_details`, `select_one`, required): Select whether the customer has provided customer details.
* **Contact Number** (`contact_number`, `text`, required): Enter the customer's contact number.
* **Email** (`email`, `email`, required): Enter the customer's email.
* **Assigned User** (`assigned_user`, `select_one`, required): Select whether to assign the appointment to a user.
* **Form Status** (`form_status`, `select_one`, optional): Confirm the form status as Active or Inactive.
* **Session Type** (`session_type`, `select_one`, required): Select the session type.
* **Session Status** (`session_status`, `select_one`, optional): Confirm the session status as Active or Inactive.
* **Customer ID** (`customer_id`, `number`, required): Enter the customer ID.
* **Assigned User ID** (`assigned_user_id`, `number`, required): Enter the assigned user ID.
* **Customer Name** (`customer_name`, `text`, optional): Enter the customer's name.
* **Customer Email** (`customer_email`, `email`, optional): Enter the customer's email.
* **Customer Phone** (`customer_phone`, `text`, optional): Enter the customer's phone number.
* **Customer Address** (`customer_address`, `text`, optional): Enter the customer's address.
* **Customer Notes** (`customer_notes`, `text`, optional): Add any additional customer notes.
* **Customer Notes 1** (`customer_notes_1`, `text`, optional): Add any additional customer notes.
* **Customer Notes 2** (`customer_notes_2`, `text`, optional): Add any additional customer notes.
