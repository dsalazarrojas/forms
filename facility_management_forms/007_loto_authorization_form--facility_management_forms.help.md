# LOTO Authorization Form - Help Guide
## Purpose
The purpose of this form is to request lockout or tagout of equipment in the facility. This form is used to document and track the lockout or tagout status of equipment, and to request authorization from authorized personnel for these changes.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter the date you would like the equipment to be locked out or tagged out.
2. Enter the date you would like the equipment to be unlocked or tagged back in.
3. Enter the ID of the equipment that you would like to lock out or tag out.
4. Enter the name of the person requesting the lockout or tagout (the "Requestor").
5. Enter the reason for requesting the lockout or tagout.
6. Choose the lockout status of the equipment (Approved, Pending, or Denied).
7. Choose the tagout status of the equipment (Approved, Pending, or Denied).
8. Enter the name of the authorized person approving the lockout or tagout.
9. Enter any additional comments about the lockout or tagout.
10. Enter any additional tagout information.
11. Choose whether to submit or cancel the form.
12. Choose whether to submit or cancel the form.

## Field-by-Field Explanation
* **Lockout Date** (`lockout_date`, date, required: false): Enter the date you would like the equipment to be locked out.
* **Tagout Date** (`tagout_date`, date, required: false): Enter the date you would like the equipment to be tagged out.
* **Equipment ID** (`equipment_id`, text, required: false): Enter the ID of the equipment that you would like to lock out or tag out.
* **Requestor** (`requestor`, text, required: false): Enter the name of the person requesting the lockout or tagout.
* **Reason for Request** (`reason_for_request`, text, required: false): Enter the reason for requesting the lockout or tagout.
* **Lockout Status** (`lockout_status`, select_one, required: false): Choose the lockout status of the equipment (Approved, Pending, or Denied).
* **Tagout Status** (`tagout_status`, select_one, required: false): Choose the tagout status of the equipment (Approved, Pending, or Denied).
* **Authorized Person** (`authorized_person`, text, required: false): Enter the name of the authorized person approving the lockout or tagout.
* **Comment** (`comment`, text, required: false): Enter any additional comments about the lockout or tagout.
* **Tagout Information** (`form_page_2`, text, required: false): Enter any additional tagout information.
* **Submit** (`submit`, select_multiple, required: false): Choose whether to submit or cancel the form.
* **Cancel** (`cancel`, select_multiple, required: false): Choose whether to submit or cancel the form.

# Tips

* Make sure to enter accurate and complete information.
* Check with your supervisor or colleagues before submitting the form if you are unsure about any of the fields.
* If you need to make changes to the lockout or tagout status, please update the relevant fields and resubmit the form.
