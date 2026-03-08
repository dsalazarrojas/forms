<thinking>...This form is used to gather information for a visit or appointment. It is not intended for other purposes like creating new customers or editing existing ones. Please use this form only when creating a new visit appointment, as it will create a new entry in the system. This guide will walk you through the process of filling out the form, including what each field represents and how to complete it correctly...</thinking>

# Visit Appointment Form - Help Guide
## Purpose
The Visit Appointment Form is designed to collect necessary information for scheduling and tracking appointments or visits. This form helps in organizing and managing appointments efficiently.

## How To Complete This Form
To complete the Visit Appointment Form, follow the steps below:

1. Fill out the form completely, including all required fields.
2. Ensure you have the necessary information before proceeding to the next page.

## Field-by-Field Explanation

* **Visit Appointment Form** (`form_title`, text, required: false): This is a title field for the form, which is used to identify the purpose of the form. You can enter a descriptive title, but it is not a mandatory field.
* **Customer Name** (`customer_name`, text, required: false): Enter the customer's name as it appears on their record.
* **Customer Email** (`customer_email`, email, required: false): Enter the customer's email address. This field is not required but can be useful for future correspondence.
* **Purpose Of Visit** (`purpose_of_visit`, text, required: false): Describe the purpose of the visit in a few words.
* **Contact Number** (`contact_number`, text, required: false): Enter the customer's contact number if available.
* **Scheduled Visit Date** (`scheduled_visit_date`, date, required: false): Choose a date for the scheduled visit.
* **Scheduled Visit Time** (`scheduled_visit_time`, time, required: false): Choose a time for the scheduled visit.
* **Reason For Visit** (`purpose_of_visit_1`, select_one, required: false): Choose one of the provided options for the reason of the visit.
* **Contact Method** (`contact_method`, select_multiple, required: false): Select one or multiple methods of contact.
* **Visit Duration** (`visit_duration`, number, required: false): Enter the expected duration of the visit in minutes.
* **Customer Message** (`customer_message`, text, required: false): Leave a message for the customer if necessary.
* **Assigned Tool** (`assigned_tool`, text, required: false): If applicable, enter the tool assigned to the customer.
