import { IconBrandGithubFilled } from "@tabler/icons-react"

function GithubButton() {
    const link = "https://github.com/irychen/super-admin"
    return (
        <button
            onClick={() => {
                window.open(link, "_blank")
            }}
            className={
                "text-[#637381] cursor-pointer flex items-center justify-center p-[8px] hover:bg-[#f5f5f5] rounded-[50%] dark:hover:bg-[#212B36]"
            }
        >
            <IconBrandGithubFilled className={"text-[#637381]"} size={20} stroke={1.5}></IconBrandGithubFilled>
        </button>
    )
}

export default GithubButton
