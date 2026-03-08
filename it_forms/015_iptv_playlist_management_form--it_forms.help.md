# iptv_playlist_management_form - Help Guide
## Purpose
The IPTV Playlist Management Form is a tool used to create, edit, or delete IPTV playlists for customers. It is used by customer service representatives to interact with customers and update their playlists.

## How To Complete This Form
1. Fill out the form completely and accurately, following the required fields marked with an asterisk (*).
2. If a customer's playlist has already been created, review the existing information and update as necessary.
3. Ensure that you have the customer's approval before making any changes to their playlist.
4. Save the form after completing all required fields.

## Field-by-Field Explanation
* **IPTV Playlist Management** (`name`: `iptv_playlist`, `type`: `text`, required: `false`): This field is the title of the IPTV playlist being managed.
* *customer_name* (`name`: `customer_name`, `type`: `text`, required: `true`): Enter the name of the customer whose playlist is being managed.
* *customer_email* (`name`: `customer_email`, `type`: `email`, required: `true`): Enter the customer's email address. This field is used to contact the customer with updates or notifications.
* *Customer Phone* (`name`: `customer_phone`, `type`: `text`, required: `false`): Enter the customer's phone number. This is optional but recommended for easier communication.
* *playlist_type* (`name`: `playlist_type`, `type`: `select_one`, required: `true`): Select the type of playlist being managed:
	+ Streaming: For on-demand streaming services.
	+ VOD: For video on demand content.
	+ SD/HD: For standard or high-definition channels.
* *playlist_name* (`name`: `playlist_name`, `type`: `text`, required: `true`): Enter a unique name for the playlist.
* *Start Date* (`name`: `start_date`, `type`: `date`, required: `true`): Enter the start date of the playlist.
* *End Date* (`name`: `end_date`, `type`: `date`, required: `true`): Enter the end date of the playlist.
* *Update Frequency* (`name`: `update_frequency`, `type`: `select_one`, required: `true`): Select the frequency of updates for the playlist:
	+ Daily: For daily updates.
	+ Weekly: For weekly updates.
	+ Monthly: For monthly updates.
* *Notes* (`name`: `notes`, `type`: `text`, required: `false`): Enter any additional notes or comments about the playlist.

## Tips
- Always review the customer's playlist before making any changes.
- Ensure that the customer has approved any changes made to their playlist.
- Use this form for its intended purpose only.
