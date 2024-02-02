"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class YouTube {
    constructor(cameraMode, filter, burst, videoLength) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.videoLength = videoLength;
    }
    createStory() {
        console.log("Creating story");
    }
}
