

## 🔹 Fase 7 – Crear un layout dinámico con datos por cámara

---

### 🎯 Objetivo

Diseñar un panel tipo SCADA con **Diagram Panel**, donde cada nodo represente una cámara específica y muestre valores dinámicos (`T`, `A`, etc.) tomados directamente de un CSV unificado servido por la API. El layout debe reflejar el estado actual de cada cámara en tiempo real.

---

### 🗂️ Scaffolding (estructura)

* Dashboard: `dashboard-overview`
* Panel principal: **Diagram Panel** con nodos `Cámara_1`, `Cámara_2`, `Cámara_3`
* Fuente de datos: `marcusolsson-csv-datasource`
* Endpoint API:
  `http://api-node:3000/camaras?camara=${camara}&from=${__from:date:iso}&to=${__to:date:iso}&format=csv`

---

### 🪜 Pasos guiados

1. **Crear un nuevo panel en el dashboard overview**

   * Tipo: `Diagram Panel`
   * Título: `Estado General por Cámara`

2. **Definir el gráfico base en Mermaid**

   ```mermaid
   graph TD
     C1[Cámara 1]
     C2[Cámara 2]
     C3[Cámara 3]
   ```

3. **Crear 3 variables de tipo `custom` o `query` (si no existen)**

   * `camara`: `Camara_1`,`Camara_2`,`Camara_3`
   * `formato`: `csv`,`json`
   * `__from`, `__to`: variables temporales ya incluidas en Grafana

4. **Configurar el datasource CSV**

   * URL:

     ```
     /camaras?camara=${camara}&from=${__from:date:iso}&to=${__to:date:iso}&format=${formato}
     ```
   * Campos esperados: `time`, `T`, `H`, `D`, `C`, `A`

5. **Vincular nodos del Mermaid a valores reales**

   * En Diagram Panel > *Mapping*:

     * Nodo: `C1`

       * Texto: `Cam1: ${T}`
       * Color: por `A` (`ACTIVA`=rojo, `INACTIVA`=verde)
     * Repetir para `C2` y `C3`

6. **Activar refresco automático y ajustar tiempo**

   * Tiempo: Últimos 30 minutos (`now-30m to now`)
   * Refresco: cada 15s o 30s

---

### 🎯 Retos

1. 🔁 **Permitir cambiar de cámara desde el selector**

   * Verifica que al seleccionar `Camara_2`, se actualicen los valores en `C2`

2. 🧪 **Mostrar una métrica adicional (como `H`)**

   * Añade un segundo valor en el mismo nodo (`T: ${T} – H: ${H}`)

3. 🎯 **Visualizar una alerta activa si el nodo tiene `A = ACTIVA`**

   * Usa color rojo o icono especial si la alarma está activa

---

### ✅ Validaciones

* ✅ Los 3 nodos (`C1`, `C2`, `C3`) se actualizan según los datos reales
* ✅ El texto muestra al menos `T` (temperatura) por cámara
* ✅ El color cambia según el estado `A`
* ✅ El panel responde a cambios en `camara`, `from/to` y `formato`

---

### 💬 Reflexión

Este ejercicio muestra cómo **combinar datos reales y visualización estructurada**, algo común en entornos industriales. Dominar estas integraciones te permite diseñar paneles que informan **de un vistazo**, sin necesidad de gráficos complejos. Además, trabajar con una API propia te da control total sobre lo que se visualiza.
