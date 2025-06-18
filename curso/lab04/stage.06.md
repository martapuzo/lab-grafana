

## 🔹 Fase 6 – Alternar entre formatos CSV y JSON en la API

---

### 🎯 Objetivo

Permitir que la misma API (`/camaras`) devuelva datos en formato `CSV` o `JSON` mediante un parámetro de URL (`?format=json`). Evaluar la compatibilidad del formato `JSON` con otros paneles y plugins de Grafana.

---

### 🗂️ Scaffolding (estructura)

* API activa: `http://api-node:3000/camaras`
* Añadido de soporte condicional:

  ```js
  const isJson = req.query.format === 'json';
  ```
* Formato de salida en JSON (ejemplo):

  ```json
  [
    { "time": "2025-06-18T08:00:00Z", "T": -3.2, "H": 85, "D": "Abierta", "C": "ACTIVO", "A": "INACTIVA" },
    ...
  ]
  ```

---

### 🪜 Pasos guiados

1. **Validar que el backend responde correctamente en JSON**

   * Accede en el navegador o con `curl` a:

     ```
     http://api-node:3000/camaras?camara=Camara_1&from=...&to=...&format=json
     ```

   * Deberías ver un array JSON bien formateado con claves `time`, `T`, `H`, `D`, `C`, `A`.

2. **Crear un nuevo datasource en Grafana (si necesario)**

   * Algunos plugins como **JSON API** (marcusolsson-json-datasource) pueden ser requeridos.
   * Configura `http://api-node:3000` como root URL.
   * La query puede dejarse como `/camaras?camara=${camara}&from=${__from:date:iso}&to=${__to:date:iso}&format=json`

3. **Crear un panel para explorar los datos JSON**

   * Usa tipo **Table**, **Stat** o **Time Series**.
   * Asocia los campos `T` o `H` como valores y `time` como timestamp.
   * Verifica que Grafana parsea correctamente el JSON plano.

4. **Comparar con el formato CSV**

   * Crea dos paneles idénticos con la única diferencia del formato:

     * Uno accede con `format=csv`
     * Otro con `format=json`
   * Compara legibilidad, latencia y compatibilidad

---

### 🎯 Retos

1. 🧪 **Comparar precisión y formato**

   * ¿Cuál se renderiza más rápido? ¿Cuál permite más opciones de transformación?

2. 🔁 **Crear un toggle de variable (`formato`)**

   * Permite al usuario elegir `csv` o `json` como parte del dashboard
   * Usa `${formato}` en la URL del panel

3. 🧩 **Evaluar compatibilidad con Diagram Panel**

   * Verifica si acepta datos de tipo `JSON` directamente (la mayoría no; requiere CSV)

---

### ✅ Validaciones

* ✅ El backend responde correctamente según `format=csv` o `format=json`
* ✅ Grafana puede consumir ambos formatos
* ✅ Puedes visualizar las mismas métricas (`T`, `H`, etc.) con uno u otro
* ✅ El selector de `formato` cambia la respuesta sin modificar el resto del panel

---

### 💬 Reflexión

En proyectos reales, tener APIs que entregan datos en múltiples formatos permite **reutilizar los endpoints** con distintos consumidores: dashboards, scripts, sistemas externos. Además, probar ambos formatos te permite **identificar limitaciones de cada plugin** y optimizar la integración visual. Esta flexibilidad hace tus dashboards más robustos y adaptables.
