document.getElementById("enterBtn").onclick = () => {
let vip = document.getElementById("vip").checked;
let age = document.getElementById("age").value;

if (vip){
    alert("Welcome in my best VIP customer :)") 
}
// Hur gör jag så det inte fortsätter till nedan boolean?

if (age >= 18){
    alert("Access Granted")}
else {alert("Access Denied")}

 };