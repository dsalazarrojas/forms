# Post Operative Questionnaire Form - Help Guide

## Purpose
This form is designed to gather information from patients about their postoperative status, including pain level, overall satisfaction, and other relevant factors.

## How To Complete This Form
1. Fill in the form completely, making sure to answer all questions honestly and accurately.
2. For each question, choose the best response that fits your current situation.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, `text`, required): Please fill in your full name as it appears on your medical records.
* **Date of Surgery** (`date_of_surgery`, `date`, required): Enter the date of your surgery.
* **Date of Questionnaire** (`date_of_questionnaire`, `date`, required): Enter the date you are filling out this form, which is usually the date of your follow-up or assessment.
* **Pain level 1-10** (`pain_level_1_to_10`, `number`, required): Rate your current pain level from 1 to 10, where 1 is minimal pain and 10 is severe.
* **Pain location 1-10** (`pain_location_1_to_10`, `number`, required): Rate the location of your pain from 1 to 10, where 1 is minimal and 10 is severe.
* **Emotional state 1-10** (`emotional_state_1_to_10`, `number`, required): Rate your current emotional state from 1 to 10, where 1 is calm and 10 is anxious.
* **Overall satisfaction 1-10** (`overall_satisfaction_1_to_10`, `number`, required): Rate your overall satisfaction with your recovery from 1 to 10, where 1 is very dissatisfied and 10 is very satisfied.
* **Nausea** (`nausea`, `select_one`, required): Check if you are experiencing nausea.
* **Vomiting** (`vomiting`, `select_one`, required): Check if you are experiencing vomiting.
* **Fever** (`fever`, `select_one`, required): Check if you are experiencing fever.
* **Pain** (`pain`, `select_one`, required): Check if you are experiencing pain.
* **Difficulty breathing** (`difficulty_breathing`, `select_one`, required): Check if you are experiencing difficulty breathing.
* **Nausea/Vomiting** (`nausea_vomiting`, `select_multiple`, required): Check the options that apply to your current condition (Nausea, Vomiting, or Unable to assess).
* **Pain location** (`pain_location`, `select_multiple`, required): Check the locations where you are experiencing pain (Head, Neck, Chest, Abdomen, Back, Extremities, or Unable to assess).
* **Emotional state** (`emotional_state`, `select_multiple`, required): Check the emotions you are currently experiencing (Anxious, Angry, Sad, Calm, or Unable to assess).
* **Overall satisfaction** (`overall_satisfaction`, `select_one`, required): Check your overall satisfaction with your recovery (Very satisfied, Satisfied, Neutral, Dissatisfied, or Very dissatisfied).
* **Follow up** (`follow_up`, `time`, required): Enter the follow-up time (usually in the format 01:00, 02:00, 03:00, etc.).
* **Follow up date** (`follow_up_date`, `date`, required): Enter the follow-up date (usually the date you are scheduled to follow-up).
* **Follow up location** (`follow_up_location`, `text`, required): Enter the location of your follow-up appointment.
* **Comments** (`comments`, `note`, required): Add any additional comments about your condition.
* **Medical notes** (`medical_notes`, `note`, required): Add any additional medical information or concerns.
* **Medications** (`medication`, `note`, required): Add any medications you are currently taking.
* **Discharge date** (`discharge_date`, `date`, required): Enter the discharge date (if applicable).
* **Physician name** (`physician_name`, `text`, required): Enter the name of your physician.
* **Comments** (`comments`, `note`, optional): Add any additional comments about your condition, medical team, or hospital stay.
* **Medical notes** (`medical_notes`, `note`, optional): Add any additional medical information or concerns.
* **Medications** (`medication`, `note`, optional): Add any medications you are currently taking, if not already listed.
* **Discharge date** (`discharge_date`, `date`, optional): Enter the discharge date (if not already recorded).
* **Physician name** (`physician_name`, `text`, optional): Enter the name of your physician (if not already recorded).

Please fill out this form completely and accurately, and be as thorough as possible when answering each question.
