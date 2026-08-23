import { HardSkills } from "./typeSkills/HardSkills"
import { SoftSkills } from "./typeSkills/SoftSkills"


export function Skills(){

    return(
    <>
        <h4>Hard Skills: </h4>
        <HardSkills/>
        <h4>Soft SKills: </h4>
        <SoftSkills/>
   </>
    )
}