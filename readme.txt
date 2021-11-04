PROYECTO FINAL
PRIMERA ENTREGA

Formato: link a un repositorio en Github con el proyecto cargado. Sugerencia: no incluir los node_modules.
Consigna

Deber�s entregar el estado de avance de tu aplicaci�n eCommerce Backend, que implemente un servidor de aplicaci�n basado en la plataforma Node.js y el middleware express. El servidor implementar� dos conjuntos de rutas agrupadas en routers, uno con la url base '/productos' y el otro con '/carrito'. El puerto de escucha ser� el 8080 para desarrollo y process.env.PORT para producci�n en glitch.com
Aspectos a incluir en el entregable

    El router base '/api/productos' implementar� cuatro funcionalidades: a. GET: '/:id?' - Me permite listar todos los productos disponibles � un producto por su id (disponible para usuarios y administradores) b. POST: '/' - Para incorporar productos al listado (disponible para administradores) c. PUT: '/:id' - Actualiza un producto por su id (disponible para administradores) d. DELETE: '/:id' - Borra un producto por su id (disponible para administradores)

    El router base '/api/carrito' implementar� tres rutas disponibles para usuarios y administradores: a. POST: '/' - Crea un carrito y devuelve su id. b. DELETE: '/:id' - Vac�a un carrito y lo elimina. c. GET: '/:id/productos' - Me permite listar todos los productos guardados en el carrito d. POST: '/:id/productos' - Para incorporar productos al carrito por su id de producto e. DELETE: '/:id/productos/:id_prod' - Eliminar un producto del carrito por su id de carrito y de producto

    Crear una variable booleana administrador, cuyo valor configuraremos m�s adelante con el sistema de login. Seg�n su valor (true � false) me permitir� alcanzar o no las rutas indicadas. En el caso de recibir un request a una ruta no permitida por el perfil, devolver un objeto de error. Ejemplo: { error : -1, descripcion: ruta 'x' m�todo 'y' no autorizada}

    Un producto dispondr� de los siguientes campos: id, timestamp, nombre, descripcion, c�digo, foto (url), precio, stock.

    El carrito de compras tendr� la siguiente estructura: id, timestamp(carrito), producto: { id, timestamp(producto), nombre, descripcion, c�digo, foto (url), precio, stock }

    El timestamp puede implementarse con Date.now()

    Comenzar a trabajar con el listado de productos y el carrito de compras en memoria del servidor, luego persistirlos en el filesystem.

A tener en cuenta

    Para realizar la prueba de funcionalidad hay dos opciones: a. Probar con postman cada uno de los endpoints (productos y carrito) y su operaci�n en conjunto. b. Realizar una aplicaci�n frontend sencilla, utilizando HTML/CSS/JS � alg�n framework de preferencia, que represente el listado de productos en forma de cards. En cada card figuran los datos del producto, que, en el caso de ser administradores, podremos editar su informaci�n. Para este �ltimo caso incorporar los botones actualizar y eliminar. Tambi�n tendremos un formulario de ingreso de productos nuevos con los campos correspondientes y un bot�n enviar. Asimismo, construir la vista del carrito donde se podr�n ver los productos agregados e incorporar productos a comprar por su id de producto. Esta aplicaci�n de frontend debe enviar los requests get, post, put y delete al servidor utilizando fetch y debe estar ofrecida en su espacio p�blico.

    En todos los casos, el di�logo entre el frontend y el backend debe ser en formato JSON. El servidor no debe generar ninguna vista.

    En el caso de requerir una ruta no implementada en el servidor, este debe contestar un objeto de error: ej { error : -2, descripcion: ruta 'x' m�todo 'y' no implementada}

    La estructura de programaci�n ser� ECMAScript, separada tres en m�dulos b�sicos (router, l�gica de negocio/api y persistencia ). M�s adelante implementaremos el desarrollo en capas. Utilizar preferentemente clases, constructores de variables let y const y arrow function.

    Realizar la prueba de funcionalidad completa en el �mbito local (puerto 8080) y en glitch.com
