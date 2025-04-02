class myPromise{
    constructor(executorFn){
        this._state='pending'
        this._SuccessCallbacks=[];
        this._errorCallbacks=[];
        executorFn(this.resolverFunction.bind(this),this.rejectorFunction.bind(this));

        
    }
    then(cb){
        this._SuccessCallbacks.push(cb);
        return this;


    }
    catch(cb){
        this._errorCallbacks.push(cb);
        return this;
    }
    resolverFunction(){
        this._state='fulfilled'
        this._SuccessCallbacks.forEach((cb)=>cb())

    }
    rejectorFunction(){
        this._state='rejected'
        this._errorCallbacks.forEach((cb)=>cb())



    }
}






function wait(seconds){
    const p= new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(),seconds*1000);

    });
    return p;
}

wait(10)
.then(()=>console.log(`promise resolved after 10 sec`))
.catch(()=>console.log(`promise rejected after 10 sec`))
.finally(()=>console.log(` I will run every time `))