# Infection Control Checklist - Help Guide

## Purpose

This form is designed to help healthcare workers track and document patient interactions, assess the risk of infection transmission, and determine the need for follow-up actions.

## How To Complete This Form

To complete this form, follow these steps:

1.  Enter the patient's ID to identify the patient you are interacting with.
2.  Enter the patient's name to ensure accurate identification.
3.  Select the patient's room number if applicable.
4.  Choose whether the patient had a contact history (e.g., recent travel, exposure to infected person).
5.  Select all contact locations where the patient may have come into contact with others (e.g., common areas, healthcare workers).
6.  Enter the date of the contact.
7.  Enter the time of the contact.
8.  Enter the reason for the contact (e.g., treatment, visit).
9.  Select control measures taken (e.g., hand hygiene, PPE).
10.  Choose whether follow-up actions are required.
11.  Select the follow-up action to be taken (e.g., phone call, visit).
12.  Choose a follow-up time and date.
13.  Enter the follow-up location (if applicable).
14.  Enter a follow-up comment (if applicable).
15.  Mark whether the form has been completed.
16.  Choose who reviewed the form (e.g., doctor, nurse).

## Field-by-Field Explanation

*   **Patient Id** (`1`, `number`, required): Enter the patient's ID to identify them in the system.
*   **Patient Name** (`2`, `text`, required): Enter the patient's full name.
*   **Patient Room** (`3`, `text`, optional): Enter the patient's room number if they are in a room.
*   **Contact History** (`4`, `select_one`, required): Choose whether the patient had a contact history (e.g., recent travel, exposure to infected person).
	+   Select "True" if the patient had a contact history.
	+   Select "False" if the patient did not have a contact history.
*   **Contact Location** (`5`, `select_multiple`, optional): Select all contact locations where the patient may have come into contact with others (e.g., common areas, healthcare workers).
	+   Choose "Yes" for all locations where the patient had contact.
*   **Contact Date** (`6`, `date`, required): Enter the date of the contact.
*   **Contact Time** (`7`, `time`, required): Enter the time of the contact.
*   **Contact Reason** (`8`, `text`, required): Enter the reason for the contact (e.g., treatment, visit).
*   **Control Measures** (`9`, `select_multiple`, required): Select control measures taken (e.g., hand hygiene, PPE).
	+   Choose "True" for all control measures taken.
*   **Follow-up Action** (`10`, `select_one`, required): Choose a follow-up action to be taken (e.g., phone call, visit).
	+   Select "True" if follow-up is required.
	+   Select "None" if no follow-up is required.
*   **Follow-up Contact** (`11`, `select_one`, required): Choose a follow-up contact (e.g., phone call, visit).
	+   Select "True" if follow-up contact is required.
	+   Select "None" if no follow-up contact is required.
*   **Follow-up Time** (`12`, `time`, required): Enter the follow-up time.
*   **Follow-up Location** (`13`, `text`, optional): Enter the follow-up location (if applicable).
*   **Follow-up Comment** (`14`, `text`, optional): Enter a follow-up comment (if applicable).
*   **Completed** (`15`, `select_one`, required): Mark whether the form has been completed.
	+   Choose "True" if the form is completed.
	+   Choose "False" if the form is not completed.
*   **Reviewer** (`16`, `select_one`, required): Choose who reviewed the form (e.g., doctor, nurse).
	+   Select "Yes" if reviewed.
	+   Select "No" if not reviewed.
