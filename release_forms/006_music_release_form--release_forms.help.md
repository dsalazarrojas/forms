<thinking>...</thinking>

This form is designed for releasing music-related information. The form is likely intended for music industry professionals to report music releases, and the fields cover various aspects of the release, including the type of release, copyright details, artist and song information, and publisher details. This form should only be filled out when an actual music release event is occurring, and any duplicate entries should be avoided to prevent data duplication and ensure accurate record-keeping.

</thinking>

# music_release_form - Help Guide
## Purpose
This form is used to record the details of a music release, including the type of release, copyright information, artist and song details, and publisher details.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the type of release from the "release_type" field.
2. Enter the copyright date and number in the "copyright_date" and "copyright_number" fields, respectively.
3. Fill in the "artist_name", "song_name", and "record_label" fields with the relevant information.
4. Select the "music_publisher" and enter their address in the "music_publisher_address" field.
5. Enter the "publisher_name" and "publisher_phone" fields, if applicable.
6. Select the "music_licensee" field to indicate if this release is subject to a music license.

## Field-by-Field Explanation

* **music_license_form** (`1`, text, required): Enter a brief description of the music release.
* **release_type** (`2`, select_one, required): Select the type of release from the provided options.
	+ Options: Music Release, Sync License, Sync Plus, Exclusive Use, Non-Exclusive Use
* **copyright_date** (`3`, date, required): Enter the date of the copyright.
* **copyright_number** (`4`, number, required): Enter the copyright number.
* **artist_name** (`5`, text, required): Enter the name of the artist.
* **song_name** (`6`, text, required): Enter the name of the song.
* **recording_location** (`7`, text, required): Enter the location where the recording was made.
* **music_publisher** (`8`, text, required): Enter the name of the music publisher.
* **publisher_name** (`9`, text, optional): Enter the name of the publisher (if different from the music publisher).
* **record_label** (`10`, text, optional): Enter the label of the record company (if applicable).
* **publishing_date** (`11`, date, optional): Enter the date of publication.
* **published_by** (`12`, text, optional): Enter the name of the person or company that published the music.
* **music_publisher_address** (`13`, text, optional): Enter the address of the music publisher.
* **publisher_phone** (`14`, text, optional): Enter the contact phone number of the publisher.
* **music_publisher_email** (`15`, email, optional): Enter the email of the music publisher.
* **music_licensee** (`16`, select_one, required): Select whether this release is subject to a music license.
	+ Options: Yes, No
