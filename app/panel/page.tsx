const Panel = ({ children }: any) => {
  return (
    <div className="flex h-screen">
      <nav className="sidebar w-1/6 bg-gray-800 text-white">
        <div className="" dir="rtl">
          <a
            href="/panel"
            className="flex flex-col items-center pt-1 pb-5 mb-0"
          >
            <img
              src="/assets/images/logo-panel.png"
              width="200"
              className="mt-3"
            />
          </a>
          <hr className="bg-slate-900" />
          <ul className="sidebar-nav p-5">
            <li className="font-bold text-lg text-slate-200 pt-3">
              <a href="/panel" className="">
                پروفایل
              </a>
            </li>
            <li className="font-bold text-lg text-slate-200 pt-3">ترمینال</li>
            <li className="mr-4 pt-3 text-blue-400">
              <a href="/panel/simcard">
                <span> سیمکارت </span>
              </a>
            </li>
            <li className="mr-4 pt-3 text-blue-400">
              <a href="/panel/networks" className="sidebar-link">
                <span className="text-info"> شبکه </span>
              </a>
            </li>
            <li className="mr-4 pt-3 text-blue-400">
              <a href="/panel/modems" className="sidebar-link">
                <span className="text-info"> مودم </span>
              </a>
            </li>
            <li className="font-bold text-lg text-slate-200 pt-3">خرید بسته</li>
            <li className="font-bold text-lg text-slate-200 pt-3">پشتبانی</li>
            <li className="mr-4 pt-3 text-blue-400">
              <a href="/panel/tickets/post" className="sidebar-link">
                <span className="text-info"> ثبت تیکت </span>
              </a>
            </li>
            <li className="mr-4 pt-3 text-blue-400">
              <a href="/panel/tickets" className="sidebar-link">
                <span className="text-info"> مشاهده تیکت ها </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="main w-full">
        <nav className="bg-slate-600 p-2 flex">
          <a className="text-slate-100 font-md">
            {/* {currentUser.firstname + " " + currentUser.lastname + " "} به پنل */}
            به پنل مدیریت نت اکسپرت خوش آمدید
          </a>
        </nav>
        <main className="content">
          <div id="outlet" className="container-fluid p-0">
                
          </div>
        </main>

        <footer className="bg-slate-600 text-slate-100 text-center bottom-0 w-full fixed">
          <div>
            <div>
              <div>
                <p>
                  <a href="/panel" className="text-slate-400">
                    © netXpert - desine by AmirHosein
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Panel;
