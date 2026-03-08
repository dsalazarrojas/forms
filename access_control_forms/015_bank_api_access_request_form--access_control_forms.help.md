<thinking>
You will need to ensure this form is used for a legitimate purpose, not to spam or misuse the API. Please don't submit duplicate requests. This form is designed for organizations that need access to the Bank API for legitimate business purposes. Please ensure you have the necessary authorization from your company to complete this form.
</thinking>

# Bank API Access Request Form - Help Guide
## Purpose
This form is designed to request access to the Bank API for your organization. Please provide accurate and complete information to ensure a smooth access approval process.

## How To Complete This Form
1. Fill in all the required fields (marked as `required` in the form).
2. Be honest and accurate when providing information about your company and its needs.
3. Review the form carefully before submitting to ensure you haven't missed any fields.

## Field-by-Field Explanation

* **Company Name** (1, `text`, required): Enter your company name as it appears on your business registration documents.
* **Company Address** (2, `text`, required): Provide your full business address.
* **Company Website** (3, `text`, required): Enter the URL of your website.
* **Company Registration Number** (4, `text`, required): Enter your business registration number or tax ID.
* **Contact Full Name** (5, `text`, required): Enter the name of the primary contact person.
* **Contact Title** (6, `text`, required): Enter the job title or position of the primary contact person.
* **Contact Email** (7, `email`, required): Enter the email address of the primary contact person.
* **Contact Phone** (8, `text`, required): Enter the direct phone number of the primary contact person.
* **API Access Type** (9, `select_one`, required): Select the level of access you need:
	+ Read-Only Access: For viewing data only.
	+ Transaction Access: For performing transactions.
	+ Payment Initiation: For sending payments.
	+ Full API Access: For complete access to all API endpoints.
	+ Sandbox Testing Only: For testing purposes only.
* **API Endpoints Needed** (10, `select_multiple`, required): Select the specific API endpoints you need:
	+ Account Information
	+ Transaction History
	+ Balance Inquiry
	+ Payment Processing
	+ Fund Transfer
	+ Direct Debit
	+ Standing Orders
	+ Card Services
	+ Foreign Exchange
	+ Loan Services
* **Use Case Description** (11, `text`, required): Describe how you plan to use the API.
* **Expected Transaction Volume** (12, `select_one`, required): Estimate your expected API calls per day:
	+ Under 100
	+ 100-1000
	+ 1000-10000
	+ 10000-100000
	+ Over 100000
* **Integration Timeline** (13, `select_one`, required): Provide your planned integration timeline:
	+ Within 1 month
	+ 1-3 months
	+ 3-6 months
	+ 6-12 months
	+ Planning phase
* **Technical Contact Name** (14, `text`, required): Enter the name of your technical contact or lead.
* **Technical Contact Email** (15, `email`, required): Enter the email address of your technical contact or lead.
* **Development Environment** (16, `select_one`, required): Select the platform you will integrate with:
	+ Web Application
	+ Mobile App iOS
	+ Mobile App Android
	+ Desktop Software
	+ Enterprise System
	+ Other
* **Security Certifications** (17, `select_multiple`, not required): Select your company's security certifications (if any):
	+ ISO 27001
	+ SOC 2
	+ PCI DSS
	+ GDPR Compliant
	+ HIPAA Compliant
	+ None
* **Data Handling Policy** (18, `text`, required): Provide the URL to your company's data handling policy.
* **Compliance Acknowledgment** (19, `select_one`, required): Confirm your compliance with regulations:
	+ Yes, fully compliant
	+ Working toward compliance
	+ Need guidance
* **Testing Requirements** (20, `select_one`, required): Confirm if you need sandbox access:
	+ Yes, sandbox required
	+ No, ready for production
	+ Both
* **Support Level Needed** (21, `select_one`, required): Select your required support level:
	+ Standard Support
	+ Priority Support
	+ Dedicated Account Manager
	+ Self-Service Only
* **Previous Banking API Partner** (22, `text`, not required): If you have used banking APIs before, describe your experience.
* **Additional Comments** (23, `text`, not required): Enter any additional information.
* **Terms and Conditions Acceptance** (24, `select_one`, required): Confirm your acceptance of the terms and conditions:
	+ Yes, I agree
	+ False
* **Submission Date** (25, `date`, required): Date of this request.
