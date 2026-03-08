# Cash Handling Incident Report - Help Guide
## Purpose
The Cash Handling Incident Report is a form used to document and investigate incidents related to cash handling, such as cash shortages, overages, and other similar issues. This form helps identify the root cause and prevent future incidents.

## How To Complete This Form
To complete this form, follow these steps:

1.  Ensure you have all the necessary information and evidence gathered.
2.  Fill out the required fields marked with an asterisk (\*) as accurately and thoroughly as possible.
3.  Provide detailed descriptions for fields that allow text input.
4.  Select relevant options for fields with dropdown menus.
5.  Review and verify the form before submitting it.

## Field-by-Field Explanation

* **Incident ID Number** (id: 2, type: text, required: false): This field is used to reference a unique identifier for the incident. If you don't have an ID, you can leave this field blank.
* **Report Date** (id: 3, type: date, required: true): Enter the date you are reporting the incident.
* **Report Time** (id: 4, type: time, required: false): Enter the time the incident occurred or was discovered.
* **Location or Store Name** (id: 6, type: text, required: true): Enter the location where the incident occurred or the name of the store involved.
* **Incident Date** (id: 10, type: date, required: true): Enter the date the incident occurred.
* **Incident Time** (id: 11, type: time, required: false): Enter the time the incident occurred.
* **Type of Incident** (id: 12, type: select_one, required: true): Select the category of the incident from the options provided:
	+ Cash shortage
	+ Cash overage
	+ Counterfeit bill received
	+ Check fraud
	+ Credit card fraud
	+ Theft or suspected theft
	+ Robbery
	+ Safe error
	+ Deposit discrepancy
	+ Other
* **Detailed Description** (id: 13, type: text, required: true): Provide a detailed description of what happened.
* **Discovered By** (id: 14, type: text, required: true): Enter the name of the person who found the incident.
* **Discovery Method** (id: 15, type: select_one, required: true): Select how the incident was discovered from the options provided:
	+ Cash count
	+ Register reconciliation
	+ Safe audit
	+ Deposit preparation
	+ Customer complaint
	+ Surveillance review
	+ Tip or report
	+ Other
* **Amount Involved** (id: 23, type: number, required: true): Enter the monetary amount involved in the incident.
* **Currency Denominations** (id: 24, type: text, required: false): Enter the type of currency involved.
* **Actions Taken** (id: 29, type: text, required: true): Describe the actions taken in response to the incident.
* **Was Management Notified?** (id: 30, type: select_one, required: true): Select whether management was notified from the options provided:
	+ Yes - immediately
	+ Yes - within 1 hour
	+ Yes - same day
	+ No - pending
* **Manager Name** (id: 31, type: text, required: false): Enter the name of the manager who was notified.
* **Was Security Notified?** (id: 32, type: select_one, required: false): Select whether security was notified from the options provided:
	+ Yes - internal security
	+ Yes - external security
	+ Yes - both
	+ False
* **Was Law Enforcement Notified?** (id: 33, type: select_one, required: false): Select whether law enforcement was notified from the options provided:
	+ Yes - called
	+ Yes - report filed
	+ No - not required
	+ No - under review
* **Police Report Number** (id: 34, type: text, required: false): Enter the police report number if law enforcement was involved.
* **Evidence** (id: 35, type: note, required: false): Enter any evidence gathered, such as documentation.
* **Is Surveillance Video Available?** (id: 36, type: select_one, required: false): Select whether surveillance video is available from the options provided:
	+ Yes - reviewed
	+ Yes - pending review
	+ No - not available
	+ No - not functioning
* **Video Timestamp** (id: 37, type: text, required: false): Enter the time range of the available video footage.
* **Documents Collected** (id: 38, type: select_multiple, required: false): Select the type of documents collected from the options provided:
	+ Register tape
	+ Deposit slip
	+ Count sheet
	+ Incident statement
	+ Witness statements
	+ Photos
	+ Video footage
	+ Other
* **Was Counterfeit Bill Retained?** (id: 39, type: select_one, required: false): Select what happened to the counterfeit bill from the options provided:
	+ Yes - secured
	+ Yes - given to police
	+ Yes - given to bank
	+ No - returned
* **Are There Prior Similar Incidents?** (id: 40, type: select_one, required: false): Select if there have been prior similar incidents from the options provided:
	+ No - first incident
	+ Yes - same employee
	+ Yes - same register
	+ Yes - same location
	+ Yes - similar pattern
* **Prior Incident Details** (id: 41, type: text, required: false): Enter the details of prior similar incidents.
* **Suspected Root Cause** (id: 42, type: text, required: false): Enter the suspected root cause of the incident.
* **Recommended Preventive Measures** (id: 43, type: text, required: false): Enter recommended measures to prevent similar incidents.
* **Employee Status** (id: 44, type: select_one, required: false): Select the current status of the employee involved from the options provided:
	+ Still employed - normal duty
	+ Still employed - restricted duty
	+ Suspended pending investigation
	+ Terminated
	+ Not applicable
* **Financial Resolution** (id: 45, type: select_one, required: false): Select how the financial resolution was handled from the options provided:
	+ Employee reimbursement
	+ Written off as loss
	+ Insurance claim
	+ Recovered from customer
	+ Other
* **Investigation Status** (id: 46, type: select_one, required: true): Select the current status of the investigation from the options provided:
	+ Complete
	+ In progress
	+ Pending review
	+ Referred to external
* **Reported By** (id: 47, type: text, required: true): Enter the name of the person who reported the incident.
* **Reporter Title** (id: 48, type: text, required: true): Enter the job title of the person who reported the incident.
* **Reporter Signature Date** (id: 49, type: date, required: true): Enter the date the report was signed.
* **Manager Review** (id: 50, type: select_one, required: false): Select if the manager has reviewed the report from the options provided:
	+ Reviewed and approved
	+ Reviewed with comments
	+ Pending review
	+ Escalated
* **Manager Signature Date** (id: 51, type: date, required: false): Enter the date the manager signed the report.

Note: This help guide is intended to be a general guide and may not cover all possible scenarios or questions. If you have specific concerns or questions, please reach out to the relevant personnel for clarification.
