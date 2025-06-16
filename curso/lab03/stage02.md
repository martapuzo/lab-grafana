## 🧩 Fase 2 – Navegabilidad entre paneles y preparación de filtros

---

### 🎯 Objetivo

Habilitar navegación desde los nodos del panel SCADA hacia dashboards de detalle, pasando variables para contextualizar la vista. Introducir la lógica de filtros simples basados en CSV.

---

### 🗂️ Scaffolding

* Dashboard actual: `dashboard-overview`
* Nuevo dashboard: `detalle-camara`
* Variables: `camara` (tipo `custom`)
* CSV de ejemplo montado en Codespaces: `/data/camaras.csv`

---

### 🪜 Pasos guiados

1. **Crear la variable `camara` en dashboard-overview**

   * ⚙️ (Dashboard settings) → Variables → `New`

     * **Name:** `camara`
     * **Type:** `Custom`
     * **Values:** `Vacuno,Porcino,Ovino`
     * **Include All Option:** ✅

2. **Actualizar los nodos para navegar a detalle**

   * Edita el Mermaid y añade enlaces con `click` como en este ejemplo:

     ```mermaid
        graph LR
        subgraph Cámara_1 [Cámara 1 - Vacuno]
            T1[🌡️ Temp: T1]
            H1[💧 Humedad: H1]
            D1[🚪 Puerta: D1]
            C1[⚙️ Compresor: C1]
            A1[🚨 Alarma: A1]
            DTL1[🔎 Detalle Vacuno]
        end

        subgraph Cámara_2 [Cámara 2 - Porcino]
            T2[🌡️ Temp: T2]
            H2[💧 Humedad: H2]
            D2[🚪 Puerta: D2]
            C2[⚙️ Compresor: C2]
            A2[🚨 Alarma: A2]
            DTL2[🔎 Detalle Porcino]
        end

        subgraph Cámara_3 [Cámara 3 - Ovino]
            T3[🌡️ Temp: T3]
            H3[💧 Humedad: H3]
            D3[🚪 Puerta: D3]
            C3[⚙️ Compresor: C3]
            A3[🚨 Alarma: A3]
            DTL3[🔎 Detalle Ovino]
        end

        click DTL1 "d/detalle-camara?var-camara=Vacuno" "Ver detalle Vacuno"
        click DTL2 "d/detalle-camara?var-camara=Porcino" "Ver detalle Porcino"
        click DTL3 "d/detalle-camara?var-camara=Ovino" "Ver detalle Ovino"

     ```

3. **Crear el dashboard `detalle-camara`**

   * Nuevo dashboard → Añadir panel vacío → Guardar como `detalle-camara`

4. **Agregar variable `camara` también en `detalle-camara`**

   * Mismo nombre: `camara`
   * Tipo: `Custom` o `Query` si quieres alimentar desde CSV en pasos futuros

5. **Probar la navegación**

   * Desde el panel principal, haz clic en cada cámara → debe abrir el `detalle-camara` con la variable `camara` aplicada.

6. **(Opcional)** Mostrar la variable activa

   * En un panel de texto o título, usa `$camara` para mostrar la cámara seleccionada.

---

### 🎯 Retos

1. 🔗 **Haz que los nodos individuales (ej: 🚨 Alarma) también naveguen al detalle**

   * *Tip:* Puedes usar `click A1 "..."` directamente sobre el nodo, no solo sobre el subgraph.

2. 🧪 **Simula que una de las cámaras dispara una alarma (nodo en rojo) y navega a su detalle**

   * *Tip:* Usa el estilo `fill:#f1948a` para la alarma y prueba si cambia el foco del usuario.

3. 📥 **Haz que el CSV de cámaras alimente dinámicamente los valores de la variable `camara`**

   * *Tip:* Si usas el plugin CSV como Data Source, en la variable `Query` selecciona la columna `camara` única con `distinct`.

---

### ✅ Validaciones

* Al hacer clic en una cámara, el dashboard de detalle se abre con la variable correcta.
* La URL refleja `?var-camara=...`
* La variable `camara` está presente y usable en ambos dashboards.

---

### 💬 Reflexión

Este paso representa el **paso de contexto** entre vista general y vista concreta, como en los SCADAs industriales. Aunque los datos aún no se visualizan, el marco de navegación está preparado para alimentar KPIs, indicadores o alertas específicas.