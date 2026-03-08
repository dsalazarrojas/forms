# Customer Support Ticket Monitoring Form - Help Guide

## Purpose

The Customer Support Ticket Monitoring Form is designed to provide business users with an overview of customer support requests. It allows users to track the status, description, category, priority, type, and resolution time of each support ticket.

## How To Complete This Form

To complete the form, follow these steps:

1. Select the status of the customer support ticket from the "Ticket Status" dropdown menu.
2. Provide a brief description of the customer support ticket in the "Ticket Description" field.
3. Select the category of the customer support ticket from the "Category" dropdown menu.
4. Set the priority of the customer support ticket using the "Priority" field.
5. Choose the type of the customer support ticket from the "Type" dropdown menu.
6. Select the person assigned to handle the customer support ticket from the "Assignee" dropdown menu.
7. Enter the resolution time of the customer support ticket using the "Resolution Time" field.

## Field-by-Field Explanation

* **Ticket Status** (`customer_support_request_status`, `select_one`, required: false): Select the current status of the customer support ticket, such as "Active" or "Inactive".
* **Ticket Description** (`customer_support_request_description`, `text`, required: false): A brief description of the customer support ticket.
* **Category** (`customer_support_request_category`, `select_multiple`, required: false): Select the category of the customer support ticket, such as "Yes" or "No".
* **Priority** (`customer_support_request_priority`, `number`, required: false): Set the priority of the customer support ticket using a number.
* **Type** (`customer_support_request_type`, `select_one`, required: false): Choose the type of the customer support ticket, such as "Yes" or "No".
* **Assignee** (`customer_support_request_assignee`, `select_one`, required: false): Select the person assigned to handle the customer support ticket, such as "Yes" or "No".
* **Resolution Time** (`customer_support_request_resolution_time`, `time`, required: false): Enter the resolution time of the customer support ticket using the time format.
