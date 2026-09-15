# Mini Service Desk

Proyecto hilo de la formación **"IA generativa y agéntica con Claude aplicada al ciclo de vida
del software"** (Neotalent Conclusion). Lo construimos entre la Sesión 2 y la Sesión 4 — cada
fase del Bloque 2 añade una pieza.

## Qué es

Una bandeja de incidencias pequeña, para un servicio de seguridad ficticio:

- Lista de tickets + ficha de cada incidencia.
- Clasificación automática de **prioridad** y **categoría** hecha con Claude.
- Panel de métricas básico (incidencias por sistema, por zona, por estado).

Los datos son inventados de cero — cero relación con clientes reales.

## De dónde sale cada pieza

| Sesión | Qué se añade |
|---|---|
| Sesión 2 | Este repo (fork) + el Project "Mini Service Desk" en Claude, con este README en el Knowledge |
| Sesión 3 | El spec de la funcionalidad (Fase 1), el diseño de las pantallas con Artifacts (Fase 2), y el desarrollo con Claude Code (Fase 3) |
| Sesión 4 | Tests y validación del dataset (Fase 4), despliegue (Fase 5, con la herramienta que prefieras) y una automatización en n8n para el triaje (Fase 6) |

## Estructura

```
data/
  tickets.json   → ~60 incidencias sintéticas, sin categoría ni prioridad todavía
```

El resto del proyecto (la app en sí) se construye a partir de la Sesión 3. Si estás en la
Sesión 2: no hace falta que exista código todavía — el reto de hoy es que Claude Code, al abrir
este repo, te genere un `CLAUDE.md` con lo que ha entendido del proyecto.

## Cómo empezar (Sesión 2)

1. Haz **Fork** de este repositorio a tu cuenta.
2. Clónalo en tu portátil.
3. Ábrelo con Claude Code y pídele que revise el repo y proponga un `CLAUDE.md`.

Si tu empresa bloquea GitHub, descarga el ZIP del repo desde el botón verde **Code**.

## Stack

HTML + CSS + JS plano, sin build — para que funcione en cualquier portátil sin instalar nada.
La clasificación de tickets la hace Claude Code sobre el repo, no el navegador: no hace falta
ninguna API key propia.
