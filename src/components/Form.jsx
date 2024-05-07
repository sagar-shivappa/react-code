import { useState } from "react"

export default function Form(){
    const [form, setForm]= useState({firstName:"",lastName:""});
    
    function submitForm(e){
        
        e.preventDefault()
    }
    return <>
        <form>
            <input placeholder="Enter First Name"type="text" onChange={(e)=>setForm({...form,firstName:e.target.value})} value={form.firstName} />
            <input placeholder="Enter Last Name"type="text" onChange={(e)=>setForm({...form,lastName:e.target.value})} value={form.lastName} />
            <button type="submit" onClick={(e)=>{submitForm(e)}}>Submit</button>
        </form>
    </>
}