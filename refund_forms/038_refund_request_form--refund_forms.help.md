# Refund Request Form - Help Guide

## Purpose
The Refund Request Form is a tool used to initiate a refund request for an order. This form is essential for customers or authorized agents to provide detailed information about the refund request.

## How To Complete This Form
To complete this form, follow these steps:

1.  Select the status of the refund request (Cancelled, Refunded, or Denied) for the order.
2.  Provide a description for the reason of the request.
3.  Enter the refund amount, which will be used to calculate the final refund amount.
4.  Enter any additional information about the request.
5.  Select the date and time of the request.
6.  Finally, choose the actions taken for the refund request from the options provided.

## Field-by-Field Explanation

*   **reason_for_refund** (reason_for_refund, text, required): Please provide a detailed description of the reason for the refund request.
*   **order_id** (order_id, number, required): Enter the unique identifier of the order for which the refund request is being made.
*   **customer_name** (customer_name, text, required): Enter the name of the customer or the authorized agent requesting the refund.
*   **customer_email** (customer_email, email, required): Enter the email address of the customer or authorized agent requesting the refund.
*   **customer_phone** (customer_phone, text, required): Enter the phone number of the customer or authorized agent requesting the refund.
*   **refund_amount** (refund_amount, number, required): Enter the refund amount to be processed.
*   **reason_description** (reason_description, text, required): Please provide a detailed description of the reason for the refund request.
*   **additional_info** (additional_info, note, required): Enter any additional information related to the refund request.
*   **date_of_request** (date_of_request, date, required): Enter the date of the refund request.
*   **time_of_request** (time_of_request, time, required): Enter the time of the refund request.
*   **status** (status, select_one, required): Select the status of the refund request (Cancelled, Refunded, or Denied).
*   **reason_for_denial** (reason_for_denial, text, required): Please provide a detailed description of the reason for the denial.
*   **action_taken** (action_taken, select_multiple, required): Choose the actions taken for the refund request from the options provided.
