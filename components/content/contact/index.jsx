export default function Contact() {
  return (
    <section id="about" className="container px-5 my-10">
      <div>
        <fieldset>
          <div>
            <h4 className="font-bold text-xl">Personal Information!</h4>
            <p className="opacity-70">
              Use a permanent email address where you can receive mail
            </p>
          </div>
          <div className="mt-5">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg my-2 opacity-80">
                Username
              </label>
              <input
                type="text"
                id="name"
                className="py-2 px-2 shadow-lg dark:bg-gray-900"
                placeholder="input username"
              />
            </div>
          </div>
          <div className="mt-2">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg  my-2 opacity-80 ">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="py-2 px-2 shadow-lg dark:bg-gray-900"
                placeholder="input email"
              />
            </div>
          </div>
          <div className="mt-2">
            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg my-2 opacity-80">
                Email
              </label>
              <textarea
                id="message"
                name="message"
                className="mt-1 py-1 px-2 block w-full shadow-lg dark:bg-gray-900"
                placeholder="message.."
                defaultValue={""}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button className="px-3 py-2 bg-" type="submit">
              <a
                className={`bg-sky-800 btnMe relative mt-4 font-semibold   transition-all drop-shadow-[0px_5px_8px_rgba(0,0,0,.6)] hover:drop-shadow-[0px_10px_8px_rgba(0,0,0,.4)] hover:-translate-y-1 border-b-[5px] border-sky-900  w-fit rounded-lg  flex items-center justify-center bg-gradient-to-b text-white/70 hover:text-white py-2 px-10 focus:ring-2 ring-sky-800 ring-offset-2 `}
              >
                <p className="">My Project</p>
              </a>
            </button>
          </div>
        </fieldset>
      </div>
    </section>
  );
}
