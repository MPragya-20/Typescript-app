import React from 'react'


interface myprops{
    year:any
}
const Footer:React.FC <myprops>= ({year}) => {
    return (
        <div style={{textAlign:"center"}}>
            &copy;{year} Pragya Mukherjee. All rights reserved.
        </div>
    )
}

export default Footer
