# Financial Audit Software Access Application - Help Guide
## Purpose
This form is used to request access to the financial audit software.

## How To Complete This Form
1. Select the "Requester Details" field to indicate whether the request is for an internal or external user.
2. If you are an internal user, select "Internal" from the dropdown menu. If you are an external user, select "External".
3. In the "Access Levels" field, select the specific access levels that you are requesting. You can select one or more levels.
4. In the "Approve" field, select "Approve" to indicate that the request is approved. Select "Decline" to indicate that the request is declined.
5. The "Approve Date" field should be filled in if you select "Approve" in the "Approve" field.
6. The "Approve Time" field should be filled in if you select "Approve" in the "Approve" field.
7. You can enter any additional remarks or comments in the "Remarks" field.
8. You can include the requester's email address in the "Email" field.
9. You can enter the requester's phone number in the "Phone" field.
10. In the "Comments" field, you can select "Approve" or "Decline" to indicate the decision.

## Field-by-Field Explanation
* **Requester Details** (`requester_details`, `select_one`, required: false):
	+ Select "Internal" or "External" to indicate the type of user requesting access.
* **Access Levels** (`access_levels`, `text`, required: false):
	+ Select one or more access levels that you are requesting.
* **Approve** (`approve`, `select_multiple`, required: false):
	+ Select "Approve" to indicate that the request is approved.
* **Approve Date** (`approve_date`, `date`, required: false):
	+ Enter the date on which you are approving the request.
* **Approve Time** (`approve_time`, `time`, required: false):
	+ Enter the time on which you are approving the request.
* **Remarks** (`remarks`, `note`, required: false):
	+ Enter any additional comments or remarks about the request.
* **Email** (`email`, `email`, required: false):
	+ Enter the requester's email address.
* **Phone** (`phone`, `text`, required: false):
	+ Enter the requester's phone number.
* **Comments** (`comments`, `select_multiple`, required: false):
	+ Select "Approve" or "Decline" to indicate the decision.
