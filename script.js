const badshaah = document.getElementById('badshaah');
const darshanraval = document.getElementById('darshanraval');
const honeysingh = document.getElementById('honeysingh');
const emiwaybantai = document.getElementById('emiwaybantai');
const raftaar = document.getElementById('raftaar');
let body = document.getElementById('body');
let title = document.getElementById('title');
var section = document.getElementById("section");
let controls = document.getElementById("controls")
let text = document.getElementById("text");
let textHeading = document.getElementById("heading");
let textAbout = document.getElementById("about");

var count=0;
const heading=["badshaah","Darshan raval","honey singh","emiway bantai","raftar"]
const about =[
    "Badshaah is a popular Indian singer, rapper, and music producer. He was born on November 19, 1985, in New Delhi, India, with his real name being Aditya Prateek Singh Sisodia. He is known for his contributions to the Indian music industry, particularly in the genres of hip-hop and rap. Badshah gained fame with his breakthrough single 'DJ Waley Babu' and has since released numerous hit songs. He is not only a talented musician but also a successful songwriter and music producer.",
    "Darshan Raval is an Indian singer, songwriter, and composer known for his work in the Indian music industry. He gained widespread popularity through his participation in the reality TV show India's Raw Star in 2014. After that, he has released several hit songs and music albums. Raval's most popular tracks include Tera Zikr, Chogada, Ek Ladki Ko Dekha Toh Aisa Laga, and Bhula Diya.",
    "Honey Singh, whose real name is Hirdesh Singh, is an Indian music producer, pop singer, and film actor. He is primarily known for his work in the Punjabi music industry and is often referred to as 'Yo Yo Honey Singh.' He gained widespread recognition for his unique fusion of Punjabi and Western music styles, which became popular in the late 2000s and early 2010s.",
    "Emiway Bantai is a well-known Indian rapper and hip-hop artist. His real name is Bilal Shaikh, and he gained popularity for his rap songs and performances in the Indian music industry. Emiway Bantai is known for his unique style and his contribution to the growing hip-hop scene in India. Some of his popular songs include Machayenge, Bantai, and Khatam. He has a significant fan following and has been a prominent figure in the independent music scene in India.",
    "Raftaar is a popular Indian singer, rapper, and songwriter. He was born on November 16, 1988, in Kerala, India. Raftaar's real name is Dilin Nair. He gained fame for his contributions to the Indian music industry, particularly in the hip-hop and rap genres. Some of his well-known songs and albums include Swag Mera Desi, Dhaakad from the movie Dangal, and Toh Dishoom from the movie Dishoom."
]
function removeClasses(){
    badshaah.removeAttribute("class");
    darshanraval.removeAttribute("class");
    honeysingh.removeAttribute("class");
    emiwaybantai.removeAttribute("class");
    raftaar.removeAttribute("class");
    title.removeAttribute("class");
    controls.removeAttribute("controls");
}
document.getElementById('forward').addEventListener("click",function(){   
    removeClasses();
    if(count===0){
        body.style.background="#6A025A"
        
        badshaah.classList.add("animateOnceMainToPrev");
        badshaah.style.left=-200+'px'
        badshaah.style.transform="rotate(180deg)";
    
        darshanraval.classList.add("animateOnceNextToMain");
        darshanraval.style.left=500+'px'
        darshanraval.style.transform="rotate(0deg)";
        
        honeysingh.classList.add("animateNextToNext");
        honeysingh.style.left=1200+"px";
        honeysingh.style.transform="rotate(180deg)";
        count+=1;
        title.innerText = "Darshan Raval";
    }
    else if(count===1){
        body.style.background="#04026A";

        badshaah.classList.add("animatePrevToPrev");
        badshaah.style.left=-900+'px'
        badshaah.style.transform="rotate(180deg)";

        darshanraval.classList.add("animateOnceMainToPrev");
        darshanraval.style.left=-200+'px'
        darshanraval.style.transform="rotate(180deg)";

        honeysingh.classList.add("animateOnceNextToMain");
        honeysingh.style.left=500+'px'
        honeysingh.style.transform="rotate(0deg)";

        emiwaybantai.classList.add("animateNextToNext");
        emiwaybantai.style.left=1200+'px'
        emiwaybantai.style.transform="rotate(180deg)";
        count+=1;
        title.innerText = "Honey Singh";
    }
    else if(count===2){
        body.style.background="#A24604"
        
        darshanraval.classList.add("animatePrevToPrev");
        darshanraval.style.left=-900+'px'
        darshanraval.style.transform="rotate(180deg)";

        honeysingh.classList.add("animateOnceMainToPrev");
        honeysingh.style.left=-200+'px'
        honeysingh.style.transform="rotate(180deg)";

        emiwaybantai.classList.add("animateOnceNextToMain");
        emiwaybantai.style.left=500+'px'
        emiwaybantai.style.transform="rotate(0deg)";

        raftaar.classList.add("animateNextToNext");
        raftaar.style.left=1200+'px'
        raftaar.style.transform="rotate(180deg)";
        count+=1;
        title.innerText = "Emiway Bantai";
    }
    else if(count===3){
        body.style.background="#23A204"
        
        honeysingh.classList.add("animatePrevToPrev");
        honeysingh.style.left=-900+'px'
        honeysingh.style.transform="rotate(180deg)";

        emiwaybantai.classList.add("animateOnceMainToPrev");
        emiwaybantai.style.left=-200+'px'
        emiwaybantai.style.transform="rotate(180deg)";

        raftaar.classList.add("animateOnceNextToMain");
        raftaar.style.left=500+'px'
        raftaar.style.transform="rotate(0deg)";
        count+=1;
        title.innerText = "Raftaar";
    }
    else{
        console.log(count)
    }
    
})

document.getElementById('back').addEventListener("click",function(){
    removeClasses()
    if(count===1){
        body.style.background="#750000";
        title.innerText = "Badshaah";

        badshaah.classList.add("animateOncePrevToMain")
        badshaah.style.left=500+'px'
        badshaah.style.transform="rotate(0deg)";
    
        darshanraval.classList.add("animateOnceMainToNext")
        darshanraval.style.left=1200+'px'
        darshanraval.style.transform="rotate(180deg)";
        
        honeysingh.classList.add("animateOnceNextToNext")
        honeysingh.style.left=1900+"px";
        honeysingh.style.transform="rotate(0deg)";
        count-=1;
    }
    else if(count===2){
        body.style.background="#6A025A";
        title.innerText = "Darshan Raval";

        badshaah.classList.add("animateOncePrevToPrev");
        badshaah.style.left=-200+'px';
        badshaah.style.transform="rotate(180deg)";

        darshanraval.classList.add("animateOncePrevToMain")
        darshanraval.style.left=500+'px'
        darshanraval.style.transform="rotate(0deg)";
        
        honeysingh.classList.add("animateOnceMainToNext")
        honeysingh.style.left=1200+"px";
        honeysingh.style.transform="rotate(180deg)";

        emiwaybantai.classList.add("animateOnceNextToNext")
        emiwaybantai.style.left=1900+"px";
        emiwaybantai.style.transform="rotate(0deg)";
        count-=1;
    }
    else if(count===3){
        body.style.background="#04026A";
        title.innerText = "Honey Singh";

        raftaar.classList.add("animateOnceNextToNext")
        raftaar.style.left=1900+"px";
        raftaar.style.transform="rotate(0deg)";

        emiwaybantai.classList.add("animateOnceMainToNext");
        emiwaybantai.style.left=1200+"px";
        emiwaybantai.style.transform="rotate(180deg)";

        honeysingh.classList.add("animateOncePrevToMain")
        honeysingh.style.left=500+'px'
        honeysingh.style.transform="rotate(0deg)";

        darshanraval.classList.add("animateOncePrevToPrev");
        darshanraval.style.left=-200+'px';
        darshanraval.style.transform="rotate(180deg)";

        count-=1;
    }
    else if(count===4){
        body.style.background="#A24604";
        title.innerText = "Emiway Bantai";

        raftaar.classList.add("animateOnceMainToNext");
        raftaar.style.left=1200+"px";
        raftaar.style.transform="rotate(180deg)";

        emiwaybantai.classList.add("animateOncePrevToMain")
        emiwaybantai.style.left=500+'px'
        emiwaybantai.style.transform="rotate(0deg)";

        honeysingh.classList.add("animateOncePrevToPrev");
        honeysingh.style.left=-200+'px';
        honeysingh.style.transform="rotate(180deg)";

        count-=1;
    }
    else{
        console.log(count)
    }
})

section.addEventListener("click",function(){
    removeClasses();
    if(section.getAttribute("data-custom-id")==="fade-in"){
        section.setAttribute("data-custom-id","fade-out")
        title.classList.add("animateRemoveBlock");
        controls.classList.add("animateRemoveBlock");
        title.style.visibility="hidden";
        controls.style.visibility="hidden";
        textHeading.innerText=heading[count];
        textAbout.innerText=about[count];
        text.classList.add("animateAddBlock");
        text.style.visibility="visible";
        text.style.opacity=1;

        if(count===0){
            badshaah.classList.add("animateMainToSide");
            darshanraval.classList.add("animateNextToOut");
            badshaah.style.left=100+"px";
            darshanraval.style.left=1900+"px";
        }
        else if(count===1){
            badshaah.classList.add("animatePrevToOut");
            darshanraval.classList.add("animateMainToSide");
            honeysingh.classList.add("animateNextToOut")
            badshaah.style.left=-900+"px"
            darshanraval.style.left=100+"px"
            honeysingh.style.left=1900+"px"
        }
        else if(count===2){
            darshanraval.classList.add("animatePrevToOut");
            honeysingh.classList.add("animateMainToSide");
            emiwaybantai.classList.add("animateNextToOut")
            darshanraval.style.left=-900+"px"
            honeysingh.style.left=100+"px"
            emiwaybantai.style.left=1900+"px"
        }
        else if(count===3){
            honeysingh.classList.add("animatePrevToOut");
            emiwaybantai.classList.add("animateMainToSide");
            raftaar.classList.add("animateNextToOut")
            honeysingh.style.left=-900+"px"
            emiwaybantai.style.left=100+"px"
            raftaar.style.left=1900+"px"
        }
        else if(count===4){
            emiwaybantai.classList.add("animatePrevToOut");
            raftaar.classList.add("animateMainToSide");
            emiwaybantai.style.left=-900+"px"
            raftaar.style.left=100+"px"
        }
        else{
            console.log(count)
        }
    }
    else{
        section.setAttribute("data-custom-id","fade-in");
        title.classList.add("animateAddBlock");
        controls.classList.add("animateAddBlock");
        title.style.visibility="visible";
        controls.style.visibility="visible";
        text.classList.add("animateRemoveBlock");
        text.style.visibility="hidden";
        text.style.opacity=0;

        if(count===0){
            badshaah.classList.add("animateSideToMain");
            darshanraval.classList.add("animateNextToIn");
            badshaah.style.left=500+"px"
            darshanraval.style.left=1200+"px"
        }
        else if(count===1){
            badshaah.classList.add("animatePrevToIn");
            darshanraval.classList.add("animateSideToMain");
            honeysingh.classList.add("animateNextToIn")
            badshaah.style.left=-200+"px"
            darshanraval.style.left=500+"px"
            honeysingh.style.left=1200+"px"
        }
        else if(count===2){
            darshanraval.classList.add("animatePrevToIn");
            honeysingh.classList.add("animateSideToMain");
            emiwaybantai.classList.add("animateNextToIn")
            darshanraval.style.left=-200+"px"
            honeysingh.style.left=500+"px"
            emiwaybantai.style.left=1200+"px"
        }
        else if(count===3){
            honeysingh.classList.add("animatePrevToIn");
            emiwaybantai.classList.add("animateSideToMain");
            raftaar.classList.add("animateNextToIn")
            honeysingh.style.left=-200+"px"
            emiwaybantai.style.left=500+"px"
            raftaar.style.left=1200+"px"
        }
        else if(count===4){
            emiwaybantai.classList.add("animatePrevToIn");
            raftaar.classList.add("animateSideToMain");
            emiwaybantai.style.left=-200+"px"
            raftaar.style.left=500+"px"
        }
        else{
            console.log(count)
        }
    }
})