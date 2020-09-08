///////////////////////////////////////////////////////////////
// Editor Improvements
///////////////////////////////////////////////////////////////

// Convert to Optional Chaining
function tryCallF(a: any) {
    return a && a.b.c && a.b.c.d.e.f()
}

// /** @deprecated */ Support
const x = {
    /** @deprecated */
    foo() {

    } 
}

// Partial Semantic Mode at Startup
/*
    - otevření velmi velkého projektu brzdí jeho načtení v editoru => není ho možné plnohodnotně používat (Go To Definition, Go To References, ...)
    - je potřeba resolvovat závislosti a závislosti závislostí a atd.
    - ŘEŠENÍ: resolvovat jen závislosti (a další závislosti...) jen otevřených souborů a poté načíst zbytek projektu
    - zatím jen pro Visual Code
*/

// Smarter Auto-Imports
/*
    - hlášeny spousty špatných zkušeností s auto importem knihoven, co jsou psané v TS
    - Tooling editoru prochází nově navíc moduly uvedené v dependencies (i peerdependencies)
    - zatím jen pro Visual Code
    - může zpomalovat vývoj aplikace (čekání na resolve auto importu) => lze zakázat v natavení Visual Code
*/