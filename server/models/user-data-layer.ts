import { Connect, InsertQuery, getQuery } from "../db/dbconn";

const userDataLayer = {
  async insertFormDetails(FormDetails: any) {
    // console.log(FormDetails,"form insertformdetails");
    
    const values = [
      FormDetails.userName || null,
      FormDetails.userEmail || null,
      FormDetails.userPass || null,
      FormDetails.userRePass || null,
    ];
    const query = `INSERT INTO userdata.registrationdata

          (userName,userEmail,userPass)
      
          VALUES (?, ?, ?)`

    const connection = await Connect();

    if (!connection) {
      throw new Error(`Could not connect to database`);
    }
    return InsertQuery(connection, query, values).then((result) => {
        return result
    })
    .catch((error) =>{
        return error
    })
    .finally(() => {
        connection.end()
    })
  },

 async getFormDetails(userEmail:any){
  const query = `SELECT userEmail FROM userdata.registrationdata
  WHERE userEmail="${userEmail}";`
  const connection = await Connect();

  if (!connection) {
    throw new Error(`Could not connect to database`);
  }
  return getQuery(connection, query).then((result) => {
      return result
  })
  .catch((error) =>{
      return error
  })
  .finally(() => {
      connection.end()
  })
 },

 async getLoginDetails(userEmail:any){
  const query = `SELECT userEmail,userPass FROM userdata.registrationdata
  WHERE userEmail="${userEmail}";`
  const connection = await Connect();

  if (!connection) {
    throw new Error(`Could not connect to database`);
  }
  return getQuery(connection, query).then((result) => {
      return result
  })
  .catch((error) =>{
      return error
  })
  .finally(() => {
      connection.end()
  })
 }

};

export default userDataLayer;
