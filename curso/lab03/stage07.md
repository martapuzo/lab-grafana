

## 🟩 Fase 7 – Condiciones visuales en nodos y estilos por estado

---

### 🎯 Objetivo

Aprender a **modificar dinámicamente la apariencia de nodos** (colores, bordes, íconos, etc.) en función de los valores de estado de las variables o datos, simulando condiciones visuales reactivas propias de un sistema SCADA.

---

### 🗂️ Scaffolding

* CSV con estados por cámara: columnas como `camara`, `alarma`, `puerta`, `compresor`.
* Dashboard `Overview SCADA` activo, con variables `$zona`, `$estado`, `$camara`.
* Panel Diagram funcionando con Mermaid.

---

### 🪜 Pasos guiados

1. **Entender las limitaciones**

   * El plugin Diagram **no soporta condiciones Mermaid basadas en variables** directamente.
   * Hay que simularlo mediante Mermaid alternativos o paneles condicionales.

2. **Usar estilos Mermaid para destacar estados**

   * Crea un código Mermaid como este (ejemplo estático):

     ```mermaid
     graph LR
       subgraph Camara_1
         T1[🌡️ -2.4°C]
         A1[🚨 Alarma: ACTIVA 🔴]
       end
       style Camara_1 fill:#f9ebea,stroke:#e74c3c,stroke-width:2px
       style A1 fill:#f1948a,stroke:#c0392b,stroke-width:2px
     ```

3. **Simular condiciones con múltiples nodos**

   * Crea varios bloques de cámara (Camara\_1, Camara\_2...) según los estados posibles (`ACTIVA`, `INACTIVA`, etc.).
   * Colócalos en paneles separados o dentro del mismo panel pero claramente diferenciados.

4. **Usar override visuales en paneles complementarios**

   * Añade un panel `Stat` o `Bar Gauge` con color condicionado:

     * Alarma: rojo si ACTIVA, verde si INACTIVA.
     * Puerta: amarillo si abierta, azul si cerrada.

5. **Asociar enlaces contextuales**

   * Usa `click` en nodos para saltar al panel específico de la cámara:

     ```mermaid
     graph LR
      Camara_1[📦 Cámara 1]
      Camara_2[📦 Cámara 2]
      Camara_3[📦 Cámara 3]

      click Camara_1 "d/camara-detail?var-camara=Camara_1" "Ver detalles"
      click Camara_2 "d/camara-detail?var-camara=Camara_2" "Ver detalles"
      click Camara_3 "d/camara-detail?var-camara=Camara_3" "Ver detalles"
     ```

---

### 🎯 Retos

1. 🎨 **Diseña un bloque SCADA con al menos 2 estilos diferentes de cámara según su estado**

   * *Tip:* Usa `style` con colores que indiquen estado.

2. 🧠 **Piensa cómo simularías un cambio de estado en tiempo real**

   * *Tip:* El CSV estático no cambia solo, pero puedes duplicarlo con otro estado y alternar con `$estado`.

3. 🔁 **Simula el estado de una cámara cambiando la variable del panel**

   * *Tip:* Crea un menú de selección (`$camara`) y cambia entre vistas.

---

### ✅ Validaciones

* El panel reacciona a los cambios en los valores seleccionados de variables.
* El estilo de al menos un nodo cambia si `alarma=ACTIVA`.
* El flujo visual representa el estado de al menos 2 cámaras con estilo condicional.

---

### 💬 Reflexión

La clave visual en sistemas SCADA está en **transmitir el estado sin ambigüedad**: colores, formas y enlaces deben permitir navegar rápidamente entre alarmas y estados críticos. Incluso sin datos dinámicos, puedes simular este comportamiento creando estructuras de nodos visualmente expresivas.