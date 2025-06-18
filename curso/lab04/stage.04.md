

## 🔹 Fase 4 – Visualizar valores dinámicos en Diagram Panel desde CSV

---

### 🎯 Objetivo

Mostrar datos variables como **temperatura**, **humedad** o **estado de puerta** en un **Diagram Panel**, tomando los valores dinámicamente desde un CSV remoto expuesto por la API Node.js (`/camaras`). Usaremos campos como `T`, `H`, `D` para enriquecer nodos con etiquetas o colorearlos según su valor.

---

### 🗂️ Scaffolding (estructura)

* Dashboard: `dashboard-overview` (o uno nuevo)

* Panel tipo: `Diagram Panel` (`agenty-flowcharting-panel`)

* Data source: `CSV API Node` ya configurado

* URL con variables:

  ```
  /camaras?camara=${camara}&from=${__from:date:iso}&to=${__to:date:iso}
  ```

* Mermaid con nodos identificados (`T1`, `H1`, `D1`, etc.)

---

### 🪜 Pasos guiados

1. **Editar el panel Diagram existente**

   * Ir al dashboard
   * Editar el panel que contiene el Mermaid (SCADA básico)
   * Confirmar que los nodos tienen ID únicos (`T1`, `H1`, `D1`, etc.)

2. **Enlazar los nodos a los valores del CSV**

   * En la pestaña **Metric**, configurar:

     * **Datasource**: `CSV API Node`
     * **URL**:

       ```
       /camaras?camara=${camara}&from=${__from:date:iso}&to=${__to:date:iso}
       ```
     * **Timestamp column**: `time`
     * **Value columns**: `T`, `H`, `D`, etc.
     * **Group by**: dejar vacío
     * **Aggregation**: `last`

3. **Asignar valores dinámicos en nodos del diagrama**

   * Ir a la pestaña **Mappings → Nodes Mapping**

   * Añadir asignaciones como:

     | Node ID | Text   | Color          |
     | ------- | ------ | -------------- |
     | `T1`    | `${T}` | `auto`         |
     | `H1`    | `${H}` | `auto`         |
     | `D1`    | `${D}` | Condicional 🟡 |

   * Opcional: usar reglas para colorear según valor (por ejemplo, si `D` = "Abierta" → rojo)

4. **Validar resultado visual**

   * Refrescar el dashboard
   * Verás cómo los valores de temperatura, humedad o estado se inyectan dinámicamente en los nodos correspondientes

---

### 🎯 Retos

1. 🔁 **Mostrar todos los valores en un bloque**

   * Asigna valores dinámicos a `C1`, `A1`, etc., y visualiza la actividad del compresor o alarmas.

2. 🎨 **Colorear nodos según valor**

   * Define reglas como:

     * Si `A` = ACTIVA → rojo
     * Si `H` < 80 → amarillo

3. 🧪 **Reutiliza el diagrama para otra cámara**

   * Cambia la variable `${camara}` a `Camara_2` o `Camara_3` y comprueba que los nodos se actualizan correctamente

---

### ✅ Validaciones

* ✅ El CSV se carga correctamente con la URL parametrizada.
* ✅ Al menos 3 nodos muestran datos dinámicos (T, H, D).
* ✅ Las etiquetas se actualizan al cambiar el rango o la cámara.
* ✅ Se aplican estilos o colores si has configurado mappings condicionales.

---

### 💬 Reflexión

Aquí damos el paso de la **estática a la visualización dinámica**: pasamos de un diagrama decorativo a uno **vinculado a datos reales**. Aprendemos que Diagram Panel permite **enriquecer visualmente un flujo** con métricas y estados. Esta técnica es poderosa para dashboards de operaciones, monitorización ligera o simulaciones de sistemas industriales.
