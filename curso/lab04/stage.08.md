

## 🔹 Fase 8 – Validar interpolación, agrupamiento y límites

---

### 🎯 Objetivo

Analizar cómo Grafana interpreta los datos servidos por la API al variar los intervalos temporales, el número de puntos, la presencia de valores nulos o repetidos, y cómo los representa en Diagram Panel, Stat y Time Series. Ajustar el plugin CSV para controlar el comportamiento.

---

### 🗂️ Scaffolding (estructura)

* Dashboard: `dashboard-overview` o uno nuevo temporal
* Fuente: `marcusolsson-csv-datasource` apuntando a `/camaras?...&format=csv`
* Paneles de prueba:

  * `Diagram Panel` (estado visual por nodo)
  * `Time series` (para `T` o `H`)
  * `Stat` (para mostrar última temperatura)

---

### 🪜 Pasos guiados

1. **Reducir el rango a 5 minutos**

   * Observa que la API cambia el paso (`step`) a 1s automáticamente
   * Verifica el comportamiento en `Time series` (alta densidad de puntos)

2. **Ampliar el rango a 7 días**

   * Verifica cómo se adapta el muestreo (ahora cada 10 minutos)
   * Compara en Stat si los valores son coherentes con lo esperado

3. **Editar la API temporalmente para insertar `null` aleatorios**

   ```js
   const T = Math.random() < 0.1 ? '' : (Math.random() * -4 - 1).toFixed(1);
   ```

   * Verifica cómo se comportan los paneles con datos ausentes

4. **Probar con tiempos mal formateados o solapados**

   * Añade timestamps repetidos o fuera de orden y observa el resultado

5. **Aplicar `Legend`, `Null value` y `Connect nulls` en paneles**

   * En Time series: marca “Connect nulls”, “Show points”, “Show gaps”

---

### 🎯 Retos

1. 📉 **Comparar muestreos de 1m vs 10m**

   * Mide el número de puntos recibidos y representados

2. ⚠️ **Visualizar si una cámara tiene demasiadas alarmas**

   * Si más del 30% de puntos tienen `A = ACTIVA`, pintar el nodo en rojo fijo

3. 🔎 **Detectar errores en el CSV visualmente**

   * Usa color negro o icono de error si faltan campos o hay inconsistencias

---

### ✅ Validaciones

* ✅ El backend responde con diferente `step` según el rango (`from` / `to`)
* ✅ Los paneles muestran correctamente los valores incluso con nulos
* ✅ Se puede visualizar densidad, ausencia o incoherencia en las curvas
* ✅ Diagram Panel representa correctamente valores aunque haya saltos

---

### 💬 Reflexión

El comportamiento del plugin CSV frente a entradas imperfectas nos permite entender la robustez de los paneles en situaciones reales. **Grafana no es solo para datos bonitos**, también es clave para detectar errores de captura, incoherencias o gaps. Esta fase entrena tu ojo para detectar problemas desde lo visual.
