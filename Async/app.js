function p1(params) {
    setTimeout(() => {
        console.log("Birinci Surec")
    }, 3000);
}

function p2(params) {
    setTimeout(() => {
        console.log("ikinci Surec")
    }, 2000);
}

function p3(){
   setTimeout(() => {
    console.log("Ucuncu Surec")
   }, 1000);
}
 
async function  tum() {

    await p1()
    await p2()
    await p3()

}

tum()