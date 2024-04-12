export default function ConditionalComp() {
  const display=false;
  if(display){
    return <>I got display {display}</>;
  }else{
    return <>I got display {display</>;
  }
  
}
