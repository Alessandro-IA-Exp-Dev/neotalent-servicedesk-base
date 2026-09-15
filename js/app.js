// Lógica de la interfaz — se construye en la Sesión 3, Fase 3 (Desarrollo):
// listar tickets, filtrar, ficha de detalle, clasificación de prioridad/categoría.
// De momento solo confirma que el dataset carga bien.

fetch("data/tickets.json")
  .then((r) => r.json())
  .then((tickets) => {
    document.getElementById("conteo").textContent =
      `${tickets.length} tickets cargados, todavía sin clasificar.`;
  })
  .catch(() => {
    document.getElementById("conteo").textContent =
      "No se ha podido cargar data/tickets.json.";
  });
