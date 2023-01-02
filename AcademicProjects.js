import academic_projects from "./Data/academic_projects.js";

$(document).ready(function () 
{
   populate_academic_projects();
   $("#contentParent").append(academic_projects_element);
});

var academic_projects_element = "";

function populate_academic_projects()
{
    var i;
    var css_style = "";

    for(i = 0; i < academic_projects.length; i = i + 1)
    {
        // Adding margin-bottom to the last card group
        if((academic_projects.length % 2 == 0 && academic_projects.length - i == 2) || (academic_projects.length % 2 != 0 && academic_projects.length - i == 1))
            css_style = "style=\"margin-bottom: 5%;\"";

        if(i == 0)
            academic_projects_element = academic_projects_element +
                                        "<div class=\"card-group\"" + css_style + ">";
        
        if(i != 0 && i % 2 == 0)
        {
            academic_projects_element = academic_projects_element +
                                        "</div>" +
                                        "<div class=\"card-group\"" + css_style + ">";
        }


        academic_projects_element = academic_projects_element +
                                    "<div class=\"card\">" +
                                        "<div class=\"card-header\">" + academic_projects[i].name + "</div>" +
                                        "<div class=\"card-body\">" +
                                            "<h5 class=\"card-title\">Description</h5>" +
                                            "<p class=\"card-text\">" + academic_projects[i].description + "</p>" +
                                        "</div>" +
                                        "<div class=\"card-footer\">" +
                                            "<h5 class=\"card-title\">Skills Used</h5>" +
                                            "<p class=\"card-text\">" + academic_projects[i].skills + "</p>" +
                                        "</div>" +
                                        "<div class=\"card-footer d-flex justify-content-between\">" +
                                            "<a href=\"" + academic_projects[i].button_1_link + "\" class=\"btn btn-primary\" target=\"_blank\" style=\"width: 100px;\">" + academic_projects[i].button_1_text + "</a>" +
                                            "<a href=\"" + academic_projects[i].button_2_link + "\" class=\"btn btn-info\" target=\"_blank\" style=\"width: 100px;\">" + academic_projects[i].button_2_text + "</a>" +
                                        "</div>" +
                                    "</div>";
    }
}