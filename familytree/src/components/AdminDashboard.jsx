export default function AdminDashboard() {
  return (
    <div className="h-screen w-screen bg-primary-100 flex items-center">
      <div className="relative w-[230px] h-[720px] mx-12 bg-rectangle-shade rounded-lg backdrop-blur-2xl shadow-2xl">
        <div className="flex justify-center">
          <img className="p-5" src="src/assests/logo.svg"></img>
        </div>
        <div className="flex flex-col items-center justify-center">
          <button className="flex items-center justify-center w-[190px] h-[42px] text-white shadow-2xl mt-6 bg-accent rounded-lg py-2">
            <svg
              class="h-8 w-8 text-white p-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
              />
            </svg>
            Dashboard
          </button>
          <button className="flex items-center justify-center w-[190px] h-[42px] text-white shadow-2xl mt-6 bg-accent rounded-lg py-2">
            <svg
              class="h-8 w-8 text-white p-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Members
          </button>
          <button className="flex items-center justify-center w-[190px] h-[42px] text-white shadow-2xl mt-6 bg-accent rounded-lg py-2">
            <svg
              class="h-8 w-8 text-white p-1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <rect x="3" y="15" width="6" height="6" rx="2" />{" "}
              <rect x="15" y="15" width="6" height="6" rx="2" />{" "}
              <rect x="9" y="3" width="6" height="6" rx="2" />{" "}
              <path d="M6 15v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1" />{" "}
              <line x1="12" y1="9" x2="12" y2="12" />
            </svg>
            Tree
          </button>
        </div>
        <div className="absolute flex flex-col items-center justify-center bottom-0 p-5">
          <button className="flex items-center justify-center w-[190px] h-[42px] text-white shadow-2xl mt-6 bg-accent rounded-lg p-2">
            <svg
              class="h-8 w-8 text-white p-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Account
          </button>
          <div>
            <button className="flex items-center justify-center w-[190px] h-[42px] text-white shadow-2xl mt-6 bg-accent rounded-lg p-2">
              <svg
                className="h-8 w-8 text-white p-1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />{" "}
                <path d="M7 12h14l-3 -3m0 6l3 -3" />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
