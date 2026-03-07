# keyword_monitoring_tracker - Help Guide
## Purpose
The `keyword_monitoring_tracker` form is designed to monitor and manage keywords for various platforms. This form helps you track keywords, monitor brand performance, and set up alert preferences.

## How To Complete This Form
To use the `keyword_monitoring_tracker` form, follow these steps:

1. Fill in the form with the required information:
	* Provide a unique title for your keyword monitoring project.
	* Select the platforms you want to monitor (Google, Facebook, YouTube, Amazon).
	* Choose how frequently you want to collect data (daily, weekly, monthly).
	* Set up alert preferences for when keywords are detected or not detected.
	* Enter your email address for notifications.
	* Select the agency and team members responsible for the project.
	* Specify the type of request (new keyword or existing keyword).

## Field-by-Field Explanation

* **keyword_monitoring** (Page 1):
	* (`keyword_monitoring`, text, required): Provide a unique title for your keyword monitoring project.
* **brand_monitoring** (Page 2):
	* (`brand_monitoring`, select_one, required): Select the platform you want to monitor (Google, Facebook, YouTube, Amazon).
* **monitored_platforms** (Page 3):
	* (`monitored_platforms`, select_multiple, required): Choose the platforms you want to monitor (Google, Facebook, YouTube, Amazon).
* **alert_preferences** (Page 4):
	* (`alert_preferences`, number, optional): Set up alert preferences for when keywords are detected or not detected. Note: This field is not clearly labeled, and its purpose is not entirely clear.
* **alert_preferences** (Page 5):
* **keyword_preferences** (Page 6):
	* (`keyword_preferences`, select_multiple, optional): Select multiple keywords to monitor (Google, Amazon).
* **data_collection** (Page 7):
	* (`data_collection_frequency`, date, optional): Choose how frequently you want to collect data (daily, weekly, monthly).
* **data_collection_frequency** (Page 8):
* **keyword_monitoring_preferences** (Page 9):
	* (`keyword_monitoring_preferences`, select_one, optional): Select the platform you want to monitor (Google, Facebook, YouTube, Amazon).
* **email** (Page 10):
	* (`email`, email, required): Enter your email address for notifications.
* **phone** (Page 11):
	* (`phone`, text, optional): Enter your phone number (not entirely clear what kind of number is expected).
* **agency** (Page 12):
	* (`agency`, select_one, optional): Select the agency responsible for the project (Agency A, Agency B).
* **team** (Page 13):
	* (`team`, select_multiple, optional): Choose the team members responsible for the project (Team A, Team B).
* **request_type** (Page 14):
	* (`request_type`, select_one, optional): Specify the type of request (new keyword or existing keyword).
* **keyword** (Page 15):
	* (`keyword`, text, optional): Enter the keyword to monitor.
* **description** (Page 16):
	* (`description`, text, optional): Enter a description for the project.
* **keyword_url** (Page 17):
	* (`keyword_url`, text, optional): Enter a URL related to the keyword.
* **url_2** (Page 18):
* **url_3** (Page 19):
* **url_4** (Page 20):
* **url_5** (Page 21):
* **url_6** (Page 22):
* **url_7** (Page 23):
* **url_8** (Page 24):
* **url_9** (Page 25):
* **url_10** (Page 26):
 
Please note that some fields are not clearly labeled, and their purpose is not entirely clear. This guide provides the best-effort explanation based on the provided YAML fields.
