# A overview from the Lighthouse

---

## Its me

@fa[user-circle] Lucas Recknagel ![](./assets/image/me.jpg "Lucas Recknagel")
@fa[briefcase] Exellio GmbH

@fa[code] Fullstack JavaScript Developer - Backend focused

---

## Todays topic

* What is Lighthouse?
* How it works?
* Where I can use it and how?

Note:
Today we talk over this 3 key points..

---

## What is Lighthouse?

- Version 1.0 introduced 2016 by @paul_irish
    - Only bundle a bunch of tests for PWA´s
    - Released as a Chrome-Addon
    - More a raising test idea

---

## What is Lighthouse?

- Version 2.0 released in 2017
  - Check now:
      - [PWA-Checklist](https://developers.google.com/web/progressive-web-apps/checklist)
      - Web best practices
      - Performance metrics
      - Accessebility
- Merged into Chrome DevTools also in 2017
- Made available as nodejs module!

Note:
Interesting part => nodejs module
Extensibility, bind to own test runners (travis ...), etc

---

## What is Lighthouse?

![](assets/image/ddjs_lighthouse_audit.gif "Lighthouse Audit")

---

### Its a tool to gain insight on whats the user experience!

---

## Some words on performance metrics

![](assets/image/performance_audit.gif "Performance Audit")

Note:
Flow of a page load (from the users view)
Time To First Byte
First non blank paint
First contentful paint
First meaningful paint
Visually ready
Time To Interactive

---

## How it actually works

![](assets/image/architecture/architecture.png "Architecture")

Note:
Connected via ChromeDevTools Protocol
powerful API, you can mainly control anything with that
Gatheres: inject js on page .. evaluate smth

---

## These categories aren´t enough

![](assets/image/but-thats-not-enough.jpg "Not enough meme")

---

## Own Categories

- Write own, additional audits
- consisting of:
    - Gatherer
    - Audits
    - Config

---?code=src/js/performance-timing-gatherer.js&lang=js&title=Gatherer

@[1,3,20](Basic import with extended class.)
@[4-6](beforePass method.)
@[8-19](afterPass method.)
@[10](evaluateAsync call.)
@[1-21](whole Gatherer.)

Note:
afterPass => fire after page fully loaded
driver => connection between lighthouse and devtools protocol
evaluateAsync => run js in context of tab

---