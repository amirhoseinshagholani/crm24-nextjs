declare var global: any;

import GetContact from "@/services/getContact";
import GetSessionName from "@/services/getSessionName";
import Test from "@/services/test";
import { redirect } from 'next/navigation'

const Login = async () => {
  GetSessionName(); //  make sessionName

  const onSubmitting = async (e: FormData) => {
    "use server";
    const username = e.get("username")?.toString() || "";
    const password = e.get("password")?.toString() || "";
    // const loginData = { username, password };

    const response_sina_token = await fetch(
      "http://185.126.8.108/NOMS-BE/api/Authentication/LoginAsync",
      {
        cache: "no-cache",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "NetXpert",
          password: "@NetXpert#26200!551@",
        }),
      }
    );
    const sinaToken = await response_sina_token.text();

    const response_contact = await fetch(`http://185.126.8.108/NOMS-BE/API/NetExpert/GetCRMQueries`,
      {
        cache: 'no-cache',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': sinaToken
        },
        body:JSON.stringify({
          'sessionName':global.sessionName,
          'operation':`SELECT * FROM Contacts where cf_1123=${username};`,
          'CrmRequestType':1
        })
      }
    );

    const data_of_contact = await response_contact.json();

    // try{
      const contacts_melliCode = data_of_contact.result[0].cf_1123;
      if(contacts_melliCode == username){
        redirect('/panel');
      }
    // }catch{
    //   redirect('/404')
    // }
  };

  return (
    <div
      className="bg-slate-800 max-w-md mx-auto rounded-md"
      style={{ marginTop: "100px" }}
    >
      <div className="mt-10 p-1">
        <div className="p-4 pb-0 mt-5 flex flex-col justify-center items-center">
          <img src="/assets/images/logo-panel.png" width="280" alt="" />
          <p className="p-3 pt-10 text-slate-200 font-medium text-xl">
            جهت ورود کدملی و رمزعبور خود را وارد کنید
          </p>
          <p></p>
        </div>
        <form action={onSubmitting} className="flex flex-col p-5 pt-0">
          <input
            name="username"
            className="p-2 bg-slate-600 text-slate-50 rounded outline-none my-2"
            type="text"
            placeholder="نام کاربری"
          />
          <input
            name="password"
            className="p-2 bg-slate-600 text-slate-50 rounded outline-none my-2"
            type="text"
            placeholder="رمزعبور"
          />
          <button type='submit' className="p-3 mt-5 text-base bg-slate-950 text-slate-100 rounded-md mx-auto w-32">
            ورود
          </button>
        </form>
      </div>
      <div>
        <p className="text-slate-100 p-5"></p>
      </div>
    </div>
  );
};

export default Login;
