# Mental Health Release Form - Help Guide
## Purpose
The Mental Health Release Form is a crucial document that enables mental health professionals to share patient information with medical insurance companies. This form is used to inform patients that their mental health data will be disclosed to their insurance provider.

## How To Complete This Form
To fill out the Mental Health Release Form:

1.  Enter your **Patient Name** in the first field. This is the name of the individual you are releasing mental health information for.
2.  Enter your **Therapist Name**, the name of the mental health professional releasing the information.
3.  If applicable, provide the **Insurance Name** if you are releasing information to a specific insurance company.
4.  In the **Release Information** field, provide a brief statement explaining the purpose and scope of the release, following the example format provided.
5.  Enter the **Signed On Date**, the date you signed the release.
6.  Enter the **Signed Off Date**, the date the release is intended to be active until.
7.  Select the **Release Type** from the options provided, which determines the scope of the release.
8.  If necessary, enter **Release Reason** for the mental health data being released.
9.  Enter any additional information or notes in the **Therapist Notes** field, if required.
10.  Sign and date the **Patient Signature** and **Therapist Signature** fields as an acknowledgment that you have read and understand the form.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, `text`, required): Enter the name of the patient releasing mental health information.
* **Therapist Name** (`therapist_name`, `text`, required): Enter the name of the mental health professional releasing the information.
* **Insurance Name** (`insurance_name`, `text`, optional): If applicable, enter the name of the insurance company receiving the release.
* **Release Information** (`release_info`, `text`, optional): Briefly describe the purpose and scope of the release. Follow the provided example format.
* **Signed On Date** (`signed_on_date`, `date`, required): Enter the date you signed the release.
* **Signed Off Date** (`signed_off_date`, `date`, required): Enter the date the release is intended to be active until.
* **Release Type** (`release_type`, `select_one`, optional): Select the scope of the release from the options provided.
* **Release Reason** (`release_reason`, `text`, optional): If necessary, enter a brief explanation for the mental health data being released.
* **Therapist Notes** (`therapist_notes`, `note`, optional): Enter any additional information or notes from the therapist.
* **Release Date** (`release_date`, `date`, optional): Enter the date of the release.
* **Release Date 2/3/4** (`release_date2/3/4`, `date`, optional): Enter any secondary dates for the release.
* **Insurance Number** (`insurance_number`, `number`, optional): Enter the patient's insurance number if required.
* **Mental Health Council** (`mental_health_council`, `text`, optional): Enter any council-specific information if required.
* **Release Type 2** (`release_type2`, `select_one`, optional): Select the scope of the release from the options provided.
* **Additional Release Info 1/2/3/4** (`release_info2/3/4`, `note`, optional): Enter any additional information or notes for the release.

Note: Fields not explicitly mentioned in the field-by-field explanation can be ignored as they are not required or not relevant to the form's purpose.
