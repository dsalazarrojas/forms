<thinking>
This form is designed to collect information about a client, their contact details, and the status of their case. The form should only be completed when a social worker has had a meeting or interaction with the client. The purpose of this form is to provide a structured way to document the client's information and case status, making it easier for social workers to track and manage their cases.
</thinking>

# Social Worker Interview Form - Help Guide
## Purpose
The Social Worker Interview Form is used to record information about a client's contact and case status. This form helps social workers to maintain accurate and organized records of their interactions with clients and their cases.

## How To Complete This Form
1. Fill in the client's information, including their name and contact details.
2. Select the current status of the case from the options provided (New Case, Active Case, Resolved Case).
3. Enter the date and time of the last contact with the client.
4. Enter the time of the next contact with the client.
5. Select the social worker who will be managing the case.
6. Add any additional notes about the client.
7. Enter the frequency of the next contact with the client.

## Field-by-Field Explanation

* **Client Name** (`client_name`, text, required): Enter the name of the client.
* **Address Line 1** (`address_line_1`, text, required): Enter the address line 1 of the client's location.
* **Address Line 2** (`address_line_2`, text, required): Enter the address line 2 of the client's location.
* **Postal Code** (`postal_code`, text, required): Enter the postal code of the client's location.
* **Email** (`email`, email, required): Enter the email address of the client.
* **Phone** (`phone`, text, required): Enter the phone number of the client.
* **Case Status** (`case_status`, select_one, required): Select the current status of the case from the options provided (New Case, Active Case, Resolved Case).
* **Date of Last Contact** (`date_of_last_contact`, date, required): Enter the date of the last contact with the client.
* **Time of Last Contact** (`time_of_last_contact`, time, required): Enter the time of the last contact with the client.
* **Time of Next Contact** (`time_of_next_contact`, time, required): Enter the time of the next contact with the client.
* **Time of Next Contact Frequency** (`time_of_next_contact_frequency`, number, required): Enter the frequency of the next contact with the client.
* **Client Notes** (`client_notes`, note, required): Enter any additional notes about the client.
* **Case Manager** (`case_manager`, select_one, required): Select the social worker who will be managing the case.
* **Assigned Tool** (`assigned_tool`, select_one, required): Select the tool that will be used for the case.
* **Last Contact** (`notes`, note, required): Enter any notes about the last contact with the client.
