<thinking>
This form is designed for onboarding new clients to a cloud service, collecting information necessary for their account setup, service provision, and ongoing support. It ensures that all essential details are captured correctly to facilitate a smooth and efficient onboarding process. The form's fields are structured to gather client information, service requirements, technical specifics, and support needs, helping our team to accurately assess and address client needs during and after onboarding. This guide will walk you through each field's purpose and requirements to help ensure your successful onboarding process.

# Cloud Service Onboarding Form - Help Guide
## Purpose
This form is used for onboarding new clients to our cloud service. It collects necessary information for their account setup, service provision, and ongoing support.

## How To Complete This Form
To complete this form, follow these general steps:
- Fill in the required information for client details.
- Select the desired service type and service tier.
- Choose the preferred data location and any system integration requirements.
- Set up support and SLA requirements.
- Select the onboarding timeline and desired start date.
- Provide any additional information for data migration.

## Field-by-Field Explanation
* **Client Company Name** (`client_name`, `text`, `required`): Enter the name of the client's company.
* **Client Type** (`client_type`, `select_one`, `required`): Select the type of client (Enterprise, Mid-market, Small business, Startup, Non-profit).
* **Primary Contact Name** (`primary_contact`, `text`, `required`): Enter the name of the primary contact person.
* **Contact Email Address** (`contact_email`, `email`, `required`): Enter the email address of the primary contact person.
* **Contact Phone Number** (`contact_phone`, `text`, `required`): Enter the phone number of the primary contact person.
* **Service Type Selected** (`service_type`, `select_one`, `required`): Choose the type of cloud service (Infrastructure as a Service - IaaS, Platform as a Service - PaaS, Software as a Service - SaaS, Managed Services, Custom solution, Other).
* **Service Tier - Package** (`service_tier`, `text`, `required`): Select the desired service tier or package.
* **Expected Number of Users - Seats** (`expected_users`, `number`, `required`): Enter the expected number of users.
* **Preferred Data Location - Region** (`data_location`, `text`, `required`): Choose the preferred data location or region (US, EU, APAC, etc).
* **System Integration Requirements** (`integration_needed`, `text`, `optional`): Describe any system integration requirements.
* **Single Sign-On - SSO required?** (`sso_required`, `select_one`, `required`): Choose whether Single Sign-On (SSO) is required ('Yes', 'No').
* **VPN or dedicated connection needed?** (`vpn_required`, `select_one`, `optional`): Choose whether a VPN or dedicated connection is required ('Yes', 'No').
* **Support Level** (`support_level`, `select_one`, `required`): Select the desired support level (Basic, Standard, Premium, Enterprise).
* **Required Response Time** (`response_time_requirement`, `select_one`, `optional`): Choose the required response time for critical issues (1 hour, 4 hours, 8 hours, 24 hours, No SLA).
* **Training Required** (`training_required`, `select_one`, `required`): Choose whether training is required (Yes, online training, Yes, onsite training, Yes, both, No, self-service).
* **Number of Users to Train** (`training_count`, `number`, `optional`): Enter the number of users to be trained.
* **Desired Start Date** (`start_date`, `date`, `required`): Enter the desired start date for service activation.
* **Data migration approach** (`migration_plan`, `text`, `optional`): Describe the data migration approach (Phased, Cutover, Hybrid, etc).
