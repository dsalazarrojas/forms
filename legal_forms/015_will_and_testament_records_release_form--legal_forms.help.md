# will_and_testament_records_release_form - Help Guide
## Purpose
This form is used to record the release of will and testament records. It captures essential information for the release process, including the legal representative's details, estate settlement status, and notarization details.

## How To Complete This Form
To complete this form, please follow these steps:

1.  Fill in the legal representative's details, including their name and date of birth.
2.  Select the estate settlement status to indicate the current state of the estate.
3.  If the estate is still active, select one or more authorized persons who are authorized to act on behalf of the estate.
4.  Provide any additional comments about the estate or the release process.
5.  Enter the estate attorney's contact information.
6.  Date and time the release form was signed, if applicable.
7.  Notarize the release form by selecting the notarization details and date.

## Field-by-Field Explanation

*   **Legal Representative** (`legal_representative`, `text`, required): Enter the name of the legal representative responsible for the estate.
*   **Name** (`name`, `text`, required): Enter the name of the individual whose will and testament records are being released.
*   **Date of Birth** (`date_of_birth`, `date`, required): Enter the date of birth of the individual.
*   **Date of Death** (`date_of_death`, `date`, required): Enter the date of death of the individual.
*   **Estate Settlement Status** (`estate_settlement_status`, `select_one`, optional): Select the current estate settlement status to indicate the state of the estate. This field is optional.
*   **Authorized Person** (`authorized_person`, `select_multiple`, optional): If the estate is still active, select one or more authorized persons who are authorized to act on behalf of the estate. This field is optional.
*   **Will Details** (`will_details`, `note`, optional): Provide any additional comments about the will.
*   **Testament Details** (`testament_details`, `note`, required): Describe any additional comments about the testament.
*   **Release Date** (`release_date`, `date`, required): Enter the date the release form was created.
*   **Release Time** (`release_time`, `time`, optional): Enter the time the release form was created, if applicable. This field is optional.
*   **Reason for Release** (`reason_for_release`, `text`, required): Provide a reason for the release.
*   **Contact Person** (`contact_person`, `email`, required): Enter the contact person's email address.
*   **Contact Person Phone** (`contact_person_phone`, `text`, required): Enter the contact person's phone number.
*   **Authorized By** (`authorized_by`, `select_one`, optional): Select who authorized the release. This field is optional.
*   **Release Form Signed Date** (`release_form_signed_date`, `date`, optional): Enter the date the release form was signed, if applicable. This field is optional.
*   **Release Form Signed Time** (`release_form_signed_time`, `time`, optional): Enter the time the release form was signed, if applicable. This field is optional.
*   **Release Form Signed** (`release_form_signed`, `select_one`, optional): Select whether the release form was signed or not. This field is optional.
*   **Release Form Not Signed** (`release_form_not_signed`, `select_one`, optional): Select whether the release form was not signed. This field is optional.
*   **Additional Comments** (`additional_comments`, `note`, optional): Provide any additional comments about the release process.
*   **Estate Attorney** (`estate_attorney`, `text`, required): Enter the estate attorney's name.
*   **Attorney Phone** (`attorney_phone`, `text`, optional): Enter the estate attorney's phone number. This field is optional.
*   **Attorney Email** (`attorney_email`, `email`, optional): Enter the estate attorney's email address. This field is optional.
*   **Notarized Date** (`notarized_date`, `date`, required): Enter the notarization date.
*   **Notarized By** (`notarized_by`, `select_one`, optional): Select who notarized the document. This field is optional.
*   **Notarized By Title** (`notarized_by_title`, `text`, required): Enter the notarized by title.
