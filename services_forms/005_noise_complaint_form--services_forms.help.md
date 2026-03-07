<thinking> 
This form is meant to collect information about noise complaints from the public. It will help users report noisy issues to the relevant authorities, such as noise from neighbors, traffic, or other sources. We want to ensure that the form is easy to fill out and understand, so that everyone can report noise problems effectively. Before we begin, let's check if there's any internal logic that might affect how we structure the form or its content. 

There doesn't seem to be any internal logic that affects how we structure the form. The form is quite straightforward, and each field appears to be self-explanatory. Let's move on to creating a user-facing help guide.

# Noise Complaint Form - Help Guide
## Purpose
The Noise Complaint Form is a tool for reporting noisy issues to the relevant authorities. This form helps to collect information about the noise source, location, and details of the complaint.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the noise type that best describes the issue.
2. Choose the location where the noise is occurring.
3. Provide the start and end times of the noise.
4. Enter the duration of the noise.
5. Describe the noise in detail.
6. If you know, please identify the noise polluter.
7. If you're not a resident, please identify the nearest police station.
8. Confirm that you are reporting the noise issue.

## Field-by-Field Explanation

* **Noise Complaint** (`noise_complaint`, text, required): This is where you'll describe the noise issue you're experiencing.
* **Noise Type** (`noise_type`, select_one, required): Choose the type of noise that best describes the issue, e.g., "Noise from neighbor", "Noise from traffic", or "Other".
* **Noise Location** (`noise_location`, select_multiple, required): Select all the locations where the noise is occurring, e.g., "Home", "Workplace", "Public area", or "Other".
* **Noise Start Time** (`noise_start_time`, time, required): Enter the start time of the noise.
* **Noise Duration** (`noise_duration`, number, required): Enter the duration of the noise.
* **Noise Stop Time** (`noise_stop_time`, time, required): Enter the end time of the noise.
* **Noise Description** (`noise_description`, text, required): Provide a detailed description of the noise issue.
* **Noise Polluter** (`noise_polluter`, text, required): If you know, please enter the name or description of the person or entity making the noise.
* **Noise Police Station** (`noise_police_station`, select_one, required): If you're not a resident, please select the nearest police station to report the noise issue.
* **Noise Reporter** (`noise_reporter`, select_multiple, required): Confirm that you are reporting the noise issue by selecting "Yes".
