<thinking>...I will create a helpful guide for users to fill out the Club Leadership Voting Form.

First, I will ensure that the form purpose is clear: this form is for users to submit their votes for different leadership positions within a club. The form is used for verification purposes, and users will provide their full name, member ID or student ID, voting date, and other relevant information.

Before creating the guide, I will review the form structure and fields to ensure that each field is clearly labeled and easy to understand. I will also verify that the required fields are marked as such, and that the form is complete and free of duplication.

Form fields are: Voter Full Name, Member ID or Student ID, Voting Date, Voting Time, Election Year, Club Name, Vote for President, Vote for Vice President, Vote for Secretary, Vote for Treasurer, and Vote Confirmation. The guide will explain each field in a concise and practical manner.

</thinking>

# Club Leadership Voting Form - Help Guide
## Purpose
This form is for club members to submit their votes for different leadership positions within the club. It is used for verification purposes to ensure that the voting process is accurate and secure.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your full name and member ID or student ID.
2. Select the date and time you are voting.
3. Choose the election year for which you are voting.
4. Select your choice for each leadership position: President, Vice President, Secretary, and Treasurer.
5. Confirm your votes by selecting "Yes, I Confirm" in the final section.

## Field-by-Field Explanation

### **Voter Full Name** (`voter_name`, text, required)
Enter your full name as it appears on your membership card or ID.

### **Member ID or Student ID** (`voter_id`, text, required)
Enter your member ID or student ID number as issued by the club or school.

### **Voting Date** (`voting_date`, date, required)
Select the date on which you are voting for the leadership positions.

### **Voting Time** (`voting_time`, time, optional)
Select the time at which you are casting your vote. (This field is optional.)

### **Election Year** (`election_year`, number, required)
Select the year for which you are voting for the leadership positions.

### **Club Name** (`club_name`, text, required)
Enter the name of the club for which you are voting.

### **Vote for President** (`president_vote`, select_one, required)
Select one of the following candidates for President:
  - Candidate A
  - Candidate B
  - Candidate C
  - Write-In
  - Abstain

### **Write-In Candidate for President** (`president_writeIn`, text, optional)
If you selected "Write-In" above, enter the name of your chosen candidate.

### **Vote for Vice President** (`vice_president_vote`, select_one, required)
Select one of the following candidates for Vice President:
  - Candidate A
  - Candidate B
  - Candidate C
  - Write-In
  - Abstain

### **Write-In Candidate for Vice President** (`vice_president_writeIn`, text, optional)
If you selected "Write-In" above, enter the name of your chosen candidate.

### **Vote for Secretary** (`secretary_vote`, select_one, required)
Select one of the following candidates for Secretary:
  - Candidate A
  - Candidate B
  - Candidate C
  - Write-In
  - Abstain

### **Write-In Candidate for Secretary** (`secretary_writeIn`, text, optional)
If you selected "Write-In" above, enter the name of your chosen candidate.

### **Vote for Treasurer** (`treasurer_vote`, select_one, required)
Select one of the following candidates for Treasurer:
  - Candidate A
  - Candidate B
  - Candidate C
  - Write-In
  - Abstain

### **Write-In Candidate for Treasurer** (`treasurer_writeIn`, text, optional)
If you selected "Write-In" above, enter the name of your chosen candidate.

### **I Confirm These Are My Official Votes** (`vote_confirmation`, select_one, required)
Select "Yes, I Confirm" to confirm that these are your official votes. If you need to change your votes, select "No, Let Me Change My Votes" and you will be guided to do so.
