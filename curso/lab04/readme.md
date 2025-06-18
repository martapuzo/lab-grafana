

# 🧪 Laboratorio 04 – Datos planos: uso de CSV y JSON

---

### 🔹 Fase 1 – Generar CSV desde un backend Node.js

🎯 Crear una API real que sirva datos en formato CSV con estructura `time,T,H,D,C,A`. Probar su funcionamiento vía navegador y `curl`.

---

### 🔹 Fase 2 – Conectar el panel a un endpoint remoto (CSV plugin)

🎯 Configurar el plugin **marcusolsson-csv-datasource** para leer datos directamente desde la API. Usar variables de rango (`__from`, `__to`) y cámara (`camara`) en la URL.

---

### 🔹 Fase 3 – Usar variables de Grafana para seleccionar cámara y rango

🎯 Crear variables de tipo `query` o `custom` (`camara`, `formato`) y vincularlas al panel para que Grafana construya correctamente la URL.

---

### 🔹 Fase 4 – Visualizar valores dinámicos en Diagram Panel desde CSV

🎯 Mostrar datos como temperatura (`T`), humedad (`H`) o estado de la puerta (`D`) coloreando o etiquetando nodos del diagrama.

---

### 🔹 Fase 5 – Validar el cambio de frecuencia temporal y muestreo

🎯 Comprobar cómo se adapta el CSV a distintos rangos de tiempo (5m, 1h, 6h, etc.) ajustando el `step` automáticamente. Validar en el gráfico de series temporales.

---

### 🔹 Fase 6 – Alternar entre formatos CSV y JSON en la API

🎯 Añadir un parámetro `?format=json` y usarlo para entregar los mismos datos en formato JSON. Probar el cambio desde Grafana y evaluar compatibilidad con otros plugins.

---

### 🔹 Fase 7 – Crear un layout dinámico con datos por cámara

🎯 Mostrar un panel Diagram con nodos representando cada cámara. Los valores (`T`, `A`, etc.) deben provenir de un CSV unificado y mostrarse visualmente.

---

### 🔹 Fase 8 – Validar interpolación, agrupamiento y límites

🎯 Usar opciones del CSV plugin para validar cómo se interpretan valores nulos, frecuencia irregular o límites visuales en Diagram Panel y otros paneles (Stat, Table).
