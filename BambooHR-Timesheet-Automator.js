// ==UserScript==
// @name         BambooHR Timesheet Automator
// @namespace    mailto:zubin.nanavati@saludamedical.com
// @version      0.1
// @description  Nothing
// @author       You
// @match        https://saludamedical.bamboohr.com/employees/timesheet/*
// @icon         https://www.google.com/s2/favicons?domain=bamboohr.com
// @grant        none
// @updateURL    
// ==/UserScript==

'use strict';

var input=document.createElement("input");
input.type="button";
input.value="Copy/Paste Entries";
input.onclick = showAlert;
input.setAttribute("style", "font-size:18px;position:absolute;top:120px;right:40px;");
document.body.appendChild(input);

//Create a dialog
$("body").append ('<div id="gmOverlayDialog"></div>');
$("#gmOverlayDialog").dialog ( {
    modal:      true,
    title:      "Copy Entries",
    zIndex:     83666   //-- This number doesn't need to get any higher.
} );.

var daiy_timesheet = JSON.parse(document.getElementById('js-timesheet-data').innerHTML).timesheet.dailyDetails



var form_list = document.createElement("ul")
document.getElementById("gmOverlayDialog").appendChild(form_list);

var newdropdown = document.createElement("select");
var op = new Option();
op.value = 1;
op.text = "test";
newdropdown.options.add(op)
form_list.appendChild(document.createElement("li")).appendChild(newdropdown)


for(var key in daiy_timesheet) {
    var newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    var list_element = document.createElement("li")
    list_element.appendChild(newCheckbox)
    var weekday = new Date(key).toLocaleString('en-au', {weekday:'long'});
    if (weekday == 'Saturday' || weekday == 'Sunday') {
        list_element.insertAdjacentHTML('beforeend',"<span style='color:red'>"+key +' ('+ weekday + ')</span>')
    }
    else {
        list_element.insertAdjacentHTML('beforeend',"<span style='color:black'>"+key +' ('+ weekday + ')</span>')
    }
    form_list.appendChild(list_element)
}

function showAlert()
{
    var active_dates = document.getElementsByClassName('TimesheetSlat__addEntryLink');
    for(var i =0; i<active_dates.length;i++){
        var entry = active_dates[i].closest('.TimesheetSlat--clock');

        var newCheckbox = document.createElement("input");
        newCheckbox.type = "checkbox";
        newCheckbox.setAttribute("style", "position:absolute;top:10px;right:50px;z-index:1000;");
        entry.appendChild(newCheckbox);
    }
}





