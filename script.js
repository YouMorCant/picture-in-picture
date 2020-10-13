//declare constants for dynamic elements
const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Prompt to select media stream, pass to video stream, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        
        //causes video to play once loaded
        videoElement.onloadedmetadata= () => {
            videoElement.play();
        }
    } catch (error) {
     console.log('whoops, error here: ',error);   
    }
}

button.addEventListener("click", async () => {
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;
});

//On load
selectMediaStream();