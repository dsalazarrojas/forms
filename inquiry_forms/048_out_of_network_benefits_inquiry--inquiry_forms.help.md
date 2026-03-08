# Out Of Network Benefits Inquiry - Help Guide
## Purpose
The Out Of Network Benefits Inquiry form is used to gather information from users to verify whether a service is medically necessary or not when a patient is being referred to an out-of-network provider.

## How To Complete This Form
1. Click on the "Out Of Network Benefits Inquiry" form in the system.
2. Select the "First Page" option.
3. Answer the following questions on this page:
   * **Out of Network Benefits**: Choose all that apply. Select "Yes" to indicate that the service is medically necessary out-of-network.
   * **Medical Necessity**: Choose all that apply. Select "Yes" to indicate that the service is medically necessary.
   * **Provider Contact Name**: Enter the name of the contact person at the out-of-network provider.
   * **Phone Number**: Enter the phone number of the contact person at the out-of-network provider.
4. If necessary, provide a description of the medical necessity or other relevant details in the "Description" field.
5. Click "Submit" to complete the form.

## Field-by-Field Explanation
* **Out of Network Benefits**: (`out_of_network_benefits`, select_multiple, required)
    + This field is used to verify if the patient's service is medically necessary when being referred to an out-of-network provider.
* **Medical Necessity**: (`medical_necessity`, select_multiple, required)
    + This field is used to verify if the patient's medical condition requires out-of-network services.
* **Provider Contact Name**: (`provider_contact_name`, text, required)
    + Enter the name of the contact person at the out-of-network provider.
* **Phone Number**: (`phone_number`, text, required)
    + Enter the phone number of the contact person at the out-of-network provider.
* **Medical Group**: (`medical_group`, select_multiple, optional)
    + Select "Yes" if the patient's group is involved with the out-of-network provider.
    + If not part of a group, select "No".
* **Other 3**: (`medical_group_other`, text, optional)
    + This field is an alternative to select "Medical Group" and is used for non-standard medical groups.
* **Description**: (`medical_necessity_description`, note, optional)
    + Enter a description or other relevant details about the medical condition.
* **Other 3**: (`medical_necessity_description_other`, note, optional)
    + This field is an alternative to "Description" and is used for non-standard medical conditions.
* **Other 2**: (`medical_necessity_other`, text, optional)
    + Enter any other medical necessity not listed in the "Medical Necessity" field.
* **Other 2**: (`medical_necessity_other_other`, text, optional)
    + This field is an alternative to "Other Medical Necessity" and is used for non-standard medical conditions.
* **Other 1**: (`medical_group_other`, text, optional)
    + This field is an alternative to "Medical Group" and is used for non-standard medical groups.
* **Other 1**: (`medical_group_other_other`, text, optional)
    + This field is an alternative to "Other Medical Group" and is used for non-standard medical groups.

## Tips
- Please ensure all required fields are completed before submitting the form.
- The system will verify the submitted information and guide you through the process based on your input.
- If you are unsure about any field, feel free to contact the support team for assistance.
