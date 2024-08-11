import React from "react";


function Toolbar({ filters, selected, onSelectFilter }) {   // Props must be in curly braces

    // filters, selected, onSelectFilter - these are the Props (data) that are passed from another component
    // Where:
    //     filters - this is an array with the names of the buttons (filters)
    //     selected - this is the text of the pressed button (i.e. the value of the selected category)
    //     onSelectFilter - a function that will be passed to the onClick event handler


    return (

        <div className="toolbar">
            
            {
            //  filters - this is an array with the names of the buttons (filters). After the return, in the array methods after the arrow => you cannot put curly braces
                filters.map((item) => 
                    <button
                    //  onClick - this is an event handler (written directly in jsx)
                        onClick={onSelectFilter}   // onSelectFilter - the function passed to the onClick event handler
                        key={item}   // key - the attribute of the array element, which helps to determine the changed element
                        className={item === selected ? "active" : ""}   // selected - this is the textContent (text) of the pressed button
                    >
                        {/* item below - this is the button text (between the <button> tags) */}
                        {item}
                    </button>    
                )
            }

        </div>

    )

}


export default Toolbar;