## 🔹 Fase 2 – Conectar el panel a un endpoint remoto (CSV plugin)

---

### 🎯 Objetivo

Configurar el plugin **marcusolsson-csv-datasource** para que consuma datos directamente desde una API remota en formato CSV. En este caso, desde el endpoint `http://api-node:3000/camaras`.

---

### 🗂️ Scaffolding (estructura)

* Backend Node.js ya desplegado (`api-node`) sirviendo CSV en `/camaras`
* Plugin instalado: `marcusolsson-csv-datasource`
* Dashboard nuevo o existente
* Panel tipo: **Time series** o **Table**

---

### 🪜 Pasos guiados

1. **Verificar que la API responde correctamente**

   * Abrir en navegador o con `curl`:

     ```bash
     curl "http://localhost:3000/camaras?camara=Camara_1&from=2025-06-18T06:00:00Z&to=2025-06-18T07:00:00Z"
     ```

   * Debes recibir una salida CSV válida con cabecera:

     ```
     time,T,H,D,C,A
     2025-06-18T06:00:00Z,-4.1,85,Abierta,ACTIVO,INACTIVA
     ...
     ```

2. **Crear la fuente de datos en Grafana**

   * Ir a: ⚙️ *Configuration* → *Data Sources* → *Add data source*
   * Buscar **CSV** y seleccionar **CSV from URL (Remote)**
   * Nombre: `CSV API Node`
   * URL base: `http://api-node:3000`
   * Timeout: `5000`
   * Método: `GET`
   * Headers: ninguno
   * Guardar y probar (✅)

3. **Crear un panel que consuma el CSV**

   * Ir a cualquier dashboard → *Add panel*

   * Tipo: `Time series` o `Table`

   * Fuente de datos: `CSV API Node`

   * URL completa (relativa al backend):

     ```
     /camaras?camara=Camara_1&from=2025-06-18T06:00:00Z&to=2025-06-18T07:00:00Z
     ```

   * Formato:

     * Timestamp column: `time`
     * Value column: `T` o `H`
     * Format: `CSV (default)`

4. **Visualizar resultados**

   * Grafana debe mostrar las curvas de temperatura (`T`) o humedad (`H`) en el tiempo
   * Cambia la columna en el panel para visualizar otras series

---

### 🎯 Retos

1. 🔀 **Cambia la columna del valor**

   * Visualiza la humedad (`H`) en vez de temperatura (`T`)

2. 🧪 **Forzar un rango sin datos**

   * Usa un rango futuro para verificar que el panel gestiona CSV vacío correctamente

3. ⚠️ **Valida el mensaje de error si el backend no responde**

   * Apaga el servicio `api-node` y observa el error que Grafana muestra

---

### ✅ Validaciones

* ✅ El panel se carga sin errores.
* ✅ La curva representa valores del CSV (temperatura, humedad…).
* ✅ El CSV tiene cabecera y se interpreta correctamente (`time` como eje X).
* ✅ El log del backend muestra las peticiones con `GET /camaras`.

---

### 💬 Reflexión

En esta fase hemos conectado **Grafana directamente a un backend real** que sirve CSV dinámico. A diferencia de Prometheus o InfluxDB, aquí tratamos **fuentes ligeras y bajo control**, ideales para PoC, entornos desconectados o simulaciones de sensores. Grafana se comporta como un **visualizador universal**, integrando datos de cualquier fuente HTTP sin esfuerzo.
