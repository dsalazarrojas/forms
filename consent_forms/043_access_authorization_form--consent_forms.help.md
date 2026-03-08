# Access Authorization Form - Help Guide

## Purpose
This form is used to request access to restricted information, systems, or physical areas. Please fill out this form carefully to provide all necessary information for authorization approval.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your full name, email address, and phone number (if available).
2. Enter your employee ID or badge number.
3. Specify the department or unit you belong to.
4. Enter your job title or position.
5. Provide your supervisor's name and email address for approval.
6. Choose the type of access you are requesting (e.g., physical area, IT system, database, etc.).
7. Specify the specific areas, systems, or resources you need access to.
8. Choose the level of access you need (e.g., read-only, read and write, full administrative).
9. Provide a business justification for why you need this access.
10. Enter the start date for when you need access to begin.
11. If this access is temporary, enter the end date for when it should expire.
12. Confirm that you will maintain the confidentiality of accessed information and comply with organizational security policies.
13. Confirm the date of your request.

## Field-by-Field Explanation
- **-- Access Authorization Form --** (Form header, note): This is the header for the form.
- **Requester full name** (`requester_full_name`, text, required): This is your full name that will be associated with the request.
- **Email address** (`requester_email`, email, required): This is the email address you can be reached at for updates or follow-up.
- **Phone number** (`requester_phone`, text, optional): If you have a phone number that you would like to be reached at, please enter it here.
- **Employee or badge ID number** (`employee_id`, text, required): This is your employee ID or badge number.
- **Department or unit** (`department`, text, required): This is the department or unit you belong to.
- **Job title or position** (`job_title`, text, required): This is your job title or position.
- **Supervisor or manager name** (`supervisor_name`, text, required): This is the name of your supervisor or manager who will need to approve your access request.
- **Supervisor email address** (`supervisor_email`, email, required): This is the email address of your supervisor or manager for approval.
- **Type of access requested** (`access_type`, select_multiple, required): Choose the type of access you are requesting (e.g., physical area, IT system, etc.).
- **Specific areas, systems, or resources** (`access_details`, text, required): Specify the specific areas, systems, or resources you need access to.
- **Level of access needed** (`access_level`, select_one, required): Choose the level of access you need (e.g., read-only, read and write, etc.).
- **Business justification for access** (`reason_for_access`, text, required): Explain why you need this access for your role.
- **Requested start date for access** (`access_start_date`, date, required): Enter the date when you need access to begin.
- **Access end date (if temporary)** (`access_end_date`, date, optional): If this access is temporary, enter the date when it should expire.
- **I agree to maintain the confidentiality of all information accessed and comply with organizational security policies** (`confidentiality_agreement`, select_one, required): Confirm that you will maintain the confidentiality of accessed information and comply with organizational security policies.
- **Date of request** (`request_date`, date, required): Confirm the date of your request.
