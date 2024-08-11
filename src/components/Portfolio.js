import React, { useState } from "react";   // useState - need to import if using hooks
import Toolbar from "./Toolbar";   // importing Toolbar component which creates and displays the buttons and contains the onClick event handler
import ProjectList from "./ProjectList";   // importing ProjectList component which displays the images
import './Portfolio.css'


function Portfolio ({ projectList }) {   // projectList - this is an array of objects. Props that are passed from App.js. Props must be in curly braces


    let filterButtonList = ["All", "Websites", "Flayers", "Business Cards"];   // Array with the names of the buttons (filters)
    
    let [filteredListProjects, setFilteredListProjects] = useState(projectList);
    // The construction above - This is the use of HOOKS, where:
    //     filteredListProjects - the current state value
    //     setFilteredListProjects - the function that takes the new value
    //     useState - the initial state value
    //     useState — a hook that allows you to tell React that a pair of variable and function are used to store local state and change it respectively

    let [selected, setSelected] = useState("All")   // set the initial state value of selected to "All"



    // Event handler function (when a button is clicked)
    function filter(event) {

        let buttons = Array.from( document.querySelectorAll("button"));   // find all button elements on the page
        console.log(buttons);


        let activeButton = buttons.findIndex(item => item.classList.contains("active")) ;   // find the index of the button with the "active" class
        console.log(activeButton);

        buttons[activeButton].classList.remove("active");   // remove the "active" class from the found element


        event.target.classList.add("active");   // add the "active" class to the clicked button


        let select = event.target.textContent;   // get the textContent (text) of the clicked button and assign it to the variable select
        console.log(select);



        if (select === "All") {   // if the textContent of the clicked button is "All"
            setFilteredListProjects(projectList);   // set the new state filteredListProjects to the projectList array
            console.log("All");
        } else {
            setFilteredListProjects(projectList.filter(item => item.category === select));   // otherwise, set the new state filteredListProjects to the filtered array of objects by the category key
            console.log("filter");
        }


        setSelected(select);   // set the new state selected to the value of select
        
    };



    return (
        <div>

            <Toolbar   // imported Toolbar element
                filters = {filterButtonList}   // array with the names of the buttons (filters)
                selected = {selected}   // the textContent of the clicked button (i.e. the value of the selected category)
                onSelectFilter = {filter}   // filter - the function that will be passed to the onClick handler of the Toolbar component
            />

            <ProjectList
                projects = {filteredListProjects}   // the sorted array of objects that will be used to display the images of a certain category
            />

        </div>
    );


}


export default Portfolio;
