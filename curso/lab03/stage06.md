## 🟨 Fase 6 – Filtros visuales dinámicos con variables y condiciones

---

### 🎯 Objetivo

Añadir **filtros visuales dinámicos** al dashboard SCADA overview mediante variables y condiciones que permiten adaptar el diagrama y su contenido según selecciones del usuario (por ejemplo, filtrar por `zona`, `tipo de cámara`, o `estado`).

---

### 🗂️ Scaffolding

* CSV cargado con al menos los siguientes campos:

  * `camara`, `zona`, `estado`, `tipo`, `alarma`, etc.
* Dashboard overview con panel Diagram ya creado.
* Plugin CSV y Diagram Panel correctamente instalados.
* Variables definidas: `zona`, `estado`.

---

### 🪜 Pasos guiados

1. **Definir las variables**

   * Edita el dashboard `Overview SCADA`.
   * Crea variables:

     * `zona` → tipo *query*, desde CSV datasource.
     * `estado` → tipo *custom*, valores como `ACTIVA,INACTIVA`.
   * Marca ambas como *multi-value* y *incluye “All”*.

2. **Aplicar filtros en otros paneles**

   * En tablas o stats auxiliares, filtra por `$zona` y `$estado` para ver si funcionan correctamente.

3. **Editar el panel Diagram para usar filtros**

   * El contenido Mermaid no se puede filtrar dinámicamente desde variables directamente.
   * **Estrategia recomendada:**

     * Crear varios panels Diagram superpuestos o colapsables, cada uno asociado a un filtro distinto (por zona o estado).
     * Usar panel `Text` con links tipo:

       ```markdown
       [Ver Zona 1](d/overview-scada?var-zona=Zona_1)
       ```
     * O crear un dashboard duplicado por zona si lo prefieres jerárquico.

4. **Truco extra:** Usa *thresholds* en otros paneles (Stats o Table) que respondan al filtro para reforzar la interacción visual.

---

### 🎯 Retos

1. 🔄 **Selecciona una zona en el filtro y comprueba que los datos auxiliares cambian correctamente**

   * *Tip:* Usa una tabla para validar qué cámaras hay en la zona seleccionada.

2. 🎛️ **Crea una vista por `estado` y marca las alarmas activas visualmente**

   * *Tip:* Usa paneles tipo `Stat` con thresholds rojos cuando `alarma=ACTIVA`.

3. 🧩 **Diseña un panel por zona (duplicado del overview) y enlázalos desde botones o nodos**

   * *Tip:* Añade un `Text panel` con enlaces como:

     ```markdown
     [Zona 1](d/overview-zona1?var-zona=Zona_1)
     ```

---

### ✅ Validaciones

* Las variables de filtro aparecen arriba y son funcionales.
* Los datos en las tablas, stats o listas se adaptan a los filtros.
* La estructura jerárquica o segmentada por zonas mejora la claridad visual.

---

### 💬 Reflexión

Este tipo de **filtrado visual** es esencial para operadores que gestionan muchos activos. No todo cabe en un único overview: dar capacidad de filtrado permite que Grafana funcione como un SCADA adaptable y navegable, sin perder usabilidad.