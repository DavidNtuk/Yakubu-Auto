import React from 'react'

const Button = (props) => {
    const { title, bgColor, onClickHandler, onClick, color,borderColor,width} = props
    return (
        <button
            style= {{
                padding:8,
                 border: borderColor || `1px solid ${ bgColor === `#ffff` ? bgColor: `#ffff` }`,
                fontSize: 12,
                color: color ,
                background:bgColor || '#F77D0A',
                marginLeft:5,
                // borderRadius:5,
                // fontWeight:'bold',
                width:100,
            }}
            onClick={onClick || onClickHandler}
        >
           {title}
           {width}
         </button>
    )
}

export default Button