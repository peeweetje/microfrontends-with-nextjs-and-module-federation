
import * as React from 'react'

// eslint-disable-next-line react/prop-types
const PrimaryNavigation = ({children}) => {
    return (
        <nav style={{
            background:'pink', 
            width:'100%', 
            height:'100px', 
            color:'white', 
            textAlign:'center', 
            display:'flex', 
            justifyContent:'center', 
            alignItems:"center",
            fontSize:"16px"}}> 
            {children}  
            </nav>
    )
}

export default PrimaryNavigation;