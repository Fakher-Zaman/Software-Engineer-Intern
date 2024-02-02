"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        return 10;
    }
}
// const photo = new TakePhoto("portrait", "black and white"); // Error: Cannot create an instance of an abstract class.
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    createStory() {
        console.log("Creating story");
    }
}
const photo = new Instagram("portrait", "black and white", 3);
console.log(photo);
console.log(photo.getReelTime());
photo.createStory();
