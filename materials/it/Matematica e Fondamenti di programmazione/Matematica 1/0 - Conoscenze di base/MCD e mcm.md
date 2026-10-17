# MCD e mcm

## Cos'è un divisore?

Un numero **d** è divisore di **n** se divide **n** senza lasciare resto.

Esempi:

- $10\div{2}=5$, infatti 2 è divisore di 10
- $10\div{5}=2$, infatti 5 è divisore di 10
- ${10}\div{4}=2.5$, infatti 4 **non** è divisore di 10

---

## Cos'è un multiplo?

Un numero è multiplo di un altro se si ottiene moltiplicandolo per un intero.

Esempi:

- Multipli di 6: 6, 12, 18, 24, ...
- Multipli di 8: 8, 16, 24, 32, ...

---
## Massimo Comune Divisore (MCD)

È **il più grande numero che divide tutti i numeri considerati.**

Esempio:

Trova MCD(12, 18):

Divisori di 12: 1, 2, 3, 4, 6, 12

Divisori di 18: 1, 2, 3, 6, 9, 18

Divisore comune maggiore (**MCD**) = 6

---
## minimo comune multiplo (mcm)

È **il più piccolo numero che è multiplo di tutti i numeri dati.**

Esempio

Trova mcm(6, 8):

Multipli di 6: 6, 12, 18, 24, 30, 36

Multipli di 8: 8, 16, 24, 32, 40

moltiplicatore comune minimo (**mcm**) = 24

---
## Metodo della scomposizione in fattori primi

Questo metodo serve per calcolare più velocemente MCD e mcm

Esempio:

Calcoliamo MCD e mcm di questi numeri: 60 e 90

Scomponiamo:
- $60 = 2^2\cdot{3}\cdot{5}$
- $90 = 2\cdot{3^2}\cdot{5}$
### Regola per l'MCD

Per utilizzare questo metodo per l'MCD dobbiamo prendere:
- solo i fattori comuni
- con l'esponente minore.

Quindi nel nostro esempio sono: $2^1, 3^1, 5^1$; andiamo ora a moltiplicarli: $2\cdot{3}\cdot{5}=30$, ottenendo che l'MCD tra 60 e 90 è 30

### Regola per l'mcm

Per utilizzare questo metodo per l'mcm dobbiamo prendere:
- tutti i fattori presenti
- con l'esponente maggiore.

Quindi nel nostro esempio sono: $2^2, 3^2, 5^1$; andiamo ora a moltiplicarli: $2^2\cdot{3^2}\cdot{5}=180$, ottenendo che l'mcm tra 60 e 90 è 180

---
## Relazione tra MCD e mcm

Esiste una proprietà bellissima e utilissima che lega il Massimo Comune Divisore e il Minimo Comune Multiplo di due numeri positivi $a$ e $b$: **il loro prodotto è sempre uguale al prodotto dei due numeri stessi.**

$$\text{MCD}(a,b)\cdot{\text{mcm}(a,b)}=a\cdot{b}$$

> 💡**A cosa serve?** Questa formula è una vera scorciatoia. Se conosci già l'MCD di due numeri, puoi calcolare il mcm con una semplice divisione, senza dover fare tutta la scomposizione:

$$\text{mcm}(a,b) = \frac{a \cdot b}{\text{MCD}(a,b)}$$

Esempio, proviamo con i numeri 12 e 18:

- MCD(12, 18) = 6
- mcm(12, 18) = 36

$$\text{infatti: }6\cdot{36}=12\cdot{18}=216$$
Se moltiplichiamo $\text{MCD} \cdot \text{mcm}$, stiamo praticamente rimettendo insieme tutti gli esponenti originali di $a$ e $b$:

$$(\underbrace{2^1\cdot{3^1}}_{\text{MCD}})\cdot{(\underbrace{2^2\cdot{3^2}}_{\text{mcm}})}=(2^1\cdot{2^2})\cdot{(3^1\cdot{3^2})}=12\cdot{18}$$

In pratica, l'MCD e il mcm si "spartiscono" i fattori primi dei due numeri: l'MCD prende il minimo e il mcm prende il massimo. Moltiplicandoli, ritrovi esattamente i due numeri di partenza!

>⚠️ **Nota importante per il futuro:** Questa regola d'oro funziona **solo per due numeri**. Se hai tre numeri ($a$, $b$ e $c$), la formula $\text{MCD} \cdot \text{mcm} = a \cdot b \cdot c$ non è più valida.

---

## Trucchi utili

> Queste sono da sapere a memoria

1. Se due numeri sono primi tra loro, allora l'MCD sarà uguale a 1, perchè non hanno divisori comuni maggiori di 1

	Esempio: 8 e 15; MCD = 1

2. Se un numero divide l'altro, allora il numero più piccolo sarà l'MCD, mentre il più grande sarà l'mcm

	Esempio: 6 e 24; MCD = 6, mcm = 24

3. Due numeri consecutivi hanno sempre l'MCD uguale a 1

	Esempio: 35 e 36; MCD = 1

---
## Esercizi

### Guidati

#### Esercizio 1

Calcola MCD e mcm tra 24 e 54.

**Soluzione**:

- $24=2^3\cdot{3}$
- $54=2\cdot{3^3}$

$\text{MCD}=2\cdot{3}=6$
$\text{mcm}=2^3\cdot{3^3}=216$
#### Esercizio 2

Calcola MCD e mcm tra 45 e 75.

**Soluzione:**
- $45=3^2\cdot{5}$
- $75=3\cdot{5^2}$

$\text{MCD}=3\cdot{5}=15$
$\text{mcm}=3^2\cdot{5^2}=225$

### Da risolvere

1. Calcola MCD e mcm tra 18 e 24.
2. Calcola MCD e mcm tra 16 e 40.
3. Calcola MCD e mcm tra 21 e 28.
4. Trova il mcm di 5 e 12.
5. Calcola MCD e mcm tra 72 e 96.
6. Calcola MCD e mcm tra 36, 48 e 60.
7. Due campane suonano ogni 18 e 30 minuti. Dopo quanto tempo suoneranno insieme?
8. Verifica la relazione $\text{MCD}\cdot\text{mcm}=a\cdot{b}$ per i numeri 20 e 30.
