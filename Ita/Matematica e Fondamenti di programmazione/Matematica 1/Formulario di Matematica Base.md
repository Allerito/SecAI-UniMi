Questo formulario è suddiviso nelle macro-aree del Syllabus ufficiale CISIA. Ciascuna sezione contiene formule sintetiche, spiegazioni teoriche e accorgimenti pratici ideali per affrontare la prova senza l'uso della calcolatrice.

## 1. Numeri e Calcolo

### 1.1 Proprietà delle Potenze e dei Radicali

Le potenze e i radicali sono fondamentali per semplificare rapidamente espressioni complesse.  
Per basi reali positive $a, b > 0$ e per esponenti qualsiasi $m, n \in \mathbb{R}$:

- **Prodotto di potenze con stessa base:** $a^m \cdot a^n = a^{m+n}$
- **Quoziente di potenze con stessa base:** $\frac{a^m}{a^n} = a^{m-n}$
- **Potenza di potenza:** $(a^m)^n = a^{m \cdot n}$
- **Prodotto di potenze con stesso esponente:** $a^n \cdot b^n = (a \cdot b)^n$
- **Quoziente di potenze con stesso esponente:** $\frac{a^n}{b^n} = \left(\frac{a}{b}\right)^n$
- **Esponente negativo:** $a^{-n} = \frac{1}{a^n}$
- **Esponente frazionario (definizione di radice):** $a^{\frac{m}{n}} = \sqrt[n]{a^m}$
- **Radice di radice:** $\sqrt[m]{\sqrt[n]{a}} = \sqrt[m \cdot n]{a}$
- **Trasporto sotto radice (**$a \geq 0$**):** $a \cdot \sqrt[n]{b} = \sqrt[n]{a^n \cdot b}$

### 1.2 Divisibilità, MCD e mcm

- **Divisione con resto (Teorema di Euclide):** Dati due interi $a$ (dividendo) e $b$ (divisore, con $b \neq 0$), esistono unici due interi $q$ (quoziente) e $r$ (resto) tali che: $a = b \cdot q + r \quad \text{con } 0 \leq r < |b|$
- **Massimo Comun Divisore (MCD):** Si scompongono i numeri in fattori primi e si prendono i _soli fattori comuni, con il minimo esponente_.
- **minimo comune multiplo (mcm):** Si scompongono i numeri in fattori primi e si prendono _tutti i fattori comuni e non comuni, presi una sola volta con il massimo esponente_.

### 1.3 Frazioni, Percentuali e Proporzioni

- **Proprietà fondamentale delle proporzioni:** $a : b = c : d \implies a \cdot d = b \cdot c$
- **Percentuale come frazione:** $x\% \text{ di } N = \frac{x}{100} \cdot N$
- **Variazione percentuale (Tasso di variazione):** Se una grandezza passa da un valore iniziale $V_i$ a un valore finale $V_f$: $\Delta\% = \frac{V_f - V_i}{V_i} \cdot 100$
    - Se $\Delta\% > 0$ si ha un incremento percentuale.
    - Se $\Delta\% < 0$ si ha un decremento percentuale.

## 2. Algebra e Scomposizioni

### 2.1 Prodotti Notevoli

I prodotti notevoli permettono di sviluppare e fattorizzare espressioni letterali all'istante (come richiesto, ad esempio, nei problemi di geometria modellizzata del TOLC-S).

- **Quadrato di un binomio:** $(a \pm b)^2 = a^2 \pm 2ab + b^2$
- **Differenza di quadrati (Somma per differenza):** $(a - b)(a + b) = a^2 - b^2$
- **Quadrato di un trinomio:** $(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2ac + 2bc$
- **Cubo di un binomio:** $(a \pm b)^3 = a^3 \pm 3a^2b + 3ab^2 \pm b^3$
- **Somma di cubi:** $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$
- **Differenza di cubi:** $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$

### 2.2 Equazioni e Disequazioni di Secondo Grado

Un'equazione di secondo grado si presenta nella forma canonica: $ax^2 + bx + c = 0 \quad (\text{con } a \neq 0)$

- **Discriminante (**$\Delta$**):** $\Delta = b^2 - 4ac$
- **Formula Risolutiva Generale:** $x_{1,2} = \frac{-b \pm \sqrt{\Delta}}{2a}$
    - Se $\Delta > 0$: due soluzioni reali e distinte.
    - Se $\Delta = 0$: due soluzioni reali e coincidenti ($x_1 = x_2 = -\frac{b}{2a}$).
    - Se $\Delta < 0$: nessuna soluzione reale ($\emptyset$).
- **Formula Ridotta (utilissima se** $b$ **è pari, ovvero** $b = 2k$**):** $x_{1,2} = \frac{-k \pm \sqrt{k^2 - ac}}{a} \quad \text{dove } k = \frac{b}{2}$
- **Relazioni tra radici e coefficienti:**
    - Somma delle soluzioni: $s = x_1 + x_2 = -\frac{b}{a}$
    - Prodotto delle soluzioni: $p = x_1 \cdot x_2 = \frac{c}{a}$
- **Scomposizione del trinomio di secondo grado:** $ax^2 + bx + c = a(x - x_1)(x - x_2)$

### Disequazioni di Secondo Grado ($ax^2 + bx + c > 0$ oppure $< 0$, assumendo $a > 0$)

1. **Caso** $\Delta > 0$ **(soluzioni** $x_1 < x_2$**):**
    - $ax^2 + bx + c > 0 \implies x < x_1 \lor x > x_2$ (valori esterni)
    - $ax^2 + bx + c < 0 \implies x_1 < x < x_2$ (valori interni)
2. **Caso** $\Delta = 0$ **(soluzioni coincidenti** $x_1 = x_2 = x_0$**):**
    - $ax^2 + bx + c > 0 \implies \forall x \in \mathbb{R} \setminus \{x_0\}$
    - $ax^2 + bx + c < 0 \implies \emptyset$
3. **Caso** $\Delta < 0$ **(nessuna soluzione reale dell'equazione associata):**
    - $ax^2 + bx + c > 0 \implies \forall x \in \mathbb{R}$ (sempre positiva)
    - $ax^2 + bx + c < 0 \implies \emptyset$ (mai negativa)

### 2.3 Sistemi Lineari $2 \times 2$

Dato il sistema in forma normale: $\begin{cases} a_1 x + b_1 y = c_1 \\ a_2 x + b_2 y = c_2 \end{cases}$

- **Metodo di Cramer (Determinanti):** $$D = \begin{vmatrix} a_1 & b_1 \\ a_2 & b_2 \end{vmatrix} = a_1 b_2 - a_2 b_1$$$$D_x = \begin{vmatrix} c_1 & b_1 \\ c_2 & b_2 \end{vmatrix} = c_1 b_2 - c_2 b_1, \quad D_y = \begin{vmatrix} a_1 & c_1 \\ a_2 & c_2 \end{vmatrix} = a_1 c_2 - a_2 c_1$$
    - **Determinato** ($D \neq 0$): ha un'unica soluzione data da $x = \frac{D_x}{D}$ e $y = \frac{D_y}{D}$.
    - **Impossibile** ($D = 0$ e almeno uno tra $D_x, D_y \neq 0$): nessuna soluzione ($\frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2}$, rette parallele distinte).
    - **Indeterminato** ($D = D_x = D_y = 0$): infinite soluzioni ($\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}$, rette coincidenti).

### 2.4 Valore Assoluto (Modulo)

Definizione formale:

$$  
|x| = \begin{cases} x & \text{se } x \geq 0 \\ -x & \text{se } x < 0 \end{cases}  
$$

Se abbiamo una costante reale $k > 0$:

- **Equazione:** $|f(x)| = k \implies f(x) = k \lor f(x) = -k$
- **Disequazione "minore di":** $|f(x)| < k \implies -k < f(x) < k$
- **Disequazione "maggiore di":** $|f(x)| > k \implies f(x) < -k \lor f(x) > k$_Strategia TOLC-S:_ Se compare un valore assoluto in espressioni di grado superiore (ad esempio $|x|^2 - |x| - 5 = 0$), usa il **cambio di variabile** ponendo $t = |x|$. Risolvi in $t$ e poi ritorna a $x$ ricordando che $t$ deve essere non negativo.

## 3. Geometria Euclidea e Analitica

### 3.1 Geometria Piana

- **Teorema di Pitagora:** In un triangolo rettangolo con cateti $a, b$ e ipotenusa $c$: $a^2 + b^2 = c^2$
- **Primo Teorema di Euclide:** Il cateto è medio proporzionale tra l'ipotenusa e la sua proiezione sull'ipotenusa: $\frac{i}{c} = \frac{c}{p_c} \implies c^2 = i \cdot p_c$
- **Secondo Teorema di Euclide:** L'altezza relativa all'ipotenusa è medio proporzionale tra le proiezioni dei cateti: $\frac{p_a}{h} = \frac{h}{p_b} \implies h^2 = p_a \cdot p_b$
- **Formule dell'Area:**
    - _Triangolo generico:_ $A = \frac{b \cdot h}{2}$
    - _Formula di Erone (noti i tre lati_ $a,b,c$ _e il semiperimetro_ $p = \frac{a+b+c}{2}$_):_ $A = \sqrt{p(p-a)(p-b)(p-c)}$
    - _Cerchio:_ $A = \pi r^2 \quad (\text{Circonferenza: } C = 2\pi r)$
    - _Trapezio:_ $A = \frac{(B + b) \cdot h}{2}$

### 3.2 Geometria Solida

- **Cubo (spigolo** $s$**):**
    - Volume: $V = s^3$
    - Serficie Totale: $S_{tot} = 6s^2$
    - Diagonale interna: $d = s\sqrt{3}$
- **Parallelepipedo rettangolo (lati** $a, b, c$**):**
    - Volume: $V = a \cdot b \cdot c$
    - Superficie Totale: $S_{tot} = 2(ab + ac + bc)$
    - Diagonale: $d = \sqrt{a^2 + b^2 + c^2}$
- **Cilindro (raggio** $r$**, altezza** $h$**):**
    - Volume: $V = \pi r^2 h$
    - Superficie Laterale: $S_{lat} = 2\pi r h$
- **Cono (raggio** $r$**, altezza** $h$**, apotema** $a = \sqrt{r^2 + h^2}$**):**
    - Volume: $V = \frac{1}{3}\pi r^2 h$
    - Superficie Laterale: $S_{lat} = \pi r a$
- **Sfera (raggio** $r$**):**
    - Volume: $V = \frac{4}{3}\pi r^3$
    - Superficie: $S = 4\pi r^2$

### 3.3 Geometria Analitica (Piano Cartesiano)

Dati due punti $A(x_1, y_1)$ e $B(x_2, y_2)$:

- **Distanza tra due punti (lunghezza del segmento** $AB$**):** $d(A, B) = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$
- **Punto Medio del segmento** $AB$**:** $M\left(\frac{x_1 + x_2}{2}, \, \frac{y_1 + y_2}{2}\right)$
- **Coefficiente angolare (**$m$**) della retta per** $A$ **e** $B$ **(pendenza):** $m = \frac{y_2 - y_1}{x_2 - x_1}$
- **Equazione della retta:**
    - _Forma esplicita:_ $y = mx + q \quad$ ($m$ = pendenza, $q$ = intercetta asse $y$)
    - _Forma implicita:_ $ax + by + c = 0 \quad$ (con $m = -\frac{a}{b}$ per $b \neq 0$)
- **Retta passante per un punto** $P(x_0, y_0)$ **con pendenza** $m$**:** $y - y_0 = m(x - x_0)$
- **Relazioni tra rette:**
    - _Parallele:_ $m_1 = m_2$
    - _Perpendicolari:_ $m_1 \cdot m_2 = -1 \implies m_2 = -\frac{1}{m_1}$
- **Distanza di un punto** $P(x_0, y_0)$ **da una retta** $ax + by + c = 0$**:** $d = \frac{|a x_0 + b y_0 + c|}{\sqrt{a^2 + b^2}}$

### Equazioni delle Coniche (Forme Canoniche)

- **Circonferenza (centro** $C(x_0, y_0)$**, raggio** $R$**):** $(x - x_0)^2 + (y - y_0)^2 = R^2 \iff x^2 + y^2 + ax + by + c = 0$
    - $C\left(-\frac{a}{2}, -\frac{b}{2}\right)$
    - $R = \sqrt{\left(\frac{a}{2}\right)^2 + \left(\frac{b}{2}\right)^2 - c}$ (esiste se il radicando è $\geq 0$)
- **Parabola con asse verticale:** $y = ax^2 + bx + c$
    - Vertice: $V\left(-\frac{b}{2a}, -\frac{\Delta}{4a}\right)$
    - Asse di simmetria: $x = -\frac{b}{2a}$
- **Ellisse:**$\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$
- **Iperbole:** $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1 \quad (\text{Asintoti: } y = \pm\frac{b}{a}x)$
- **Iperbole equilatera (riferita agli asintoti):** $xy = k$

### 3.4 Trigonometria Elementare

La trigonometria nei triangoli rettangoli mette in relazione angoli e lati.

- **Definizioni fondamentali (in un triangolo rettangolo con ipotenusa** $c$ **e angolo** $\alpha$ **adiacente al cateto** $b$ **e opposto al cateto** $a$*)  
    $$\sin\alpha = \frac{\text{cateto opposto}}{\text{ipotenusa}} = \frac{a}{c}$$$$\cos\alpha = \frac{\text{cateto adiacente}}{\text{ipotenusa}} = \frac{b}{c}$$$$\tan\alpha = \frac{\text{cateto opposto}}{\text{cateto adiacente}} = \frac{\sin\alpha}{\cos\alpha} = \frac{a}{b}$$
- **Prima Relazione Fondamentale:** $\sin^2\alpha + \cos^2\alpha = 1$

### Valori degli Angoli Notevoli

È indispensabile memoaaaaaaaarizzare questa tabella per risparmiare tempo nel test:

||||||
|---|---|---|---|---|
|**Angolo in gradi**|**Angolo in radianti**|**Seno (sin)**|**Coseno (cos)**|**Tangente (tan)**|
|$0^\circ$|$0$|$0$|$1$|$0$|
|$30^\circ$|$\frac{\pi}{6}$|$\frac{1}{2}$|$\frac{\sqrt{3}}{2}$|$\frac{\sqrt{3}}{3}$|
|$45^\circ$|$\frac{\pi}{4}$|$\frac{\sqrt{2}}{2}$|$\frac{\sqrt{2}}{2}$|$1$|
|$60^\circ$|$\frac{\pi}{3}$|$\frac{\sqrt{3}}{2}$|$\frac{1}{2}$|$\sqrt{3}$|
|$90^\circ$|$\frac{\pi}{2}$|$1$|$0$|_Non definita_|

## 4. Funzioni, Esponenziali e Logaritmi

### 4.1 Definizione di Funzione e Proprietà Grafiche

Una funzione $f: A \to B$ associa a ogni elemento $x \in A$ (Dominio) uno e un solo elemento $y \in B$ (Codominio).

- **Simmetrie (Pari e Dispari):**
    - **Funzione Pari:** $f(-x) = f(x)$. Il grafico è simmetrico rispetto all'asse $y$. (Esempi: $y = x^2$, $y = \cos x$).
    - **Funzione Dispari:** $f(-x) = -f(x)$. Il grafico è simmetrico rispetto all'origine $O(0,0)$. (Esempi: $y = x^3$, $y = \sin x$, $y = \tan x$).
- **Intersezione tra Grafici (Risoluzione di Sistemi):** Per trovare i punti di intersezione tra due curve $y = f(x)$ e $y = g(x)$, occorre impostare il sistema e uguagliare le espressioni: $f(x) = g(x)$  
    Le soluzioni di questa equazione forniscono le ascisse dei punti di intersezione.

### 4.2 Campi di Esistenza (Dominio) delle Funzioni Elementari

Per trovare il dominio di una funzione complessa, occorre imporre le seguenti condizioni a seconda dei blocchi che la compongono:

||||
|---|---|---|
|**Tipo di espressione**|**Struttura**|**Condizione di Esistenza**|
|**Frazione**|$y = \frac{P(x)}{Q(x)}$|$Q(x) \neq 0$|
|**Radice con indice pari**|$y = \sqrt[2n]{f(x)}$|$f(x) \geq 0$|
|**Logaritmo**|$y = \log_a(f(x))$|$f(x) > 0 \quad (\text{con } a>0, a\neq1)$|
|**Tangente**|$y = \tan(f(x))$|$f(x) \neq \frac{\pi}{2} + k\pi, \quad k \in \mathbb{Z}$|

### 4.3 Esponenziali e Logaritmi

- **Definizione di Logaritmo:** Il logaritmo in base $a$ di $x$ è l'esponente da dare ad $a$ per ottenere $x$: $\log_a(x) = y \iff a^y = x \quad (\text{con } x > 0, a > 0, a \neq 1)$
    - Se la base è il numero di Nepero $e \approx 2.718$, si scrive $\ln(x)$ (logaritmo naturale).

### Proprietà dei Logaritmi (con basi ed argomenti positivi e validi)

- **Logaritmo del prodotto:** $\log_a(x \cdot y) = \log_a(x) + \log_a(y)$
- **Logaritmo del quoziente:** $\log_a\left(\frac{x}{y}\right) = \log_a(x) - \log_a(y)$
- **Logaritmo di una potenza:** $\log_a(x^k) = k \cdot \log_a(x)$
- **Formula del cambio di base:** $\log_a(x) = \frac{\log_b(x)}{\log_b(a)}$
- **Casi notevoli:** $\log_a(a) = 1, \quad \log_a(1) = 0, \quad a^{\log_a(x)} = x$

### Risoluzione rapida di Equazioni/Disequazioni Esponenziali e Logaritmiche

- **Monotonia:**
    - Se la base $a > 1$, la funzione è _crescente_: $$a^{f(x)} > a^{g(x)} \iff f(x) > g(x)$$$$\log_a(f(x)) > \log_a(g(x)) \iff f(x) > g(x) \quad (\text{con } f(x), g(x) > 0)$$
    - Se la base $0 < a < 1$, la funzione è _decrescente_ (si inverte il verso!): $$a^{f(x)} > a^{g(x)} \iff f(x) < g(x)$$$$\log_a(f(x)) > \log_a(g(x)) \iff f(x) < g(x) \quad (\text{con } f(x), g(x) > 0)$$

## 5. Calcolo Combinatorio e Probabilità

### 5.1 Calcolo Combinatorio

Per determinare in quanti modi si possono raggruppare o ordinare gli elementi di un insieme.

- **Fattoriale (definizione):** $n! = n \cdot (n - 1) \cdot (n - 2) \dots 1 \quad (\text{con } 0! = 1)$
- **Permutazioni Semplici (l'ordine conta, si usano tutti gli elementi):** $P_n = n!$
- **Permutazioni con Ripetizione (elementi ripetuti** $a, b, c\dots$ **volte):** $P_n^{a, b, c\dots} = \frac{n!}{a! \cdot b! \cdot c! \dots}$
- **Disposizioni Semplici (l'ordine conta, si sceglie un sottogruppo di** $k$ **elementi da** $n$ **disponibili):** $D_{n, k} = \frac{n!}{(n - k)!}$
- **Disposizioni con Ripetizione:** $D'_{n, k} = n^k$
- **Combinazioni Semplici (l'ordine NON conta, si sceglie un sottogruppo di** $k$ **elementi da** $n$**):** $C_{n, k} = \binom{n}{k} = \frac{n!}{k!(n - k)!}$_(Proprietà dei coefficienti binomiali:_ $\binom{n}{k} = \binom{n}{n-k}$_,_$\binom{n}{0} = 1$_,_ $\binom{n}{1} = n$_)_

### 5.2 Calcolo delle Probabilità

- **Definizione Classica:** $P(E) = \frac{\text{Numero di casi favorevoli}}{\text{Numero di casi possibili}}$
- La probabilità è sempre un valore reale nell'intervallo $[0, 1]$ (ovvero tra $0\%$ e $100\%$).
- **Evento Contrario (**$\bar{E}$**):** $P(\bar{E}) = 1 - P(E)$
- **Probabilità dell'Unione di due eventi (Teorema della Probabilità Totale):**
    - Se gli eventi sono _incompatibili_ ($A \cap B = \emptyset$): $P(A \cup B) = P(A) + P(B)$
    - Se gli eventi sono _compatibili_ ($A \cap B \neq \emptyset$): $P(A \cup B) = P(A) + P(B) - P(A \cap B)$
- **Probabilità dell'Intersezione di due eventi (Teorema della Probabilità Composta):**
    - Se gli eventi sono _indipendenti_ (il verificarsi di uno non influenza l'altro): $P(A \cap B) = P(A) \cdot P(B)$
    - Se gli eventi sono _dipendenti_: $P(A \cap B) = P(A) \cdot P(B|A)$
- **Proabilità Condizionata (probabilità che si verifichi** $A$ **sapendo che si è già verificato** $B$**):** $P(A|B) = \frac{P(A \cap B)}{P(B)} \quad (\text{con } P(B) > 0)$

## 6. Statistica Descrittiva

### 6.1 Misure di Tendenza Centrale

- **Media Aritmetica Semplice:** Data una popolazione di $n$ dati $\{x_1, x_2, \dots, x_n\}$: $\bar{x} = \frac{\sum_{i=1}^n x_i}{n} = \frac{x_1 + x_2 + \dots + x_n}{n}$
- **Media Ponderata (pesata):** Ad ogni valore $x_i$ è associato un peso $w_i$: $\bar{x}_p = \frac{\sum_{i=1}^n x_i \cdot w_i}{\sum_{i=1}^n w_i} = \frac{x_1 w_1 + x_2 w_2 + \dots + x_n w_n}{w_1 + w_2 + \dots + w_n}$
- **Moda:** È il valore (o la classe di valori) che si presenta con la **frequenza più alta** all'interno della distribuzione dei dati.
- **Mediana:** Rappresenta il valore centrale dei dati una volta ordinati in ordine crescente:
    - Se il numero di dati $n$ è **dispari**, la mediana è il valore che occupa la posizione: $\frac{n + 1}{2}$
    - Se il numero di dati $n$ è **pari**, la mediana è la media aritmetica dei due valori che occupano le posizioni: $\frac{n}{2} \quad \text{e} \quad \frac{n}{2} + 1$

### 6.2 Misure di Dispersione (Variabilità)

Servono a comprendere quanto i dati siano concentrati vicino alla media o distribuiti lontano da essa.

- **Campo di variazione (Range):** Differenza tra il valore massimo e il valore minimo registrati: $\text{Range} = x_{max} - x_{min}$
- **Varianza (**$\sigma^2$**):** La media aritmetica dei quadrati degli scarti rispetto alla media campionaria: $\sigma^2 = \frac{\sum_{i=1}^n (x_i - \bar{x})^2}{n}$
- **Deviazione Standard (Scarto Quadratico Medio,** $\sigma$**):** È la radice quadrata della varianza. Ha la stessa unità di misura dei dati di partenza ed è l'indice di dispersione più usato: $\sigma = \sqrt{\sigma^2} = \sqrt{\frac{\sum_{i=1}^n (x_i - \bar{x})^2}{n}}$