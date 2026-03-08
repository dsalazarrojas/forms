# Community Petition Form - Help Guide
## Purpose

The Community Petition Form is a tool to help community members gather information and support for various causes, issues, and concerns within their community. It's designed to collect data from individuals who want to express their opinions, provide feedback, or propose changes to the community. By using this form, community leaders can better understand the needs and concerns of their members and make informed decisions to address these issues.

## How To Complete This Form

To complete the Community Petition Form, follow these steps:

1. Provide a clear and concise title for your petition that summarizes the issue or cause you are concerned about.
2. Select a category that best fits the issue or cause you are addressing (e.g., Public Safety, Environmental, Infrastructure, etc.).
3. Describe the problem or issue you want to address in the petition description field.
4. Specify the desired outcome or change you are seeking.
5. Identify the authority or organization that should address this issue.
6. Provide your contact information as the primary organizer, including your first and last name, email, and phone number.
7. If you're representing an organization, provide its name.
8. If applicable, add the supporter information, including their first and last name, email, and street address.
9. Write a statement of support explaining why you're supporting this petition.
10. Choose whether you're collecting additional signatures and how you'd like the petition to be delivered (e.g., via email, in-person, etc.).

## Field-by-Field Explanation

* **Petition Title** (`petition_title`, `text`, required): A clear and concise title that summarizes the issue or cause you are addressing.
* **Petition Category** (`petition_category`, `select_one`, required): The category that best fits the issue or cause you're addressing. This helps identify the type of problem or concern.
* **Petition Description** (`petition_description`, `text`, required): A detailed explanation of the problem or issue you're trying to address.
* **Desired Outcome** (`desired_outcome`, `text`, required): A clear statement of what change or action you're seeking.
* **Target Authority** (`target_authority`, `text`, required): The organization or authority responsible for addressing this issue.
* **Organizer Information** (`organizer_info`, `note`, optional): Optional field for the primary contact person or organization.
* **Organizer First Name** (`organizer_first_name`, `text`, required): Your first name as the primary organizer.
* **Organizer Last Name** (`organizer_last_name`, `text`, required): Your last name as the primary organizer.
* **Organizer Email** (`organizer_email`, `email`, required): Your email address as the primary organizer.
* **Organizer Phone** (`organizer_phone`, `text`, required): Your phone number as the primary organizer.
* **Organization Name** (`organization_name`, `text`, optional): If you're representing an organization, provide its name.
* **Supporter Information** (`supporter_info`, `note`, optional): Optional field for adding supporter information.
* **Supporter First Name** (`supporter_first_name`, `text`, required): The first name of the supporter.
* **Supporter Last Name** (`supporter_last_name`, `text`, required): The last name of the supporter.
* **Supporter Email** (`supporter_email`, `email`, optional): The email address of the supporter (if provided).
* **Supporter Address** (`supporter_address`, `text`, required): The street address of the supporter.
* **Supporter City** (`supporter_city`, `text`, required): The city of the supporter.
* **Supporter ZIP Code** (`supporter_zip`, `text`, required): The ZIP code of the supporter.
* **Statement of Support** (`supporter_statement`, `text`, optional): A statement explaining why you're supporting this petition.
* **Date of Signature** (`signature_date`, `date`, required): The date when you signed the petition.
* **Are You Collecting Additional Signatures?** (`additional_signers`, `select_one`, optional): Choose if you're collecting additional signatures.
* **How Should Petition Be Delivered?** (`delivery_method`, `select_one`, optional): The preferred method for delivering the petition.
* **Additional Comments** (`additional_comments`, `text`, optional): Any additional information relevant to the petition.
