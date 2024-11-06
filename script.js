let age = 100;
let ticketPrice;

if (age <= 0 || age > 120) {
    ticketPrice = "შეუსაბამო ასაკი";
    console.log(`${ticketPrice}`);
} else if (age <= 12) {
    ticketPrice = 5;
    console.log(`თქვენთვის ბილეთის ფასია ${ticketPrice}$`);
} else if (age > 12 && age <= 17) {
    ticketPrice = 10;
    console.log(`თქვენთვის ბილეთის ფასია ${ticketPrice}$`);
} else if (age >= 18 && age <= 64) {
    ticketPrice = 15;
    console.log(`თქვენთვის ბილეთის ფასია ${ticketPrice}$`);
} else if (age >= 65) {
    ticketPrice = 8;
    console.log(`თქვენთვის ბილეთის ფასია ${ticketPrice}$`);

}

