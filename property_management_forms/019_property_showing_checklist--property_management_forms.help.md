<thinking>
To determine the form purpose and ensure relevance, I've analyzed the form YAML. The form is a "Property Showing Checklist," which suggests it's a form used to gather information about a property showing, likely in the context of real estate. The form collects various pieces of information related to the property, its owner/renter, and the showing process. This form likely helps real estate agents or representatives track and follow up on property showings.

To confirm the purpose and relevance of the form, I've looked into the field types and labels. The presence of a "property_id" field indicates the form is used for specific properties. The "client_name" field is required, suggesting the form is used for communication with clients. The "follow_up_action" and "follow_up_notes" fields indicate that the form is also used for follow-up actions after the showing.

After verifying the form's purpose and relevance, I've created the help guide below:

# Property Showing Checklist - Help Guide

## Purpose

This form is used to gather information about a property showing, including the property's details, client's information, and follow-up actions after the showing.

## How To Complete This Form

To complete this form, follow these steps:

1. Enter the Property ID to associate the form with a specific property.
2. Provide the address of the property.
3. Select the type of property (Office, Residential, or Commercial).
4. Choose the client's name from the dropdown list.
5. Enter the contact information for the client.
6. Add any additional property details in the notes field.
7. Select a date for the showing.
8. Choose a time for the viewing.
9. Select any client preferences (Parking, Pool, View).
10. Add any additional comments from the client.
11. Enter any notes from the agent.
12. Select a follow-up action (Send Email, Send Text Message, Call).
13. Enter any follow-up notes.
14. Select a follow-up date.

## Field-by-Field Explanation

* **Property ID** (`property_id`, number, required): Enter the ID of the property associated with this form.
* **Address** (`address`, text, required): Enter the address of the property.
* **Property Type** (`property_type`, select, required): Select the type of property (Office, Residential, Commercial).
* **Client Name** (`client_name`, select, required): Choose the client's name from the dropdown list.
* **Contact Info** (`contact_info`, text, optional): Enter any additional contact information for the client.
* **Property Details** (`property_details`, note, optional): Add any additional property details.
* **Showing Date** (`showing_date`, date, optional): Select the date of the showing.
* **Viewing Time** (`viewing_time`, time, optional): Choose the time for the viewing.
* **Client Preferences** (`client_preferences`, select, optional): Select any client preferences (Parking, Pool, View).
* **Agents Notes** (`agents_notes`, text, optional): Enter any additional notes from the agent.
* **Client Comments** (`client_comments`, text, optional): Enter any comments from the client.
* **Follow Up Action** (`follow_up_action`, select, required): Select a follow-up action (Send Email, Send Text Message, Call).
* **Follow Up Notes** (`follow_up_notes`, text, optional): Enter any follow-up notes.
* **Follow Up Date** (`follow_up_date`, date, optional): Select the follow-up date.

## Tips

* Make sure to complete all required fields, including the Property ID, Client Name, and Follow Up Action.
* Use the notes field for any additional information that may be relevant to the showing.
* Keep the follow-up notes for any additional information that needs to be communicated to the client after the showing.
