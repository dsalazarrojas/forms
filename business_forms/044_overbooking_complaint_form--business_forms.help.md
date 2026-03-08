<thinking>
We need to create a user-facing help guide for an "Overbooking Complaint Form" that helps end-users understand its purpose, how to complete it, and what each field means. The form is used to report overbooking complaints, and its primary goal is to gather information from customers about their issues with service overbooking. We should ensure that the guide is concise, concrete, and practical, and that each field explanation is clear and concise. We also need to be careful not to invent unsupported business logic when explaining field labels or options. Lastly, the guide should be formatted in Markdown for maximum readability.
</thinking>

# Overbooking Complaint Form - Help Guide
## Purpose
This form is used to report overbooking complaints about services. Please provide detailed information about your issue, and our team will work to resolve it as quickly as possible.

## How To Complete This Form
1. Fill in the form completely and accurately with your details.
2. Provide as much information as possible about your experience with the overbooking issue.
3. Select the service that you were overbooked with from the options provided.
4. Describe your issue in as much detail as possible in the issue description field.
5. If you have attached any relevant documents or photos, upload them as an attachment.
6. Enter your contact number so we can reach out to you about your complaint.
7. Choose the status of your complaint from the options: New, In Progress, or Resolved.
8. If your complaint has been resolved, enter the date of resolution.
9. Provide any follow-up information or comments about your issue.
10. Enter any additional comments or notes about your follow-up.

## Field-by-Field Explanation

* **Overbooking Complaint Form** (`overbooking_complaint_form`, text, required): This is the main title of the form. Please fill it in completely and accurately.
* **Customer Name** (`customer_name`, text, required): Please provide your full name as the customer who experienced the overbooking issue.
* **Complaint Service** (`complaint_service`, select_multiple, required): Select the service that you were overbooked with from the options provided.
* **Issue Description** (`issue_description`, text, required): Describe your issue in as much detail as possible.
* **Attachment** (`attachment`, text, required): If you have attached any relevant documents or photos, upload them here.
* **Contact Number** (`contact_number`, text, required): Enter your contact number so we can reach out to you about your complaint.
* **Complaint Status** (`complaint_status`, select_one, required): Choose the status of your complaint from the options: New, In Progress, or Resolved.
* **Complaint Date** (`complaint_date`, date, required): Enter the date when you first noticed the overbooking issue.
* **Resolution Date** (`resolution_date`, date, optional): If your complaint has been resolved, enter the date of resolution.
* **Follow-up** (`follow_up`, text, optional): Provide any follow-up information or comments about your issue.
* **Follow-up By** (`follow_up_by`, text, optional): Enter any additional comments or notes about your follow-up.
* **Resolution Notes** (`resolution_notes`, text, optional): Enter any additional comments or notes about the resolution of your issue.
