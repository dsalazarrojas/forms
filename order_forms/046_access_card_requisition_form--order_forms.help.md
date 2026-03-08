<thinking>
The form purpose is to request access cards from the access card system, which are used to control access to certain areas or buildings within an organization. This form is used by employees, visitors, and contractors to submit a request for a new or replacement access card. The form requires the requester to provide their full name, email address, phone number, employee or contractor ID number, department, job title, type of access card requested, reason for the request, areas or buildings requiring access, access schedule, date of need, end date, approving supervisor or manager name, and their email address. 
It is essential that all required fields are completed for the request to be processed.

</thinking>

# Access Card Requisition Form - Help Guide
## Purpose
This form is used to submit a request for a new or replacement access card to control access to certain areas or buildings within the organization.
## How To Complete This Form
To complete this form, follow the steps below:

1.  Fill in your details including your full name, email address, phone number, employee or contractor ID number, department, job title, and type of access card requested.
2.  Select the reason for your request from the provided options.
3.  Choose the areas or buildings requiring access by selecting all that apply from the list.
4.  Select the access schedule required.
5.  Enter the date you need access from and the end date (if applicable).
6.  Provide the name and email address of your approving supervisor or manager.
7.  If requesting a replacement card, indicate if the old card has been returned.
8.  Finally, click Submit to submit your request.

## Field-by-Field Explanation

*   **-- Access Card Requisition Form --** (`form_header`, note, optional): This is the header of the form, indicating that it is the access card requisition form.
*   **Full name of the person requiring the access card** (`requester_full_name`, text, required): Please enter your full name as it appears on your ID or government-issued ID.
*   **Email address** (`requester_email`, email, required): Enter your email address for contact purposes.
*   **Phone number** (`requester_phone`, text, required): Enter your phone number for contact purposes.
*   **Employee or contractor ID number** (`employee_id`, text, required): Enter your employee or contractor ID number for identification purposes.
*   **Department** (`department`, text, required): Enter your department name.
*   **Job title** (`job_title`, text, required): Enter your job title.
*   **Type of access card request** (`card_type`, select_one, required): Choose the type of access card requested:
    *   New employee card
    *   Replacement (lost or damaged)
    *   Temporary visitor card
    *   Contractor card
    *   Upgraded access card
*   **Reason for the request** (`reason_for_request`, select_one, required): Choose the reason for your request:
    *   New hire
    *   Lost card
    *   Damaged or malfunctioning card
    *   Change in access level
    *   Temporary access needed
    *   Other
*   **Areas or buildings requiring access** (`areas_requiring_access`, select_multiple, required): Select all the areas or buildings requiring access:
    *   Main building entrance
    *   Office floors
    *   Server room or data center
    *   Parking garage
    *   Laboratory
    *   Warehouse or storage
*   **Access schedule** (`access_schedule`, select_one, required): Choose the access schedule:
    *   Standard business hours only
    *   Extended hours (6am - 10pm)
    *   24/7 access
    *   Custom schedule
*   **Date access is needed from** (`start_date`, date, required): Enter the date you need access from.
*   **Access end date** (`end_date`, date, optional): If this is a temporary access, enter the date you need access until.
*   **Approving supervisor or manager name** (`supervisor_name`, text, required): Enter the name of your approving supervisor or manager.
*   **Supervisor email address** (`supervisor_email`, email, required): Enter the email address of your approving supervisor or manager.
*   **Has the old card been returned** (`old_card_returned`, select_one, required): If you are requesting a replacement card, indicate if the old card has been returned:
    *   True
    *   False
    *   Not applicable
*   **Date of request** (`request_date`, date, required): Enter the date you submitted this request.
