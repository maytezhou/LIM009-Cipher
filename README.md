#### Definición del producto

En el README.md, cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso para definir el producto final a nivel de experiencia y de interfaz.

- Quiénes son los principales usuarios de producto.
Los principales usuarios de la app Stand up,Speak out, son mujeres de 15 a 49 años que han sido víctimas de maltrato físico y/o psicológico ,personas que conocen a alguien que sea vícitma de violencia de género y personas que desean ser parte de la comunidad Stand up,Speak out,una comunidad que busca reducir los altos índices de violencia de género en el Perú.
- Cuáles son los objetivos de estos usuarios en relación con tu producto.
Los objetivos de los usuarios son hacer denuncias principalmente de manera anónima,aunque también tienen la posibilidad de colocar sus nombres y apellidos.Los que realizan la denuncia pueden ser la propias mujeres víctimas de violencia de género o personas que conocen el caso de alguna mujer que esta pasando por ese tipo de situación.Además,los usuarios también tienen el objetivo de ser parte de una comunidad que luche contra la violencia de género.
- Cómo crees que el producto que estás creando está resolviendo sus problemas.
Esta app es una forma más conveniente y fácil de relizar una denuncia.A muchas mujeres le es muy difícil tomar la decisión de ir a una comisaría para denunciar a sus agresores.Por otro lado muchas personas que tienen conocidos que son víctimas de violencia prefieren mantenersee en silencio por miedo a represalias.La idea es quecuando la persona haga clic en enviar ,al momento de enviar su denuncia,el mensaje sea encriptado,que el texto no quede en el móvil y que nadie pueda ver lo que ha escrito.La idea es también que Stand up,Speak out vaya de la mano con la creación de una ley que salvaguarde la integridad de todas las personas que realizan una denuncia de manera anónima y las que no también.Por otro lado,aquellas personas que desean ser parte de la comunidad,al momento de crear su contraseña para registarse,primero tiene que escoger una opcion entre cifrar y decifrar.Para que asi,de esa manera sus cuentas tengan un nivel alto de seguridad y sea más fácil proteger la confidencialidad de cada una nuestras usuarias.
La idea es que Stand up,Speak Out cuente además también  con 3 secciones adicionales.Una seccion educativa,donde se suban videos educativos constantemente que les brinde información sobre todo el proceso que implica realizar una denuncia legal y  que se suban videos  de historias de superación de mujeres que fueron víctimas de violencia.Otra sección con la que contará es una sección  de noticias sobre trabajo y oportunidades laborales.Para que más y más mujeres tengan acceso a una educación y/o trabajo de calidad. Con estas tres secciones contribuiríamos de alguna manera con su desarrolo socioemocinal,psicológico y/o profesional.

#### Interfaz de usuario (UI)
<<<<<<< HEAD
Elegí la imagen de fondo color morado porque considero que es una imagen que representa muy bien los valores que la comunidad Stand up,Speak out representaría.Una comunidad de apoyo entre mujeres víctimas de violencia de género que buscan salir adelante y que juntas son más fuertes.

#### Scripts / Archivos

* `README.md`: debe explicar cómo descargar, instalar y ejecutar la aplicación
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.
* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  debe contener tu _markup_ (HTML) e incluir el CSS y JavaScript necesario.
* `src/cipher.js`: acá debes implementar el objeto cipher, el cual debe estar
  _exportado_ en el objeto global (`window`). Este objeto (`cipher`) debe
  contener dos métodos:
  - `cipher.encode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
    que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la izquierda en el alfabeto y `string` el mensaje
    (texto) que queremos descifrar.
* `src/index.js`: acá debes escuchar eventos del DOM, invocar `cipher.encode()`
  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.
* `test/cipher.spec.js`: este archivo contiene algunos tests de ejemplo y acá
  tendrás que implementar los tests para `cipher.encode()` y `cipher.decode()`.

## Parte opcional o “Hacker edition”

Las secciones llamadas “Hacker Edition” son opcionales. Si **terminaste** con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

La descripción general de este proyecto no menciona qué pasaría con las letras minúsculas y otros caracteres (como espacios, puntuación, ñ, ...). El boilerplate incluye algunos tests (comentados en principio) que puedes usar como punto de partida para implementar el soporte para estos casos.

Tampoco se menciona qué pasaría si el offset fuera negativo. Como parte del hacker edition te invitamos a explorar también esta caso por tu cuenta.

## Vamos a los detalles. Consideraciones Técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript (ES6).
En este proyecto NO está permitido usar librerías o frameworks, sólo
[vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).

No se debe utilizar la _pseudo-variable_ `this`.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_
y _lines_, y un mínimo del 50% de _branches_. El _boilerplate_ ya contiene el
setup y configuración necesaria para ejecutar los tests (pruebas) así como _code
coverage_ para ver el nivel de cobertura de los tests usando el comando `npm
test`.

El _boilerplate_ incluye tests (pruebas) de ejemplo como punto de partida.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio que contiene el _boilerplate_.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias y tests de ejemplo:

```text
./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── cipher.spec.js
    ├── headless.js
    └── index.html
```

El _boilerplate_ incluye tareas que ejecutan [eslint](https://eslint.org/) y
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar el `HTML` y
`JavaScript` con respecto a una guías de estilos. Ambas tareas se ejecutan
automáticamente antes de ejecutar las pruebas (tests) cuando usamos el comando
`npm run test`. En el caso de `JavaScript` estamos usando un archivo de
configuración de `eslint` que se llama `.eslintrc` que contiene un mínimo de
información sobre el parser que usar (qué version de JavaScript/ECMAScript), el
entorno (browser en este caso) y las [reglas recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).
En cuanto a reglas/guías de estilo en sí,
usaremos las recomendaciones _por defecto_ de tanto `eslint` como `htmlhint`.

## Evaluación

Te aconsejamos revisar [la rúbrica](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vRktPN4ilZtkRN5tUb3DVhgeihwlzk63_-JI3moA-bXpKDbHDioAK2H3qbrwWNb0Ql4wX22Tgv7-PDv/pubhtml)
para ver la descripción detallada de cada _habilidad_ y cada _nivel_. Esta es una lista de todas las habilidades involucradas en este proyecto y que evaluaremos cuando lo  completes:

### General

| Característica/Habilidad |
|--------------------------|
| Completitud |

### Habilidades Blandas

| Habilidad |
|-----------|
| Planificación y organización |
| Autoaprendizaje |
| Solución de problemas |
| Dar y recibir feedback |
| Adaptabilidad |
| Trabajo en equipo |
| Comunicación eficaz |
| Presentaciones |

### Habilidades Técnicas Front-end

| Habilidad |
|-----------|
| **CS** |
| Lógica |
| Arquitectura |
| **SCM** |
| Git |
| GitHub |
| **JavaScript** |
| Estilo |
| Nomenclatura/semántica |
| Funciones/modularidad |
| Tests |
| **HTML** |
| Validación |
| Estilo |
| Semántica |
| **CSS** |
| DRY |
| Responsive |

### Habilidades Técnicas UX

| Habilidad |
|-----------|
| User Centricity |

***

## Pistas sobre cómo comenzar a trabajar en el proyecto

1. Antes que nada, asegúrate de tener un :pencil: editor de texto en
   condiciones, algo como [Atom](https://atom.io/) o
   [Code](https://code.visualstudio.com/).
2. Para ejecutar los comandos a continuación necesitarás una :shell:
   [UNIX Shell](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/shell),
   que es un programita que interpreta líneas de comando (command-line
   interpreter) así como tener [git](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/scm/01-git)
   instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
   ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
   también). Si usas Windows puedes usar [Git bash](https://git-scm.com/download/win),
   aunque recomendaría que consideres probar :penguin: GNU/Linux.
3. Haz tu propio :fork_and_knife: [fork](https://help.github.com/articles/fork-a-repo/)
   del repo de tu cohort, tus _coaches_ te compartirán un _link_ a un repo y te 
   darán acceso de lectura en ese repo.
4. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
5. 📦 Instala las dependencias del proyecto con el comando `npm
   install`. Esto asume que has instalado [Node.js](https://nodejs.org/) (que
   incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
7. A codear se ha dicho! :rocket:

## Recursos y temas relacionados

A continuación un video de Michelle que te lleva a través de la fórmula
matemática del Cifrado César y un par de cosas más que debes saber para
resolver este proyecto. ¡Escúchala con detenimiento y sigue sus consejos! :)

[![tips caesar cipher](https://img.youtube.com/vi/zd8eVrXhs7Y/0.jpg)](https://www.youtube.com/watch?v=zd8eVrXhs7Y)

Diseño de experiencia de usuario (User Experience Design):

- Ideación
- Prototipado (sketching)
- Testeo e Iteración

Desarrollo Front-end:

* [Valores](https://lms.laboratoria.la/cohorts/lim-2019-02-bc-core-lim009/courses/javascript/01-basics/01-values-variables-and-types)
* [Tipos](https://lms.laboratoria.la/cohorts/lim-2019-02-bc-core-lim009/courses/javascript/01-basics/01-values-variables-and-types)
* [Variables](https://lms.laboratoria.la/cohorts/lim-2019-02-bc-core-lim009/courses/javascript/01-basics/02-variables)
* [Control de flujo](https://lms.laboratoria.la/cohorts/lim-2019-02-bc-core-lim009/courses/javascript/02-flow-control/00-opening)
* [Tests unitarios](https://lms.laboratoria.la/cohorts/lim-2019-02-bc-core-lim009/courses/javascript/11-testing/00-opening)
* [Aprende más sobre `charCodeAt()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt)
* [Aprende más sobre `String.fromCharCode()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode)
* [Aprende más sobre `ASCII`](http://conceptodefinicion.de/ascii/)
* [Documentación de NPM](https://docs.npmjs.com/)
=======

Elegí la imagen de fondo color morado porque considero que es una imagen que representa muy bien los valores que la comunidad Stand up,Speak out representaría.Una comunidad de apoyo entre mujeres víctimas de violencia de género que buscan salir adelante y unirse a una misma causa porque saben que juntas son más fuertes.
El diseño es simple y sencillo porque da una sensación al usuario de seguridad,claridad, y precisión.
>>>>>>> 03355dfd1c1b71ea00a6f1be446de32d9ebeb0a5



## Checklist



* [✔] `README.md` incluye info sobre proceso y decisiones de diseño.
* [✔] `README.md` explica claramente quiénes son los usuarios y su relación con el producto.
* [✔] `README.md` explica claramente cómo el producto soluciona los problemas/necesidades de los usuarios.
* [✔] Usa VanillaJS.
* [✔] No utiliza `this`.
* [✔] Implementa `cipher.encode`.
* [✔] Implementa `cipher.decode`.
* [✔] Pasa linter con configuración provista.
* [✔] Pasa pruebas unitarias.
* [✔] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [✔] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [✔] Interfaz permite escribir un texto para ser cifrado.
* [✔] Interfaz muestra el resultado del cifrado correctamente.
* [✔] Interfaz permite escribir un texto para ser descifrado.
* [✔] Interfaz muestra el resultado del descifrado correctamente.

### Parte Opcional: "Hacker edition"

* [✔] Cifra/descifra minúsculas
* [✔] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [✔] Permite usar un `offset` negativo.
