Programmeringsprojekt

Introduktion
CPH Jetskis er en udlejningsservice, der gør det muligt for privatpersoner at udleje
vandscootere i København. Kunder kan vælge hvilken vandscooter de ønsker at leje, og
hvornår udlejningen skal tage sted. Hvis vandscooteren er ledig, kan kunden reservere den i
den ønskede tidsperiode. Hvis kunden ikke ønsker deres reserverede tid alligevel, er det muligt
at aflyse tiden og herefter booke en ny.
Hvis vandscooteren har brug for at blive repareret, kan vandscooteren sættes til vedligeholdelse
i systemet. Dette vil sige, at vandscooteren ikke vil kunne blive udlejet i en given periode. Efter
perioden er overstået, og vandscooteren igen kan anvendes, kan en administrator igen sætte
vandscooteren til at være aktiv og mulig at leje.


Kravspecifikation for kunde
1. Login
  a. Kunde skal kunne logge ind med sin e-mail og password → Forside
  b. Ved forkert kombination af telefonnummer og password skal der komme en fejlbesked, hvorefter kunden vil blive bedt om at signe up
2. Sign-up side
  a. Kunde skal kunne indtaste følgende informationer:
  i. Navn
  ii. Email
  iii. Addresse
  iv. Telefonnummer
  v. Vælge password
3. Forside:
  a. Kunde skal kunne bestille en ny ordre ved at gå til ny bestilling → Ny bestiling
  b. Kunde skal kunne se tidligere bestillinger ved at gå til sin profil → Profil
  c. Kunde skal på forsiden kunne læse om konceptet samt se virksomhedens kontaktoplysninger
4. Ny bestilling
  a. Kunde skal kunne vælge hvor mange vandscootere der skal lejes
  b. Kunde skal kunne vælge tidspunkt for leje
  c. Kunde skal kunne vælge tidspunkt for afslutning af leje
  d. Kunde skal kunne vælge hvilken vandscooter de vil leje
  e. Kunde skal kunne se en pris for lejen efter valg af tid og vandscooter
  f. Når kunden har godkendt pris, tid og vandscooter vil de blive ført til ordrebekræftelsen
5. Profil
  a. Kunde skal kunne se tidspunkt for tidligere bestillinger
  b. Kunde skal kunne aflyse sin bestilling
  c. Kunde skal kunne ændre sine oplysninger
  d. Kunde skal kunne ændre sit password
  e. Kunde skal kunne logge ud
6. Ordrebekræftelse
  a. Kunde skal kunne se en bekræftelse på vandscooter model, tidspunkt og pris
  b. Bekræftelsen skal indeholder et ordreID
  c. Kunde skal kunne klikke tilbage til bestillingsside





Kravspecifikation for administrator
1. Login
  a. Admin skal kunne logge ind og blive stillet videre til administrationsiden → Administrationsside
  b. Hvis password og ID er forkert kommer der en fejlmelding, og det er muligt at prøve igen
  2. Administrations forside
  a. Admin skal kunne tilgå både bestillingsadministration og lagerside
  b. Admin skal kunne logge ud
3. Bestillingsadministration
  a. Admin skal kunne fjerne ordre
  b. Admin skal kunne tilføje en ordre
  c. Admin skal kunne ændre tidspunkt for udleje
4. Lagerside
  a. Admin skal kunne ændre lagerstatus på de scootere der skal ændres til ude af drift
  b. Admin skal kunne ændre lagerstatus på de scootere der er repareret og skal tilbage i brug
  
  
Klassediagram










![alt text](https://github.com/Mikkel0608/CPH-Jetskis/blob/master/CPHJetskis.drawio-4.png)


