---
title: "Fondamenti di Valutazione: il DCF nella Pratica"
pubDate: 2026-06-20
description: "Una guida pratica alla modellazione dei flussi di cassa scontati, dalla proiezione del free cash flow al calcolo del valore terminale."
coverImage: "../second-post/hero.jpg"
coverAlt: "Foglio di calcolo con un modello DCF"
author: "Bob Ferretti"
---

L'analisi dei flussi di cassa scontati (DCF) resta il metodo di riferimento per stimare il valore intrinseco di un'azienda. Nonostante la sua sensibilità alle assunzioni, nessun altro metodo costringe l'analista a rendere così esplicita ogni ipotesi di crescita, margine e reinvestimento.

## Costruire il Modello

Un modello DCF ha tre blocchi fondamentali:

1. **Proiezione del free cash flow** — previsioni esplicite per 5–10 anni
2. **Valore terminale** — Gordon Growth Model o multiplo di uscita
3. **Tasso di sconto (WACC)** — costo medio ponderato del debito e dell'equity

### Free Cash Flow

Si parte dall'EBIT, si applica l'effetto fiscale, poi si aggiungono le voci non monetarie e si sottraggono le variazioni del capitale circolante e i capex:

```
FCF = EBIT × (1 − t) + D&A − ΔNWC − Capex
```

### Valore Terminale

Usando il Gordon Growth Model:

```
TV = FCF_n × (1 + g) / (WACC − g)
```

Si usa un tasso di crescita di lungo periodo vicino al PIL nominale — tipicamente il 2–3% per le aziende svizzere.

## Errori Comuni

- **Ancorare il WACC ai tassi correnti** — modellare un intervallo, non una stima puntuale
- **Crescita terminale troppo ottimistica** — g > 3% implica che l'azienda superi per sempre la crescita dell'economia
- **Ignorare il peso dello sconto sul valore terminale** — il TV può rappresentare il 70–80% del valore; piccole variazioni lo dominano

![Tabella di sensitività del WACC](../second-post/detail-1.jpg "Analisi di sensitività: valore dell'equity rispetto a WACC e crescita terminale")

La tabella di sensitività sopra mostra come una variazione di 50 punti base nel WACC — del tutto plausibile data l'incertezza nella stima del beta e nel premio per il rischio azionario — sposti il valore implicito dell'equity di circa il 12–18%. Modella il tuo tasso di sconto come un intervallo, non come un valore puntuale.
