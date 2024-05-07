export default function ConditionalComp() {
  const display=true;
  if(display){
    return <>I got display {display}</>;
  }else{
    return <>I didnt get display {display}</>;
  }
}
