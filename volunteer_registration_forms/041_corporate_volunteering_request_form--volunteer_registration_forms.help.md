# corporate_volunteering_request_form - Help Guide
## Purpose
The form is used to collect information from potential volunteers to join company-sponsored projects.

## How To Complete This Form
To complete this form, follow these steps:

1. Review our current volunteering opportunities and select a project that interests you.
2. Fill out the form with your details, including your name, email, and phone number.
3. Specify your availability and volunteer preferences.
4. Choose your volunteer type (Volunteer, Team Leader, or Staff).
5. Provide any additional information or notes about your application.
6. If you're interested in leading a team, select the project manager from the list.

## Field-by-Field Explanation

* **form_data** (`form_data`, `text`, required: false): This field is for any additional comments or information about your application. You can use this field to provide any details that don't fit in other fields.
* **company** (`company`, `text`, required: false): This field is for your company name or department.
* **name** (`name`, `text`, required: false): This is your full name as you'd like to be known by us.
* **job_title** (`job_title`, `text`, required: false): This is your job title or position in your company.
* **email** (`email`, `email`, required: false): This is your email address that we can use to contact you.
* **phone** (`phone`, `text`, required: false): This is your phone number where we can reach you.
* **volunteer_project** (`volunteer_project`, `text`, required: false): This field is for the name of the project you're interested in.
* **start_date** (`start_date`, `date`, required: false): This field is for the start date of your volunteering project.
* **end_date** (`end_date`, `date`, required: false): This field is for the end date of your volunteering project.
* **volunteer_type** (`volunteer_type`, `select_multiple`, required: false):
	+ Volunteer: This is for individual volunteers who want to participate in a project.
	+ Team Leader: This is for team leaders who oversee a team of volunteers.
	+ Staff: This is for staff members who are responsible for project management.
* **volunteer_hours** (`volunteer_hours`, `number`, required: false): This is the number of hours you can commit to the project.
* **team_size** (`team_size`, `number`, required: false): This is the number of people in your team, including yourself.
* **location** (`location`, `text`, required: false): This field is for the location where the project will take place.
* **description** (`description`, `text`, required: false): This is a brief description of your role in the project or your experience related to the project.
* **notes** (`notes`, `note`, required: false): This field is for any additional comments or notes about your application.
* **company_url** (`company_url`, `text`, required: false): This is your company's website or URL.
* **project_manager** (`project_manager`, `select_one`, required: false):
	+ Jane Doe
	+ John Doe
	+ John Smith

Note that all fields are optional, but providing accurate information helps us process your application efficiently.
