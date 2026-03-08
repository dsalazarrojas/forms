<thinking>
This form is used to request access to a security group. It is intended for users to provide details about their access request, including the requestor's name and email, a description of the request, and the type of access they are requesting. The form is not intended for users to request multiple types of access simultaneously. If a user has already submitted a request for the same type of access, they will be prompted to check if they have already submitted a request for that type of access before submitting a new one.
</thinking>

# security_group_ingress_authorization_request_form - Help Guide
## Purpose
This form is used to request access to a security group.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the requestor's name and email in the "Requestor Name" and "Requestor Email" fields, respectively.
2. Provide a brief description of the request in the "Request Description" field.
3. Select the type of access you are requesting ("Security Group" field).
4. Choose the level of access you are requesting ("Access Level" field).
5. Select any team members who have approved your request ("Approved By" field).
6. Enter the date and time when your request was approved ("Approved At" field).
7. If your request has been approved, enter the name of the person who approved it in the "Approved By Name" field.
8. Add any notes from the requestor and security group in the "Requestor Notes" and "Security Group Notes" fields, respectively.
9. Choose the status of your request ("Approval Status" field).
10. Enter any comments about your request ("Request Comments" field).
11. Enter any comments from the security group about your request ("Security Group Comments" field).
12. Select the expiration date for your access ("Expiration Date" field).

## Field-by-Field Explanation

* **Requestor Name** (`requestor_name`, text, required): Enter your name as the requestor.
* **Requestor Email** (`requestor_email`, email, required): Enter your email address.
* **Request Description** (`request_description`, text, required): Provide a brief description of your request.
* **Security Group** (`security_group`, select_one, required): Select the type of security group you are requesting access to.
* **Access Type** (`access_type`, select_one, required): Choose the type of access you are requesting.
* **Access Level** (`access_level`, select_one, required): Select the level of access you are requesting.
* **Approved By** (`approved_by`, select_multiple, required): Select team members who have approved your request.
* **Approved At** (`approved_at`, date, required): Enter the date and time when your request was approved.
* **Approved By Name** (`approved_by_name`, text, required): Enter the name of the person who approved your request.
* **Requestor Notes** (`requestor_notes`, text, optional): Add any notes from the requestor.
* **Security Group Notes** (`security_group_notes`, text, optional): Add any notes from the security group.
* **Approval Status** (`approval_status`, select_one, required): Choose the status of your request.
* **Request Comments** (`request_comments`, text, optional): Enter any comments about your request.
* **Security Group Comments** (`security_group_comments`, text, optional): Enter any comments from the security group.
* **Expiration Date** (`expiration_date`, time, required): Select the expiration date for your access.
* **Expiration Date Hint**: The expiration date is the date when your access will expire.
* **Approval Status Hint**: The approval status is the status of your request, which can be "Active", "Inactive", or "Pending".
