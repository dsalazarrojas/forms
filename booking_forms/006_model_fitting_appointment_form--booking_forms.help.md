# Model Fitting Appointment Form - Help Guide
## Purpose
The Model Fitting Appointment Form is used to schedule a model-fitting appointment for a client.

## How To Complete This Form
1. Choose the correct date for the appointment using the date field.
2. Select the time slot for the appointment using the time field.
3. Choose the type of model being fitted using the Model Type field.
4. Enter the client's details in the Client Details field.
5. Choose one or more model fitters for the appointment using the Model Fitter field.

## Field-by-Field Explanation
* **Date** (`date`, required: false): This field is used to select the date for the appointment. Please enter the date in the format `YYYY-MM-DD`.
* **Time** (`time`, required: false): This field is used to select the time slot for the appointment.
* **Model Type** (`select_one`, required: false): This field is used to choose the type of model being fitted. Please select one of the available options: Model 1, Model 2, or Model 3.
* **Client Details** (`text`, required: false): This field is used to enter the client's details. Please provide any relevant information about the client.
* **Booking Time** (`time`, required: false): This field is used to select the booking time for the appointment.
* **Model Fitter** (`select_multiple`, required: false): This field is used to choose one or more model fitters for the appointment. Please select one or more from the available options: Model Fitter 1, Model Fitter 2, or Model Fitter 3.
