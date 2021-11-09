import React, { useEffect, useState } from 'react'

const Main:React.FC = () => {
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [like, setLike] = useState(0);
    useEffect(()=>{
        if (localStorage.getItem('stat') === (0).toString()){
            setLike(0)
        }
        else{
            setLike(1)
        }
    },[])
    const liked =() =>{
        if (like === 0){
            setLike(1)
            localStorage.setItem('stat',(1).toString())
        }
        else{
            setLike(0)
            localStorage.setItem('stat',(0).toString())
        }
    }
    const computeBmi=()=>{
        if (isNaN(weight!)|| isNaN(height!)){
            alert("Please enter the required values")
        }
        else{
            const result = document.getElementById('result');
            const complement = document.getElementById('complement');
            const output = (weight!/(((height!)**2)/(100**2))).toFixed(2);
            result!.innerHTML = "Your BMI : "+ output.toString();

            if (parseFloat(output) > 25.0){
                complement!.innerHTML = "This is considered overweight";
            }
            else if (parseFloat(output) > 18.5  && parseFloat(output) < 24.9){
                complement!.innerHTML = "This is considered healthy";
            }
            else{
                complement!.innerHTML = "This is considered underweight";
            }
        }
    }
    return (
        <div className="main-page-outer">
                <h3 style={{"textAlign":"center"}}>BMI CALCULATOR <br /><span><small>Made by Pragya Mukherjee</small></span></h3>
                <label htmlFor="weight">Weight (in kg) </label>
                <input value={weight} onChange={(e:any)=>{setWeight(e.target.value)}} type="text" name="weight" id="weight" placeholder="Enter your weight"/>
                <br />
                <label htmlFor="height">Height (in cm) </label>
                <input value={height} onChange={(e:any)=>{setHeight(e.target.value)}} type="text" name="height" id="height" placeholder="Enter your height"/>
                <button onClick={computeBmi} className="compute-btn">Compute BMI</button>

                <div id="result"></div>
                <div id="complement">Your report will be generated here : </div>

                <div className="like">
                    <div>
                    <span>{like===1?"You liked this":"Please Like this site if it was helpful"} </span><i onClick = {liked} style={{"color":like===1?"rgb(245, 40, 22)":"white","cursor":"pointer"}} className="fa fa-thumbs-up"></i>
                    </div>

                </div>
        </div>
    )
}

export default Main
