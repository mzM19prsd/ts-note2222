{
    //tpye aliases
    type Text=string;
    const message:Text='hi'

    type Sutdent={
        name:string,
        age:number
    }
    const student:Sutdent={
        name:'qwe',
        age:123
    }

    //union type
    type Direction='left'|'right'|'up'|'down'
    function move(dir:Direction){
        console.log(dir)
    }
    
    //discriminative union
    type Fail={
        result:'fail',
        reason:string
    }
    type Success={
        result:'success',
        response:{
            body:'logged in'
        }
    }
    type LoginState=Fail|Success;
    function login(res:LoginState){
        if(res.result==='success'){
            console.log(res.response.body)
        }else{
            console.log(res.reason)
        }
    }
    
    login({ 
        result:'fail',
        reason:'rmsid'
    })
}