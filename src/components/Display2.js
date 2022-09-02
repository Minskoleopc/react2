
import React from 'react'
let display = ({name,lastName}) => {
    console.log(name,lastName)
    return (
        <div id="hello2">
            <h1 class="hello">
                Hello I am {name}
                and lastName {lastName}
            </h1>

        </div>
    )

    // return React.createElement
    //     ('div',
    //         { id: "hello", className: "hello2" },
    //         React.createElement('h1',
    //             { id: "hello3", className: "hello3" },
    //             ' Hello I am JSX in react'))
}

export default display