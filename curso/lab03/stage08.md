

## 🟨 Fase 8 – Navegación jerárquica y enlaces entre vistas SCADA

---

### 🎯 Objetivo

Aprender a **organizar el dashboard SCADA como una jerarquía navegable**, permitiendo que desde el overview se acceda al detalle de cada cámara o componente mediante enlaces contextuales y paso de variables.

---

### 🗂️ Scaffolding

* Dashboard principal: `Overview SCADA`.
* Dashboards de detalle por cámara: `Detalle cámara 1`, `Detalle cámara 2`, etc. (pueden clonarse desde un mismo panel base con variable).
* Variables ya definidas: `$camara`, `$estado`, `$zona`.

---

### 🪜 Pasos guiados

1. **Identifica los nodos de entrada**

   * Cada subgraph de cámara en el overview debe tener un nodo `click`:

     ```mermaid
graph LR
  Camara_1[🧊 Cámara 1]
  Camara_2[🧊 Cámara 2]
  Camara_3[🧊 Cámara 3]

  click Camara_1 "d/camara-detail?var-camara=Camara_1" "Ver detalle"
  click Camara_2 "d/camara-detail?var-camara=Camara_2" "Ver detalle"
  click Camara_3 "d/camara-detail?var-camara=Camara_3" "Ver detalle"
     ```

2. **Asegúrate de que los paneles de destino existen**

   * Crea un dashboard llamado `camara-detail`.
   * Añade una variable `$camara` tipo *custom* con valores `Camara_1,Camara_2,Camara_3`.

3. **Diseña el panel de detalle reutilizable**

   * Muestra las métricas de temperatura, humedad, puerta, compresor, alarma.
   * Aplica *Field Overrides* para colorear según estado.
   * Usa texto y diagramas que reaccionen al valor de `$camara`.

4. **Valida el enlace**

   * Desde el overview haz clic en cualquier cámara y verifica que:

     * Se abre el dashboard de detalle.
     * Se carga la cámara adecuada según variable pasada.

5. **(Opcional)** Añade enlaces de vuelta

   * En el panel de detalle, incluye un botón con texto "⬅️ Volver al overview":

     ```markdown
     [⬅️ Volver al overview](/d/overview-scada)
     ```

---

### 🎯 Retos

1. 🔁 **Haz que el mismo dashboard `camara-detail` sirva para todas las cámaras**

   * *Tip:* Usa `${camara}` en títulos, métricas y condiciones.

2. 🧭 **Incluye al menos 3 enlaces navegables en tu overview**

   * *Tip:* Puedes añadir más subgraphs si lo deseas.

3. 📈 **Agrega un panel de mini-histórico para cada cámara**

   * *Tip:* Usa valores estáticos o una tabla con métricas por fecha para simularlo.

---

### ✅ Validaciones

* El click en un nodo abre correctamente el panel de detalle.
* El valor de la variable `$camara` se respeta en el nuevo dashboard.
* Puedes navegar de vuelta al overview sin perder contexto.

---

### 💬 Reflexión

Una buena representación SCADA no es solo visual, sino **interactiva**. La capacidad de profundizar en el detalle desde un overview es lo que permite actuar con rapidez y contexto. Esta fase entrena justo esa lógica jerárquica que imita el comportamiento real de centros de control industrial.
