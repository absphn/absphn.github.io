import {useState} from "react";
import img from '../assets/images/output.jpg'

export default function Gallery(){



    return (

        <div class="grid grid-cols-3 md:grid-cols-3 gap-3 p-4  place-items-center">
            <img src={img}/>
            <img src={img}/>
            <img src={img}/>
            <img src={img}/>
            <img src={img}/>
            <img src={img}/>
            <img src={img}/>
            <img src={img}/>
            <img src={img}/>
        </div>


    )
}