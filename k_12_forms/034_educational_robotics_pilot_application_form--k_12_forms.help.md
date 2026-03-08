<thinking>
To create an effective user-facing help guide for the Educational Robotics Pilot Application Form, I need to understand the form's purpose and the context in which it will be used. Based on the provided YAML, it appears that this form is likely used to collect information from schools or educational institutions about their interest in participating in a robotics pilot program. The form is meant to gather details such as school name, contact information, number of students and teachers, equipment, and application status.

To confirm, I will assume that this form is used to:

* Gather information from schools to assess their eligibility and interest in participating in a educational robotics pilot program.
* Track the status of their application.
* Facilitate communication between the school and the program administrators.

I will now create a user-facing help guide based on this understanding.

# Educational Robotics Pilot Application Form - Help Guide
## Purpose
The Educational Robotics Pilot Application Form is a tool used to collect information from schools interested in participating in an educational robotics pilot program. This form helps program administrators assess the school's eligibility and track the status of their application.

## How To Complete This Form
To complete the form, follow these steps:

1. Fill in your school's name in the School Name field.
2. Enter your school's email address in the School E-mail field.
3. Provide your contact information in the Contact Person, Contact E-mail, and Contact Phone fields.
4. Enter the number of students and teachers in your school.
5. Describe the equipment you have for the robotics program in the Robotics Equipment field.
6. Select the pilot year you are interested in participating in.
7. Finally, update the Application Status field to reflect the current status of your application.

## Field-by-Field Explanation

* **School Name** (`school_name`, text, required): Enter the name of your school.
* **School E-mail** (`school_email`, email, required): Enter your school's email address.
* **Contact Person** (`contact_person`, text, optional): Enter the name of the contact person responsible for this application.
* **Contact E-mail** (`contact_email`, email, optional): Enter the email address of the contact person.
* **Contact Phone** (`contact_phone`, text, optional): Enter the contact person's phone number.
* **School Address** (`school_address`, text, optional): Enter your school's address (not required but recommended for communication purposes).
* **Number of Students** (`number_of_students`, number, optional): Enter the number of students participating in the robotics program.
* **Number of Teachers** (`number_of_teachers`, number, optional): Enter the number of teachers participating in the robotics program.
* **Robotics Equipment** (`robotics_equipment`, text, optional): Describe the equipment you have for the robotics program.
* **Pilot Year** (`pilot_year`, number, optional): Select the pilot year you are interested in participating in.
* **Application Status** (`application_status`, select_one, optional): Select the status of your application (Awaiting review, Accepted, Rejected, or Not submitted).

## Tips

* Ensure all required fields are filled in to avoid delays in processing your application.
* Be as specific as possible when describing your school's address and contact information.
* If you have any questions or need help, feel free to reach out to the contact person provided in the Contact E-mail field.
* Update the Application Status field regularly to reflect the current status of your application.

Note that I have assumed that the school is the entity applying to the pilot program, and some fields (like "Application Status") might not make sense or might need adjustments based on actual usage scenarios. However, this is the best effort I can make given the information provided in the YAML file. Please review and adjust as needed.
