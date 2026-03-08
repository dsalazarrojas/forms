# field_research_permission_form - Help Guide
## Purpose
The field_research_permission_form is used to collect information from researchers and participants about research studies, including details about the researchers, participants, and institutional reviews.

## How To Complete This Form

To complete this form, follow the steps below:

1.  Fill out the researcher details section, which includes information about the researcher, such as their contact person and institutional review board information.
2.  Complete the participant details section, which includes information about the participant, such as their consent and signature.
3.  In the study details section, fill out information about the study, including its start and end dates, location, and institutional review board information.
4.  Make sure to fill out all required fields accurately and completely.

## Field-by-Field Explanation

*   **Researcher Details**
    *   **Researchers Details** (`researcher_details`, text, optional): This field collects information about the researcher, including their contact person and institutional review board information.
    *   **Study Start Date** (`study_start_date`, date, required): This field is used to specify the start date of the study.
    *   **Study End Date** (`study_end_date`, date, required): This field is used to specify the end date of the study.
    *   **Research Team** (`research_team`, select\_multiple, optional): This field is used to determine if the researcher has a team for the study.
    *   **Contact Person** (`contact_person`, text, optional): This field collects information about the contact person, including their title.
*   **Participant Details**
    *   **Participants Details** (`participant_details`, text, optional): This field collects information about the participant.
    *   **Participant Consent** (`participant_consent`, select\_one, required): This field is used to determine if the participant has given consent to participate in the study.
    *   **Participant Informed Consent Document** (`participant_informed_consent`, select\_one, required): This field is used to upload or link to the participant informed consent document.
    *   **Participant Signature** (`participant_signature`, note, required): This field collects the participant's signature.
*   **Study Details**
    *   **Research Institution** (`research_institution`, select\_one, optional): This field is used to determine if the research institution has approved the study.
    *   **Research Institution Name** (`research_institution_name`, text, optional): This field is used to specify the research institution's name.
    *   **Research Institution Address** (`research_institution_address`, text, optional): This field is used to specify the research institution's address.
    *   **Research Group** (`research_group`, text, optional): This field is used to specify the research group.
*   **Additional Details**
    *   **Participant Informed Consent** (`participant_informed_consent`, select\_one, optional): This field is used to determine if the participant has given informed consent.
    *   **Research Institutional Review Board** (`research_institutional_review_board`, text, optional): This field is used to specify the research institutional review board.
    *   **Study Institutional Review Board** (`study_institutional_review_board`, text, optional): This field is used to specify the study institutional review board.
    *   **Date** (`date`, date, required): This field is used to specify the date the form was completed.
    *   **Time** (`time`, time, optional): This field is used to specify the time the form was completed.
    *   **Contact Person Title** (`contact_person_title`, text, optional): This field is used to specify the contact person's title.

## Tips

*   Make sure to fill out all required fields accurately and completely.
*   Use a date picker for the date fields if possible.
*   Be clear and concise in your responses to make it easier for others to understand your form.
