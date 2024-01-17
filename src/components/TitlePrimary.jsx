import React from 'react'

const TitlePrimary = (props) => {
    return (
        <>
            <div className="my-5 text-center text-[20px] text-gray-800 font_cabin font-bold">
                {props.text}
            </div>
        </>
    )
}

export default TitlePrimary