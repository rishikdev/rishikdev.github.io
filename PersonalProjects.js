import personal_projects from "./Data/personal_projects.js";

$(document).ready(function () 
{
   populate_personal_projects();
   $("#contentParent").append(personal_projects_element);
});

var personal_projects_element = "";

function populate_personal_projects()
{
    var i;
    var css_style = "";

    for(i = 0; i < personal_projects.length; i = i + 1)
    {
        // Adding margin-bottom to the last card group
        if((personal_projects.length % 2 == 0 && personal_projects.length - i == 2) || (personal_projects.length % 2 != 0 && personal_projects.length - i == 1))
            css_style = "style=\"margin-bottom: 5%;\"";

        if(i == 0)
            personal_projects_element = personal_projects_element +
                                        "<div class=\"card-group\"" + css_style + ">";
        
        if(i != 0 && i % 2 == 0)
        {
            personal_projects_element = personal_projects_element +
                                        "</div>" +
                                        "<div class=\"card-group\"" + css_style + ">";
        }


        personal_projects_element = personal_projects_element +
                                    "<div class=\"card\">" +
                                        "<div class=\"card-header\">" + personal_projects[i].name + "</div>" +
                                        "<div class=\"card-body\">" +
                                            "<h5 class=\"card-title\">Description</h5>" +
                                            "<p class=\"card-text\">" + personal_projects[i].description + "</p>" +
                                        "</div>" +
                                        "<div class=\"card-footer\">" +
                                            "<h5 class=\"card-title\">Skills Used</h5>" +
                                            "<p class=\"card-text\">" + personal_projects[i].skills + "</p>" +
                                        "</div>" +
                                        "<div class=\"card-footer d-flex justify-content-between\">" +
                                            "<a href=\"" + personal_projects[i].button_1_link + "\" class=\"btn btn-primary\" target=\"_blank\" style=\"width: 100px;\">" + personal_projects[i].button_1_text + "</a>" +
                                            "<a href=\"" + personal_projects[i].button_2_link + "\" class=\"btn btn-info\" target=\"_blank\" style=\"width: 100px;\">" + personal_projects[i].button_2_text + "</a>" +
                                        "</div>" +
                                    "</div>";
    }
}