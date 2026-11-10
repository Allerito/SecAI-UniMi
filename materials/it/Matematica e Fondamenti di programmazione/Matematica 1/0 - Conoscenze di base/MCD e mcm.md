# MCD e mcm

## Divisori e multipli: cosa sono e perché servono

Quando lavoriamo con i numeri interi (o con i polinomi in algebra), due domande ricorrono continuamente: *"Come posso suddividere più quantità in parti uguali il più grandi possibile senza avanzare resto?"* (problema del **Massimo Comune Divisore**, fondamentale per ridurre una frazione ai minimi termini o raccogliere a fattor comune) e *"Qual è il più piccolo numero che contiene contemporaneamente più quantità come fattori?"* (problema del **minimo comune multiplo**, indispensabile per sommare o confrontare frazioni con denominatori diversi).

### Cos'è un divisore?

Dati due numeri naturali $n$ e $d$ (con $d \neq 0$), diciamo che **$d$ è un divisore di $n$** (oppure che $n$ è divisibile per $d$, scritto $d \mid n$) se la divisione intera $n \div d$ è esatta, cioè ha **resto uguale a zero**: esiste quindi un intero $q$ tale che $n = d \cdot q$.

Esempi:
- $10 \div 2 = 5$ (resto $0$), infatti $2$ è divisore di $10$;
- $10 \div 5 = 2$ (resto $0$), infatti $5$ è divisore di $10$;
- $10 \div 4 = 2{,}5$ (oppure quoziente $2$ con resto $2 \neq 0$), infatti $4$ **non** è divisore di $10$.

Ogni numero intero $n > 1$ ha almeno due divisori positivi: $1$ e se stesso ($n$). Se un numero $p > 1$ ha **solo** $1$ e $p$ come divisori positivi, si dice **numero primo** ($2, 3, 5, 7, 11, 13, 17, 19, \dots$).

### Cos'è un multiplo?

Un numero naturale $m$ è **multiplo** di un numero $a$ se si ottiene moltiplicando $a$ per un qualsiasi numero intero $k$ ($m = k \cdot a$). Mentre i divisori di un numero non nullo sono in numero finito, i multipli positivi di un numero $a > 0$ sono infiniti.

Esempi:
- Multipli positivi di $6$: $6, 12, 18, 24, 30, 36, \dots$
- Multipli positivi di $8$: $8, 16, 24, 32, 40, 48, \dots$

## Massimo Comune Divisore (MCD)

Il **Massimo Comune Divisore** di due o più numeri interi positivi, indicato con $\text{MCD}(a, b)$, è **il più grande tra tutti i loro divisori comuni**.

Esempio per elencazione: calcoliamo $\text{MCD}(12, 18)$:
- Divisori di $12$: $1, 2, 3, 4, 6, 12$;
- Divisori di $18$: $1, 2, 3, 6, 9, 18$;
- I divisori comuni sono $1, 2, 3, 6$; il maggiore tra essi è:

$$
\text{MCD}(12, 18) = 6.
$$

## Minimo comune multiplo (mcm)

Il **minimo comune multiplo** di due o più numeri interi positivi, indicato con $\text{mcm}(a, b)$, è **il più piccolo intero positivo che è multiplo di tutti i numeri dati**.

Esempio per elencazione: calcoliamo $\text{mcm}(6, 8)$:
- Multipli positivi di $6$: $6, 12, 18, \mathbf{24}, 30, 36, 42, \mathbf{48}, \dots$
- Multipli positivi di $8$: $8, 16, \mathbf{24}, 32, 40, \mathbf{48}, \dots$
- I multipli comuni sono $24, 48, 72, \dots$; il minimo comune multiplo è:

$$
\text{mcm}(6, 8) = 24.
$$

## Metodo della scomposizione in fattori primi

Per numeri grandi, elencare tutti i divisori o i multipli sarebbe troppo lento. Il **Teorema Fondamentale dell'Aritmetica** garantisce che ogni intero $n > 1$ si scompone in modo unico nel prodotto di potenze di numeri primi. Da questa scomposizione si ricavano immediatamente sia l'$\text{MCD}$ sia l'$\text{mcm}$.

Consideriamo ad esempio i numeri $60$ e $90$ e scomponiamoli in fattori primi:
- $60 = 2^2 \cdot 3^1 \cdot 5^1$;
- $90 = 2^1 \cdot 3^2 \cdot 5^1$.

### Regola per l'MCD

Per calcolare l'$\text{MCD}$ di due o più numeri scomposti in fattori primi si moltiplicano:
- **solo i fattori primi comuni**,
- presi una sola volta con l'**esponente minore**.

Nel nostro esempio i fattori comuni sono $2, 3, 5$ e gli esponenti minori sono $2^1, 3^1, 5^1$:

$$
\text{MCD}(60, 90) = 2^1 \cdot 3^1 \cdot 5^1 = 30.
$$

### Regola per l'mcm

Per calcolare l'$\text{mcm}$ di due o più numeri scomposti in fattori primi si moltiplicano:
- **tutti i fattori primi, comuni e non comuni**,
- presi una sola volta con l'**esponente maggiore**.

Nel nostro esempio i fattori con esponente massimo sono $2^2, 3^2, 5^1$:

$$
\text{mcm}(60, 90) = 2^2 \cdot 3^2 \cdot 5^1 = 4 \cdot 9 \cdot 5 = 180.
$$

## Algoritmo di Euclide delle divisioni successive

Quando i numeri sono molto grandi, scomporli in fattori primi può essere laborioso. L'**Algoritmo di Euclide** permette di calcolare $\text{MCD}(a, b)$ (con $a > b > 0$) eseguendo solo semplici divisioni intere con resto, senza alcuna fattorizzazione!

> [!important] Principio dell'Algoritmo di Euclide
> Se la divisione intera di $a$ per $b$ dà quoziente $q$ e resto $r$ (cioè $a = b \cdot q + r$ con $0 \le r < b$), allora i divisori comuni di $a$ e $b$ coincidono esattamente con i divisori comuni di $b$ e $r$:
>
> $$
> \text{MCD}(a, b) = \text{MCD}(b, r).
> $$
>
> Si ripete quindi la divisione sostituendo $(a, b)$ con $(b, r)$ finché non si ottiene un **resto nullo**: l'**ultimo resto diverso da zero** è il Massimo Comune Divisore cercato!

**Esempio passo-passo:** Calcoliamo $\text{MCD}(252, 105)$ con l'Algoritmo di Euclide:
1. Dividiamo $252$ per $105$: $\quad 252 = 105 \cdot 2 + \mathbf{42} \quad$ (resto $r_1 = 42 \neq 0$);
2. Dividiamo il vecchio divisore $105$ per il resto $42$: $\quad 105 = 42 \cdot 2 + \mathbf{21} \quad$ (resto $r_2 = 21 \neq 0$);
3. Dividiamo $42$ per il resto $21$: $\quad 42 = 21 \cdot 2 + \mathbf{0} \quad$ (resto $r_3 = 0$, l'algoritmo termina).

L'ultimo resto diverso da zero è $21$, quindi:

$$
\text{MCD}(252, 105) = 21.
$$

## Relazione tra MCD e mcm di due numeri

Esiste una proprietà fondamentale che lega il Massimo Comune Divisore e il minimo comune multiplo di **due** numeri positivi $a$ e $b$: **il prodotto tra il loro MCD e il loro mcm è sempre uguale al prodotto dei due numeri stessi**:

$$
\text{MCD}(a, b) \cdot \text{mcm}(a, b) = a \cdot b.
$$

> [!tip] A cosa serve questa formula?
> Se hai già calcolato $\text{MCD}(a, b)$ (ad esempio rapidamente con l'Algoritmo di Euclide), puoi trovare subito il minimo comune multiplo senza scomporre in fattori primi:
>
> $$
> \text{mcm}(a, b) = \frac{a \cdot b}{\text{MCD}(a, b)}.
> $$

Proviamo con $a = 12$ ($2^2 \cdot 3^1$) e $b = 18$ ($2^1 \cdot 3^2$):
- $\text{MCD}(12, 18) = 6$;
- $\text{mcm}(12, 18) = 36$;
- Infatti $6 \cdot 36 = 216$ e $12 \cdot 18 = 216$.

*Perché funziona?* Moltiplicando $\text{MCD}$ e $\text{mcm}$ rimettiamo insieme esattamente tutti i fattori primi originali di $a$ e $b$ (l'$\text{MCD}$ prende per ciascun primo l'esponente minimo, l'$\text{mcm}$ prende l'esponente massimo):

$$
(\underbrace{2^1 \cdot 3^1}_{\text{MCD}}) \cdot (\underbrace{2^2 \cdot 3^2}_{\text{mcm}}) = (2^1 \cdot 3^2) \cdot (2^2 \cdot 3^1) = 18 \cdot 12.
$$

> [!warning] Attenzione al caso di tre o più numeri
> La formula $\text{MCD} \cdot \text{mcm} = a \cdot b$ vale **solo per due numeri**. Con tre numeri $a, b, c$, in generale $\text{MCD}(a,b,c) \cdot \text{mcm}(a,b,c) \neq a \cdot b \cdot c$.

## Casi particolari e trucchi rapidi

1. **Numeri primi tra loro (coprimi)**: se due numeri non hanno alcun fattore primo in comune oltre a $1$, il loro $\text{MCD}$ è uguale a $1$ e il loro $\text{mcm}$ è semplicemente il loro prodotto $a \cdot b$.
   - *Esempio:* per $8$ ($2^3$) e $15$ ($3 \cdot 5$), si ha $\text{MCD}(8, 15) = 1$ e $\text{mcm}(8, 15) = 8 \cdot 15 = 120$.
2. **Un numero è multiplo dell'altro**: se $a$ divide $b$, allora il numero più piccolo ($a$) è l'$\text{MCD}$, mentre il numero più grande ($b$) è l'$\text{mcm}$.
   - *Esempio:* tra $6$ e $24$, poiché $24 = 6 \cdot 4$, si ha subito $\text{MCD}(6, 24) = 6$ e $\text{mcm}(6, 24) = 24$.
3. **Numeri consecutivi**: due numeri interi consecutivi $n$ e $n + 1$ sono **sempre primi tra loro**, quindi hanno sempre $\text{MCD}(n, n+1) = 1$ e $\text{mcm}(n, n+1) = n(n+1)$.
   - *Esempio:* tra $35$ e $36$, $\text{MCD}(35, 36) = 1$.

## MCD e mcm di monomi e polinomi

Le stesse identiche regole viste per i numeri interi si estendono alle espressioni algebriche (fondamentali per sommare frazioni algebriche e risolvere [[1.1.1 - Retta e parabola - Equazioni e disequazioni|equazioni e disequazioni fratte]]):

- **Per i monomi**: si calcola l'$\text{MCD}$ (o l'$\text{mcm}$) dei coefficienti numerici interi, e per la parte letterale si prendono le lettere comuni con esponente minore (per l'$\text{MCD}$) oppure tutte le lettere comuni e non comuni con esponente maggiore (per l'$\text{mcm}$).
  - *Esempio:* tra $6a^3b^2$ e $4a^2bc$, si ha $\text{MCD} = 2a^2b$ e $\text{mcm} = 12a^3b^2c$.
- **Per i polinomi**: prima si **scompone ciascun polinomio in fattori irriducibili** (tramite raccoglimento a fattor comune, prodotti notevoli o trinomio di secondo grado), e poi si applica la regola dei fattori comuni con esponente minore ($\text{MCD}$) o comuni e non comuni con esponente maggiore ($\text{mcm}$).
  - *Esempio:* dati $P_1(x) = x^2 - 4 = (x - 2)(x + 2)$ e $P_2(x) = x^2 - 4x + 4 = (x - 2)^2$:
    - $\text{MCD}(P_1, P_2) = x - 2$;
    - $\text{mcm}(P_1, P_2) = (x - 2)^2(x + 2)$.

## Esempi guidati

### Esempio 1: Calcolo di MCD e mcm tra 24 e 54

**Problema:** Calcolare $\text{MCD}(24, 54)$ e $\text{mcm}(24, 54)$.

**Svolgimento passo-passo:**
1. Scomponiamo entrambi i numeri in fattori primi:
   - $24 = 8 \cdot 3 = 2^3 \cdot 3^1$;
   - $54 = 2 \cdot 27 = 2^1 \cdot 3^3$.
2. Applichiamo la regola dell'$\text{MCD}$ (fattori comuni con esponente minore) e dell'$\text{mcm}$ (fattori comuni e non comuni con esponente maggiore):

$$
\text{MCD}(24, 54) = 2^1 \cdot 3^1 = 6, \qquad \text{mcm}(24, 54) = 2^3 \cdot 3^3 = 8 \cdot 27 = 216.
$$

### Esempio 2: Calcolo di MCD e mcm tra 45 e 75

**Problema:** Calcolare $\text{MCD}(45, 75)$ e $\text{mcm}(45, 75)$.

**Svolgimento passo-passo:**
1. Scomponiamo in fattori primi:
   - $45 = 9 \cdot 5 = 3^2 \cdot 5^1$;
   - $75 = 3 \cdot 25 = 3^1 \cdot 5^2$.
2. Calcoliamo $\text{MCD}$ e $\text{mcm}$:

$$
\text{MCD}(45, 75) = 3^1 \cdot 5^1 = 15, \qquad \text{mcm}(45, 75) = 3^2 \cdot 5^2 = 9 \cdot 25 = 225.
$$

## Errori frequenti

> [!CAUTION] Riepilogo degli errori da evitare assolutamente
> 1. **Scambiare le regole di MCD e mcm:**
>    - ❌ *Errato:* Prendere gli esponenti maggiori per il "Massimo" Comune Divisore.
>    - ✅ *Corretto:* Un **divisore** deve essere più piccolo o uguale ai numeri di partenza (quindi prende solo i fattori comuni con esponente **minimo**), mentre un **multiplo** deve essere più grande o uguale (quindi prende tutti i fattori con esponente **massimo**).
> 2. **Scomporre usando fattori non primi:**
>    - ❌ *Errato:* Scrivere $24 = 4 \cdot 6$ e confrontare i fattori $4$ e $6$.
>    - ✅ *Corretto:* La scomposizione deve arrivare fino ai **numeri primi** ($2, 3, 5, 7, \dots$): $24 = 2^3 \cdot 3$.
> 3. **Sommare o sottrarre polinomi senza prima fattorizzarli nel calcolo del mcm:**
>    - ❌ *Errato:* Pensare che $\text{mcm}(x^2 - 1, x + 1)$ sia $(x^2 - 1)(x + 1)$.
>    - ✅ *Corretto:* Poiché $x^2 - 1 = (x - 1)(x + 1)$ è già multiplo di $(x + 1)$, il minimo comune multiplo è semplicemente $x^2 - 1 = (x - 1)(x + 1)$.

## Esercizi di prova

1. **(Base)** Calcola $\text{MCD}$ e $\text{mcm}$ tra $18$ e $24$.
> [!tip]- Soluzione
> Scomponiamo in fattori primi:
> - $18 = 2 \cdot 3^2$;
> - $24 = 2^3 \cdot 3$.
>
> Prendendo i fattori comuni con esponente minore per l'$\text{MCD}$ e tutti i fattori con esponente maggiore per l'$\text{mcm}$:
>
> $$
> \text{MCD}(18, 24) = 2^1 \cdot 3^1 = 6, \qquad \text{mcm}(18, 24) = 2^3 \cdot 3^2 = 8 \cdot 9 = 72.
> $$

2. **(Base)** Calcola $\text{MCD}$ e $\text{mcm}$ tra $16$ e $40$.
> [!tip]- Soluzione
> Scomponiamo in fattori primi:
> - $16 = 2^4$;
> - $40 = 8 \cdot 5 = 2^3 \cdot 5$.
>
> Il solo fattore primo comune è $2$ (con esponente minimo $3$), mentre tutti i fattori con esponente massimo sono $2^4$ e $5^1$:
>
> $$
> \text{MCD}(16, 40) = 2^3 = 8, \qquad \text{mcm}(16, 40) = 2^4 \cdot 5 = 16 \cdot 5 = 80.
> $$

3. **(Base)** Calcola $\text{MCD}$ e $\text{mcm}$ tra $21$ e $28$.
> [!tip]- Soluzione
> Scomponiamo in fattori primi:
> - $21 = 3 \cdot 7$;
> - $28 = 2^2 \cdot 7$.
>
> Il solo fattore primo comune è $7$, quindi:
>
> $$
> \text{MCD}(21, 28) = 7, \qquad \text{mcm}(21, 28) = 2^2 \cdot 3 \cdot 7 = 4 \cdot 21 = 84.
> $$

4. **(Base)** Trova il $\text{mcm}$ di $5$ e $12$.
> [!tip]- Soluzione
> I numeri $5$ (primo) e $12 = 2^2 \cdot 3$ non hanno fattori primi in comune, quindi sono **primi tra loro** ($\text{MCD}(5, 12) = 1$). Il loro minimo comune multiplo è direttamente il loro prodotto:
>
> $$
> \text{mcm}(5, 12) = 5 \cdot 12 = 60.
> $$

5. **(Intermedio)** Calcola $\text{MCD}$ e $\text{mcm}$ tra $72$ e $96$ (verifica anche l'$\text{MCD}$ con l'Algoritmo di Euclide).
> [!tip]- Soluzione
> - **Con scomposizione in fattori primi:**
>   - $72 = 8 \cdot 9 = 2^3 \cdot 3^2$;
>   - $96 = 32 \cdot 3 = 2^5 \cdot 3^1$.
>
> $$
> \text{MCD}(72, 96) = 2^3 \cdot 3^1 = 8 \cdot 3 = 24, \qquad \text{mcm}(72, 96) = 2^5 \cdot 3^2 = 32 \cdot 9 = 288.
> $$
>
> - **Verifica con l'Algoritmo di Euclide:** $96 = 72 \cdot 1 + 24$, e poi $72 = 24 \cdot 3 + 0$. L'ultimo resto non nullo è $24$.

6. **(Intermedio)** Calcola $\text{MCD}$ e $\text{mcm}$ tra $36$, $48$ e $60$.
> [!tip]- Soluzione
> Scomponiamo i tre numeri in fattori primi:
> - $36 = 4 \cdot 9 = 2^2 \cdot 3^2$;
> - $48 = 16 \cdot 3 = 2^4 \cdot 3^1$;
> - $60 = 4 \cdot 3 \cdot 5 = 2^2 \cdot 3^1 \cdot 5^1$.
>
> I fattori comuni a **tutti e tre** i numeri sono $2$ e $3$, con esponenti minimi $2^2$ e $3^1$; i fattori comuni e non comuni con esponente massimo sono $2^4$, $3^2$ e $5^1$:
>
> $$
> \text{MCD}(36, 48, 60) = 2^2 \cdot 3^1 = 12, \qquad \text{mcm}(36, 48, 60) = 2^4 \cdot 3^2 \cdot 5 = 16 \cdot 9 \cdot 5 = 720.
> $$

7. **(Problema di modellizzazione)** Due campane suonano rispettivamente ogni $18$ e ogni $30$ minuti. Se suonano insieme in questo istante, dopo quanti minuti torneranno a suonare contemporaneamente per la prima volta?
> [!tip]- Soluzione
> La prima campana suona ai minuti multipli di $18$ ($18, 36, 54, 72, 90, \dots$), mentre la seconda suona ai minuti multipli di $30$ ($30, 60, 90, \dots$). L'istante in cui suonano di nuovo insieme per la prima volta è il **minimo comune multiplo** tra $18$ e $30$:
> - $18 = 2 \cdot 3^2$;
> - $30 = 2 \cdot 3 \cdot 5$.
>
> $$
> \text{mcm}(18, 30) = 2 \cdot 3^2 \cdot 5 = 90 \text{ minuti (cioè dopo } 1 \text{ ora e } 30 \text{ minuti)}.
> $$

8. **(Verifica teorica)** Verifica la relazione $\text{MCD}(a, b) \cdot \text{mcm}(a, b) = a \cdot b$ per i numeri $20$ e $30$.
> [!tip]- Soluzione
> Scomponiamo $20 = 2^2 \cdot 5$ e $30 = 2 \cdot 3 \cdot 5$:
> - $\text{MCD}(20, 30) = 2 \cdot 5 = 10$;
> - $\text{mcm}(20, 30) = 2^2 \cdot 3 \cdot 5 = 60$.
>
> Calcoliamo i due prodotti:
>
> $$
> \text{MCD}(20, 30) \cdot \text{mcm}(20, 30) = 10 \cdot 60 = 600, \qquad a \cdot b = 20 \cdot 30 = 600.
> $$
>
> I due risultati coincidono ($600 = 600$), verificando l'identità.

## Provenienza del materiale

Contenuto riorganizzato, uniformato e ampliato a partire dall'appunto preesistente `MCD e mcm.md` e dal [[Formulario di Matematica Base|Formulario del corso]].
