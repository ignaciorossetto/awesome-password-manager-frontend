
const Home = () => {
  return (
    <div
    className="flex flex-col justify-center items-center  "
    >
        <main
        className="container mt-5 "
        >
            <div
            className="my-5"
            >
                <h1
                className="text-3xl sm:text-5xl font-normal text-center"
                >
                    Open Source
                </h1>
                <h1
                className="text-3xl sm:text-5xl font-normal text-center"
                >
                    Password Manager
                </h1>
            </div>
            <div
            className="px-2 flex items-center justify-center my-8"
            >
                <p
                className="text-xl sm:text-2xl text-center font-thin w-[400px]"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui facere aliquam facilis ex, ducimus.
                </p>
            </div>
            <div className="flex flex-col items-center gap-5 font-semibold text-lg">
                <button
                className="w-[200px] px-5 py-3 text-center border-2 bg-black text-white rounded-lg hover-border-animation"
                >Sign Up</button>
                <p>Or</p>
                <button
                className="w-[200px] px-5 py-3 text-center border-2 bg-black text-white rounded-lg hover-border-animation"
                >Self Host</button>
            </div>

        </main>
    </div>
  )
}

export default Home