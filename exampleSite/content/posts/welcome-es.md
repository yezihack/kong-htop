---
title: "Bienvenido al tema Kong-Htop"
date: 2024-01-15
description: "Una publicación de bienvenida que muestra las características básicas del tema Kong-Htop"
tags: ["hugo", "tema", "ejemplo"]
categories: ["Tutorial"]
image: "https://via.placeholder.com/800x600"
---

## 👋 Bienvenido

¡Bienvenido al tema **Kong-Htop**! Este es un tema Hugo moderno y elegante con estilo de diseño glassmorfismo.

## ✨ Características del Tema

Este tema ofrece muchas características poderosas:

- 🎨 **Diseño Glassmorfismo Moderno** - Estilo de diseño UI con efecto de vidrio
- 🌓 **Soporte Completo de Modo Oscuro** - Detección automática de preferencias del tema del sistema
- 📱 **Diseño Responsivo** - Soporte perfecto para escritorio, tableta y dispositivos móviles
- 🏷️ **Nube de Etiquetas Moderna** - Tamaño de fuente dinámico y animaciones al pasar el ratón
- 📝 **Línea de Tiempo de Artículos** - Vista de lista compacta agrupada por año
- 🔍 **Función de Búsqueda Local** - Búsqueda local de texto completo basada en JSON
- 📚 **Tabla de Contenidos de Artículos** - Navegación de barra lateral generada automáticamente
- ⚡ **Alto Rendimiento** - Animaciones aceleradas por GPU y CSS optimizado

## 🚀 Inicio Rápido

### 1. Instalar el tema

```bash
git submodule add https://github.com/yezihack/kong-htop.git themes/kong-htop
```

### 2. Configurar el sitio

Copiar la configuración de ejemplo:

```bash
cp themes/kong-htop/exampleSite/hugo.toml ./
```

### 3. Crear artículo

```bash
hugo new posts/my-post.md
```

### 4. Vista previa local

```bash
hugo server
```

Visite `http://localhost:1313` para ver el resultado.

<!-- more -->

## 💡 Consejos para Escribir Artículos

### Usando Front Matter

```yaml
---
title: "Título del artículo"
date: 2024-01-15
description: "Descripción del artículo"
tags: ["etiqueta1", "etiqueta2"]
categories: ["categoría"]
image: "portada.jpg"
---
```

### Características de Markdown Compatibles

#### Listas

- Elemento 1
- Elemento 2
- Elemento 3

#### Bloques de código

```go
package main

import "fmt"

func main() {
    fmt.Println("¡Hola, Kong-Htop!")
}
```

#### Tablas

| Característica | Descripción | Estado |
|----------------|-------------|--------|
| Modo Oscuro | Cambio automático | ✅ |
| Búsqueda | Búsqueda local | ✅ |
| Responsivo | Adaptación móvil | ✅ |

#### Citas

> Este es un bloque de citas. Puede usarlo en artículos para enfatizar información importante.

#### Fórmulas Matemáticas (KaTeX)

Admite fórmulas matemáticas LaTeX:

$$E = mc^2$$

## 🎨 Personalizar el Tema

### Cambiar colores

Modificar la configuración de color en `hugo.toml`:

```toml
[params]
    link_color = "#268bd2"  # Color del enlace
    text_color = "#222"     # Color del texto
```

### Agregar redes sociales

```toml
[params]
    github_url = "https://github.com/your-username"
    twitter_url = "https://twitter.com/your-handle"
```

## 📊 Optimización del Rendimiento

Este tema ha sido optimizado para:

- ✅ Optimización de selectores CSS
- ✅ Animaciones aceleradas por GPU
- ✅ Carga de scripts bajo demanda
- ✅ Soporte de carga diferida de imágenes

## 🔗 Enlaces Útiles

- [Documentación Completa](https://github.com/yezihack/kong-htop/)
- [Guía de Inicio Rápido](https://github.com/yezihack/kong-htop/blob/main/GETTING_STARTED.md)
- [Kong-Htop GitHub](https://github.com/yezihack/kong-htop)
- [Sitio Web Oficial de Hugo](https://gohugo.io/)

## 📝 Próximos Pasos

1. **Editar Configuración** - Modificar `hugo.toml` para configurar tu sitio
2. **Crear Contenido** - Usar `hugo new posts/your-post.md` para crear nuevos artículos
3. **Personalizar Estilos** - Agregar estilos personalizados en `assets/css/`
4. **Implementar Sitio** - Implementar tu sitio en GitHub Pages, Netlify, etc.

## 🎉 ¡Feliz Escritura!

¡Ahora estás listo para comenzar a escribir! Disfruta usando el tema Kong-Htop.

---

**¿Necesitas Ayuda?** Consulta [GitHub Issues](https://github.com/yezihack/kong-htop/issues) o [Documentación de Hugo](https://gohugo.io/documentation/).

