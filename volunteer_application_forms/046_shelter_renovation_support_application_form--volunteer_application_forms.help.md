<thinking>
You are about to create a user-facing help guide for a form that is used for applicants to apply for renovation support. This form likely exists within a larger project management system that coordinates volunteer efforts for shelter renovation projects. The form should help potential applicants provide the necessary information for their project to be assessed and considered for support. The purpose of this guide is to ensure that the applicant has a clear understanding of the form's purpose and fields, so they can complete it accurately and efficiently.

Before proceeding, it is essential to ensure that the form is relevant to the user's context and that they are not duplicating an existing application. This form might be used by multiple departments or teams, so it's crucial to be aware of any existing applications or projects that might already be in progress.
</thinking>

# Shelter Renovation Support Application Form - Help Guide
## Purpose
The Shelter Renovation Support Application Form is designed for applicants to submit their shelter renovation project details for potential support from volunteers. This form gathers essential information to assess and facilitate volunteer efforts for renovation projects.

## How To Complete This Form
- To begin, select "Volunteer Application" and fill in your name, which will be used to identify your project and contact you.
- If your project has a specific name, provide it under "Project Name."
- You can skip "Email" and "Phone" fields if not applicable to your situation.
- Enter the estimated budget for your project under "Project Budget," which is crucial for volunteers and coordinators to plan and allocate resources accordingly.
- If needed, specify the exact amount allocated for the project under "Project Budget Amount."
- Provide your contact details, including "Address," "Zip Code," "City," "State," and "Country" if necessary.
- Select a valid "Time" for the project, which is required for scheduling volunteers.
- Optionally, select the "Date" when your project is scheduled to start.
- For "Select One Project Type," choose the category that best describes your project (Home, Commercial, Industrial, or Other).
- If applicable, select multiple services your project requires from the list under "Select Multiple Project Services" (Plumbing, Electrical, HVAC, Carpentry, Painting, Flooring, Drywall, or Other).
- Finally, provide any additional comments or details under "Note."

## Field-by-Field Explanation

* **Volunteer Application** (`volunteer_app`, Text, Required): Enter your name to identify yourself for this application.
* **Project Name** (`project_name`, Text, Optional): If your project has a specific name, provide it here.
* **Email** (`email`, Email, Optional): You can skip this field if not necessary for communication with volunteers.
* **Phone** (`phone`, Text, Optional): Your phone number for potential communication with volunteers.
* **Project Budget** (`project_budget`, Number, Required): Estimate the budget for your project for volunteer planning and resource allocation.
* **Project Budget Amount** (`project_budget_amount`, Number, Optional): Specify the exact amount allocated for the project if needed.
* **Address** (`address`, Text, Optional): Your contact address if different from your place of work or project location.
* **Zip Code** (`zip_code`, Number, Optional): Your zip code for project location identification.
* **City** (`city`, Text, Optional): The city where your project is located.
* **State** (`state`, Text, Optional): The state where your project is located.
* **Country** (`country`, Text, Optional): The country where your project is located.
* **Time** (`time`, Time, Required): Select a valid time for the project to schedule volunteer help.
* **Date** (`date`, Date, Optional): Specify the start date of your project if known.
* **Select One Project Type** (`select_one_project_type`, Select One, Required): Choose the category that best describes your project type (Home, Commercial, Industrial, or Other).
* **Select Multiple Project Services** (`select_multiple_project_services`, Select Multiple, Optional): Select the services your project requires from the list (Plumbing, Electrical, HVAC, Carpentry, Painting, Flooring, Drywall, or Other).
* **Note** (`note`, Note, Optional): Add any additional comments or details about your project here.
