# Corporate Retreat Waiver Form - Help Guide
## Purpose
The Corporate Retreat Waiver Form is a document that participants must sign before attending any corporate events or workshops. It serves as an agreement between the participant and the organizing entity, clarifying the risks and conditions of the event. By signing this form, participants acknowledge the risks involved and release the organizers from liability.

## How To Complete This Form
- Read through all the sections carefully before starting to fill out the form.
- Complete each section accurately and thoroughly, ensuring you understand the questions and answers provided.

## Field-by-Field Explanation
- **Participant Information 1-16** (`participant_information`, type: text, required: false): This section is for providing additional relevant information about the participant, including any necessary details such as medical conditions, special requirements, or other factors that might impact their participation in the event.

    - **Participant Information 1**: Enter the participant's name.
    - **Participant Information 2**: Provide any medical information, if applicable.
    - **Participant Information 3**: Specify any equipment or gear the participant might need for the event.
    - **Participant Information 4**: Enter the participant's contact information (address, email, etc.).
    - **Participant Information 5**: Provide the participant's phone number.
    - **Participant Information 6**: Enter the participant's emergency contact information (name, relationship, and contact number).
    - **Participant Information 7**: Provide a description of the participant's relationship with the emergency contact.
    - **Participant Information 8**: Specify any special requirements or needs the participant has.
    - **Participant Information 9**: Enter any additional comments or information not captured elsewhere.

- **Waiver Form** (`waiver_form`, type: text, required: false): This is a text box for entering any additional comments or information not covered by the other fields.
- **Risk Acknowledged** (`risks_acknowledged`, type: select_one, required: false): Choose whether you acknowledge and accept the risks involved with the event.
    - Select "Yes" if you understand and accept the risks.
    - Select "No" if you do not understand or do not accept the risks.
- **Emergency Contact** (`emergency_contact`, type: text, required: false): Enter the name of the emergency contact.
- **Emergency Phone** (`emergency_phone`, type: text, required: false): Enter the phone number of the emergency contact.
- **Emergency Address** (`emergency_address`, type: text, required: false): Enter the address of the emergency contact.
- **Emergency Relationship** (`emergency_relationship`, type: text, required: false): Describe the relationship between the participant and the emergency contact.
- **Signature** (`signature`, type: note, required: false): This is a text field for the participant to sign and date their acknowledgment.
- **Participant Agreement** (`participant_agreement`, type: select_multiple, required: false): Select all that apply from the provided options.
    - Select "Yes" for any of the listed risks.
    - Select "No" for any of the listed risks.
- **Waiver Text** (`waiver_text`, type: text, required: false): This is a text box for any additional comments or information.

Note: The required fields are marked with `required: false` in the form schema. This guide assumes that all fields are optional, though it's crucial to review the actual form and the organization's specific rules for accuracy.
