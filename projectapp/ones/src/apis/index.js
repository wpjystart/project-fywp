import {INDEX} from "../commion/commions"
export class index {
  static getCat(cb){
    fetch(INDEX).then(response=>{
      response.json().then(data=>{
        cb(data)
        // console.log(data)
      })
    })
  }
}

