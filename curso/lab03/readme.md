

# 🧭 Laboratorio SCADA en Grafana

---

### 🔹 Fase 1 – Crear el diagrama SCADA base con Mermaid

🎯 Construir una estructura visual fija (tipo blueprint industrial) con Diagram Panel, representando áreas, procesos o cámaras como bloques.

---

### 🔹 Fase 2 – Añadir nodos con identidad (R1, P1, X2...)

🎯 Asignar identificadores únicos a cada nodo del diagrama, que luego servirán para asociar valores, enlaces o comportamientos.

---

### 🔹 Fase 3 – Configurar paneles de detalle individuales

🎯 Crear dashboards vacíos para los nodos clave (p. ej. `dashboard-camara-1`, `detalle-proceso-porcino`, etc.) que se abrirán desde el overview.

---

### 🔹 Fase 4 – Añadir `click` en nodos con paso de variables

🎯 Hacer que al clicar en un nodo (por ejemplo `R1`), se abra un panel de detalle con una variable como `?var-camara=Vacuno` o `?var-area=P1`.

---

### 🔹 Fase 5 – Añadir filtro global al dashboard overview

🎯 Incluir una variable de tipo dropdown (`camara`, `área`, `tipo`) con valores extraídos del CSV, y que modifique lo que se muestra u oculta.

---

### 🔹 Fase 6 – Aplicar condicionales o visibilidad dinámica en Diagram Panel (si es viable)

🎯 Estudiar técnicas para simular estados visuales (colores, ocultar nodos, destacar flujos) en función de la variable seleccionada.

---

### 🔹 Fase 7 – Incrustar cajas de resumen/filtro visual en el layout

🎯 Añadir elementos SCADA-style como rectángulos con totales, cajas de estado, etiquetas de navegación, etc., combinando Diagram Panel con Text y Stat.

---

### 🔹 Fase 8 – Validar navegación y experiencia de usuario

🎯 Probar la experiencia de navegación fluida entre overview y detalle, asegurando el paso correcto de variables y el refresco entre paneles.
