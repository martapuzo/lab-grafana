## 🟠 Fase 4 – Aplicar indicadores visuales y alertas condicionadas

---

### 🎯 Objetivo

Destacar estados críticos en el panel Overview SCADA mediante **estilos condicionales**, **alertas visuales**, e **integración con variables y filtros** para representar una visión operativa y priorizar la atención.

---

### 🗂️ Scaffolding

* Diagrama ya existente en formato Mermaid (Diagram Panel).
* Datos provenientes del CSV (`camaras.csv`).
* Variable `zona` ya definida.
* Acceso a campos como: `alarma`, `puerta`, `compresor`, `temp`, `camara`.

---

### 🪜 Pasos guiados

1. **Crear un panel de tipo `Diagram` (si no existe)**

   * Título: `Estado por cámara`
   * Fuente: CSV
   * Aplicar filtro por `$zona` con transformación `Filter by value`.

2. **Editar el contenido Mermaid**

   * Generar nodos por cámara basados en los datos filtrados.

   * Usar condiciones para marcar estado crítico:

     ```mermaid
     graph LR
       subgraph C1[Vacuno]
         T1[Temp: -2.4°C]
         A1[Alarma: INACTIVA]
       end

       style C1 fill:#d0f0c0,stroke:#2ecc71,stroke-width:2px
       style A1 fill:#bdc3c7,stroke:#7f8c8d
     ```

   * Si alarma = ACTIVA, colorear la caja en rojo:

     ```mermaid
     graph LR
       A1[🚨 Alarma: ACTIVA]
       style A1 fill:#f1948a,stroke:#c0392b,stroke-width:2px
     ```

3. **Añadir un `Stat panel` que cuente alarmas activas**

   * Query → Filter `alarma = Activa`
   * Transform → `Add field from calculation` → `Count`
   * Mostrar como contador de alertas.

4. **Añadir color y prioridad**

   * Usa `Field overrides` en diagram panel o stat panel.
   * Aplicar rojo si valor = ‘ACTIVA’, verde si ‘INACTIVA’.

5. **Simular un flujo de alerta**

   * Agrega una caja `🚨 ALERTA` que se muestre si alguna cámara tiene alarma.
   * Ejemplo:

     ```mermaid
      graph LR
         ALERTA[🚨 ALERTA]
         click ALERTA "d/alert-panel" "Ver alertas"
     ```

---

### 🎯 Retos

1. 🟥 **Haz que las cámaras con temperatura por debajo de -3.0°C tengan un borde azul**

   * *Tip:* Aplica transformación `Filter by value` y construye nodos Mermaid condicionales.

2. 🧭 **Agrega una caja de alerta global si hay alguna alarma activa en la zona**

   * *Tip:* Puedes hacer un `Stat panel` fuera del diagrama y condicionar visibilidad.

3. 🎯 **Haz que el diagrama incluya solo las cámaras de la zona activa (dropdown)**

   * *Tip:* Usa `Filter by value` → zona = `$zona`.

---

### ✅ Validaciones

* Las alarmas activas se representan con color rojo.
* Las cámaras con compresor inactivo se diferencian visualmente.
* La caja de alerta aparece dinámicamente cuando corresponde.

---

### 💬 Reflexión

Esta fase introduce los elementos clave de un sistema SCADA: visibilidad inmediata, priorización por color, y jerarquía visual. Aprendemos cómo Grafana permite simular estados críticos sin depender de infraestructuras complejas.