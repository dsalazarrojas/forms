<thinking>

The goal of this form is to collect information from users about access requests for financial audit software. This form is used to gather details about the requester, the type of access they are requesting, and any necessary approvals or comments. It is used by the finance team to review and manage access requests, ensuring that the right users have access to the financial audit software.

This form is intended to be used by both internal and external users, and the "Requester Details" field will determine which type of user this form is being completed for. The "Access Levels" field will list specific access levels that the requester is requesting, and the "Approve" field will be used by the finance team to indicate whether the request is approved or declined. The "Approve Date" and "Approve Time" fields will be used to record the date and time of approval, and the "Remarks" field can be used to include any additional comments about the request. The "Email" and "Phone" fields can be used to contact the requester, and the "Comments" field will allow the finance team to record additional comments about the request.

</thinking>

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
