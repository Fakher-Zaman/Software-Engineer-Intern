interface TakePhoto {
    cameraMode: string;
    filter: string;
    burst: number;
}

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) { }
}

interface Story {
    createStory(): void;
}

class YouTube implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public videoLength: number
    ) { }

    createStory(): void {
        console.log("Creating story");
    }
}

export { }