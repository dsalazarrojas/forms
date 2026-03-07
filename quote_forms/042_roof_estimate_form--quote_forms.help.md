<thinking>
This form is used for estimating the cost of a roofing project. The form is designed to gather information about a project's details, address, contact person and phone number, email, roof type, square footage, number of stories, roof condition, roof inspection report, estimated cost, payment terms, payment method, payment due date, payment status, and notes. The form is intended for internal use, and the information gathered will be used to generate an estimate for the project. This form is typically filled out by a project manager or estimator. This form does not have any specific security or compliance concerns.
</thinking>

# roof_estimate_form - Help Guide
## Purpose
The roof_estimate_form is used to collect information about a roofing project to generate an estimate. This form is for internal use.

## How To Complete This Form
To complete the form, fill out the following pages:

1. Project Details
2. Address
3. Contact Information
4. Contact Person
5. Contact Phone
6. Contact Email
7. Roof Type
8. Square Footage
9. Number of Stories
10. Roof Condition
11. Roof Inspection Report
12. Estimated Cost
13. Payment Terms
14. Payment Method
15. Payment Due Date
16. Payment Status
17. Notes
18. Project Status
19. Assigned User

## Field-by-Field Explanation
### Project Details
- **Project Details** (`project_details`, `text`, required: false): Enter a brief description of the project.

### Address
- **Address** (`project_address`, `text`, required: false): Enter the address of the project location.

### Contact Information
- **Contact Information** (`project_contact`, `text`, required: false): Enter the contact information for the project.

### Contact Person
- **Contact Person** (`contact_person`, `text`, required: false): Enter the name of the contact person.

### Contact Phone
- **Contact Phone** (`contact_phone`, `text`, required: false): Enter the contact phone number of the contact person.

### Contact Email
- **Contact Email** (`contact_email`, `text`, required: false): Enter the email address of the contact person.

### Roof Type
- **Roof Type** (`roof_type`, `text`, required: false): Enter the type of roof for the project.

### Square Footage
- **Square Footage** (`square_footage`, `text`, required: false): Enter the square footage of the project.

### Number of Stories
- **Number of Stories** (`number_of_stories`, `number`, required: false): Enter the number of stories for the project.

### Roof Condition
- **Roof Condition** (`roof_condition`, `select_one`, required: false): Select the condition of the roof from the options: new, re Roof renovation, re Roof inspection.

### Roof Inspection Report
- **Roof Inspection Report** (`roof_inspection_report`, `date`, required: false): Enter the date of the roof inspection report.

### Estimated Cost
- **Estimated Cost** (`estimated_cost`, `number`, required: false): Enter the estimated cost of the project.

### Payment Terms
- **Payment Terms** (`payment_terms`, `select_one`, required: false): Select the payment terms from the options: Net 30, Net 60, Net 90.

### Payment Method
- **Payment Method** (`payment_method`, `select_multiple`, required: false): Select the payment method from the options: Cash, Check, Credit Card.

### Payment Due Date
- **Payment Due Date** (`payment_due_date`, `date`, required: false): Enter the payment due date.

### Payment Status
- **Payment Status** (`payment_status`, `select_one`, required: false): Select the payment status from the options: Paid, Unpaid, Pending.

### Notes
- **Notes** (`notes`, `note`, required: false): Enter any additional notes about the project.

### Project Status
- **Project Status** (`project_status`, `select_one`, required: false): Select the project status from the options: Active, Inactive, Closed.

### Assigned User
- **Assigned User** (`assigned_user`, `select_one`, required: false): Select the user assigned to the project from the options: chatjimmy, other.
