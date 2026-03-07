<thinking>...</thinking>

# Cloud Service Onboarding Form - Help Guide
## Purpose
This form is designed to gather information from customers about their company and service requirements for onboarding with our cloud services. Please complete this form accurately to ensure a smooth onboarding process.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields with the requested information.
2. Select the relevant options for each field as per the provided explanations.
3. Review your answers carefully before submitting.

## Field-by-Field Explanation
### Company Name
* **Company Name** (`company_name`, text, required): Enter your organization's name.
### Primary Contact Name
* **Primary Contact Name** (`primary_contact`, text, required): Enter the main point of contact for your organization.
### Contact Email Address
* **Contact Email Address** (`contact_email`, email, required): Enter the primary email address for correspondence.
### Contact Phone Number
* **Contact Phone Number** (`contact_phone`, text, required): Enter the primary contact number for your organization.
### Company Information
* **-- Company Information --** (`section_company`, note, required): This section contains additional information about your organization.
### Company Size
* **Company Size** (`company_size`, select_one, required): Select the size of your organization from the following options:
	+ Startup (1-50 employees)
	+ Small (51-200 employees)
	+ Medium (201-1000 employees)
	+ Large (1001-5000 employees)
	+ Enterprise (5000+ employees)
### Industry
* **Industry** (`industry`, text, required): Enter your primary business sector or industry.
### Company Website
* **Company Website** (`website`, text, optional): Enter the URL of your company website.
### User Information
* **-- User Information --** (`section_users`, note, optional): This section contains information about the number of users and administrators.
### Estimated Total Number of Users
* **Estimated Total Number of Users** (`total_users`, number, required): Enter the estimated total number of users for your organization.
### Number of Administrators
* **Number of Administrators** (`admin_count`, number, required): Enter the number of administrators for your organization.
### Primary Administrator Name
* **Primary Administrator Name** (`primary_admin`, text, required): Enter the name of the main admin contact person.
### Primary Administrator Email
* **Primary Administrator Email** (`primary_admin_email`, email, required): Enter the admin email address.
### Service Details
* **-- Service Details --** (`section_service`, note, optional): This section contains information about the services you are subscribing to.
### Service Type
* **Service Type** (`service_type`, select_one, required): Select the type of service you are subscribing to:
	+ SaaS application
	+ IaaS infrastructure
	+ PaaS platform
	+ Managed service
	+ Support services
	+ Other
### Service Tier
* **Service Tier** (`service_tier`, select_one, required): Select the service tier:
	+ Basic
	+ Standard
	+ Professional
	+ Enterprise
	+ Custom
### Setup Preferences
* **-- Setup Preferences --** (`section_setup`, note, optional): This section contains information about your setup and configuration preferences.
### Setup Assistance Needed
* **Do you need setup assistance?** (`setup_assistance_needed`, select_one, required): Select your setup needs:
	+ Yes, full setup support
	+ Yes, partial setup support
	+ Yes, consultation only
	+ No, self-service
### Data Migration
* **Data Migration Needed** (`data_migration`, select_one, required): Select your data migration needs:
	+ Yes, full migration
	+ Partial migration
	+ No migration needed
### Third-Party Integrations Needed
* **Third-Party Integrations Needed** (`integrations_needed`, select_multiple, optional): Select the integrations you need:
	+ Email
	+ CRM systems
	+ ERP systems
	+ Accounting software
	+ Communication tools
	+ Data analytics
	+ Other
### Preferences and Requirements
* **-- Preferences and Requirements --** (`section_preferences`, note, optional): This section contains information about your preferences and requirements.
### Training and Documentation Needs
* **Training and Documentation Needs** (`training_requested`, select_multiple, optional): Select your training needs:
	+ Video tutorials
	+ Live training sessions
	+ Detailed documentation
	+ Knowledge base articles
	+ One-on-one training
	+ No training needed
### Preferred Support Level
* **Preferred Support Level** (`support_level`, select_one, required): Select your preferred support level:
	+ Standard support
	+ Priority support
	+ Premium support
	+ Enterprise support
### Any Special Requirements or Constraints
* **Any Special Requirements or Constraints** (`special_requirements`, text, optional): Enter any special requirements or constraints unique to your organization.
### Acceptance of Terms
* **I accept the terms of service and privacy policy** (`accepted_terms`, select_one, required): Select 'Yes, I accept'.
