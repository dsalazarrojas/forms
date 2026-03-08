<thinking>
The "karaoke_request_form" is used to collect information about songs requested for a karaoke event or session. The form is divided into two main sections: Song Requests and Song Selection Details. The Song Requests section is a text field where users can input their song requests. The Song Selection Details section includes a range of fields that provide more specific information about each song, including song name, artist, length, format, and priority level. The form also includes fields for requesting by operator or patron, and a date field for noting any additional information. The form does not require any specific fields to be completed, but users are free to input as much or as little information as they need. The fields are not redundant, and users can input new information without affecting the existing data.

</thinking>

# karaoke_request_form - Help Guide
## Purpose

The karaoke_request_form is used to collect information about songs requested for a karaoke event or session.

## How To Complete This Form

To complete this form, follow these steps:

1. Enter your song requests in the Song Requests text field.
2. Provide more specific details about each song in the Song Selection Details section.

## Field-by-Field Explanation

* **Song Requests** (text): Enter the name of the song you would like to request.
* **Song Selection Details**
	+ **Song Name** (text): Enter the name of the song you selected.
	+ **Song Artist** (text): Enter the name of the artist who performs the song.
	+ **Song Length** (number): Enter the length of the song in minutes.
	+ **Song Format** (text): Enter the format of the song (e.g. MP3, MP4, etc.).
	+ **Requested By** (select_one):
		- **Operator**: Requested by operator.
		- **Patron**: Requested by patron.
		- **Both**: Requested by both operator and patron.
	+ **Song Priority** (select_multiple):
		- **High**: High priority song.
		- **Medium**: Medium priority song.
		- **Low**: Low priority song.
	+ **Note** (date): Enter any additional notes about the song request.
	+ **Start Time** (time): Enter the start time of the song in 24-hour time format.
	+ **End Time** (time): Enter the end time of the song in 24-hour time format.
	+ **Repeat** (select_one):
		- **True**: The song will be repeated in the playlist.
		- **False**: The song will not be repeated in the playlist.
	+ **Song ID** (text): Enter the song ID number.

## Tips

* You can input as much or as little information as you need in each field.
* You can repeat this process to input multiple song requests.
* Make sure to enter accurate information to ensure that your song requests are handled correctly.
