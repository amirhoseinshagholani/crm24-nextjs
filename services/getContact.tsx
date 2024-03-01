
declare var global:any;

const GetContact = (loginData:{username:string,password:string}) => {
  const sessionName = global.sessionName;
  const username = loginData.username;
  const password = loginData.password;
  return "hii " + username;
};

export default GetContact;
