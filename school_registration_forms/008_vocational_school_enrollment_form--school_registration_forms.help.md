# Vocational School Enrollment Form - Help Guide
## Purpose
The Vocational School Enrollment Form is designed to collect essential information from students who are enrolling in a vocational school program. This form helps the school administrators to understand the student's background, interests, and needs, which in turn, enables them to provide better services and support throughout the student's academic journey.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the student's personal and academic information on pages 1-3.
2. Select the student's program of interest on page 4.
3. Enter the student's address and contact information on pages 5-8.
4. Provide information about the student's disability status and description on pages 9-10.
5. Sign and date the form on pages 11-12.

## Field-by-Field Explanation
- **Student Information** (`student_information`, `text`, required: false): Please enter the student's name, age, and any other relevant personal details.
- **Student Programs** (`student_programs`, `select_multiple`, required: true): Select one or more programs that the student is interested in enrolling into. Please choose from the list of options provided: Accounting, Business, Computer Science, Engineering, Health and Medicine, or Other (Specify).
- **Program Start Date** (`program_start_date`, `date`, required: false): Enter the date the student plans to start the program. Please use the date format: mm/dd/yyyy.
- **Program End Date** (`program_end_date`, `date`, required: false): Enter the date the student plans to complete the program. Please use the date format: mm/dd/yyyy.
- **Student Name** (`student_name`, `text`, required: false): Enter the student's full name.
- **Student Email** (`student_email`, `email`, required: false): Enter the student's email address.
- **Student Phone** (`student_phone`, `text`, required: false): Enter the student's phone number.
- **Parent Information** (`parent_information`, `text`, required: false): Provide any relevant information about the student's parent or guardian.
- **Parent Name** (`parent_name`, `text`, required: false): Enter the parent's or guardian's name.
- **Parent Email** (`parent_email`, `email`, required: false): Enter the parent's or guardian's email address.
- **Parent Phone** (`parent_phone`, `text`, required: false): Enter the parent's or guardian's phone number.
- **Emergency Contact Information** (`emergency_contact_information`, `text`, required: false): Provide information about the student's emergency contact person.
- **Emergency Name** (`emergency_name`, `text`, required: false): Enter the emergency contact's name.
- **Emergency Email** (`emergency_email`, `email`, required: false): Enter the emergency contact's email address.
- **Emergency Phone** (`emergency_phone`, `text`, required: false): Enter the emergency contact's phone number.
- **Address** (`address`, `text`, required: false): Enter the student's home address.
- **City** (`city`, `text`, required: false): Enter the city where the student resides.
- **State** (`state`, `text`, required: false): Enter the state where the student resides.
- **Zip** (`zip`, `number`, required: false): Enter the student's zip code.
- **Country** (`country`, `text`, required: false): Enter the country where the student resides.
- **Language** (`language`, `text`, required: false): Enter the student's native language.
- **Disability Status** (`disability`, `select_multiple`, required: false): Select the student's disability status: True or False.
- **Disability Description** (`disability_description`, `text`, required: false): Provide a brief description of the student's disability.
- **Student Signature** (`student_signature`, `note`, required: false): Please sign and date the form to confirm that the information provided is accurate.
- **Parent Signature** (`parent_signature`, `note`, required: false): Please sign and date the form to confirm that the information provided is accurate.
