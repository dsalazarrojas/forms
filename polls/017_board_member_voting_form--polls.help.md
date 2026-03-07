<thinking>
We have a few forms in our system, but this "Board Member Voting Form" is one of the more complex ones. Before we dive into the detailed instructions, let's confirm that you are in the correct context to fill out this form. This form is intended for board members to cast their votes on various matters, such as elections, policy approvals, and budget approvals. Before proceeding, please ensure you have the necessary information to complete the form accurately and truthfully. To fill out this form, you should only complete this if you are a registered board member with an active vote.
</thinking>

# Board Member Voting Form - Help Guide
## Purpose
The Board Member Voting Form is a critical tool for board members to express their opinions and votes on various matters. This form helps to gather votes on elections, policy approvals, and budget approvals in a transparent and structured way.

## How To Complete This Form
1. Please fill out the form completely and accurately, ensuring that all required fields are filled out.
2. If you have any conflicts of interest or need to recuse yourself, select the correct option in the "Conflict of Interest" field.
3. For elections, select the position you are voting for in the "Position Being Voted On" field.
4. If you are voting by proxy, select the correct option in the "Proxy Vote" field and provide the proxy holder's name in the "Proxy Holder Name" field.
5. If you are choosing to keep your vote confidential, select "Yes, keep confidential" in the "Vote Confidentiality" field.

## Field-by-Field Explanation

* **Voter Name (Voter Name)** (`voter_name`, `text`, required): 
Please enter your full name as a board member.

* **Voter Email (Voter Email)** (`voter_email`, `email`, required): 
Enter your email address for contact purposes.

* **Voting Date (Voting Date)** (`voting_date`, `date`, required): 
Select the date of this vote.

* **Type of Vote (Vote Type)** (`vote_type`, `select_one`, required): 
Choose from the options to select the type of vote you are casting.

* **Position Being Voted On (Election Position)** (`election_position`, `select_one`, required): 
If this is an election, select the position you are voting for.

* **Candidate Selection (Candidate Selection)** (`candidate_selection`, `select_one`, required): 
Choose the candidate of your preference.

* **Write-In Candidate Name (Write-In Candidate Name)** (`write_in_candidate`, `text`, optional): 
If selecting write-in, enter the candidate's name.

* **Motion or Resolution Title (Motion or Resolution Title)** (`motion_title`, `text`, optional): 
Enter the title of the motion or resolution being voted on.

* **Vote on Motion (Your Vote on Motion)** (`motion_vote`, `select_one`, optional): 
Choose your vote on the motion or resolution.

* **Vote Reasoning (Vote Reasoning)** (`vote_reasoning`, `text`, optional): 
If you want to provide a reason for your vote, enter it here.

* **Conflict of Interest (Conflict of Interest)** (`conflict_of_interest`, `select_one`, required): 
Select whether you have any conflict of interest or need to recuse yourself.

* **Recusal Required (Recusal Required)** (`recusal_required`, `select_one`, required): 
Choose whether recusal is required in your case.

* **Proxy Vote (Proxy Vote)** (`proxy_vote`, `select_one`, required): 
Select whether you are voting by proxy or not.

* **Proxy Holder Name (Proxy Holder Name)** (`proxy_holder_name`, `text`, required): 
If you are voting by proxy, enter the proxy holder's name.

* **Proxy Recipient Name (Proxy Recipient Name)** (`proxy_recipient_name`, `text`, optional): 
If you are being voted for by proxy, enter the recipient's name.

* **Vote Confidentiality (Vote Confidentiality)** (`vote_confidentiality`, `select_one`, required): 
Choose whether your vote should be kept confidential.

* **Attestation (Attestation)** (`terms_attestation`, `select_one`, required): 
Choose whether you attest to being eligible to vote.

Please note that some fields may not be applicable in certain situations, but they are all required for the form to be valid. If you have any questions or concerns, please reach out to your board member support team.
