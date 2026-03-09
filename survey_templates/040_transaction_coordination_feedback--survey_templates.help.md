# Transaction Coordination Feedback - Help Guide

## Purpose
The Transaction Coordination Feedback form is used to capture feedback from users on the coordination process of a transaction. This form helps identify areas of improvement and ensure that the transaction coordination process is running smoothly.

## How To Complete This Form

To complete this form, follow these steps:

* Select the correct transaction status from the "Transaction Status" field.
* Choose the transaction type (Residential, Commercial, or Other) from the "Transaction Type" field.
* Enter the buyer and listing agent names in the respective text fields.
* Select the closing date from the "Closing Date" field.
* Enter the transaction number in the "Transaction Number" field.
* Enter the transaction amount in the "Transaction Amount" field.
* Enter the transaction location in the "Transaction Location" field.
* Enter any additional transaction notes in the "Transaction Notes" field.
* Select the submitted-by option (User, System, or Other) from the "Submitted By" field.
* Fill in any additional fields as necessary (Follow-up Required, Follow-up Date, Follow-up Time, Client Comments, Agent Comments, Transaction Status Update, Follow-up Method, Follow-up Notes, Transaction Coordination Team, Client Name, Agent Name, Transaction Date, and Transaction Time) with the relevant information.

## Field-by-Field Explanation

* **Transaction Status** (`transaction_coordination_status`, select_one, required): Select the current status of the transaction (In-progress, Completed, or Pending).
* **Transaction Type** (`transaction_type`, select_multiple, required): Choose the type of transaction (Residential, Commercial, or Other).
* **Transaction Number** (`transaction_number`, text, required): Enter the unique transaction number.
* **Transaction Amount** (`transaction_amount`, number, required): Enter the amount of the transaction.
* **Transaction Location** (`transaction_location`, text, required): Enter the location of the transaction.
* **Transaction Date** (`transaction_date`, date, required): Select the date of the transaction.
* **Transaction Time** (`transaction_time`, time, required): Select the time of the transaction.
* **Transaction Coordination Team** (`transaction_coordination_team`, text, required): Enter the team responsible for the transaction coordination.
* **Client Name** (`client_name`, text, required): Enter the name of the client.
* **Agent Name** (`agent_name`, text, required): Enter the name of the agent.
* **Closing Date** (`closing_date`, date, required): Select the closing date of the transaction.
* **Follow-up Required** (`follow_up_required`, select_one, required): Select whether follow-up is required (True or False).
* **Follow-up Date** (`follow_up_date`, date, required if Follow-up Required is True): Enter the follow-up date if follow-up is required.
* **Follow-up Time** (`follow_up_time`, time, required if Follow-up Required is True): Select the follow-up time if follow-up is required.
* **Follow-up Method** (`follow_up_method`, text, optional): Enter the method of follow-up.
* **Follow-up Notes** (`follow_up_notes`, text, optional): Enter any follow-up notes.
* **Client Comments** (`client_comments`, text, optional): Enter any comments from the client.
* **Agent Comments** (`agent_comments`, text, optional): Enter any comments from the agent.
* **Transaction Status Update** (`transaction_status_update`, text, optional): Enter any update on the transaction status.
* **Follow-up Notes** (`follow_up_notes`, text, optional): Enter any follow-up notes.
* **Transaction Notes** (`transaction_notes`, text, optional): Enter any additional transaction notes.
* **Submitted By** (`submitted_by`, select_one, optional): Select who submitted the form (User, System, or Other).
