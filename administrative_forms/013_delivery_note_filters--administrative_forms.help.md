# Delivery Note Filters - Help Guide
## Purpose
This form is used to filter delivery notes based on various criteria, allowing you to narrow down your results and focus on specific notes that match your requirements.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the status you want to filter by from the "Status" dropdown menu.
2. Choose the type of note you're interested in from the "Note Type" dropdown menu.
3. Select the delivery status you'd like to filter by from the "Delivery Status" dropdown menu.
4. Optionally, choose the user who created or updated the delivery note by selecting an option from the "Created By" or "Updated By" dropdown menus.
5. If desired, enter the delivery note ID or number to narrow down the search results even further.
6. Click the "Filter" button to apply your chosen criteria and view the filtered results.

## Field-by-Field Explanation

* **Status** (`delivery_note_filters_page_status`, select_one, required): Select the status of the delivery note you'd like to filter by. This can be Active, Inactive, Pending, or a custom status not included in this list.
* **Note Type** (`delivery_note_filters_page_note_type`, select_one, required): Choose the type of note you're interested in, which can be Notes, Images, or Attachments.
* **Delivery Status** (`delivery_note_filters_page_delivery_status`, select_multiple, required): Select the delivery status you'd like to filter by. This can be Active, Inactive, Cancelled, or Completed.
* **Delivery Note ID** (`delivery_note_filters_page_delivery_note_id`, number, optional): Enter the ID of the delivery note you'd like to filter by. This will narrow down the search results to only include the specified note.
* **Delivery Note Number** (`delivery_note_filters_page_delivery_note_number`, number, optional): Enter the delivery note number you'd like to filter by. This will narrow down the search results to only include the specified note.
* **Created By** (`delivery_note_filters_page_created_by`, select_one, optional): Select the user who created the delivery note. This can be Administrator, Manager, or Employee.
* **Updated By** (`delivery_note_filters_page_updated_by`, select_one, optional): Select the user who last updated the delivery note. This can be Administrator, Manager, or Employee.
* **Updated At** (`delivery_note_filters_page_updated_at`, date, optional): Select the date and time when the delivery note was last updated.
* **Update At** (`delivery_note_filters_page_update_at`, date, optional): Select the date and time when the delivery note was last updated.
* **Note Filter** (`delivery_note_filters_page_note_filter`, text, optional): Enter any additional filter criteria for the note.
* **Note Status** (`delivery_note_filters_page_note_status`, select_one, required): Select the status of the note. This can be Unread, Read, Unconfirmed, or Confirmed.

## Tips
* Make sure to select the correct status and note type to filter by relevant results.
* You can select multiple delivery statuses in the "Delivery Status" field, allowing for more comprehensive filtering.
* Use the "Note Filter" field to enter any additional filter criteria that aren't covered by the other fields.
* If you're unsure about any of the fields, feel free to reach out to the support team for assistance.
