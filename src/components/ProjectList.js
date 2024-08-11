import React from "react";

function ProjectList({ projects }) {   // these are the Props (data) that are passed from another component. Props must be in curly braces
                                     // projects - this is the sorted array of objects

    let index = 0;   // needed to assign the key attribute of the array element - which helps to determine the changed element


    return (
        <div>
            {
                projects.map(item =>    // item - an object from the array. After the return, in the array methods after the arrow => you cannot put curly braces

                    <div key={index = index + 1}>
                        <img src={item.img} />
                    </div>
                    
                )
            }


        </div>
        

    )

}


export default ProjectList;
