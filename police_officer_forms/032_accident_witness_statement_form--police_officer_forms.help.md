# Accident Witness Statement Form - Help Guide
## Purpose
The Accident Witness Statement Form is designed to collect information from witnesses about an accident they have witnessed. This form helps gather details about the witness's identity, contact information, and a detailed account of what they saw happen.

## How To Complete This Form
To complete this form, please follow these steps:

1.  Fill in your full name as it appears on your government-issued ID.
2.  Enter your current address.
3.  Provide your phone number so we can contact you if needed.
4.  Enter your email address (optional).
5.  Describe your relationship to the parties involved in the accident.
6.  Enter the date the accident occurred.
7.  Enter the approximate time the accident occurred.
8.  Provide a detailed description of where the accident happened.
9.  Describe where you were located when the accident occurred.
10.  Describe the weather conditions at the time of the accident.
11.  Describe how clear or obstructed was the visibility at the time of the accident.
12.  Describe what you were doing immediately before the accident.
13.  Provide a detailed account of what you saw happen before, during, and after the accident.
14.  Describe the vehicles involved in the accident, including color, make, model, and license plates.
15.  Describe the people involved in the accident, including their clothing, appearance, and behavior.
16.  Estimate the speeds of the vehicles or people involved in the accident.
17.  Describe the condition of the road at the time of the accident.
18.  Describe whether there were traffic signals, stop signs, or other traffic controls present.
19.  Sign and date the form to confirm the accuracy of your statement.

## Field-by-Field Explanation

* **Witness Full Name** (`witness_full_name`, `text`, required): Your full legal name as it appears on your government-issued ID.
* **Witness Address** (`witness_address`, `text`, required): Your current address where you reside.
* **Witness Phone** (`witness_phone`, `text`, required): Your phone number so we can contact you if needed.
* **Witness Email** (`witness_email`, `email`, optional): Your email address (optional).
* **Witness Relationship to Parties** (`witness_relationship_to_parties`, `text`, optional): Your relationship to the parties involved in the accident.
* **Accident Date** (`accident_date`, `date`, required): The date when the accident occurred.
* **Accident Time** (`accident_time`, `time`, required): The approximate time when the accident occurred.
* **Accident Location** (`accident_location`, `text`, required): A detailed description of where the accident happened.
* **Witness Location During Accident** (`witness_location_during_accident`, `text`, required): Describe where you were located when the accident occurred.
* **Weather Conditions** (`weather_conditions`, `select_one`, required): Describe the weather at the time of the accident.
* **Visibility Conditions** (`visibility_conditions`, `select_one`, required): Describe how clear or obstructed was the visibility at the time of the accident.
* **Witness Activity Before Accident** (`witness_activity_before_accident`, `text`, required): Describe what you were doing immediately before the accident.
* **Sequence of Events** (`sequence_of_events`, `text`, required): Provide a detailed account of what you saw happen before, during, and after the accident.
* **Vehicles Involved Description** (`vehicles_involved_description`, `text`, required): Describe the vehicles involved, including color, make, model, and license plates.
* **People Involved Description** (`people_involved_description`, `text`, required): Describe the people involved, including their clothing, appearance, and behavior.
* **Speeds Estimated** (`speeds_estimated`, `text`, required): Estimate the speeds of the vehicles or people involved in the accident.
* **Road Conditions** (`road_conditions`, `text`, required): Describe the condition of the road at the time of the accident.
* **Traffic Signals Signs** (`traffic_signals_signs`, `text`, required): Describe whether there were traffic signals, stop signs, or other traffic controls present.
* **Witness Signature** (`witness_signature`, `text`, required): Sign and date the form to confirm the accuracy of your statement.
* **Signature Date** (`signature_date`, `date`, required): Date of signature.
