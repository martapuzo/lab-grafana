## 🔹 Fase 3 – Usar variables de Grafana para seleccionar cámara y rango

---

### 🎯 Objetivo

Configurar variables en el dashboard de Grafana para permitir seleccionar dinámicamente la cámara (`camara`) y adaptar el rango temporal de consulta (`from`, `to`). Esto se usará para construir URLs que alimenten directamente el panel con CSV desde la API Node.js.

---

### 🗂️ Scaffolding (estructura)

* Dashboard existente o nuevo
* Fuente de datos: **marcusolsson-csv-datasource**
* Variables necesarias:

  * `camara` → lista desplegable (`Camara_1`, `Camara_2`, `Camara_3`)
  * `__from` y `__to` → variables internas de Grafana para el rango temporal

---

### 🪜 Pasos guiados

1. **Crear la variable `camara`**

   * Ir a: ⚙️ *Dashboard settings* → *Variables*
   * Añadir nueva variable:

     * **Name**: `camara`
     * **Type**: *Custom*
     * **Values**: `Camara_1, Camara_2, Camara_3`
     * **Refresh**: *On Dashboard Load*
     * **Include All Option**: ❌ (no usar en este caso)
   * Guardar

2. **Comprobar variables internas**

   Las variables de tiempo `__from` y `__to` ya existen en Grafana. Se inyectan automáticamente cuando el usuario cambia el rango temporal.

3. **Modificar el panel con CSV para usar variables**

   * Editar el panel conectado al datasource CSV

   * En el campo **CSV endpoint URL**, usar:

     ```
     http://api-node:3000/camaras?camara=${camara}&from=${__from:date:iso}&to=${__to:date:iso}
     ```

   * Esto permite que Grafana reemplace dinámicamente los valores en cada recarga.

4. **Probar el funcionamiento**

   * Selecciona diferentes cámaras en el selector
   * Cambia el rango de tiempo (por ejemplo, Últimos 5m, Últimas 6h, Personalizado)
   * Grafana debería hacer peticiones al endpoint Node con los parámetros correctos

5. **Verificar en logs del backend**

   El servidor Node.js debe registrar algo como:

   ```
   [INFO] GET /camaras - camara=Camara_2, from=2025-06-18T06:00:00Z, to=2025-06-18T08:00:00Z, intervalo=1minute
   ```

---

### 🎯 Retos

1. 🔀 **Usar también una variable `formato`**

   * Crea una nueva variable `formato` con valores `csv,json`
   * Modifica la URL del panel para usar: `&format=${formato}`

2. 💡 **Mostrar el valor de la variable en el título del panel**

   * En el título del panel escribe: `Cámara: ${camara}`

3. 🧪 **Probar valores inválidos**

   * Edita la variable e introduce un valor inexistente (`Camara_X`) para observar la respuesta de error desde la API

---

### ✅ Validaciones

* ✅ El panel usa correctamente los valores de `camara`, `__from`, `__to` en la URL.
* ✅ El selector de cámara aparece en la parte superior del dashboard.
* ✅ El backend recibe las peticiones con parámetros ISO válidos.
* ✅ Cambiar el rango o cámara actualiza el contenido del panel automáticamente.

---

### 💬 Reflexión

Esta fase demuestra la **interactividad real** de Grafana con fuentes externas. En lugar de usar datos estáticos o tiempos fijos, todo se adapta al input del usuario. La combinación de variables + datasource remoto convierte Grafana en un **frontend visual dinámico**, incluso sin una base de datos tradicional detrás.
