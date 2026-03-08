# Athlete Performance Video Upload Form - Help Guide

## Purpose
This form allows athletes to upload videos of their performances for coaching and feedback purposes. It captures essential details about the video, including the athlete's name, team affiliation, and video content. The form also requests consent for sharing and using the video for internal educational purposes.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields with accurate information:
	* Athlete Full Name: Enter the athlete's full name as it appears on their official documents.
	* Team or Club Affiliation: Enter the team or club the athlete is affiliated with.
	* Purpose of Video Submission: Select the primary reason for uploading the video (e.g., Technique Review and Feedback, Remote Tryout or Audition, etc.).
	* Sport and Primary Position: Enter the sport and primary position the athlete plays.
	* Video Title or Description: Provide a brief title or description of the video content (e.g., Backhand Technique Analysis, 100m Sprint Heat 1).
	* Date Video was Filmed: Enter the date the video was filmed.
	* Does the video include multiple camera angles?: Select if the video includes multiple camera angles.
	* Email Address: Enter your email address for communication purposes.
	* I consent to this video being shared with the coaching and technical staff: Select Yes or No.
	* I consent to this video being used for internal educational purposes: Select Yes or No.
	* Date of Submission: Enter the date the form is being submitted.
2. If you want to upload a video file, ensure it is in MP4 or MOV format and within the 100MB size limit. If the file is too large, provide a link to the video instead.

## Field-by-Field Explanation

* **Athlete Full Name** (`athlete_name`, `text`, required): Enter the athlete's full name as it appears on their official documents.
* **Team or Club Affiliation** (`organization_affiliation`, `text`, required): Enter the team or club the athlete is affiliated with.
* **Purpose of Video Submission** (`submission_purpose`, `select_one`, required): Select the primary reason for uploading the video.
* **Sport and Primary Position** (`sport_position`, `text`, required): Enter the sport and primary position the athlete plays.
* **Video Title or Description** (`video_description`, `text`, required): Provide a brief title or description of the video content.
* **Date Video was Filmed** (`filming_date`, `date`, required): Enter the date the video was filmed.
* **Context of Performance** (`performance_context`, `select_one`, required): Select the context of the performance (e.g., Practice or Training Session, Live Game or Competition, etc.).
* **Does the video include multiple camera angles?** (`multi_angle_status`, `select_one`, required): Select if the video includes multiple camera angles.
* **Link to Video** (`video_link`, `text`, optional): Provide a link to the video if it is too large for direct upload.
* **Detailed Breakdown of Skills Performed** (`skill_breakdown`, `text`, required): Describe the specific skills or drills performed in the video.
* **Specific Questions for the Reviewer** (`coaching_questions`, `text`, optional): Provide specific questions or feedback you are looking for from the reviewer.
* **Email Address** (`contact_email`, `email`, required): Enter your email address for communication purposes.
* **Phone Number** (`contact_phone`, `text`, optional): Enter your phone number for communication purposes.
* **I consent to this video being shared with the coaching and technical staff** (`sharing_consent`, `select_one`, required): Select Yes or No.
* **I consent to this video being used for internal educational purposes** (`educational_consent`, `select_one`, required): Select Yes or No.
* **Date of Submission** (`submission_date`, `date`, required): Enter the date the form is being submitted.
