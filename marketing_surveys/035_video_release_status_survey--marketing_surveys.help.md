# Video Release Status Survey - Help Guide
## Purpose
This form is used to collect information about the status of a video release.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the title of the video in the "Video Title" field.
2. Select the current release status from the "Release Status" dropdown menu.
3. Provide the release date and time in the "Release Date" and "Release Time" fields, respectively.
4. Choose the platforms where the video will be released from the "Platform" dropdown menu.
5. Enter the first and last name of the contact person in the "Contact First Name" and "Contact Last Name" fields.
6. Provide the contact person's email address in the "Contact Email" field.
7. Enter the contact person's phone number in the "Contact Phone" field.

## Field-by-Field Explanation

* **Video Title** (`video_title`, `text`, required: false): Enter the title of the video being released.
* **Release Status** (`release_status`, `select_one`, required: false): Choose the current release status of the video from the dropdown menu:
	+ Pending: The video has not been released yet.
	+ In Production: The video is currently in production.
	+ Released: The video has been released.
	+ Unknown: The release status of the video is unknown.
* **Release Date** (`release_date`, `date`, required: false): Enter the date when the video was released.
* **Release Time** (`release_time`, `time`, required: false): Enter the time when the video was released.
* **Platform** (`platform`, `select_multiple`, required: false): Choose the platforms where the video will be released:
	+ YouTube
	+ Vimeo
	+ Facebook
	+ Instagram
	+ TikTok
* **Contact First Name** (`contact_first_name`, `text`, required: false): Enter the first name of the contact person.
* **Contact Last Name** (`contact_last_name`, `text`, required: false): Enter the last name of the contact person.
* **Contact Email** (`contact_email`, `text`, required: false): Enter the email address of the contact person.
* **Contact Phone** (`contact_phone`, `text`, required: false): Enter the phone number of the contact person.

Note: Fields marked as "required: false" can be skipped if not applicable.
