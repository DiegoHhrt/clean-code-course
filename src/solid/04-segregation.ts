interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): void;
}
interface RunningBird {
    run(): void;
}
interface SwimmingBird {
    swim(): void;
}

class Tucan implements Bird, FlyingBird {
    eat(): void {
        throw new Error('Method not implemented.');
    }
    fly(): void {
        throw new Error('Method not implemented.');
    }
}

class Hummingbird implements Bird, FlyingBird {
    eat(): void {
        throw new Error('Method not implemented.');
    }
    fly(): void {
        throw new Error('Method not implemented.');
    }
}

class Penguin implements Bird, SwimmingBird {
    eat(): void {
        throw new Error('Method not implemented.');
    }
    swim(): void {
        throw new Error('Method not implemented.');
    }
}

class Ostrich implements Bird, RunningBird {
    eat(): void {
        throw new Error('Method not implemented.');
    }
    run(): void {
        throw new Error('Method not implemented.');
    }
}
