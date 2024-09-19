export default function AdminLogin() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="absolute top-[-20%] left-[-10%] bottom-[100%] h-[508px] w-[508px] rounded-full backdrop-blur-2xl bg-[radial-gradient(circle_farthest-side,#30248B,rgba(255,255,255,0))]"></div>
      <img className="absolute p-16" src="src/assests/logo.svg"></img>
      <div className="absolute bottom-[-10%] left-[70%] transform -translate-x-1/2 h-[508px] w-[508px] rounded-full blur-3xl bg-gradient-to-l from-accent from-[-20%] to-[#622e90] to-89%"></div>
      <div className="w-[473px] h-[524px] flex flex-col items-center justify-center bg-rectangle-shade rounded-lg backdrop-blur-2xl shadow-2xl">
        <h1 className="text-white font-extrabold text-5xl p-2 mb-10">
          Admin Panel
        </h1>
        <div className="w-1/2 flex flex-col items-center justify-center">
          <div className="p-3">
            <label className="text-secondary-50 font-semibold text-base">
              Username
            </label>
            <input
              className="w-[406px] h-[56px] rounded-lg p-1 bg-primary-80"
              type="text"
            />
          </div>
          <div className="mt-2">
            <label className="text-secondary-50 font-semibold text-base">
              Password
            </label>
            <input
              className="w-[406px] h-[56px] rounded-lg p-1 bg-primary-80"
              type="password"
            />
          </div>
        </div>
        <div className="w-[186px] h-[42px] mt-6 shadow-2xl bg-accent rounded-lg">
          <button className="w-full text-white py-2">Login</button>
        </div>
        <p className="text-secondary-50 p-2">
          <a href="mailto:someone@example.com">Forgot your password?</a>
        </p>
      </div>
    </div>
  );
}
