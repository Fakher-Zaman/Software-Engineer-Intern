abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) { }

    abstract createStory(): void;

    getReelTime(): number {
        return 10;
    }
}

// const photo = new TakePhoto("portrait", "black and white"); // Error: Cannot create an instance of an abstract class.

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter);
    }

    createStory(): void {
        console.log("Creating story");
    }
}

const photo = new Instagram("portrait", "black and white", 3);
console.log(photo);
console.log(photo.getReelTime());
photo.createStory();
