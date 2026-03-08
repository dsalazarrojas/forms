<thinking>
The form is intended for users to submit data related to ultramarathon events, such as video submissions, participant information, and event details. To ensure the form is filled out correctly, users should only submit information for events they are actually participating in or organizing. To prevent duplication of effort, users should check the form's "Participant Video Category" field to see if they have already submitted an entry for the same event. 

The form's fields are organized into several sections: Event Information, Participant Information, and Video Submission. The Event Information section asks for the event's name, date, location, and distance. The Participant Information section asks for the participant's name, phone number, email, and other demographic details. The Video Submission section requires the participant to upload a video file and provide a title and description for it. The form also includes fields for participants to provide their comments and heart rate information, in case they want to share more details about their experience.

Please note that the form requires the participant to select at least one video category for their submission.
</thinking>

# ultramarathon_video_submission_form - Help Guide
## Purpose
The ultramarathon_video_submission_form is designed to collect information from participants and event organizers about ultramarathon events.

## How To Complete This Form
To complete this form, please follow these steps:

1. Ensure you are submitting information for an event you are participating in or organizing.
2. Check the "Participant Video Category" field to prevent duplication of effort.
3. Fill out the form according to the following sections:
	* Event Information: Enter the event's name, date, location, and distance.
	* Participant Information: Enter the participant's name, phone number, email, and other demographic details.
	* Video Submission: Upload a video file, provide a title, and description for it.
4. Submit your completed form.

## Field-by-Field Explanation
### Event Organizer's Name
* **Event Organizer's Name** (`event_organizer_name`, text, optional): Enter the name of the event organizer.

### Event Name
* **Event Name** (`event_name`, text, optional): Enter the name of the event.

### Event Date
* **Event Date** (`event_date`, date, optional): Enter the date of the event.

### Event Location
* **Event Location** (`event_location`, text, optional): Enter the location of the event.

### Video Link
* **Video Link** (`video_link`, text, optional): Enter a link to a video related to the event.

### Video File
* **Video File** (`video_file`, text, optional): Upload a video file related to the event.

### Participant's Name
* **Participant's Name** (`participant_name`, text, optional): Enter the name of the participant.

### Participant Number
* **Participant Number** (`participant_number`, number, optional): Enter the participant number.

### Participant Gender
* **Participant Gender** (`participant_gender`, select_one, optional): Select the participant's gender.

### Participant Age
* **Participant Age** (`participant_age`, text, optional): Enter the participant's age.

### Participant Country
* **Participant Country** (`participant_country`, text, optional): Enter the participant's country.

### Participant City
* **Participant City** (`participant_city`, text, optional): Enter the participant's city.

### Participant Region
* **Participant Region** (`participant_region`, text, optional): Enter the participant's region.

### Participant Occupation
* **Participant Occupation** (`participant_occupation`, text, optional): Enter the participant's occupation.

### Participant Phone
* **Participant Phone** (`participant_phone`, text, optional): Enter the participant's phone number.

### Participant Email
* **Participant Email** (`participant_email`, email, optional): Enter the participant's email.

### Participant Video Description
* **Participant Video Description** (`participant_video_description`, text, optional): Provide a description of the video.

### Participant Video Category
* **Participant Video Category** (`participant_video_category`, select_multiple, required): Select at least one category for your video submission.

### Participant Video Title
* **Participant Video Title** (`participant_video_title`, text, optional): Provide a title for your video.

### Participant Race Distance
* **Participant Race Distance** (`participant_race_distance`, text, optional): Enter the distance of the participant's race.

### Event Race Distance
* **Event Race Distance** (`event_race_distance`, text, optional): Enter the distance of the event's race.

### Participant Weather Condition
* **Participant Weather Condition** (`participant_weather_condition`, text, optional): Describe the weather conditions of the participant's race.

### Participant Event Condition
* **Participant Event Condition** (`participant_event_condition`, text, optional): Describe the event's conditions.

### Participant Comments
* **Participant Comments** (`participant_comments`, note, optional): Enter any additional comments about the event.

### Participant Heart Rate
* **Participant Heart Rate** (`participant_heart_rate`, text, optional): Enter the participant's heart rate.
