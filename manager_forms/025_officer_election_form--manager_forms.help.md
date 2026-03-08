# Officer Election Form - Help Guide
## Purpose
The Officer Election Form is a tool used to record and report the results of officer elections within an organization. It captures the necessary details about the election, including the position, position type, election date and time, voting results, and candidate information.

## How To Complete This Form
To complete this form accurately and efficiently, follow these steps:
1. Enter the title of the position being elected (Position Title field).
2. Confirm if the position is indeed an elected or not by selecting 'Yes' or 'No' in the Position Type field.
3. Enter the date of the election in the Election Date field in the correct format (YYYY-MM-DD).
4. Enter the start and end times for the voting process in the Voting Start Time and Voting End Time fields.
5. Enter the outcome of the election in the Voting Result field.
6. Provide more details about the election results in the Result Details field.
7. Enter the name of candidate 1 and 2 if applicable in the Candidate 1 and Candidate 2 fields.

## Field-by-Field Explanation
- **Position Title** (`position_title`, text, required): Enter the title of the position being elected.
- **Position Type** (`position_type`, select_one, required): Select 'Yes' to confirm this is an elected position or 'No' to indicate otherwise.
- **Position Type ID** (`position_type_id`, number, optional): This field is not currently used. Please leave it blank.
- **Election Date** (`election_date`, date, required): Enter the date of the election in the correct format (YYYY-MM-DD).
- **Election Time** (`election_time`, text, optional): Enter the time of the election.
- **Voting Start Time** (`voting_start_time`, text, optional): Enter the start time of the voting process.
- **Voting End Time** (`voting_end_time`, text, optional): Enter the end time of the voting process.
- **Voting Result** (`voting_result`, text, optional): Enter the outcome of the election.
- **Result Details** (`result_details`, text, optional): Provide more information about the election results.
- **Candidate 1** (`candidate_1`, text, optional): Enter the name of the first candidate.
- **Candidate 2** (`candidate_2`, text, optional): Enter the name of the second candidate.

## Tips
* Ensure all fields with a 'required' attribute are completed before proceeding to the next step.
* For fields with 'select_one' type, select only one option.
* Enter dates in the correct format (YYYY-MM-DD) to avoid errors.
