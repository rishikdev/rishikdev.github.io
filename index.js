import academics from './Data/academics.js';
import professional_experience from './Data/professional_experience.js';
import skills from './Data/skills.js';

$(document).ready(function () 
{
  populate_academics();
  populate_professional_experience();
  populate_skills();
  
  $("#contentParent").append(academics_element);
  $("#contentParent").append(professional_experience_element);
  $("#contentParent").append(skills_element);
  make_ms_courses_collapsible();
});

var academics_element = "";
var professional_experience_element = "";
var skills_element = "";

function populate_academics()
{
  var i, j, k;
  academics_element = academics_element +
                      "<div class=\"card\">" +
                        "<div class=\"card-header\">Academics</div>" +
                        "<div class=\"card-body\">" +
                          "<ul>" +
                            "<li>";
                      
  for(i = 0; i < academics.length; i = i + 1)
  {
    if(academics[i].has_courses)
    {
      academics_element = academics_element +
                          "<button type=\"button\" class=\"card-text collapsible\">" + academics[i].degree + " • <a href=\"" + academics[i].institution_link +"\" target=\"_blank\">" + academics[i].institution_name + "</a> • " + academics[i].city_year + "</button>" +
                          "<ul class=\"courses-taken\">";
                    
      for(j = 0; j < academics[i].semesters.length; j = j + 1)
      {
        academics_element = academics_element +
                          "<br>" +
                          "<h6 class=\"card-text\">" + academics[i].semesters[j].semester + "</h6>";

        for(k = 0; k < academics[i].semesters[j].courses.length; k = k + 1)
        {
          academics_element = academics_element +
                              "<li><a href=\"" + academics[i].semesters[j].courses[k].course_link + "\" target=\"_blank\">" + academics[i].semesters[j].courses[k].course_code + "</a> - " + academics[i].semesters[j].courses[k].course_name + "</li>";
        }
      }

      academics_element = academics_element +
                                "<hr>" +
                              "</ul>" +
                            "</li>" +
                            "<br>";
    }

    else
    {
      academics_element = academics_element +
                          "<li>" +
                            "<p class=\"card-text\">" + academics[i].degree + " • <a href=\"" + academics[i].institution_link +"\" target=\"_blank\">" + academics[i].institution_name + "</a> • " + academics[i].city_year + "</p>" +
                          "</li>";
    }
  }

  academics_element = academics_element +
                              "</li>" +
                            "</ul>" +
                          "</div>" +
                        "</div>";
}

function make_ms_courses_collapsible() 
{
  var collapsible_elements = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < collapsible_elements.length; i = i + 1) 
  {
    collapsible_elements[i].addEventListener("click", function () 
    {
      this.classList.toggle("list-active");
      var content = this.nextElementSibling;
      
      if(content.style.maxHeight) 
      {
        content.style.maxHeight = null;
      }

      else 
      {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
}

function populate_professional_experience()
{
  var i, j;
  professional_experience_element = professional_experience_element +
                                    "<div class=\"card\">" +
                                      "<div class=\"card-header\">Professional Experience</div>" +
                                        "<div class=\"card-body\">" +
                                          "<ul>";

  for(i = 0; i < professional_experience.length; i = i + 1)
  {
    professional_experience_element = professional_experience_element +
                                      "<li>" +
                                        "<h5 class=\"card-title\">" + professional_experience[i].card_title + "</h5>" +
                                        "<p class=\"card-text\">" +
                                          "<ul>";

    for(j = 0; j < professional_experience[i].work.length; j = j + 1)
    {
      professional_experience_element = professional_experience_element +
                                        "<li>" + professional_experience[i].work[j] + "</li>"
    }

    professional_experience_element = professional_experience_element +
                                          "</ul>" +
                                        "</p>" +
                                      "</li>";

    if(i != professional_experience.length - 1)
      professional_experience_element = professional_experience_element +
                                        "<hr>";
  }

  professional_experience_element = professional_experience_element +
                                        "</ul>" +
                                      "</div>" +
                                    "</div>";
}

function populate_skills()
{
  var i, j;
  skills_element = skills_element +
                    "<div class=\"card\">" +
                      "<div class=\"card-header\">Skills</div>";

  for(i = 0; i < skills.length; i = i + 1)
  {
    skills_element = skills_element +
                      "<div class=\"card-body\">" +
                        "<h5 class=\"card-title\">" + skills[i].card_title + "</h5>" +
                        "<ul>";

    for(j = 0; j < skills[i].names.length; j = j + 1)
    {
      skills_element = skills_element +
                        "<li>" + skills[i].names[j] + "</li>";
    }

    skills_element = skills_element +
                        "</ul>" +
                      "</div>";

    if(i != skills.length - 1)
      skills_element = skills_element +
                        "<hr>";
  }

  skills_element = skills_element +
                    "</div>";
}

