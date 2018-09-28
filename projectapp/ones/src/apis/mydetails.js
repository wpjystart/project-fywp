import {MYDETAILS} from "../commion/commions"
export class mydetails{
  static getCat(cb){
    fetch(MYDETAILS).then(response=>{
      response.json().then(data=>{
        cb(data)
        // console.log(data)
      })
    })
  }
}

