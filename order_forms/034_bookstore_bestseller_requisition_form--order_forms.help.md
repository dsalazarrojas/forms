# Bookstore Bestseller Requisition Form - Help Guide
## Purpose
This form is used to request bestseller titles from the bookstore's inventory. It helps to streamline the ordering process and ensure that the requested titles are accurately identified and approved before being processed.

## How To Complete This Form
To complete this form, please fill in the required fields and follow the guidelines below:

1. Enter your full name as it appears on your ID.
2. Enter your email address where you can be reached.
3. Select the department or store location where you would like to display the book.
4. Enter the date of your request.
5. Enter the full title of the book you are requesting.
6. Enter the author of the book.
7. (Optional) Enter the ISBN-13 number if available.
8. Select the edition type (hardcover, paperback, etc.).
9. Enter the number of copies you would like to request.
10. Choose the urgency level (Rush, High priority, Standard, Not urgent).
11. (Optional) If this request is for a specific event, please enter the event name and date.
12. (Optional) Select a display location for the book (Front display, Window display, etc.).
13. (Optional) Add any special instructions or notes about the request.
14. Select "Yes, approved" to indicate that a manager has approved this request. This is a required field and must be completed by a manager or designated approver.

## Field-by-Field Explanation

* **Requester Name** (`requester_name`, text, required): Enter your full name as it appears on your ID.
* **Email Address** (`requester_email`, email, required): Enter your email address where you can be reached.
* **Department or Store Location** (`department_store`, text, required): Select the department or store location where you would like to display the book.
* **Requisition Date** (`requisition_date`, date, required): Enter the date of your request.
* **Book Title** (`book_title`, text, required): Enter the full title of the book you are requesting.
* **Author Name** (`book_author`, text, required): Enter the author of the book.
* **ISBN Number** (`isbn_number`, text, optional): (Optional) Enter the ISBN-13 number if available.
* **Edition Type** (`edition_type`, select_one, required): Select the edition type (hardcover, paperback, etc.).
* **Quantity Requested** (`quantity_requested`, number, required): Enter the number of copies you would like to request.
* **Urgency Level** (`urgency_level`, select_one, required): Choose the urgency level (Rush, High priority, Standard, Not urgent).
* **Is this for a specific event** (`target_event`, text, optional): (Optional) If this request is for a specific event, please enter the event name.
* **Target Event Date** (`target_event_date`, date, optional): (Optional) Enter the date of the specific event.
* **Planned Display Location** (`display_location`, select_one, optional): (Optional) Select a display location for the book (Front display, Window display, etc.).
* **Special Instructions** (`special_instructions`, text, optional): (Optional) Add any special instructions or notes about the request.
* **Manager Approval** (`approval_status`, select_one, required): Select "Yes, approved" to indicate that a manager has approved this request.
