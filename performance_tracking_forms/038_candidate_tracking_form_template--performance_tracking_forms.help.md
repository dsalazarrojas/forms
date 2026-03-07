<thinking>
The purpose of this form is to track the performance of candidates throughout the hiring process. It helps recruiters and hiring managers to monitor progress, update statuses, and record feedback and notes. This form ensures that all relevant information is documented and easily accessible for decision-making.

To use this form effectively, make sure to fill it out as accurately and thoroughly as possible. This form is designed to be completed multiple times during the hiring process, with each update recording the current stage of the candidate's progress.

The fields below provide detailed explanations to help you complete the form correctly:

</thinking>

# Candidate Tracking Form Template - Help Guide
## Purpose
The Candidate Tracking Form is a tool to monitor the progress of candidates through the hiring process, from initial application to final stages such as job offer or declination.

## How To Complete This Form
To use this form:

1.  Enter the candidate's name as it is entered in the Applicant Tracking System (ATS).
2.  Enter the internal unique code for the application, known as the Application ID.
3.  Select the position title the candidate is being tracked for.
4.  Select the Hiring Manager managing this process.
5.  Enter the date of the candidate's application.
6.  In the -- Recruitment Stage Tracking -- section, select where the candidate currently is in the process.
7.  Briefly describe the last action taken for the candidate.
8.  Schedule the next step and date (if applicable).
9.  In the -- Performance Assessment -- section, enter the average scores from all interviewers.
10.  In the -- Logistics and Admin -- section, update the status of internal verification processes such as reference checks and background checks.
11.  Select the status of these internal verification processes.
12.  Enter the name of the recruiter in charge of this process.
13.  Enter any internal feedback and notes for the recruiter.

## Field-by-Field Explanation

* **Candidate Name** (`tracked_candidate_name`, text, required): Enter the candidate's name as it is entered in the ATS.
* **Application ID** (`application_id_tracking`, text, required): Enter the internal unique code for the application.
* **Position Title** (`position_title_tracking`, text, required): Select the role the candidate is being tracked for.
* **Hiring Manager** (`tracking_hiring_manager`, text, required): Select the person managing this process.
* **Date of Application** (`application_date_val`, date, required): Enter the date of the candidate's application.
* **Current Status** (`recruitment_current_status`, select_one, required): Select where the candidate currently is in the process (e.g., Screened, 1st Interview, 2nd Interview, etc.).
* **Last Action Taken** (`last_action_taken_desc`, text, optional): Briefly describe the last action taken for the candidate.
* **Scheduled Next Step** (`scheduled_next_step_name`, text, optional): Schedule the next step and date (if applicable).
* **Scheduled Date** (`scheduled_next_step_date`, date, optional): Enter the scheduled date (if applicable).
* **Technical Score** (`aggregate_technical_score`, number, optional): Enter the average score from technical evaluations (if applicable).
* **Behavioral Score** (`aggregate_behavioral_score`, number, optional): Enter the average score from behavioral evaluations (if applicable).
* **Overall Score** (`aggregate_overall_score`, number, optional): Enter the average overall score from all evaluations (if applicable).
* **Reference Check Status** (`reference_check_status_val`, select_one, required): Select the status of the reference checks (e.g., Pending, In-Progress, etc.).
* **Background Check Status** (`background_check_status_val`, select_one, required): Select the status of the background checks (e.g., Pending, In-Progress, etc.).
* **Recruiter in Charge** (`recruiter_in_charge_name`, text, required): Enter the name of the person managing this process.
* **Internal Feedback and Notes** (`internal_tracking_notes`, text, optional): Enter any internal feedback and notes for the recruiter.
* **Tracking Update Date** (`tracking_update_date_val`, date, required): Enter the date of the last update.
