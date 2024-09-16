export default function AdminLogin() {
  return (
    <div>
      <div className="flex w-full h-screen">
        <div className="lg:flex h-full w-1/2 items-center justify-center bg-secondary-color">
          <h1 className="text-2xl text-primary-color font-font-type font-bold">
            Family tree
          </h1>
        </div>
        <div className="w-1/2 h-full flex flex-col items-center justify-center bg-background">
          <div className="w-1/2 mx-8">
            <div className="my-5">
              <input
                className="w-full border-2 border-black bg-transparent rounded-xl p-2"
                value="Username"
              />
            </div>
            <div className="my-5">
              <input
                className="w-full border-2 border-black bg-transparent rounded-xl p-2"
                value="Password"
              />
            </div>
          </div>
          <div className="w-1/2 mt-6 shadow-2xl">
            <button className="w-full bg-primary-color text-background rounded-md py-1">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
