(() => {
    // arreglo de temperaturas celsius
    const recordedCelsiusTemps = [33.6, 12.34];

    // Dirección ip del servidor
    const serverIp = '123.123.123.123';

    // Listado de usuarios
    const userList = [
        { id: 1, email: 'fernando@google.com' },
        { id: 2, email: 'juan@google.com' },
        { id: 3, email: 'melissa@google.com' },
    ];

    // Listado de emails de los usuarios
    const userEmails = userList.map((u) => u.email);

    // Variables booleanas de un video juego
    const canJump = false;
    const canRun = true;
    const hasItems = false;
    const isLoading = false;

    // Otros ejercicios
    // tiempo inicial
    const initialTime = new Date().getTime();
    //....
    // 3 doritos después
    //...
    // Tiempo al final
    const finishingTime = new Date().getTime() - initialTime;

    // Funciones
    // Obtiene los libros
    function getBook() {
        throw new Error('Function not implemented.');
    }

    // obtiene libros desde un URL
    function getBookByUrl(url: string) {
        throw new Error('Function not implemented.');
    }

    // obtiene el área de un cuadrado basado en sus lados
    function calculateSquareArea(sideLength: number) {
        throw new Error('Function not implemented.');
    }

    // imprime el trabajo
    function printJob() {
        throw new Error('Function not implemented.');
    }
})();
