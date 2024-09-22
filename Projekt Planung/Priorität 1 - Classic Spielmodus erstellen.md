## 🚨 Priorität 1 - **Classic Spielmodus erstellen**  
> [!IMPORTANT]
> - [ ] Abgeschlossen
> - [x] in Bearbeitung

   
### Arbeitspaketbeschreibung:
Dieses Arbeitspaket umfasst die technische Umsetzung des "Classic Puzzle"-Spielmodus. Es zielt darauf ab, die Spiellogik zu definieren, in Teilaufgaben zu zerlegen und eine Lösung für die Logik des Spiels zu entwickeln, die später in die Benutzeroberfläche integriert wird.

<details>

### Beschreibung:
Der Classic Puzzle Spielmodus soll ein Bild in ein 4x4-Gitter zerteilen und die Teile zufällig anordnen. Der Spieler muss zwei Teile anklicken, um sie zu vertauschen, bis das ursprüngliche Bild korrekt zusammengesetzt ist.

### Verantwortliche/r:
- Felipe
- Jano
- Caner

### Ziel / Ergebnisse:
- [x] Spiellogik so entwickeln, dass sie unabhängig von der Benutzeroberfläche getestet und später in **HTML** eingebettet werden kann.
- [ ] funktionierende Logik für die Zerteilung und Zufällige Anordnung eines Bildes
- [ ] Spiellogik sollte modular und erweiterbar für zukünftige Features sein

### Ressourcen:
- Entwicklungsumgebung (VS Code, GitHub Repository)
- Technologien: JavaScript oder Java (nach Rechercheergebnis)
- Zeitaufwand: ca. 6 Stunden (2 Stunden Recherche, 4 Stunden Implementierung der Logik)

### Abhängigkeiten:
- Entscheidung, welche Technologie (`Java` oder `JavaScript`) für die Umsetzung der Spiellogik verwendet wird.
- Vorhandene Bilddateien für den Puzzlemodus

### Risiken / Herausforderungen:
- Kann die Spiellogik bereits entworfen werden, bevor die Benutzeroberfläche feststeht?
- Technische Machbarkeit der Logik-Umsetzung in JavaScript oder Java, bevor HTML eingebunden wird
- Unklarheiten bei der Implementierung der Zerteilung des Bildes und der zufälligen Anordnung


### Dokumentation:
- [ ]  Dokumentation zur technischen Umsetzung der Spiellogik
- [ ] Rechercheergebnisse zu den Technologien
- [ ] Code-Dokumentation (Kommentare im Code und README im Repository)



### Zeitrahmen:
- **Startdatum:** 20. September 2024
- **Enddatum:** 25. September 2024
- **Status:** In Bearbeitung

</details>

---

### Aktueller Stand: 

<details>
   
<summary>Wichtige CSS-Stile</summary>
   <br>
   
Beispiel zu **CSS-Style** um das Design für unsere Anwendung zu verbessern:
   
```css
#game-info {
    text-align: center;
    margin-bottom: 20px;
}

#container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
}

canvas {
    border: 1px solid #000;
}
```

Diese Stile sorgen dafür, dass die Spielinformationen zentriert angezeigt werden und der Container die enthaltenen Elemente ansprechend anordnet. Das Canvas-Element hat zudem eine klare Umrandung, die es hervorhebt.

[Link zum CSS-Code](https://github.com/Gbitter412/PM_Frauen_historisch/blob/f06666ba35eba3bdd1c7993fc1d5cf49780b6354/site/css/styles.css)


</details>
