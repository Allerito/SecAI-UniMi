## Le potenze
Una **potenza** è una moltiplicazione ripetuta dello stesso numero.
$$
a^n=\underbrace{a\cdot{a}\cdot{a} \cdots{a}}_{n \text{ volte}}
$$
**Dove:**
- **a** = base
- **n** = esponente

**Esempio:**
$$
3^4=3\cdot{3}\cdot{3}\cdot{3}=81
$$
---
## Esponente negativo
Un esponente negativo indica il reciproco.
$$
a^{-n}=\frac{1}{a^n}
$$

**Esempi:**

$$
2^{-3}=\frac{1}{2^3}=\frac{1}{8}
$$
$$
10^{-2}=0,01
$$
---
## Casi particolari

### Esponente 0

Qualunque numero diverso da zero elevato a zero vale

La condizione di esistenza è data dalla dimostrazione (vedi 1)

$$
a^0=1
$$

**Dimostrazione:**

$$
\begin{equation}
a^0=a^n\cdot{a^{-n}}=a^n\cdot{\frac{1}{a^n}=1}
\end{equation}
$$

Ricorda questo è vero se e solo se $a\not=0$ per condizione d’esistenza altrimenti la frazione non può esistere

**Esempi:**

$$
5^0=1
$$

$$
(-12)^0=1
$$

### Esponente 1

$$
a^1=a
$$

**Esempio:**

$$
7^1=7
$$

### Base uguale a 0

Attenzione $0^0$ non è definito

- Esponente positivo: $0^n=0$
- Esponente negativo: $0^{-n}=\infty$

### Base uguale a 1

Essendo la potenza una moltiplicazione della base $n \cdot m$ volte, 1 moltiplicato per se stesso varrà sempre 1

$$
1^n=1
$$

---

## Proprietà delle potenze

> Queste sono da sapere a memoria.

### Prodotto di potenze con la stessa base

Si sommano gli esponenti:

$$
a^m\cdot{a^n}=a^{m+n}
$$

Esempio:

$$
2^3\cdot{2^5}=2^8=256
$$

### Divisione di potenze con la stessa base

Si sottraggono gli esponenti:

$$
\frac{a^m}{a^n}=a^{m−n}
$$

Esempio:

$$
\frac{3^7}{3^2}=3^5=243
$$

### Potenza di una potenza

Si moltiplicano gli esponenti:

$$
(a^m)^n=a^{mn}
$$

Esempio:

$$
(2^3)^2=2^6=64
$$

### Potenza di un prodotto

$$
(ab)^n=a^n\cdot{b^n}
$$

Esempio:

$$
(2\cdot{5})^3=2^3\cdot{5^3}=8\cdot{125}=1000
$$

### Potenza di un quoziente

$$
(\frac{a}{b})^n=\frac{a^n}{b^n}
$$

Esempio:

$$
(\frac{2}{3})^2=\frac{4}{9}
$$

---

## Le radici

La radice è l’operazione inversa della potenza.

$$
\sqrt[n]{a}={b} \longleftrightarrow b^n=a
$$

**Dove:**

a = radicando

n = indice di radice

b = radice

**Condizioni di esistenza:**

Un radicale di tipo $\sqrt[n]{A(x)}$ esiste nel campo dei numeri reali $\forall x \in \mathbb{R}$ se l'indice **n** è **dispari**, mentre richiede il **radicando** positivo $A(x) ≥ 0$ se l'indice **n** è **pari**.

- **Indice DISPARI**: sempre definita ($\forall x \in \mathbb{R}$)
- **Indice PARI**: radicando $\geq 0$

Esempi:

$$
\begin{equation*}
\sqrt{25}=5\longleftrightarrow5^2=25
\quad
\textnormal{dove } A(x) ≥ 0
\end{equation*}
$$

$$
\begin{equation*}
\sqrt[3]{-27}=-3\longleftrightarrow-3^3=-27
\quad
\textnormal{dove } \forall x \in \mathbb{R}
\end{equation*}
$$

$$
\begin{equation*}
\sqrt{-9}=
\nexists x \in \mathbb{R}
\textnormal{ (non esiste nei numeri reali)}
\quad
\textnormal{ C.E. non rispettata}
\end{equation*}
$$

Attenzione:

$$
\sqrt{x^2}=|x|
$$

---

## Proprietà delle radici

### Prodotto

$$
\begin{equation*}
\sqrt{ab}=\sqrt{a}\cdot\sqrt{b}
\quad
\textnormal{ dove } a\geq0,b\geq0
\end{equation*}

$$

**Esempio:**

$$
\sqrt{36}=\sqrt{4}\cdot{\sqrt{9}}=2\cdot{3}=6
$$

**Attenzione:**

funziona solamente sui prodotti non sulle somme

$$
\sqrt{a+b}=\sqrt{a}+\sqrt{b}
$$

Infatti:

$$
\sqrt{25}=5
$$

Se applicassimo la proprietà invece risulterebbe:

$$
\sqrt{25}=\sqrt{9}+\sqrt{16}=3+4=7
$$

### Quoziente

$$
\begin{equation*}
\sqrt{\frac{a}{b}}=\frac{\sqrt{a}}{\sqrt{b}}
\quad
\textnormal{ dove } b\geq0
\end{equation*}
$$

**Esempio:**

$$
\sqrt{\frac{16}{9}}=\frac{\sqrt{16}}{\sqrt{9}}=\frac{4}{3}
$$

### Razionalizzazione

$$
\frac{n}{\sqrt{m}}=\frac{n}{\sqrt{m}}\cdot{\sqrt{m}}=\frac{n\sqrt{m}}{m}
$$

Esempio:

$$
\frac{4}{\sqrt{2}}=\frac{4}{\sqrt{2}}\cdot{\sqrt{2}}=\frac{4\sqrt{2}}{2}=2\sqrt{2}
$$

---

## Potenze con esponente frazionario

Una radice può essere scritta come una potenza.

$$
\sqrt[n]{a^m}=a^{\frac{m}{n}}
$$

**Esempi:**

$$
\sqrt{16}=16^{\frac{1}{2}}=4
$$

$$
\sqrt[3]{8}=8^{\frac{1}{3}}=2
$$

---

## Esercizi

1. $5^3=?$
2. $4^0=?$
3. $7^-1=?$
4. $\sqrt{64}=?$
5. $\sqrt[3]{125}=?$
6. $2^5\cdot{2^2}=?$
7. $\frac{3^6}{3^4}=?​$
8. $(5^2)^3=?$
9. $\sqrt{81\cdot{16}}=?$
10. $\sqrt{\frac{49}{64}}=?$

**Semplifica:**

1. $\frac{2^5+2^3}{2^6}=?$
2. $\sqrt{50}=?$

**Calcola:**

1. $81^{\frac{1}{2}}=?$
2. $27^{\frac{2}{3}}=?$

**Razionalizza:**

1. $\frac{5}{\sqrt{3}}=?$