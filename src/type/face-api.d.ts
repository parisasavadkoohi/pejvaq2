declare module 'face-api.js' {
    export * from '@vladmandic/face-api';
}
declare module '@vladmandic/face-api' {
    import * as faceapi from 'face-api.js';
    export = faceapi;
}
