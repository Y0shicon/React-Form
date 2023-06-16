import { JSXElementConstructor } from "react";

export default function ClubDescription (props : {data : JSXElementConstructor}){
    return (
        <div className="club-description">
            {props.data}
        </div>
    )
}