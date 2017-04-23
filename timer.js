//tworzę funkcję służącą do aktualizowania zegara
        function timing()
        {
// inicjuję zmienną i przypisuję do niej datę pobraną z systemu
        var today = new Date();
// przypisuję do zmiennej tablicę z polskimi nazwami dni tygodnia
        var dayName = ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"];
//przypisuję do zmiennej nazwę dnia tygodnia na podstawie pobranego numeru dnia tygodnia
        var weekDay = dayName[today.getDay()];        
// pobieram numer dnia w miesiącu
        var day = today.getDate(); 
// przypisuję do zmiennej tablicę z polskimi nazwami miesięcy        
        var monthName = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"];
// przypisuję do zmiennej nazwę miesiąca na podstawie pobranego numeru miesiąca        
        var month = monthName[today.getMonth()];
// przypisuję do zmiennej numer roku        
        var year = today.getFullYear();
// przypisuję do zmiennych godzinę, minutę i sekundę oraz zero dla wartości mniejszych od 10
        var hour = today.getHours();
        if (hour < 10) hour = "0"+hour;
        var minute = today.getMinutes();
        if (minute < 10) minute = "0"+minute;
        var second = today.getSeconds(); 
        if (second < 10) second = "0"+second;
// wyświetlam zegar
          document.getElementById("zegar").innerHTML = 
          "Dzisiaj jest: "+weekDay+", "+day+" "+month+" "+year+" roku,  godzina: "+hour+":"+minute+":"+second;
// polecam wykonywanie funkcji co 1 sekundę
          setTimeout("timing()", 1000);          
        }