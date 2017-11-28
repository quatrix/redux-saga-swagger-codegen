interface User 
{
'name': string

'age': number

'address'?: number

}
interface Pong 
{
'result': string

}



interface pingRequest {
  type: 'API//ping//REQUEST',
}

interface pingSuccess {
  type: 'API//ping//SUCCESS',
     , 
}


export class pingAction {
  static get REQUEST() : string { return 'API//ping//REQUEST' }
  static get SUCCESS() : string { return 'API//ping//SUCCESS' }
  static get FAILURE() : string { return 'API//ping//FAILURE' }

  static request (parameters: {
  }) : pingRequest {

  return {
    ...parameters,
    type: 'API//ping//REQUEST',
  }
  }

  static success () : [object Object] {
    return {
        type: 'API//ping//SUCCESS',
    }
  }

  static failure () {
    return {
        type: 'API//ping//FAILURE',
    }
  }
}



interface createUserRequest {
  type: 'API//createUser//REQUEST',
   'body': User
, 
}

interface createUserSuccess {
  type: 'API//createUser//SUCCESS',
     , 
}


export class createUserAction {
  static get REQUEST() : string { return 'API//createUser//REQUEST' }
  static get SUCCESS() : string { return 'API//createUser//SUCCESS' }
  static get FAILURE() : string { return 'API//createUser//FAILURE' }

  static request (parameters: {
     'body': User
, 
  }) : createUserRequest {

  return {
    ...parameters,
    type: 'API//createUser//REQUEST',
  }
  }

  static success () : [object Object] {
    return {
        type: 'API//createUser//SUCCESS',
    }
  }

  static failure () {
    return {
        type: 'API//createUser//FAILURE',
    }
  }
}

