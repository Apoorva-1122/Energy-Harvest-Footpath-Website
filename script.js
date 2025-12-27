let footfalls = 0;
let energy = 0;
let co2 = 0;
let battery = 0;
let phone = 0;
let bulb = 0;

let labels = [];
let graphData = [];

function update(){
    document.getElementById("footCount").innerHTML=footfalls;
    document.getElementById("energyCount").innerHTML=energy.toFixed(3);
    document.getElementById("co2Saved").innerHTML=co2.toFixed(3)+" g";
    document.getElementById("batteryLevel").style.width=battery+"%";
    document.getElementById("phoneCount").innerHTML=phone.toFixed(1);
    document.getElementById("bulbTime").innerHTML=bulb.toFixed(1);
}

const stepSound=document.getElementById("stepSound");

document.getElementById("footBtn").addEventListener("click",()=>{
    stepSound.play();
    footfalls++;
    energy+=0.005;           // energy per press
    co2+=energy*0.00084;
    battery=Math.min(battery+2,100);

    phone=Math.min(phone+0.4,100); // ~250 steps = full mobile charge
    bulb+=0.3;                     // minutes of 5W bulb

    labels.push("Step "+footfalls);
    graphData.push(energy);
    chart.update();

    update();
});

const ctx=document.getElementById("energyChart");
const chart=new Chart(ctx,{
    type:"line",
    data:{labels:labels,datasets:[{
        label:"Energy (Wh)",
        borderColor:"#7CFF5A",
        data:graphData
    }]},
    options:{
        plugins:{legend:{labels:{color:"white"}}},
        scales:{
            x:{ticks:{color:"white"}},
            y:{ticks:{color:"white"}}
        }
    }
});

update();


