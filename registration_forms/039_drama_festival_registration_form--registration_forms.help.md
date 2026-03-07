<thinking>

To create a form for registering drama festivals, we want to ensure that the form captures all the necessary information from users to properly process their submission. The main goals of this form are to:
- Collect user's name, contact information (including email, contact phone number), and group details (if applicable).
- Capture information regarding production details, such as performance time, group size, and production name.
- Record the submission details, like submission date, submitted user agent, browser, and IP address.
- Allow the user to select the submission status of their production (active or inactive).

The form has multiple pages with different types of input fields, which will be explained below.

</thinking>

# drama_festival_registration_form - Help Guide
## Purpose
This form is designed for users to register their drama festival submissions. Please follow these steps to complete the form properly.

## How To Complete This Form
1. Fill in your personal details, including your name, email address, and contact phone number.
2. If applicable, enter the name and description of your production (group name, performance time, group size, etc.).
3. Enter the submission date and time.
4. Select the submission status of your production (active or inactive).
5. Enter additional submission details like submitted user agent, browser, and IP address.

## Field-by-Field Explanation
* **Name** (`Name`, `text`, required): Enter your name to identify yourself.
* **Email** (`Email`, `email`, required): Enter a valid email address where you can be contacted for further information.
* **Contact** (`Contact`, `text`, optional): If you would like to provide a contact number, please enter it here.
* **Group** (`Group`, `text`, optional): If you are registering a group, enter the group name here.
* **Production Details** (`Production Details`, `note`, optional): Describe your production in a few sentences.
* **Scheduling Request** (`Scheduling Request`, `date`, optional): If you have specific scheduling requirements, enter the date here.
* **Submission Date** (`Submission Date`, `date`, required): Enter the date of your submission.
* **Submitted By** (`Submitted By`, `text`, optional): Enter a description of who submitted this form.
* **Submitted At** (`Submitted At`, `time`, required): Enter the time of submission.
* **Submitted IP** (`Submitted IP`, `text`, required): Enter the IP address of the device you used to submit this form.
* **Submitted User Agent** (`Submitted User Agent`, `text`, required): Enter the user agent of the device that submitted this form.
* **Submitted Browser** (`Submitted Browser`, `text`, required): Enter the browser used to submit this form.
* **Type** (`Type`, `text`, optional): Enter a brief description of the type of production (if any).
* **Group Size** (`Group Size`, `number`, optional): If you are registering a group, enter the number of members.
* **Production Name** (`Production Name`, `text`, required): Enter the name of your production.
* **Description** (`Description`, `text`, required): Enter a brief description of your production.
* **Performance Time** (`Performance Time`, `time`, optional): Enter the performance time of your production.
* **Submission Status** (`Submission Status`, `select_one`, required): Choose whether your production is active or inactive.
* **Submission Status Label** (`Submission Status Label`, `text`, optional): Enter a description of the submission status label.
* **Submission Status Label Label** (`Submission Status Label Label`, `text`, optional): Enter an additional description of the submission status label.
* **Submission Status Label Label Label** (`Submission Status Label Label Label`, `text`, optional): Enter an even more detailed description of the submission status label.
* **Submission Status Label Label Label Label** (`Submission Status Label Label Label Label`, `text`, optional): Enter an extremely detailed description of the submission status label.
* **Submission Status Label Label Label Label 2** (`Submission Status Label Label Label Label 2`, `text`, optional): Enter an even more detailed description of the submission status label (if needed).
