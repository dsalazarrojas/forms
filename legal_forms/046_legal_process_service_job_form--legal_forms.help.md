# Legal Process Service Job Form - Help Guide
## Purpose
The Legal Process Service Job Form is used to document the details of a legal process service job, including the process server's presence or absence and other relevant information.

## How To Complete This Form

To complete this form, follow the steps below:

1. Select the appropriate options from the Process Server dropdown list.
2. Enter the Court Date in the format MM/DD/YYYY.
3. If necessary, enter the Legal Process Server Fee.
4. Select the appropriate Service Area options.
5. Select the appropriate Service Level option.
6. Enter any additional information in the text fields.

## Field-by-Field Explanation

* **Process Server** (`process_server`, select_one, required): Select the status of the process server, whether Served or Unserved.
* **Court Date** (`court_date`, date, required): Enter the date of the court hearing or proceeding.
* **Legal Process Server Fee** (`legal_process_server_fee`, number, required): Enter the fee for the legal process server's services, if applicable.
* **Service Area** (`service_area`, select_multiple, optional): Select the region where the service will be performed (State, National, International).
* **Service Level** (`service_level`, select_one, required): Select the level of service required (Standard, Priority).
* **Court File Number** (`court_file_number`, text, required): Enter the number of the court file associated with the case.
* **Process Server Fee Hours Billed** (`process_server_fee_hrs_billed`, number, required): Enter the number of hours billed to the process server's fee.
* **Date Served** (`date_served`, date, required): Enter the date the process server was served.
* **Time Served** (`time_served`, time, required): Enter the time of day the process server was served.
* **Service Address** (`service_address`, text, required): Enter the address where the process server was served.
* **Case Number** (`case_number`, text, required): Enter the number of the case.
* **Court Name** (`court_name`, text, required): Enter the name of the court.
* **Attorney Name** (`attorney_name`, text, required): Enter the name of the attorney associated with the case.
* **Case Remark** (`case_remark`, text, required): Enter any relevant remarks about the case.
* **Notes** (`notes`, text, required): Enter any additional notes about the case.
* **Client Name** (`client_name`, text, required): Enter the name of the client.
* **Client Email** (`client_email`, email, required): Enter the email address of the client.
* **Client Phone** (`client_phone`, text, required): Enter the phone number of the client.
* **Case Type** (`case_type`, select_one, required): Select the type of case (Civil, Criminal, Probate, Family).
* **Case Status** (`case_status`, select_one, required): Select the status of the case (Open, Closed).
* **Court Branch** (`court_branch`, text, required): Enter the branch of the court.
* **Service Branch** (`service_branch`, text, required): Enter the branch of service.
* **Branch Fee** (`branch_fee`, number, required): Enter the fee for the branch's services.
* **Branch Fee Hours Billed** (`branch_fee_hrs_billed`, number, required): Enter the number of hours billed to the branch's fee.
* **Branch Total Hours Billed** (`branch_total_hours_billed`, number, required): Enter the total hours billed by the branch.
