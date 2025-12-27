let footfalls = 0;
let energy = 0;
let co2 = 0;

let graphData = [];
let labels = [];

// Update UI Function
function updateUI(){
    document.getElementById("footCount").innerHTML=footfalls;
    document.getElementById("energyCount").innerHTML=energy.toFixed(3) + " Wh";
    document.getElementById("co2Saved").innerHTML=co2.toFixed(3) + " g";
}

// Chart Setup
const ctx = document.getElementById('energyChart');
const chart = new Chart(ctx,{
    type:"line",
    data:{
        labels:labels,
        datasets:[{
            label:"Energy (Wh)",
            borderColor:"#7CFF5A",
            data:graphData
        }]
    },
    options:{
        scales:{
            y:{ticks:{color:"white"}},
            x:{ticks:{color:"white"}}
        },
        plugins:{legend:{labels:{color:"white"}}}
    }
});

// On Foot Press
document.getElementById("footBtn").addEventListener("click", ()=>{
    footfalls++;
    energy += 0.005;  // energy per step (editable)
    co2 += energy*0.00084;

    labels.push(footfalls+"th step");
    graphData.push(energy);

    chart.update();
    updateUI();
});

updateUI();

