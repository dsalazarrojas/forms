# Winter STEM Club Registration - Help Guide
## Purpose
The Winter STEM Club Registration form is designed to collect information from students who want to join the club. This information will be used to keep in touch with the students and provide them with updates about the club's activities.

## How To Complete This Form
To complete this form, follow these steps:

1.  Enter your first name in the "First Name" field.
2.  Enter your last name in the "Last Name" field.
3.  Enter your email address in the "Email" field. Please use a valid email address that you regularly check.
4.  Select your birth date in the "Birth Date" field. Use the format `YYYY-MM-DD`.
5.  Choose the session you want to attend in the "Session" field.
6.  Enter your student ID in the "Student ID" field. If you don't have a student ID, don't worry, this is optional.
7.  Enter the name of your parent or guardian in the "Parent Name" field. If you're an adult, you can enter your own name.
8.  Enter your contact number in the "Contact Number" field. This can be a phone number or a messaging number.
9.  Choose the program you're interested in from the "Program" field.

## Field-by-Field Explanation
### First Name (First Name)
*   First name: `inputSchema.pages[0].name`: First Name (`text`, required: `false`)

    Enter your first name here. This could be a one-word first name or a full given name.

### Last Name (Last Name)
*   Last name: `inputSchema.pages[0].name`: Last Name (`text`, required: `false`)

    Enter your last name here. This could be a one-word last name or a full surname.

### Email (Email)
*   Email: `inputSchema.pages[2].name`: Email (`email`, required: `false`)

    Enter a valid email address that you regularly check.

### Birth Date (Birth Date)
*   Birth Date: `inputSchema.pages[3].name`: Birth Date (`date`, required: `false`)

    Use the format `YYYY-MM-DD` to enter your birth date.

### Session (Session)
*   Session: `inputSchema.pages[5].name`: Session (`select_one`, required: `false`)

    Choose the session you want to attend.

### Student ID (Student ID)
*   Student ID: `inputSchema.pages[6].name`: Student ID (`text`, required: `false`)

    Enter your student ID if you have one. If not, you can leave this field blank.

### Parent Name (Parent Name)
*   Parent Name: `inputSchema.pages[7].name`: Parent Name (`text`, required: `false`)

    Enter the name of your parent or guardian. If you're an adult, enter your own name.

### Contact Number (Contact Number)
*   Contact Number: `inputSchema.pages[8].name`: Contact Number (`text`, required: `false`)

    Enter a contact number you regularly use, such as a phone number or a messaging number.

### Program (Program)
*   Program: `inputSchema.pages[9].name`: Program (`select_one`, required: `false`)

    Choose the program you're interested in joining.

## Tips

*   Ensure you fill in all required fields correctly.
*   Double-check the information you provide before submitting the form.
*   If you have any questions, don't hesitate to ask.
