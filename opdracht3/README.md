Browser Technologies - Opdracht 3

### Timeline  
Tijdlijn voor mijn portfolio website waarin de gebruiker mijn ervaring en scholing kan zien.

[Timeline demo](https://jelleoverbeek.github.io/browser-technologies/opdracht3/timeline/)  

![Demo](https://d.pr/i/ubW7bX+ "Demo")

**Geteste en werkende browsers**
- Chrome ✅
- Firefox ✅ 
- Edge ✅
- Safari ✅
- IE 11 ✅
- IE 10 ❌
- IE 9 ✅
- IE 8 ✅



## Uitbreiden

De tijdlijn kan uitgebreid worden door de volgende code toe te voegen:

```html
<article class="timeline-item timeline-item--education"
         data-year-start="2011"
         data-year-end="2018"
         data-overlap-start="2014" 
         data-overlap-end="2015">
    <div class="timeline-item__icon">
        <img src="image.png" srcset="image.png 1x, image@2x.png 2x" alt="">
    </div>
    <p class="timeline-item__meta">2011 - 2015</p>
    <p>Study Media Design</p>
</article>
```

De jaren lopen van hoog naar laag. Hierdoor lijkt het raar dat het `data-year-start="2011"` de verticale eindpositie bepaald.

### Attributen

- **Start item**
  `data-year-start="START_YEAR"`
   Voeg hier het startjaar toe. Hier zal het item stoppen met scrollen en blijven hangen.
- **Einde item**
  `data-year-end="END_YEAR"` 
  Voeg hier het eindjaar toe. Hier zal het item gepositioneerd zijn voordat er gescrollt wordt.
- **Overlap start - optioneel **
  `data-year-overlap-start="START_YEAR"` 
  Vul hier in wanneer het item een ander item overlapt.
- **Overlap eind - Optioneel **
  `data-year-overlap-end="END_YEAR"` 
  Voeg hier het startjaar toe. 



## Accessibility

Even without any CSS or JavaScript the timeline works very well. There is a fallback to the `display: block;` technique instead of `display: flex;`. Doing this made the timeline work very well on all devices.



**Chrome accessibility audit**

![Accessibility audit](https://d.pr/i/FNHwZe+ "Accessibility audit")



## Device lab tests

**Geteste en werkende apparaten**

- Surface (Edge) ✅
- Kindle ✅
- Nokia ✅
- Samsung Phone ✅
- Chinese Firefox ✅
- Chinese Android ✅

![Device lab tests](https://d.pr/i/Eho9sd+ "Device lab tests")