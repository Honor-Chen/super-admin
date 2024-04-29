function NotFoundPage() {
    return (
        <div className={"not-found flex flex-col w-full items-center pt-[50px] pb-[20px]"}>
            <h1 className={"text-center text-8xl font-bold py-[20px]"}>404</h1>
            <h2 className={"text-2xl font-bold mb-[10px]"}>Oops! Page not found.</h2>
            <p className={"max-w-[400px] px-[15px] text-[#777777] text-center leading-[1.8]"}>
                The page you are looking for might have been removed, had its name changed or is temporarily
                unavailable.
            </p>
            <div className={"flex items-center mt-[20px] justify-center"}></div>
        </div>
    )
}

export default NotFoundPage
