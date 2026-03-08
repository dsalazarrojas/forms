# CrowdStrike Global Threat Report Form - Help Guide
## Purpose
The CrowdStrike Global Threat Report Form is designed to collect information about potential threats to your organization's security. This form helps you to systematically categorize and report on threats in a structured and organized manner.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the threat level for the incident (Threat Level).
2. Choose the threat vector(s) that apply (Threat Vector).
3. Provide a brief description of the threat (Threat Description).
4. Describe the severity of the threat (Threat Severity).
5. Specify the confidence level in identifying the threat (Threat Confidence).
6. State the frequency of the threat (Threat Frequency).
7. Outline the impact of the threat (Threat Impact).
8. Identify the location of the threat (Threat Location).
9. Update the status of the threat (Threat Status).
10. Specify the type of threat (Threat Type).
11. Add any additional notes about the threat (Notes).
12. Specify the source of the threat (Threat Source).
13. Identify the target of the threat (Threat Target).
14. Name the actor responsible for the threat (Threat Actor).
15. Specify any threat indicators (Threat Indicators).
16. Check if the threat is ransomware (Ransomware).
17. Check if the threat is espionage (Espionage).
18. Describe the tactics used by the threat (Tactics).
19. List the techniques used by the threat (Techniques).
20. Categorize the threat (Category).
21. Tag the threat with relevant keywords (Tags).
22. Add any additional comments about the threat (Comment).
23. Attach any relevant files or attachments (File).
24. Provide a hash value for the threat (Hash).

## Field-by-Field Explanation

* **Threat Level** (`threat_level`, select_multiple, required): Select one or more threat levels that apply to the incident.
	+ Choose from: High, Low
* **Threat Vector** (`threat_vector`, select_one, required): Select the threat vector that applies to the incident.
	+ Choose from: Yes, No
* **Threat Description** (`threat_description`, text, required): Provide a brief description of the threat.
* **Threat Severity** (`threat_severity`, text, required): Describe the severity of the threat.
* **Threat Confidence** (`threat_confidence`, text, required): Specify the confidence level in identifying the threat.
* **Threat Frequency** (`threat_frequency`, text, required): State the frequency of the threat.
* **Threat Impact** (`threat_impact`, text, required): Outline the impact of the threat.
* **Threat Location** (`threat_location`, text, required): Identify the location of the threat.
* **Threat Status** (`threat_status`, text, required): Update the status of the threat.
* **Threat Type** (`threat_type`, text, required): Specify the type of threat.
* **Notes** (`notes`, text, required): Add any additional notes about the threat.
* **Threat Source** (`threat_source`, text, required): Specify the source of the threat.
* **Threat Target** (`threat_target`, text, required): Identify the target of the threat.
* **Threat Actor** (`threat_actor`, text, required): Name the actor responsible for the threat.
* **Threat Indicators** (`threat_indicators`, text, required): Specify any threat indicators.
* **Ransomware** (`threat_ransomware`, text, required): Check if the threat is ransomware.
* **Espionage** (`threat_espionage`, text, required): Check if the threat is espionage.
* **Tactics** (`tactics`, text, required): Describe the tactics used by the threat.
* **Techniques** (`techniques`, text, required): List the techniques used by the threat.
* **Category** (`category`, text, required): Categorize the threat.
* **Tags** (`tags`, text, required): Tag the threat with relevant keywords.
* **Comment** (`comment`, text, required): Add any additional comments about the threat.
* **File** (`file`, text, required): Attach any relevant files or attachments.
* **Hash** (`hash`, text, required): Provide a hash value for the threat.
