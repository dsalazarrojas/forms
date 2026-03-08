# Home Insurance Claim Records Release Form - Help Guide
## Purpose
The Home Insurance Claim Records Release Form is used to get a release from the policyholder of a claim, indicating their consent for the insurance company to access and share information about their claim.

## How To Complete This Form
To fill out this form, follow these steps:

1.  Ensure you have the policyholder's consent to complete this form.
2.  Fill out the form completely and accurately with the requested information.
3.  Review the form for any errors before submitting it to the insurance company.

## Field-by-Field Explanation

* **Policyholder Name** (`policyholder_name`, text, required): Enter the policyholder's name as it appears on their policy documents. This is the person who is making the claim and is the one releasing their claim information.
* **Claim Date** (`claim_date`, date, required): Enter the date of the claim, as it appears on the policy documents. This date should be in the format of month/day/year (MM/DD/YYYY).
* **Authorized To Release** (`authorized_to_release`, select_one, required): Choose 'Yes' to indicate that the policyholder is authorized to release their claim information. This ensures that the insurance company can access and share relevant data.
* **Release To** (`release_to`, select_multiple, required): Select 'Insurance Company' to indicate that you are releasing claim information to your insurance company. You can also choose 'Third Party' if you want to release information to another party.
* **Authorized Person** (`authorized_person`, text, required): Enter the name of the person authorized by the policyholder to release their claim information.
* **Release Date** (`release_date`, date, optional): Enter the date of the release, if you are releasing information now. This date should be in the format of month/day/year (MM/DD/YYYY).
* **Reason For Release** (`reason_for_release`, text, optional): Provide a brief explanation for releasing the claim information, if necessary.
* **Reason** (`reason_for_release`, text, optional): This field is a duplicate of the "Reason For Release" field and can be ignored.
* **Email** (`email`, email, optional): Enter the email address of the person authorized to release claim information.
* **Phone** (`phone`, text, optional): Enter the phone number of the person authorized to release claim information.

## Tips
- Please fill out the form carefully and accurately to avoid any delays or issues with claim processing.
- The policyholder's consent is essential for this form, so ensure you have their permission before filling it out.
