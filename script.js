let footfalls = 200;
let energy = 3.6;
let co2 = energy * 0.84;

document.getElementById("footCount").innerHTML = footfalls;
document.getElementById("energyCount").innerHTML = energy + " Wh";
document.getElementById("co2Saved").innerHTML = co2.toFixed(2) + " g";

new Chart(document.getElementById("energyChart"), {
    type: 'line',
    data: {
        labels: ["10AM","11AM","12PM","1PM","2PM","3PM"],
        datasets: [{
            label: "Energy (Wh)",
            data: [0.5,1.1,1.8,2.4,3.1,3.6]
        }]
    }
});
