# Student Research Publication Consent Waiver Form - Help Guide
## Purpose
The purpose of this form is to collect and store student consents for research publications. It helps the department to verify the consent status of each research publication.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your Student ID number.
2. Enter your First Name.
3. Enter your Last Name.
4. Provide your Email address.
5. Select the Research Title of the publication for which you are giving your consent.
6. Fill in the Publication Date of the research publication.
7. Enter the Publication URL (website or DOI, if applicable).
8. Select the Publication Status:
	* Published: if the publication has already been published.
	* In Progress: if the publication is still under review or in progress.
	* In Review: if the publication is currently under peer review.
9. Indicate if you have given your consent for the publication.
10. Enter the date when you gave your consent.
11. Provide the type of the publication (e.g., article, book chapter, conference paper, etc.).
12. Enter the name of your Research Supervisor.
13. Enter the name of the Institution where the research was conducted.
14. Provide any additional comments or agreements related to the publication.
15. Fill in the Agreement Date if the publication has an agreement.
16. Enter any Institutional Review comments.

## Field-by-Field Explanation

* **Student ID** (`student_id`, number, required): Your student ID number.
* **First Name** (`first_name`, text, required): Your first name.
* **Last Name** (`last_name`, text, required): Your last name.
* **Email** (`email`, email, required): Your email address.
* **Research Title** (`research_title`, text, required): The title of the research publication for which you are giving your consent.
* **Publication Date** (`publication_date`, date, required): The date of the publication.
* **Publication URL** (`publication_url`, text, required): The website or DOI of the publication, if applicable.
* **Publication Status** (`publication_status`, select_one, required): The status of the publication.
	+ Published: If the publication has already been published.
	+ In Progress: If the publication is still under review or in progress.
	+ In Review: If the publication is currently under peer review.
* **Consent Given** (`consent_given`, select_multiple, required): Check if you have given your consent for the publication.
* **Consent Date** (`consent_date`, date, required): The date when you gave your consent.
* **Publication Type** (`publication_type`, text, required): The type of publication (e.g., article, book chapter, conference paper, etc.).
* **Research Supervisor** (`research_supervisor`, text, required): The name of your research supervisor.
* **Institution** (`institution`, text, required): The name of the institution where the research was conducted.
* **Publication Agreement** (`publication_agreement`, text, required): Any additional comments or agreements related to the publication.
* **Agreement Date** (`agreement_date`, date, required): The date of the agreement.
* **Institutional Review** (`institutional_review`, text, required): Any comments related to the institutional review.
* **Departmental Note** (`institutional_note`, text, required): This field is not present in the input schema, but it is assumed to be present as it is a part of the form. 

Note: Some fields may be optional, but please fill in all required fields accurately to ensure consistency and up-to-date data.
