# Inventory Transfer Form - Help Guide
## Purpose
The purpose of this form is to collect information for inventory transfer requests between team members or within an organization. It helps track and coordinate inventory movements.

## How To Complete This Form

To complete this form, follow these steps:

1. Select the member you want to transfer the inventory from in the "Transfer From" field.
2. Choose the member who will receive the inventory in the "Transfer To" field.
3. Enter the quantity of inventory being transferred.
4. Provide a brief description of the transfer.
5. Select the status of the transfer (Completed, Pending, Cancelled).
6. Add any additional comments or notes about the transfer.
7. If applicable, add contact information (email, phone, address) for communication and follow-up.
8. Choose the transfer type (Type 1, Type 2, Type 3).
9. Enter the date and time of the transfer.

## Field-by-Field Explanation

* **Transfer Details** (`transfer_details`, text, optional): A brief description of the transfer.
* **Transfer From** (`transfer_from_member`, select_one, optional): Select the member who is transferring the inventory.
* **Transfer To** (`transfer_to_member`, select_one, optional): Select the member receiving the inventory.
* **Quantity** (`quantity`, number, optional): The number of items being transferred.
* **Description** (`description`, text, optional): A brief description of the transfer.
* **Date Transferred** (`date_transferred`, date, optional): Date the transfer occurred.
* **Transfer Status** (`transfer_status`, select_one, optional): Select the status of the transfer (Completed, Pending, Cancelled).
* **Comments** (`comments`, text, optional): Additional comments about the transfer.
* **Assigned To** (`assigned_to`, text, optional): Contact information for transfer follow-up.
* **Transfer By** (`transfer_by`, text, optional): Contact information for transfer follow-up.
* **Comments Transfer** (`comments_transfer`, text, optional): Additional comments about the transfer.
* **Transfer Date** (`transfer_date`, date, optional): Date the transfer was scheduled to occur.
* **Transfer Time** (`transfer_time`, time, optional): Time the transfer occurred.
* **Notes** (`notes`, note, optional): Additional notes about the transfer.
* **Notes Transfer** (`notes_transfer`, note, optional): Additional notes about the transfer.
* **Email Transfer** (`email_transfer`, email, optional): Contact email for transfer follow-up.
* **Phone Transfer** (`phone_transfer`, text, optional): Contact phone number for transfer follow-up.
* **Address Transfer** (`address_transfer`, text, optional): Transfer location or contact address.
* **Transfer Type** (`transfer_type`, select_one, optional): Select the type of transfer (Type 1, Type 2, Type 3).
