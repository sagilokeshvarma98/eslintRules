module.exports = {
    create(context:any){
        return {
            VariableDeclarator(node:any){
                if(node.init.value == "lokesh"){
                    context.report({
                        node: node,
                        message: "I think it's working"
                    });
                }
            }   
        }
    }
}