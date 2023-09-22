(() => {
    // función para obtener información de una película por Id
    function getMovieById(id: string) {
        console.log({ movieId: id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById(movieId: string) {
        console.log({ id: movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById(ActorId: string) {
        console.log({ ActorId });
    }

    // Crear una película
    interface Movie {
        title: string;
        description: string;
        rating: number;
        cast: string[];
    }
    function createMovie(movieInfo: Movie) {
        console.log({ ...movieInfo });
    }

    const actorValidation = (second: string) => {
        return true;
    };

    // Crea un nuevo actor
    function createActor(fullName: string, birthdate: Date): boolean {
        if (!actorValidation(fullName)) return false;

        console.log('Crear actor');
        return true;
    }

    const getPayAmount = ({
        isDead = false,
        isSeparated = true,
        isRetired = false,
    }): number => {
        if (isDead) return 1500;

        if (isSeparated) return 2500;

        return isRetired ? 3000 : 4000;
    };
})();
