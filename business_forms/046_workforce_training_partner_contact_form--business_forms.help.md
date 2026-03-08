<thinking>
We're creating a form for collecting contact information from partners who are interested in offering workforce training programs. This form is part of a larger workflow for managing partnerships and communication. The fields are mostly straightforward, but some might need additional guidance to ensure accurate and useful data collection. We need to ensure that the form is easy to complete and that our partners know what to expect when filling it out.</thinking>

# workforce_training_partner_contact_form - Help Guide
## Purpose
This form is designed to gather contact information from potential training partners, allowing us to better understand their interests, expertise, and needs. It will help us manage our partnerships more effectively and provide a clear channel for communication.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your first name in the "First Name" field.
2. Enter your last name in the "Last Name" field.
3. Provide your business email address in the "Email" field.
4. Enter your job title in the "Job Title" field.
5. Describe your partnership interest with us in the "Partnership Interest" field.
6. Share your training expertise in the "Training Expertise" field.
7. Select the "Contact Method" field to indicate how you would like to be contacted (e.g., Training Provider, School, etc.).
8. Provide any additional comments or information about your partnership interest in the "Comments" field (optional).
9. Indicate whether you would like to be followed up with regarding your partnership interest in the "Follow up" field.
10. If applicable, select the "Follow up" field to indicate the date and time of your last follow-up (optional).
11. Finally, choose the person or team you would like to be assigned to in the "Assigned to" field.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, required: false): Enter your first name.
* **Last Name** (`last_name`, text, required: false): Enter your last name.
* **Email** (`email`, email, required: false): Enter your business email address.
* **Job Title** (`job_title`, text, required: false): Enter your job title in your organization.
* **Partnership Interest** (`partnership_interest`, text, required: false): Describe your partnership interest with us.
* **Training Expertise** (`training_expertise`, text, required: false): Share your training expertise.
* **Contact Method** (`contact_method`, select_one, required: false):
	+ Select "Training Provider" if you're a training provider.
	+ Select "School" if you're a school or educational institution.
	+ Select "School - Partner" if you're a partner of a school or educational institution.
* **Comments** (`comments`, text, required: false): Provide any additional comments or information about your partnership interest.
* **Follow up** (`follow_up`, select_multiple, required: false):
	+ Select "True" if you'd like to be followed up regarding your partnership interest.
	+ Select "Not sure" if you're unsure about follow-up.
* **Date of Last Follow up** (`date_of_last_follow_up`, date, required: false): If selected "True" in "Follow up", provide the date of your last follow-up.
* **Date of Last Follow up Time** (`date_of_last_follow_up_time`, time, required: false): If selected "True" in "Follow up", provide the time of your last follow-up.
* **Assigned to** (`assigned_to`, select_one, required: false): Choose the person or team you'd like to be assigned to.
* **Created** (`created_at`, date, required: false): This field is automatically generated and shows the date when the form was created.
* **Updated** (`updated_at`, date, required: false): This field is automatically generated and shows the date when the form was last updated.
