### Fase 2.2 – Añadir diagrama con dos bloques conectados

🎯 **Objetivo**
Crear un flujo visual simple con dos bloques conectados y aplicar clases Mermaid (`classDef`) para diferenciarlos semánticamente como entrada y salida.

🗂️ **Scaffolding**
Se continúa sobre el panel creado en la fase anterior.

🪜 **Pasos guiados**

1. Abre el panel Diagram creado anteriormente.
2. Sustituye el contenido del campo **Diagram definition** por el siguiente diagrama:


```mermaid
graph LR
  Pedido:::entrada --> Procesado:::salida

  classDef entrada fill:#003366,stroke:#ffffff,color:#ffffff;
  classDef salida fill:#ffffff,stroke:#003366,color:#003366;

```



3. Comprueba que los nodos `A-series` y `B-series` tienen estilos visuales distintos:

   * Fondo oscuro con texto blanco para `entrada`.
   * Contorno oscuro con fondo blanco para `salida`.

4. Haz clic en **Apply** para guardar el panel.

✅ **Validaciones**

* El grafo representa correctamente `A-series → B-series`.
* Se visualiza el cambio de color y borde definido por `classDef`.
* El grafo se sigue mostrando al cambiar entre `LR` y `TD`.

🎯 **Retos**

* Cambia los colores de las clases y verifica si se reflejan de inmediato.
* Usa una tercera clase (por ejemplo, `proceso`) con un estilo diferente y aplícala a un nuevo nodo.

💬 **Reflexión**

* ¿Qué ventajas ofrece separar semánticamente los nodos por clase?
* ¿Cómo mejora esto la legibilidad del proceso?
