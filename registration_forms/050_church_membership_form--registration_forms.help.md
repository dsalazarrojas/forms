# Church Membership Form - Help Guide
## Purpose
The Church Membership Form is designed to collect essential information from individuals seeking membership in the local church. This form is used to help the church understand the applicant's spiritual journey, background, and commitment to the church's values and practices.

## How To Complete This Form
To complete this form, please follow the instructions below:

1.  Enter your **Full Legal Name** in the **Membership Applicant Name** field.
2.  Enter your **Date of Birth** in the **Date of Birth** field in the format `MM/DD/YYYY`.
3.  Enter your **Email Address** in the **Email Address** field.
4.  Enter your **Phone Number** in the **Phone Number** field.
5.  Enter your **Home Address** in the **Home Address** field.
6.  Answer **Have you been baptized?** in the **Have you been baptized?** field by selecting either **True** or **False**.
7.  Briefly share your **personal faith story** in the **Briefly share your personal faith story** field.
8.  If applicable, list your **Previous church memberships (if any)** in the **Previous church memberships (if any)** field.
9.  Explain **Why do you wish to join this local congregation?** in the **Why do you wish to join this local congregation?** field.
10.  Read and agree with the **Church's Articles of Faith** in the **I agree with the Church's Articles of Faith** field by selecting **I Agree**.
11.  Commit to supporting the church through **service and giving** by selecting **I Commit** in the **I commit to support the church through service and giving** field.
12.  Select the **Areas where you are interested in serving** from the **Areas where you are interested in serving** field.
13.  Answer **Are you interested in joining a small group?** by selecting **True**, **Already in one**, or **False**.
14.  Finally, sign the **Electronic Signature** field with your digital signature.

## Field-by-Field Explanation
* **Full Legal Name** (`membership_applicant_name`, text, required): Enter your full name as it appears on your official documents.
* **Date of Birth** (`membership_dob`, date, required): Enter your date of birth in the format `MM/DD/YYYY`.
* **Email Address** (`membership_email`, email, required): Enter your email address that we will use to communicate with you.
* **Phone Number** (`membership_phone`, text, required): Enter your phone number that we will use to contact you.
* **Home Address** (`membership_address`, text, required): Enter your home address for administrative purposes.
* **Have you been baptized?** (`membership_baptism_status`, select_one, required): Answer **True** if you have been baptized, **False** if not.
* **Briefly share your personal faith story** (`conversion_experience_brief`, text, required): Share a brief account of how you came to follow Christ.
* **Previous church memberships (if any)** (`previous_membership_listing`, text, optional): If you are a member of another church, list the details here.
* **Why do you wish to join this local congregation?** (`membership_reason_joining`, text, required): Explain your motivations for joining our local church.
* **I agree with the Church's Articles of Faith** (`belief_statement_agreement`, select_one, required): Read and agree with the Articles of Faith by selecting **I Agree**.
* **I commit to support the church through service and giving** (`service_giving_covenant`, select_one, required): Commit to supporting the church through service and giving by selecting **I Commit**.
* **Areas where you are interested in serving** (`membership_service_interests`, select_multiple, optional): Select from the list of areas where you are interested in serving.
* **Are you interested in joining a small group?** (`membership_small_group_interest`, select_one, required): Select **True** if you are interested, **Already in one** if you are already in a small group, or **False** if not.
* **Electronic Signature** (`applicant_membership_signature`, text, required): Sign the form electronically to confirm your application.

## Tips
* Please fill out this form accurately and completely to ensure your membership application is processed smoothly.
* If you have any issues or questions, please contact the church administration.
* This form is for internal church use, and we will not share your information with third parties without your consent.
