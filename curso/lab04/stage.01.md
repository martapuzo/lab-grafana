
## 🔹 Fase 1 – Generar CSV desde un backend Node.js

---

### 🎯 Objetivo

Crear un endpoint real (`/camaras`) que sirva datos en formato CSV estructurado con columnas: `time,T,H,D,C,A`. La salida debe variar según el rango horario (`from`, `to`) y la cámara (`camara`). Se probará su funcionamiento accediendo desde navegador y herramientas como `curl`.

---

### 🗂️ Scaffolding (estructura)

* Proyecto Node.js con `Express` ya incluido en el entorno (`api-node`)
* Endpoint accesible en: `http://api-node:3000/camaras`
* Parámetros de entrada:

  * `camara` → nombre como `Camara_1`, `Camara_2`, `Camara_3`
  * `from` y `to` → rango temporal en formato ISO
* Salida: CSV con cabecera `time,T,H,D,C,A`

---

### 🪜 Pasos guiados

1. **Verifica que el servicio esté activo**

   En Grafana Codespaces, comprueba que `api-node` esté escuchando:

   ```bash
   curl http://localhost:3000/camaras
   ```

2. **Llama al endpoint con parámetros**

   Por ejemplo:

   ```bash
   curl "http://localhost:3000/camaras?camara=Camara_1&from=2025-06-18T08:00:00Z&to=2025-06-18T09:00:00Z"
   ```

3. **Analiza la salida**

   Debes ver una respuesta como:

   ```csv
   time,T,H,D,C,A
   2025-06-18T08:00:00Z,-5.2,83,Abierta,ACTIVO,INACTIVA
   2025-06-18T08:01:00Z,-4.9,86,Cerrada,ACTIVO,INACTIVA
   ...
   ```

4. **Explora la lógica interna**

   El backend usa `date-fns` para adaptar el muestreo según el rango. Ejemplo:

   * Si `from` y `to` están a 10 min → se genera 1 punto por segundo
   * Si el rango es de 6h → 1 punto por minuto
   * Si es más amplio → 1 cada 10 min, o cada hora

5. **Parámetro inválido o sin datos**

   Prueba errores como:

   ```bash
   curl "http://localhost:3000/camaras?camara=NO_EXISTE"
   ```

   Debe devolver:

   ```json
   {
     "error": "Parámetro \"camara\" inválido. Opciones válidas: Camara_1, Camara_2, Camara_3"
   }
   ```

---

### 🎯 Retos

1. 🔁 **Modificar el número de cámaras o su nombre**

   * Edita el array `CAMARAS` en el código.

2. 🧪 **Probar distintos rangos horarios**

   * Lanza llamadas con `from` y `to` separados por 5m, 1h, 12h, 7d…

3. 🔀 **Cambiar la lógica de muestreo**

   * Ajusta los umbrales de `getIntervalFn()` si deseas granularidad diferente.

---

### ✅ Validaciones

* ✅ El endpoint responde en navegador y con `curl`.
* ✅ El CSV tiene cabecera correcta y valores generados dinámicamente.
* ✅ Soporta cámaras distintas y rangos de fecha/hora en ISO.
* ✅ Si los parámetros son erróneos, se obtiene error 400 con mensaje útil.

---

### 💬 Reflexión

Este paso transforma el laboratorio de estático a **dinámico y realista**. El backend simula sensores reales y servirá de base para prácticas posteriores con Grafana. Entender el formato CSV y cómo se estructura el endpoint es clave para poder conectarlo como fuente de datos visual.
