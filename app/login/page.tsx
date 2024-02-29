
declare var global: any;

import GetSessionName from "@/services/getSessionName";

const Login = async () => {

  GetSessionName();   //  make sessionName
  const sessionName = global.sessionName;

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
        <form className="flex flex-col p-5 pt-0">
          <input
            className="p-2 bg-slate-600 text-slate-50 rounded outline-none my-2"
            type="text"
            placeholder="نام کاربری"
          />
          <input
            className="p-2 bg-slate-600 text-slate-50 rounded outline-none my-2"
            type="text"
            placeholder="رمزعبور"
          />
          <button className="p-3 mt-5 text-base bg-slate-950 text-slate-100 rounded-md mx-auto w-32">
            ورود
          </button>
        </form>
      </div>
      <div><p className="text-slate-100 p-5">{sessionName}</p></div>
    </div>
  );
};

export default Login;
