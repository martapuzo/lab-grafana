

## 🔹 Fase 5 – Validar el cambio de frecuencia temporal y muestreo

---

### 🎯 Objetivo

Comprobar cómo el backend Node.js adapta el número de muestras en función del rango de fechas. Validar que, al cambiar el rango en Grafana (5 min, 1h, 6h, 1d…), el CSV se ajusta automáticamente y la densidad de datos en el gráfico es coherente.

---

### 🗂️ Scaffolding (estructura)

* API en uso: `http://api-node:3000/camaras`

* Parámetros utilizados:

  ```
  ?camara=${camara}&from=${__from:date:iso}&to=${__to:date:iso}
  ```

* Backend ya implementado con lógica dinámica (`step` varía según el `diffSeconds`)

* Panel de tipo **Time Series** conectado al mismo CSV plugin

---

### 🪜 Pasos guiados

1. **Crear un nuevo panel tipo Time Series**

   * Dentro del mismo dashboard o uno nuevo

   * Seleccionar **Datasource**: `CSV API Node`

   * Usar la URL:

     ```
     /camaras?camara=${camara}&from=${__from:date:iso}&to=${__to:date:iso}
     ```

   * Timestamp column: `time`

   * Value columns: `T`, `H`, etc.

   * Aggregation: `avg` o `last`

2. **Cambiar el rango de tiempo (Time Range)**

   * Prueba con:

     * **Last 5 minutes**
     * **Last 1 hour**
     * **Last 6 hours**
     * **Last 1 day**
     * **Last 7 days**
   * Observa cuántos puntos de datos se generan

3. **Revisar el log del servidor (opcional)**

   * Verás en consola:

     ```
     [INFO] GET /camaras - camara=Camara_1, from=..., to=..., intervalo=1minute
     ```

   * Esto confirma que el backend adapta el `step` automáticamente

---

### 🎯 Retos

1. 🕓 **Visualiza cómo cambia la densidad de puntos**

   * Cuanto más amplio el rango, más espaciadas las muestras

2. 🧠 **Interpreta el “step” desde el log del servidor**

   * ¿Cuándo empieza a usar `addMinutes(10)` o `addHours(6)`?

3. 🧪 **Verifica que Diagram Panel también se adapta**

   * Aunque Diagram Panel usa el último valor (`last`), asegúrate de que se actualiza correctamente si cambias el rango

---

### ✅ Validaciones

* ✅ El backend cambia automáticamente la granularidad del muestreo.
* ✅ Los puntos del gráfico son más frecuentes en rangos cortos y más espaciados en rangos largos.
* ✅ Diagram Panel sigue mostrando valores válidos (últimos del periodo).
* ✅ El servidor registra correctamente el `intervalo`.

---

### 💬 Reflexión

Este ejercicio enseña a **respetar la escala temporal**. No siempre se necesitan 1.000 puntos para mostrar una tendencia. Un muestreo adaptativo mejora el rendimiento y la legibilidad, y es clave en sistemas SCADA, dashboards industriales o monitoreo con recursos limitados. También valida que tu API responde de forma inteligente al contexto del consumidor.
