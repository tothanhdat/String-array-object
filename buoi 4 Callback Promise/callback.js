const getUp = (doing) => {
    doing();
};
const brushYourFace = (doing) => {
    doing();
};
const haveBreakfast = (doing) => {
    doing();
};
const main = () => {
    getUp(function() {
        brushYourFace(function() {
            haveBreakfast(function(){
                console.log(`Wellcome...`);
            })
        })
    })
}
main();