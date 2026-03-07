<thinking>

We will be designing a help guide for the "Ticket Request Form". This form is used for requesting a ticket on events or products. The form is split into different sections, with each section having specific fields that need to be filled in. 

To use this form, the user needs to navigate through the pages, filling out the required and optional fields as needed. The form is designed to be user-friendly and intuitive.

Before filling out the form, it's essential to understand the fields and their purpose to ensure accuracy and completeness of the information provided.

</thinking>

# Ticket Request Form - Help Guide
## Purpose
The Ticket Request Form is used to request a ticket for an event or product. It is a straightforward form that gathers relevant information from the user to process their ticket request.

## How To Complete This Form
1. Navigate through the pages of the form, filling out the required fields as you go.
2. Make sure to fill out all required fields, denoted by an asterisk (*) next to the field label.
3. For optional fields, use your discretion and fill out as needed.
4. Review your form before submitting to ensure accuracy and completeness.

## Field-by-Field Explanation

* **Submit Request** (`submit_request`, `text`, required): Enter a brief description of your ticket request.
* **Ticket Title** (`ticket_title`, `text`, required): Enter a descriptive title of the ticket you are requesting.
* **Ticket Description** (`description`, `text`, required): Add a detailed description of the ticket you are requesting, including the product or event details.
* **Ticket Product Request** (`product_request`, `text`, required): Enter the product or event name you are requesting.
* **Ticket Product Type** (`ticket_product_type`, `select_one`, optional): Select the type of ticket you are requesting (Ticketed or Unticketed).
* **Contact Email** (`contact_email`, `email`, required): Enter your email address, as we will be in touch with you for updates.
* **Contact Phone** (`contact_phone`, `text`, required): Enter your phone number.
* **Category** (`category`, `select_multiple`, optional): Select the category of the product or event you are requesting (Event, Product, or Other).
* **Product Name** (`product_name`, `text`, optional): Enter the name of the product.
* **Product Price** (`product_price`, `number`, required): Enter the price of the product.
* **Product Quantity** (`product_quantity`, `number`, required): Enter the quantity of the product.
* **Product Status** (`product_status`, `select_one`, optional): Select the status of the product (In Stock, Out of Stock, or Unknown).
* **Event Date** (`event_date`, `date`, required): Enter the date of the event.
* **Event Time** (`event_time`, `time`, required): Enter the time of the event.
* **Event Location** (`event_location`, `text`, required): Enter the location of the event.
* **Ticket Price** (`ticket_price`, `number`, required): Enter the price of the ticket.
* **Ticket Quantity** (`ticket_quantity`, `number`, required): Enter the quantity of the ticket.
* **Notes** (`notes`, `note`, optional): Add any additional comments or notes.
* **Organizer ID** (`organizer_id`, `select_one`, optional): Select the ID of the event or product organizer.
* **Promoter ID** (`promoter_id`, `select_one`, optional): Select the ID of the event or product promoter.
* **Assigned To** (`assigned_to`, `select_one`, optional): Select who the ticket is assigned to (Chatjimmy or Other).
* **Assigned Date** (`assigned_date`, `date`, optional): Enter the date when the ticket was assigned.
* **Due Date** (`due_date`, `date`, required): Enter the due date for the ticket.
* **Status** (`status`, `select_one`, optional): Select the status of the ticket (Open, In Progress, or Closed).
* **Submit** (`submit`, `text`, required): Confirm that your ticket request has been completed and submit.

Please review your form carefully before submitting to ensure that all required fields are filled out accurately.
