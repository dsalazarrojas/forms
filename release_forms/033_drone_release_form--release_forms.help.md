# drone_release_form - Help Guide

## Purpose
This form is for documenting the details of a drone release process. 

## How To Complete This Form
1. Start by providing the form title and category in the respective fields.
2. Enter a description of the release process.
3. Enter the drone release form ID.
4. Select whether a tool is assigned for this drone release.
5. Choose one or more output file options.
6. Enter the release date and time if necessary.
7. Add any notes about the release process.
8. Enter the email of the person responsible for the release.

## Field-by-Field Explanation

* **Drone Release Form** (`form_title`, text, optional): Enter a title for this drone release form.
* **Category** (`form_category`, text, optional): Choose a category for this drone release form.
* **Description** (`form_description`, text, optional): Enter a description of the release process.
* **Drone Release Form ID** (`form_ids`, number, optional): Enter a unique ID for this drone release form.
* **Assigned Tool** (`assigned_tool`, select_one, optional): Select whether a tool is assigned for this drone release.
  - "Yes" means a tool is assigned for this drone release.
  - "No" means no tool is assigned for this drone release.
* **Output File** (`output_file`, select_multiple, optional): Choose one or more output files for this drone release.
  - Select one or more options from the dropdown menu.
* **Release Date** (`release_date`, date, optional): Enter the release date of the drone.
* **Release Time** (`release_time`, time, optional): Enter the release time of the drone.
* **Notes** (`notes`, note, optional): Add any notes about this drone release.
* **Email** (`email`, email, optional): Enter the email of the person responsible for this drone release.
