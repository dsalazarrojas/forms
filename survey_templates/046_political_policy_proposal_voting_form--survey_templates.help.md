<thinking>...</thinking>

# political_policy_proposal_voting_form - Help Guide

## Purpose
This form is used to allow users to propose and vote on policy proposals. It gathers information about the proposal, including the category it belongs to, a brief description, the user's preferred voting options, and a note with any additional information.

## How To Complete This Form

To complete this form, follow these steps:

1. Enter a title for your policy proposal, if you wish to give it a title.
2. Select the category that best describes your proposal.
3. Enter a brief description of your proposal.
4. Enter your email address, if you'd like to be contacted about the proposal.
5. Select the options you are voting for. You can select multiple options.
6. Add any additional information or comments about your proposal in the "Note" field.
7. Check if you are eligible to vote on this proposal.

## Field-by-Field Explanation

* **Policy Proposal** (`policy_proposal`, text, optional): Enter a brief title for your proposal, if you wish to give it a title.
* **Category** (`category`, select_one, required): Select the category that best describes your proposal.
* **Description** (`description`, text, optional): Enter a brief description of your proposal.
* **Email** (`email`, email, optional): Enter your email address, if you'd like to be contacted about the proposal.
* **Vote** (`vote`, select_multiple, required): Select the options you are voting for. You can select multiple options.
* **Note** (`note`, note, optional): Add any additional information or comments about your proposal.
* **Eligible** (`eligible`, text, optional): Check if you are eligible to vote on this proposal. This field is not actively validated by the system, but it's a good way to double-check your eligibility.
