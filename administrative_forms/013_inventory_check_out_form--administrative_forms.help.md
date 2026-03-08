# Inventory Check Out Form - Help Guide

## Purpose
The Inventory Check Out Form is used to track the status and activity of inventory items as they are checked out to individuals or managers.

## How To Complete This Form
To complete this form, follow these steps:

1.  Enter the **Item Name** in the first field.
2.  Select the **Date Checked Out** from the calendar.
3.  Enter the **Checked Out By** field with the name(s) of the person(s) checking out the item.
4.  Select the **Checked Out To** field with the name(s) of the person(s) the item is being checked out to.
5.  Enter the **Quantity** of items being checked out.
6.  Select the **Item Type** from the available options.
7.  Select the **Checked Out Status** from the options provided (Active, Inactive, or Unknown).
8.  Enter the **Checked Out By User** with the name(s) of the person(s) who checked out the item.
9.  Select the **Return Date** from the calendar.
10. Enter any **Notes** or comments about the checkout.
11.  Enter the **Email** of the person checking out the item.
12.  Enter the **Phone** number of the person checking out the item.

## Field-by-Field Explanation

* **Item Name** (`item_name`, text, required): Enter the name of the item being checked out.
* **Date Checked Out** (`date_checked_out`, date, required): Select the date the item was checked out.
* **Checked Out By** (`checked_out_by`, text, required): Enter the name(s) of the person(s) who checked out the item.
* **Checked Out To** (`checked_out_to`, text, required): Select the name(s) of the person(s) the item is being checked out to.
* **Quantity** (`quantity`, number, required): Enter the number of items being checked out.
* **Item Type** (`item_type`, text, required): Select the type of item being checked out.
* **Checked Out Status** (`checked_out_status`, select_one, required): Select the status of the item (Active, Inactive, or Unknown).
* **Checked Out By User** (`checked_out_by_user`, select_multiple, required): Select the name(s) of the person(s) who checked out the item.
* **Return Date** (`return_date`, date, required): Select the date the item is expected to be returned.
* **Return Status** (`return_status`, select_one, required): Select the status of the return (Active, Inactive, or Unknown).
* **Return By** (`return_by`, select_multiple, required): Select the name(s) of the person(s) who returned the item.
* **Notes** (`notes`, text, required): Enter any comments or notes about the checkout.
* **Email** (`email`, email, required): Enter the email of the person checking out the item.
* **Phone** (`phone`, text, required): Enter the phone number of the person checking out the item.
* **Checked Out By Manager** (`checked_out_by_manager`, text, required): Enter the name of the person checking out the item (if checked out by a manager).
* **Checked Out By Manager Status** (`checked_out_by_manager_status`, select_one, required): Select the status of the manager (Active, Inactive, or Unknown).
* **Checked Out By Manager User** (`checked_out_by_manager_user`, select_multiple, required): Select the name(s) of the person(s) who checked out the item (if checked out by a manager).
* **Return By Manager** (`return_by_manager`, select_multiple, required): Select the name(s) of the person(s) who returned the item (if returned by a manager).
* **Return By Manager Status** (`return_by_manager_status`, select_one, required): Select the status of the return (if returned by a manager).
* **Checked Out By User Status** (`checked_out_by_user_status`, select_one, required): Select the status of the person who checked out the item (Active, Inactive, or Unknown).
* **Checked Out By User** (`checked_out_by_user`, select_multiple, required): Select the name(s) of the person(s) who checked out the item.
* **Return Status** (`return_status`, select_one, required): Select the status of the return (Active, Inactive, or Unknown).
