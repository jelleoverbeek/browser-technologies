# Browser Technologies
//Robuuste, toegankelijke websites leren bouwen … 

# Opdracht 1 - Progressive Enhancement

## Opdracht 1.1 - Breek het Web

## Javascript
### Veel voorkomende problemen
- Modals werken niet
- Formulieren valideren niet
- Dropdown menu’s werken niet
- Collapse functionaliteit werkt niet
- Preloaders blijven voor altijd laden
- Content die geladen wordt via JS laadt niet.

### Zoek uit hoe je dit kunt testen (hoe kun je een feature ‘uitzetten’)  
In de Chrome developer tools is het mogelijk om onder “: (icon met 3 puntjes)" > settings  > disable javascript” javascript uit te zetten.

### Vind een aantal sites waar dit ook problemen oplevert (uit je directe omgeving).
- Dribbble
- Stripe
- Booking.com 

### Beschrijf hoe je dit kan fiksen
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
### Veel voorkomende problemen
- Ontwerpen verliezen hiërarchie of deze verandert qua hiërarchie.
- Wanneer er alleen kleur wordt gebruikt om iets duidelijk te maken kunnen sommige mensen dit niet zien. Denk hierbij bijvoorbeeld aan rode of groene kleuren om duidelijk te maken dat iets goed of fout is bij een quiz.
- Weinig contrast.
- Kleuren weergave van onze schermen zijn goed maar die van veel andere mensen niet. Hierdoor zijn lichtere tinten vaak niet (goed) te onderscheiden.
- Gradients werken niet in oude browsers.

### Zoek uit hoe je dit kunt testen (hoe kun je een feature ‘uitzetten’)  
Met de plugin spectrum kunnen alle vormen van kleurenblindheid en laag contrast getest worden.

### Vind een aantal sites waar dit ook problemen oplevert (uit je directe omgeving).
- Geen enkele gevonden

### Beschrijf hoe je dit kan fiksen
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

App: https://jelleoverbeek.github.io/browser-technologies/opdracht1/wafs

### Afbeeldingen
- The page "works" the same without images. However, the user needs to hover over the items to know which song is displayed.
- **Roadmap:** show the text by default. 

### Custom fonts
- A fallback font is set.

### Javascript (volledig)
- Currently the app won't work without JS.
- **Roadmap:** All content is currently fetched using JavaScript. So getting the data serverside would be nice. 

### Kleur
- According to the Spectrum plugin all the colors can be seen by colorblind people. The hierarchy stays the same.
 
### Breedband internet
- Added defer attributes to the scripts and moved them to the head. The app loading speed is quite fast but it depends on the Last.fm API.
- Font display is set to swap. This way the user doesn't have to wait for the custom fonts to load.

### Cookies
- The app does not use any cookies.

### localStorage
- The app uses localStorage to increase the loading speed of visited tracks. If localStorage is not available it will get the data from the Last.fm API every time. So it won't break.

### Muis/Trackpad
- To increase the usability for keyboard users I added some focus states.

### ScreenReader
- I tested it using the native Mac OS screenreader and it worked because I used semantic elements.
- Changed alt attributes to empty ones so the screenreader won't read the src attributes.  

### CSS not loading 
- Added JavaScript snippet that adds inline CSS instead of a class when the CSS didn't load.  
```
    const stylesheet = document.head.querySelector('link[href*="./assets/css/style.css"]'),
    
    // Check if stylesheet is loaded, if not add inline css instead of class
    if(!stylesheet) {
        document.querySelector(route).style.display = "flex"
    } else {
        document.querySelector(route).classList.remove("hidden")
    }
```

###Device lab
- LG Google android - Works!  ![](https://d.pr/i/2zskOn+ "")
- Samsung Google Android - JavaScript won't load, probably because of the ES6 modules  ![](https://d.pr/i/MAWQs5+ "")
- Kindle met browser - Doesn't even load the page ![](https://d.pr/i/wYWsuH+ "")
- Nokia Lumia met windows - JavaScript won't load, probably because of the ES6 modules  ![](https://d.pr/i/z7h8Tq+ "")
- Revelation met Firefox OS -  ![](https://d.pr/i/3llVfO+ "")
- Windows Surface - JavaScript wont' load  ![](https://d.pr/i/n1pb1G+ "")
- Microsoft Edge (latest) - Works! ![](https://d.pr/i/KLdQY7+ "")
- Mozilla Firefox - JavaScript won't load, probably because of the ES6 modules ![](https://d.pr/i/6E07hD+ "")