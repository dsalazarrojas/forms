# Building Management Cloud Registration - Help Guide

## Purpose
This guide is designed to help you understand how to complete the Building Management Cloud Registration form. The form is intended to collect information about your property and your preferences for services provided by the platform.

## How To Complete This Form
To complete the form, follow these steps:

1. Provide the required information for your property and yourself.
2. Select the services you are interested in from the list provided.
3. Make sure to fill in all the required fields.

## Field-by-Field Explanation
### Registration Date
* **Registration Date** (`registration_date`, date, required): This is the date when you registered for the platform.

### Property Owner Information
* **Property Owner Name** (`owner_name`, text, required): This is the full name of the property owner.
* **Owner Email Address** (`owner_email`, email, required): This is the primary email contact for the property owner.
* **Owner Phone Number** (`owner_phone`, text, required): This is the contact number for the property owner.
* **Company or Organization Name** (`company_name`, text, optional): If the property is managed by a company or organization, please provide its name.
* **Property Owner Information** (`property_owner_section`, note, optional): This is a note for any additional information about the property owner.

### Property Information
* **Property Name** (`property_name`, text, required): This is the name of the building.
* **Property Address** (`property_address`, text, required): This is the full street address of the building.
* **City** (`city`, text, required): This is the city where the building is located.
* **State or Province** (`state_province`, text, required): This is the state or province code where the building is located.
* **Postal Code** (`postal_code`, text, required): This is the zip or postal code of the building.
* **Country** (`country`, text, required): This is the country where the building is located.
* **Property Type** (`property_type`, select_one, required): Select the type of building (Residential, Commercial, Industrial, Mixed Use, Healthcare, Education, Government, Other).
* **Building Square Footage** (`building_sqft`, number, optional): This is the total building size.
* **Number of Units or Spaces** (`num_units`, number, optional): This is for multi-unit properties.
* **Year Built** (`year_built`, number, optional): This is the construction year of the building.

### Property Manager Information
* **Property Manager Name** (`manager_name`, text, required): This is the full name of the property manager.
* **Manager Email Address** (`manager_email`, email, required): This is the email contact for the property manager.
* **Manager Phone Number** (`manager_phone`, text, required): This is the contact number for the property manager.

### Services of Interest
* **Services You Are Interested In** (`services_interested`, select_multiple, required): Select the services you are interested in (Maintenance Scheduling, Tenant Portal, Work Order Management, Financial Management, Compliance Tracking, Energy Management, Reporting and Analytics).

### Currently Using Management System
* **Currently Using Management System** (`current_system`, select_one, optional): If you are currently using a management system, select 'True', otherwise select 'False' or 'Unsure'.

### Estimated Timeline
* **Estimated Timeline for Full Setup** (`estimated_timeline`, select_one, optional): Select when you are ready to go live (Immediately, Within 1 Month, 1-3 Months, 3-6 Months, More than 6 Months).

### Tips
- Make sure to fill in all the required fields to ensure a successful registration.
- If you have any questions or need help, contact our support team.
- The services you select will determine which features are available to you on the platform.
