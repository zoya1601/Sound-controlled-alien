function p(){
    x=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dyHj8n8JP/model.json',k);
}
function k(){
x.classify(gotresults);
}
function gotresults(error,results){
    if (error) {
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("a").innerHTML="I can hear : "+results[0].label;
        document.getElementById("b").innerHTML="Accuracy : "+(results[0].confidence*100).toFixed(2)+"%";
        r=Math.floor(Math.random()*255)+1;
        g=Math.floor(Math.random()*255)+1;
        b=Math.floor(Math.random()*255)+1;
        document.getElementById("a").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("b").style.color="rgb("+r+","+g+","+b+")";
        i=document.getElementById("c");
        v=document.getElementById("d");
        z=document.getElementById("e");
        y=document.getElementById("f");
        if(results[0].label=="snap"){
        i.src="aliens-01.gif";
        v.src="aliens-02.png";
        z.src="aliens-03.png";
        y.src="aliens-04.png";
        }
        else if(results[0].label=="tap"){
            i.src="aliens-01.png";
            v.src="aliens-02.gif";
            z.src="aliens-03.png";
            y.src="aliens-04.png";   
        }
        else if(results[0].label=="clap"){
            i.src="aliens-01.png";
            v.src="aliens-02.png";
            z.src="aliens-03.gif";
            y.src="aliens-04.png";   
        }
        else {
            i.src="aliens-01.png";
            v.src="aliens-02.png";
            z.src="aliens-03.png";
            y.src="aliens-04.gif";   
        }
    }
    
}