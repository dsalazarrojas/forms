# Architect Estimate Form Template - Help Guide
## Purpose
This form is designed to collect information from clients about their architectural projects. The information collected will be used by architects to estimate the project's scope and timeline.

## How To Complete This Form
To complete this form, please follow these steps:

1.  Start by filling out the "Client Information" section, which includes the client's name, email address, phone number, and address.
2.  Next, fill out the "Project Details" section, which includes the project's name or description, location, type, scope, and square footage.
3.  Then, provide information about the project's scope breakdown, including whether architectural design, structural engineering, MEP design, and site survey services are required.
4.  If applicable, provide the desired project start and completion dates.
5.  Finally, select your preferred contact method for future communication.

## Field-by-Field Explanation

* **Client Name** (`client_name`, text, required): The client's name (individual or company name).
* **Email Address** (`client_email`, email, required): The client's email address.
* **Phone Number** (`client_phone`, text, required): The client's phone number.
* **Client Address** (`client_address`, text, required): The client's address.
* **Project Name or Description** (`project_name`, text, required): A short description of the project.
* **Project Location Address** (`project_address`, text, required): The address of the project location.
* **Project Type** (`project_type`, select_one, required): The type of project (New construction, Renovation, Interior design, Commercial, Residential, Mixed use, Other).
* **Project Scope** (`project_scope`, text, required): A detailed description of the project's scope.
* **Square Footage** (`square_footage`, number, optional): The total area of the project in square feet.
* **Project Scope Breakdown** (`section_scope_breakdown`, note, optional): A note about the project's scope breakdown.
* **Architectural Design Services** (`architectural_design`, select_one, optional): Whether architectural design services are required.
* **Structural Engineering Required** (`structural_engineering`, select_one, optional): Whether structural engineering services are required.
* **ME Design (Mechanical, Electrical, Plumbing)** (`mep_design`, select_one, optional): Whether MEP design services are required.
* **Site Survey Required** (`site_survey_needed`, select_one, optional): Whether site survey services are required.
* **Desired Project Start Date** (`project_start_date`, date, optional): The desired project start date.
* **Desired Completion Date** (`project_completion_date`, date, optional): The desired project completion date.
* **Estimated Budget** (`estimated_budget`, number, optional): The estimated budget for the project.
* **Preferred Contact Method** (`contact_preference`, select_one, required): The client's preferred contact method (Email, Phone, Text message, In-person meeting).
