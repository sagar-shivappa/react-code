import {  useNavigate } from "react-router-dom";

export default function OrderSummary() {
const navigate= useNavigate()
  return <>Order is Confirmed
   <button className="btn btn-info" onClick={()=>navigate(-1)}>Back</button>
  </>;
}
