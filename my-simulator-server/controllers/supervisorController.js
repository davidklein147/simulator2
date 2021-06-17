
function supervisorController(){
    function addTest(req, res){
        console.log("add test" + req.body);
        
    }
    return {
        addTest
    }
}
module.exports = supervisorController()