<thinking>As a form designer and technical writer, I need to create a user-facing help guide that explains the purpose and functionality of the "Patient Journey Mapping Project Consent Form". This form is designed to gather essential information from patients to ensure their comfort and understanding throughout a project. The form's purpose is to gather data that will help the project team understand the patient's preferences, concerns, and expectations. This will aid in tailoring the project's approach to meet the patient's needs.

The form is divided into multiple sections, each with its own set of questions. The patient is asked to provide their contact details, sign a note acknowledging their informed consent, and provide information about their participation in the project. The patient is also asked to provide details about their project preferences and whether they have team members who will be participating in the project.

To complete this form, the patient should:

- Start by providing their contact details, including their email or phone number.
- Indicate whether they have other contact information (if not provided earlier).
- Sign and date the informed consent note, acknowledging that they understand the project's purpose and their role in it.
- Provide details about their project preferences, such as project name.
- If applicable, indicate whether they have team members who will be involved in the project.
- Provide any additional project details that are relevant to the patient's journey.

The following fields require an explanation:

*   **patient_information** (`patient_information`, text, required: false): This section is used to gather information about the patient, including any relevant medical history or concerns. Please provide a brief description of your condition, medical history, or any other relevant information that will help us understand your needs and preferences.
*   **contact_details** (`contact_details`, select_one, required: false): Select how you would like us to contact you: by email, phone, or other (please specify).
*   **signatures** (`signatures`, note, required: false): Please sign and date this note to confirm that you have read and understand the information provided. This will help us ensure that you have given informed consent for your participation in the project.
*   **patient_journey** (`patient_journey`, text, required: false): Describe the patient's journey, including any relevant medical events, hospitalizations, or other significant experiences that will aid in tailoring the project's approach to meet your needs.
*   **project_name** (`project_name`, text, required: false): Provide the name of the project you are interested in.
*   **team_members** (`team_members`, select_multiple, required: false): Indicate if you have team members who will be participating in the project.
*   **project_details** (`project_details`, text, required: false): Provide any additional details about the project that will aid in its planning and execution.
*   **participant_informed_consent** (`participant_informed_consent`, note, required: false): This is a note for the patient to sign and date, confirming their informed consent for their participation in the project.

# Patient Journey Mapping Project Consent Form - Help Guide
## Purpose
This form is designed to gather information from patients to ensure their comfort and understanding throughout a project.
## How To Complete This Form
1.  Provide your contact details, including your email or phone number.
2.  Indicate whether you have other contact information (if not provided earlier).
3.  Sign and date the informed consent note, acknowledging that you understand the project's purpose and your role in it.
4.  Provide details about your project preferences, such as project name.
5.  If applicable, indicate whether you have team members who will be involved in the project.
6.  Provide any additional project details that are relevant to your journey.

## Field-by-Field Explanation

*   **patient_information (patient_information, text, required: false):** Please provide a brief description of your condition, medical history, or any other relevant information that will help us understand your needs and preferences.
*   **contact_details (contact_details, select_one, required: false):** Select how you would like us to contact you: by email, phone, or other (please specify).
*   **signatures (signatures, note, required: false):** Please sign and date this note to confirm that you have read and understand the information provided. This will help us ensure that you have given informed consent for your participation in the project.
*   **patient_journey (patient_journey, text, required: false):** Describe your journey, including any relevant medical events, hospitalizations, or other significant experiences that will aid in tailoring the project's approach to meet your needs.
*   **project_name (project_name, text, required: false):** Provide the name of the project you are interested in.
*   **team_members (team_members, select_multiple, required: false):** Indicate if you have team members who will be participating in the project.
*   **project_details (project_details, text, required: false):** Provide any additional details about the project that will aid in its planning and execution.
*   **participant_informed_consent (participant_informed_consent, note, required: false):** This is a note for the patient to sign and date, confirming their informed consent for their participation in the project.
