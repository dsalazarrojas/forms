<thinking>...</thinking>

# Bored Pile - Help Guide

## Purpose
The Bored Pile form is used to record the details of a bored pile installation, including project information, pile specifications, and inspection results. This form is typically used during construction site inspections to gather data on bored pile installations and ensure that the work is completed accurately and safely.

## How To Complete This Form

1. Start by filling in the required fields: Project Name, Pile Reference Number, Rig Operator Name, Date of Boring, Designed Pile Diameter, Existing Ground Level, Cut-off Level, Pile Toe Level, Actual Boring Depth, Soil Type at Toe Level, and Site Inspector Name.
2. Select the correct option for Casing Used and Reinforcement Cage Inspection.

## Field-by-Field Explanation

* **Project Name** (`project_name`, text, required): Enter the name of the project where the bored pile is being installed.
* **Pile Reference Number** (`pile_ref_no`, text, required): Enter the reference number of the bored pile.
* **Rig Operator Name** (`rig_operator`, text, required): Enter the name of the rig operator who performed the boring operation.
* **Date of Boring** (`boring_date`, date, required): Enter the date the boring operation was performed.
* **Designed Pile Diameter** (`designed_diameter`, number, required): Enter the diameter of the pile as per the design plan (in meters).
* **Existing Ground Level** (`ground_lvl`, number, required): Enter the existing ground level (in meters) where the pile is being installed.
* **Cut-off Level** (`cutoff_lvl`, number, required): Enter the cut-off level (in meters) where the pile is being installed.
* **Pile Toe Level** (`toe_lvl`, number, required): Enter the toe level (in meters) of the pile.
* **Actual Boring Depth** (`actual_depth`, number, required): Enter the actual boring depth (in meters) of the pile.
* **Soil Type at Toe Level** (`to_soil_type`, text, required): Enter the type of soil encountered at the toe level of the pile.
* **Casing Used** (`casing_status`, select_one, required): Select whether temporary casing was used during the boring operation.
* **Designed Concrete Volume** (`concrete_vol_designed`, number, required): Enter the designed concrete volume of the pile (in cubic meters).
* **Actual Concrete Volume** (`concrete_vol_actual`, number, required): Enter the actual concrete volume poured for the pile (in cubic meters).
* **Reinforcement Cage Inspection** (`cage_inspection_status`, select_one, required): Select the result of the reinforcement cage inspection (Passed, Failed, or N/A).
* **Site Inspector Name** (`site_inspector`, text, required): Enter the name of the site inspector who performed the inspection.
* **Date of Approval** (`approval_dt`, date, required): Enter the date of inspection approval.
