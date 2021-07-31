function setup() {
    canvas= createCanvas(200,200);
    video = createCapture(VIDEO);
    canvas.center()
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5ncqFi2zE/model.json",ModelLoaded);
    }
    function draw() {
     image(video,0,0,200,200);
     classifier.classify(video, gotResult);
    }
    function ModelLoaded() {
        console.log("Model Loaded");
    }
    function gotResult(error, results) {
     if(error) {
         console.error(error);
     }
     else {
         console.log(results);
         document.getElementById("result_object_name").innerHTML = results[0].label;
         document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
     }
    }