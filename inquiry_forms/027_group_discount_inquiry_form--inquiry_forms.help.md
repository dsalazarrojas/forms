# group_discount_inquiry_form - Help Guide
## Purpose
This form is used to inquire about group discounts for events. Please fill out the form to provide information about your event and contact details.

## How To Complete This Form

* Read the instructions and requirements carefully before filling out the form.
* Make sure to fill out all required fields.
* If you are unsure about any field, contact the sales team for clarification.

## Field-by-Field Explanation

* **Group Discount Inquiry** (`id: 1`, `type: select_multiple`): Select 'Yes' if you are inquiring about a group discount, 'No' otherwise.
* **Venue Name** (`id: 2`, `type: text`, `required: true`): Enter the name of the venue where the event will take place.
* **Event Details** (`id: 3`, `type: text`, `required: true`): Provide a brief description of the event, including details about the event type and purpose.
* **Event Date** (`id: 4`, `type: date`, `required: true`): Enter the date of the event.
* **Event Start Time** (`id: 5`, `type: time`, `required: true`): Enter the start time of the event.
* **Event End Time** (`id: 6`, `type: time`, `required: true`): Enter the end time of the event.
* **Event Duration** (`id: 7`, `type: text`, `required: false`): Provide the estimated duration of the event (optional).
* **Contact Person** (`id: 8`, `type: text`, `required: true`): Enter the name and contact information of the person in charge or responsible for the event.
* **Email** (`id: 9`, `type: email`, `required: true`): Enter the email address of the contact person.
* **Number of People** (`id: 10`, `type: number`, `required: true`): Enter the estimated number of people attending the event.
* **Group Type** (`id: 11`, `type: select_one`): Select 'Yes' if you are a group, 'No' otherwise. If you select 'No', you can provide more details in the 'Group Type Other' field.
* **Group Type Other** (`id: 12`, `type: text`, `required: false`): Provide more details about your group type if you selected 'No' in the 'Group Type' field.
* **Service** (`id: 13`, `type: select_one`): Select 'Yes' if you are inquiring about service, 'No' otherwise.
* **Bulk Purchases** (`id: 14`, `type: select_multiple`): Select 'Yes' if you are inquiring about bulk purchases, 'No' otherwise.
* **Bulk Purchases Other** (`id: 15`, `type: text`, `required: false`): Provide more details about your bulk purchases if you selected 'Yes' in the 'Bulk Purchases' field.
* **Comments** (`id: 16`, `type: note`, `required: false`): Provide any additional comments about your event or inquiry.
* **File** (`id: 17`, `type: text`, `required: false`): Upload any supporting files or documents related to your event or inquiry.
* **File Name** (`id: 18`, `type: text`, `required: false`): Enter a name for the uploaded file.
* **File Size** (`id: 19`, `type: text`, `required: false`): Enter the size of the uploaded file.
* **File Type** (`id: 20`, `type: text`, `required: false`): Enter the type of the uploaded file.
* **File URL** (`id: 21`, `type: text`, `required: false`): Enter the URL of the uploaded file.
* **Upload** (`id: 22`, `type: text`, `required: true`): Upload the file to submit with your inquiry.
* **Upload Name** (`id: 23`, `type: text`, `required: false`): Enter a name for the uploaded file.
* **Upload File** (`id: 24`, `type: text`, `required: true`): Upload the file to submit with your inquiry.
* **Follow Up** (`id: 25`, `type: note`, `required: false`): Provide any follow-up information about your inquiry, such as a contact phone number or alternative email address.
