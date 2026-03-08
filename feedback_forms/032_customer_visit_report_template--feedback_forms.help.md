# Customer Visit Report Template - Help Guide

## Purpose
This form is used by sales representatives to document and report on customer visits. It helps to record the details of the visit, including the customer's information, the visit's outcome, and any additional notes or recommendations.

## How To Complete This Form

1. Select the sales representative who conducted the visit.
2. Enter the customer's name and title.
3. Enter the date and time of the visit.
4. Enter the location of the visit.
5. Record the customer's visit outcome, including selecting one of the provided options (Good, Fair, Poor) or providing an alternative outcome in the "Other" field.
6. Provide any additional notes or recommendations for future visits.

## Field-by-Field Explanation

* **Sales Representative**: <i class="fa fa-asterisk"></i> (`sales_representative`, text, required) - Enter the name of the sales representative who visited the customer.
* **Customer**: <i class="fa fa-asterisk"></i> (`customer`, text, required) - Enter the customer's name.
* **Customer Title**: <i class="fa fa-asterisk"></i> (`customer_title`, text, required) - Enter the customer's title.
* **Customer Visit Date**: <i class="fa fa-clock-o"></i> (`customer_visit_date`, date, required) - Enter the date of the visit.
* **Customer Visit Time**: <i class="fa fa-clock-o"></i> (`customer_visit_time`, time, required) - Enter the time of the visit.
* **Customer Visit Duration**: <i class="fa fa-clock"></i> (`customer_visit_duration`, number, optional) - Enter the duration of the visit.
* **Customer Visit Location**: <i class="fa fa-map-marker"></i> (`customer_visit_location`, text, optional) - Enter the location of the visit.
* **Customer Visit Notes**: <i class="fa fa-comment"></i> (`customer_visit_notes`, text, optional) - Provide any additional notes about the visit.
* **Next Visit Date**: <i class="fa fa-clock-o"></i> (`next_visit_date`, date, optional) - Enter the date of the next visit.
* **Next Visit Time**: <i class="fa fa-clock-o"></i> (`next_visit_time`, time, optional) - Enter the time of the next visit.
* **Customer Visit Outcome**: <i class="fa fa-checkmark"></i> (`customer_visit_outcome`, select_one, required) - Select the outcome of the visit from the provided options (Good, Fair, Poor).
	+ If you select "Other", please provide the alternative outcome in the "Other" field.
* **Customer Visit Outcome Other**: <i class="fa fa-asterisk"></i> (`customer_visit_outcome_other`, text, optional) - Enter the alternative outcome.
* **Customer Visit Outcome Notes**: <i class="fa fa-comment"></i> (`customer_visit_outcome_notes`, text, optional) - Provide additional notes about the visit outcome.
* **Sales Representative Notes**: <i class="fa fa-comment"></i> (`sales_representative_notes`, text, optional) - Provide any additional notes from the sales representative.
* **Sales Representative Comments**: <i class="fa fa-comment"></i> (`sales_representative_comments`, text, optional) - Provide any additional comments from the sales representative.
* **Customer Visit Outcome Recommendation**: <i class="fa fa-lightbulb"></i> (`customer_visit_outcome_recommendation`, text, optional) - Provide any recommendations for future visits.
* **Other Recommendation**: <i class="fa fa-asterisk"></i> (`customer_visit_outcome_other_recommendation`, text, optional) - Enter any additional recommendations.
* **Customer Visit Outcome Additional Information**: <i class="fa fa-info-circle"></i> (`customer_visit_outcome_additional_information`, text, optional) - Enter any additional information about the visit outcome.
* **Other Additional Information**: <i class="fa fa-asterisk"></i> (`customer_visit_outcome_other_additional_information`, text, optional) - Enter any additional information.
* **Other Additional Notes**: <i class="fa fa-comment"></i> (`customer_visit_outcome_other_additional_notes`, text, optional) - Enter any additional notes.
* **Remarks**: <i class="fa fa-comment"></i> (`customer_visit_outcome_remarks`, text, optional) - Enter any additional remarks.
* **Other Remarks**: <i class="fa fa-asterisk"></i> (`customer_visit_outcome_other_remarks`, text, optional) - Enter any additional remarks.
* **Other Additional Remarks**: <i class="fa fa-asterisk"></i> (`customer_visit_outcome_other_additional_remarks`, text, optional) - Enter any additional remarks.
* **Other Recommendation Remarks**: <i class="fa fa-lightbulb"></i> (`customer_visit_outcome_other_recommendation_remarks`, text, optional) - Enter any additional recommendation remarks.
* **Other Recommendation Remarks Additional**: <i class="fa fa-asterisk"></i> (`customer_visit_outcome_other_recommendation_remarks_additional`, text, optional) - Enter any additional recommendation remarks.
