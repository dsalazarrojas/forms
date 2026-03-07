<thinking>As a form designer and technical writer, the goal is to craft a clear and concise help guide that explains the form's purpose, how to complete it, and what each field means. The form's purpose is to collect information from individuals who wish to enroll in a Conflict Management Workshop. This form is designed to gather essential details such as personal contact information, workshop preferences, and specific challenges or goals related to conflict management. The form is also meant to capture information about the individual's current role and experience with conflict management, as well as any dietary or accessibility needs. The form's fields are structured in a way that requires the user to provide information necessary for workshop planning and administration. For instance, fields like "payment method" and "company billing contact" are essential for workshop logistics, while fields like "specific challenges" and "additional comments" allow users to provide more context and insights about their conflict management goals and experiences. To ensure that users understand the form's purpose and requirements, it's essential to clearly explain each field's label, hint, and options.</thinking>

# Conflict Management Workshop Enrollment Form - Help Guide
## Purpose
The Conflict Management Workshop Enrollment Form is a crucial tool for collecting information from individuals interested in attending the Conflict Management Workshop. This form ensures that we have the necessary details to plan and administer the workshop effectively.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your personal contact information (First Name, Last Name, Email Address, Phone Number, Job Title, Department, and Organization).
2. Select your preferred workshop date.
3. Choose your workshop session (Morning, Afternoon, or Full Day).
4. Indicate your experience level with conflict management (Beginner, Intermediate, or Advanced).
5. Specify the reason for attending the workshop (Personal Development, Required by Manager, Current Conflict Situation, and so on).
6. If applicable, describe any specific challenges or conflicts you face.
7. State your preferred payment method (Company Invoice, Credit Card, Debit Card, Bank Transfer, or Sponsored).
8. If your company is paying for the workshop, provide their name and billing email.
9. Confirm that you have read and accepted the terms and conditions.
10. Acknowledge the workshop's cancellation policy.
11. Specify how you heard about the workshop (Email, Website, Social Media, Colleague, and so on).
12. Add any additional comments or questions.
13. Select the enrollment status (Pending Approval, Confirmed, Waitlisted, or Cancelled).

## Field-by-Field Explanation

* **First Name** (`participant_first_name`, text, required): Enter your first name.
* **Last Name** (`participant_last_name`, text, required): Enter your last name.
* **Email Address** (`email`, email, required): Enter your primary email address for workshop correspondence.
* **Phone Number** (`phone`, text, required): Enter your phone number for workshop contact.
* **Job Title** (`job_title`, text, required): Enter your current job title.
* **Department** (`department`, text, required): Enter your department or division name.
* **Organization** (`organization`, text, required): Enter your company or organization name.
* **Preferred Workshop Date** (`workshop_date`, date, required): Select your preferred workshop date from the calendar.
* **Workshop Session** (`workshop_session`, select_one, required): Choose your preferred workshop session (Morning, Afternoon, or Full Day).
* **Experience with Conflict Management** (`experience_level`, select_one, required): Indicate your level of experience with conflict management (Beginner, Beginner with some experience, Intermediate, or Advanced).
* **Reason for Attending** (`reason_for_attending`, select_one, required): Specify the reason you want to attend the workshop (Personal Development, Required by Manager, Current Conflict Situation, and more).
* **Specific Challenges** (`specific_challenges`, text, optional): Describe any particular conflict situations or challenges you face.
* **What Do You Hope to Learn?** (`learning_objectives`, text, optional): State your learning goals for the workshop.
* **Do You Currently Experience Team Conflicts?** (`team_conflicts`, select_one, required): Indicate if you are dealing with ongoing team conflicts.
* **Do You Have Management Responsibilities?** (`management_role`, select_one, required): Confirm if you manage other employees.
* **Dietary Requirements** (`dietary_requirements`, select_multiple, optional): List any dietary restrictions you may have.
* **Accessibility Requirements** (`accessibility_needs`, text, optional): Specify any accessibility needs you may have.
* **Payment Method** (`payment_method`, select_one, required): Select how you intend to pay for the workshop (Company Invoice, Credit Card, Debit Card, Bank Transfer, or Sponsored).
* **Company Billing Contact** (`company_billing_contact`, text, optional): Enter the name of the company paying for the workshop.
* **Company Billing Email** (`company_billing_email`, email, optional): Enter the email address of the company paying for the workshop.
* **Terms and Conditions Accepted** (`terms_accepted`, select_one, required): Confirm that you have read and accepted the workshop terms and conditions.
* **Cancellation Policy Understood** (`cancellation_policy`, select_one, required): Acknowledge that you understand the workshop's cancellation policy.
* **How Did You Hear About This Workshop?** (`referral_source`, select_one, optional): Specify how you learned about the workshop.
* **Additional Comments or Questions** (`additional_comments`, text, optional): Add any additional comments or questions you may have.
* **Enrollment Status** (`enrollment_status`, select_one, required): Select the enrollment status (Pending Approval, Confirmed, Waitlisted, or Cancelled).
