# exercise_log_form - Help Guide
## Purpose
The exercise log form is used to track and sync user exercise sessions.

## How To Complete This Form

### Step 1: Enter Session Information

* **Session Name** (`session_name`, `text`, required/optional): Enter a title or name for the exercise session.
* **Date** (`date`, `date`, required): Enter the date of the exercise session. This is a required field.
* **Duration** (`duration`, `number`, optional): Enter the duration of the exercise session (in minutes).
* **Distance** (`distance`, `number`, optional): Enter the distance covered during the exercise session (in meters or km).

### Step 2: Select Sync Options

* **Sync with App** (`sync_with_app`, `select_one`, required): Select the app with which you want to sync your exercise session:
	+ Google Fit
	+ Apple Health
	+ Fitbit
	+ Other (for custom apps)
* **Sync Frequency** (`sync_frequency`, `select_one`, optional): Choose how often you want to sync your exercise sessions:
	+ Daily
	+ Weekly
	+ Monthly

### Step 3: Sync Session Details

* **Synced with App** (`synced_with_app`, `select_one`, required): Confirm if the exercise session was synced with an app:
	+ `True`
	+ `False`
* **Sync Status** (`sync_status`, `select_one`, optional): Select the sync status of the exercise session:
	+ Syncing
	+ Not Synced

### Step 4: Sync Settings

* **App ID** (`app_id`, `text`, optional): Enter the ID of the app used for syncing (if applicable).
* **Sync API Key** (`sync_api_key`, `text`, required): Enter the API key used for syncing with the app.
* **Synced at** (`synced_at`, `date`, required): Enter the date and time of the last sync.
* **Synced with App Name** (`synced_with_app_name`, `text`, optional): Enter the name of the app used for syncing (if applicable).
* **Synced Error** (`synced_error`, `note`, optional): Enter any error messages or details about the sync process.

Note: This form is not meant to be completed by users who have not synced with an app before.
