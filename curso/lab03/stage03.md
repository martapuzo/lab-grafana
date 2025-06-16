## 🔍 Fase 3 – Filtros dinámicos y resumen visual por zona

---

### 🎯 Objetivo

Utilizar un CSV de cámaras como fuente de datos para alimentar filtros (dropdown), generar un resumen por zona y visualizar indicadores clave por cámara en un panel complementario al diagrama.

---

### 🗂️ Scaffolding

* CSV disponible en: `http://static-server:8080/camaras.csv`
* Data Source en Grafana: `CSV Datasource` (plugin `marcusolsson-csv-datasource`)
* Columnas del CSV esperadas:

```csv
camara,zona,temp,humedad,puerta,compresor,alarma
Vacuno,A,-2.4,78,Cerrada,Activo,Inactiva
Porcino,B,-1.7,83,Abierta,Activo,Activa
Ovino,C,-3.1,75,Cerrada,Inactivo,Inactiva
```

---

### 🪜 Pasos guiados

1. **Montar la Data Source CSV**

   * `Configuration → Data Sources → Add new`
   * Tipo: `CSV`
   * URL: `http://static-server:8080/camaras.csv`
   * Format: `Table`

2. **Crear la variable `zona`**

   * Dashboard settings → Variables

     * **Name:** `zona`
     * **Type:** `Query`
     * **Data source:** CSV
     * **Query:** `SELECT DISTINCT zona FROM File` (si está soportado)

       * *Si no funciona, usa tipo `custom` con `A,B,C` como valores por ahora.*
     * **Include All:** ✅

3. **Crear un panel resumen por zona**

   * Tipo: `Table` o `Stat`
   * Fuente: CSV
   * Filtro por zona:

     * Transformation → `Filter by value` → `zona = $zona`
   * Usa `Stat` para mostrar:

     * Temperatura media
     * Porcentaje de humedad
     * Estado de compresor y alarma (último valor)

4. **Añadir un segundo panel de tipo `Bar gauge`**

   * Agrupar por `camara`
   * Mostrar temperatura y humedad como series por cámara filtradas por zona

---

### 🎯 Retos

1. 🎚️ **Filtra y ordena las cámaras por temperatura ascendente**

   * *Tip:* Usa transformation `Sort by field`

2. 🧠 **Crea un panel que muestre solo las cámaras con la alarma activa**

   * *Tip:* Usa `Filter by value → alarma = Activa`

3. 🔁 **Haz que el diagrama Mermaid reaccione a `$zona`**

   * *Tip:* Usa `if` o lógica de condicionales en la definición (limitado, pero puedes simular subgraphs visibles según variable)

---

### ✅ Validaciones

* El desplegable `zona` filtra correctamente los paneles de resumen.
* Las métricas cambian dinámicamente según la zona seleccionada.
* La visualización es clara y estilizada con estética industrial.

---

### 💬 Reflexión

Con esta fase, el overview SCADA comienza a comportarse como un **dashboard operativo**, donde las cámaras se agrupan y analizan según criterios reales de negocio. Esta capacidad de filtrar y agrupar nos permite extender el modelo fácilmente a 10, 20 o 100 cámaras sin perder claridad.
