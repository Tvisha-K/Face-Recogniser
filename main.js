Webcam.set({

    width: 350,

    height: 300,

    image_format: "png",

    png_quality: 90

});

Webcam.attach("#camera");

console.log("ml5 version : " , ml5.version);

function take_pic(){

    Webcam.snap(function(cam_pic){

        document.getElementById("result").innerHTML = '<img id="pic" src = "' + cam_pic + '">';

    });

}

model = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5aBReFjm8/model.json" , model_loaded);

function model_loaded(){

    console.log("model loaded successfully");


}

function identify(){

    img = document.getElementById("pic");

    model.classify(img , get_result);

}

function get_result(error , result){

    if (error){

        console.error(error);

    }

    else{

        console.log(result);

        object_name = result[0].label;

        object_accuracy = result[0].confidence.toFixed(2)*100 + "%";

        if (result[0].confidence > 0.9 ){

            document.getElementById("object_name").innerHTML = object_name;

            document.getElementById("object_accuracy").innerHTML = object_accuracy;


        }

        else{

            document.getElementById("object_name").innerHTML = object_name + " Not very sure";

            document.getElementById("object_accuracy").innerHTML = object_accuracy + " The accuracy is low";


        }

         
    }
    
}