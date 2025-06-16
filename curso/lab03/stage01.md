

## 🧩 Fase 1 – Crear el diagrama SCADA base con Mermaid

---

### 🎯 Objetivo

Diseñar una vista SCADA estática con Diagram Panel que represente distintas zonas del sistema (por ejemplo, cámaras frigoríficas), con una estética jerárquica y horizontal.

---

### 🗂️ Scaffolding (estructura)

* Dashboard nuevo: `dashboard-overview`
* Panel tipo: **Diagram Panel**
* Mermaid con:

  * 3 bloques (`Cámara 1`, `Cámara 2`, `Cámara 3`)
  * 5 nodos por bloque: Temp, Humedad, Puerta, Compresor, Alarma
  * Estilos de color distintos por grupo

---

### 🪜 Pasos guiados

1. **Crear un nuevo dashboard**

   * Ir a *+* → **Dashboard** → *Add a new panel*

2. **Seleccionar tipo de panel**

   * Cambiar a **Diagram Panel** (`agenty-flowcharting-panel`)

3. **Pegar Mermaid en “Diagram definition”**

   ```mermaid
   graph LR
     subgraph Cámara_1 [Cámara 1 - Vacuno]
       T1[🌡️ Temp]
       H1[💧 Humedad]
       D1[🚪 Puerta]
       C1[⚙️ Compresor]
       A1[🚨 Alarma]
     end

     subgraph Cámara_2 [Cámara 2 - Porcino]
       T2[🌡️ Temp]
       H2[💧 Humedad]
       D2[🚪 Puerta]
       C2[⚙️ Compresor]
       A2[🚨 Alarma]
     end

     subgraph Cámara_3 [Cámara 3 - Ovino]
       T3[🌡️ Temp]
       H3[💧 Humedad]
       D3[🚪 Puerta]
       C3[⚙️ Compresor]
       A3[🚨 Alarma]
     end

     style Cámara_1 fill:#d0f0c0,stroke:#27ae60,stroke-width:2px
     style Cámara_2 fill:#f9ebea,stroke:#e74c3c,stroke-width:2px
     style Cámara_3 fill:#e8f8f5,stroke:#1abc9c,stroke-width:2px
   ```

4. **Configurar el panel**

   * Título: `SCADA Overview`
   * Transparent: ❌
   * Tamaño de texto: `14` o superior
   * Opcional: ajustar layout para mayor claridad

5. **Guardar**

   * `Apply` → luego guardar como `dashboard-overview`

---

### 🎯 Retos

1. 🔄 **Cambia el orden o nombres de las cámaras**

   * *Tip:* Modifica directamente los identificadores y títulos del `subgraph`.

2. 🔁 **Reorganiza en vertical (flow TD)**

   * *Tip:* Cambia `graph LR` por `graph TD` para orientación top-down.

3. 🎨 **Ajusta los colores del borde y fondo**

   * *Tip:* Usa códigos hex de colores o copia el patrón de `style Cámara_2`.

4. ➕ **Añade una cuarta cámara**

   * *Tip:* Duplica un bloque `subgraph` completo, cambia los nombres internos para evitar colisiones (`T4`, `H4`, etc.).

---

### ✅ Validaciones

* Deben verse **tres bloques separados** con sus títulos.
* Cada bloque contiene cinco nodos con **emoji + texto**.
* Colores diferenciados entre cámaras.

---

### 💬 Reflexión

Este panel **no es solo decorativo**. Es la base para la interactividad y monitorización. Representa zonas funcionales y anticipa la integración de métricas y navegación. Como en un SCADA real, su utilidad depende de su claridad y estructura.