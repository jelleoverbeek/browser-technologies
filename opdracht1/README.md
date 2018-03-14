# Browser Technologies
//Robuuste, toegankelijke websites leren bouwen … 

# Opdracht 1 - Progressive Enhancement

## Opdracht 1.1 - Breek het Web

## Javascript
###Veel voorkomende problemen
- Modals werken niet
- Formulieren valideren niet
- Dropdown menu’s werken niet
- Collapse functionaliteit werkt niet
- Preloaders blijven voor altijd laden
- Content die geladen wordt via JS laadt niet.

###Zoek uit hoe je dit kunt testen (hoe kun je een feature ‘uitzetten’)  
In de Chrome developer tools is het mogelijk om onder “: (icon met 3 puntjes)" > settings  > disable javascript” javascript uit te zetten.

###Vind een aantal sites waar dit ook problemen oplevert (uit je directe omgeving).
- Dribbble
- Stripe
- Booking.com 

###Beschrijf hoe je dit kan fiksen
**Modals werken niet**  
Standaard een link maken die linkt naar een pagina waarop de elementen uit de modal te zien zijn en dit gedrag aanpassen met javascript. Hierdoor wordt de gebruiker naar de pagina verwezen mocht de modal niet werken.

**Formulieren valideren niet**  
HTML regex validatie gebruiken om formulieren te valideren.

**Dropdown menu’s werken niet**  
Elementen alleen verbergen met javascript en niet met css waardoor ze wel gewoon zichtbaar zijn wanneer javascript niet werkt.

**Collapse functionaliteit werkt niet**  
Elementen alleen verbergen met javascript en niet met css waardoor ze wel gewoon zichtbaar zijn wanneer javascript niet werkt.

**Content die geladen wordt via JS laadt niet.**  
Geen JS gebruiken om content te parsen.

## Kleuren
###Veel voorkomende problemen**
- Ontwerpen verliezen hiërarchie of deze verandert qua hiërarchie.
- Wanneer er alleen kleur wordt gebruikt om iets duidelijk te maken kunnen sommige mensen dit niet zien. Denk hierbij bijvoorbeeld aan rode of groene kleuren om duidelijk te maken dat iets goed of fout is bij een quiz.
- Weinig contrast.
- Kleuren weergave van onze schermen zijn goed maar die van veel andere mensen niet. Hierdoor zijn lichtere tinten vaak niet (goed) te onderscheiden.
- Gradients werken niet in oude browsers.

###Zoek uit hoe je dit kunt testen (hoe kun je een feature ‘uitzetten’)  
Met de plugin spectrum kunnen alle vormen van kleurenblindheid en laag contrast getest worden.

###Vind een aantal sites waar dit ook problemen oplevert (uit je directe omgeving).
- Geen enkele gevonden

###Beschrijf hoe je dit kan fiksen
**Ontwerpen verliezen hiërarchie of deze verandert qua hiërarchie.**  
Tijdens het ontwerpen de kleuren testen op kleurenblindheid.

**Wanneer er alleen kleur wordt gebruikt om iets duidelijk te maken kunnen sommige mensen dit niet zien. Denk hierbij bijvoorbeeld aan rode of groene kleuren om duidelijk te maken dat iets goed of fout is bij een quiz.**  
Tijdens het ontwerpen de kleuren testen op kleurenblindheid.

**Weinig contrast.**  
Contrast check doen in grayscale mode en op verschillende schermen. Er zijn ook tools die hierbij kunnen helpen.

**Kleuren weergave van onze schermen zijn goed maar die van veel andere mensen niet. Hierdoor zijn lichtere tinten vaak niet (goed) te onderscheiden.**  
Contrast check doen in grayscale mode en op verschillende schermen. Er zijn ook tools die hierbij kunnen helpen.

**Gradients werken niet in oude browsers.**  
Afbeelding als fallback (background-repeat) en een solid kleur die de website nog steeds goed leesbaar houdt.


# Opdracht 1.2 - WAFS

App: https://jelleoverbeek.github.io/wafs/#now-playing

###Roadmap
**Afbeeldingen**  


**Custom fonts**  
**Javascript (volledig)**  
All content is currently fetched using JavaScript. 

**Kleur**
**Breedband internet**
**Cookies**
**localStorage**
**Muis/Trackpad**


Criteria
- Zet je code op Github
- Schrijf een Readme met een beschrijving van de problemen die je hebt gevonden, hoe je die hebt opgelost, of hoe je dit zou oplossen (met todo’s) als je genoeg tijd en budget zou hebben 

 