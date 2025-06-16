

## 🟦 Fase 5 – Navegabilidad entre paneles y paso de variables

---

### 🎯 Objetivo

Permitir que los usuarios naveguen desde el **overview SCADA** hacia paneles de **detalle por cámara o zona**, transmitiendo variables (`camara`, `zona`, `pedido`, etc.) a través de enlaces en nodos interactivos.

---

### 🗂️ Scaffolding

* Dashboard actual (`Overview SCADA`) ya creado.
* Al menos un dashboard adicional: `Detalle de Cámara`.
* Variable de tipo `zona` o `camara` definida en ambos dashboards.
* Diagrama Mermaid con nodos representando entidades seleccionables.

---

### 🪜 Pasos guiados

1. **Crear el dashboard de detalle**

   * Nombre: `Detalle de Cámara`
   * Añadir un panel tipo `Table` o `Stat` mostrando info basada en la variable `$camara`.
   * Agregar descripción clara con el título dinámico:
     `Detalle de: $camara`

2. **Ajustar variables**

   * En el dashboard de destino (`Detalle de Cámara`), define una variable:

     * Tipo: `Query`
     * Nombre: `camara`
     * Origen: campo `camara` del CSV

3. **Editar el diagrama del overview**

   * Añadir enlaces `click` en los nodos:

     ```mermaid
     graph LR
      C1[📦 Cámara 1]
      click C1 "d/detalle-camara?var-camara=Camara_1" "Ver detalles"
     ```
   * Este enlace abrirá el dashboard con la cámara preseleccionada.

4. **Validar paso de variables**

   * Al hacer clic en el nodo, se debe cargar el dashboard destino con el valor ya aplicado en el filtro.

5. **(Opcional) Añadir un botón de retorno**

   * En el dashboard de detalle, añade un `Text panel` con:

     ```markdown
     [🔙 Volver al overview](d/overview-scada)
     ```

---

### 🎯 Retos

1. 🧭 **Haz clic en una cámara desde el overview y valida que se abre el dashboard de detalle con sus datos**

   * *Tip:* Usa nombres de cámara exactos al declarar `var-camara=...`.

2. 🧩 **Agrega una cámara nueva al CSV y prueba que la navegación funciona sin romper nada**

   * *Tip:* Verifica que la variable `camara` la detecta automáticamente.

3. ⚙️ **Incluye un botón de "volver" en el panel de detalle**

   * *Tip:* Usa markdown plano con una URL relativa al overview.

---

### ✅ Validaciones

* Los nodos del overview redirigen correctamente a paneles de detalle.
* Las variables se transmiten en la URL y se aplican en destino.
* Los dashboards muestran contenido relevante según el valor de la variable.

---

### 💬 Reflexión

Esta fase introduce el concepto de **navegabilidad jerárquica**, fundamental en sistemas SCADA: se parte de una visión general y se profundiza solo en áreas necesarias. Permite al operador mantenerse enfocado y navegar entre vistas sin esfuerzo.