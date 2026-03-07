<thinking>...</thinking>

# Ad Viewing Activity Log Form - Help Guide

## Purpose
This form is designed to track ad viewing activity, allowing users to record and analyze their experiences with advertisements. The form helps to gather detailed information about ad exposures, including participant identification, exposure details, and behavioral responses. The goal is to provide a comprehensive log of ad interactions for further analysis and research.

## How To Complete This Form

1. **Complete the form in sections**: Start by filling out the participant information (page 1) and then move on to the log entry details (page 2).
2. **Enter participant information**: On page 1, provide your full name and participant ID (if applicable) in the respective fields. This information helps identify you as the participant.
3. **Log each ad exposure**: On page 2, report each ad exposure separately, providing details such as date, time, media channel, device used, ad format, and other relevant information.
4. **Provide behavioral responses**: For each ad exposure, rate the level of attention paid and indicate whether you can recall the primary message or call to action.
5. **Confirm each entry**: At the end of each log entry, confirm that it accurately represents a unique ad viewing event.

## Field-by-Field Explanation

* **Full Name (Participant Name)** (`participant_name`, Text, Required): Enter your full name to identify yourself as the participant.
* **Participant ID (if applicable)** (`participant_id`, Text, Optional): If you are part of a research study, enter your participant ID to associate with your log entries.
* **-- Log Entry Details --** (`log_entry_header`, Note, Not Required): This section is a separator to distinguish log entries from participant information.
* **Date of Exposure** (`exposure_date`, Date, Required): Enter the date when you viewed the ad.
* **Time of Exposure** (`exposure_time`, Time, Required): Enter the time of day when you viewed the ad.
* **Brand or Company Advertised** (`ad_brand_name`, Text, Required): Identify the brand or company advertising the product or service.
* **Media Channel** (`ad_channel`, Select One, Required): Choose the medium through which you viewed the ad (e.g., Broadcast TV, Social Media Feed, etc.).
* **Device Used** (`device_used`, Select One, Required): Select the device you used to view the ad (e.g., Mobile Smartphone, Laptop, etc.).
* **Ad Format** (`ad_format`, Select One, Required): Choose the type of ad format you viewed (e.g., Video, Image, Audio, etc.).
* **Estimated Length (if video/audio)** (`perceived_length`, Select One, Optional): If you viewed a video or audio ad, estimate how long it lasted.
* **Level of Attention Paid** (`attention_level`, Number, Required): Rate how much attention you paid to the ad on a scale of 1 (background noise) to 5 (fully focused).
* **Can you recall the primary message or call to action?** (`recall_strength`, Select One, Required): Indicate whether you can recall the ad's message or call to action.
* **Description of Recall / Message** (`message_details`, Text, Optional): If you can recall the message or call to action, describe it briefly.
* **I confirm this entry represents a unique ad viewing event** (`entry_confirmation`, Select One, Required): Confirm that the log entry accurately represents a unique ad viewing experience.
