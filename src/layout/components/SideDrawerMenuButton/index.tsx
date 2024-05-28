import { Fragment, useState } from "react"
import { Drawer } from "antd"
import { IconMenu2, IconX } from "@tabler/icons-react"
import AdminLogo from "@/components/AdminLogo"
import RenderMenu from "@/layout/components/RenderMenu"

function toggle(flag: boolean) {
    return !flag
}

function SideDrawerMenuButton() {
    const [open, setOpen] = useState(false)

    return (
        <Fragment>
            <Drawer
                closable={false}
                width={240}
                placement="left"
                styles={{
                    body: {
                        padding: "10px 0px 0px 0px",
                    },
                    mask: { backgroundColor: "rgba(0, 0, 0, 0.1)" },
                }}
                open={open}
                onClose={() => setOpen(false)}
            >
                <div className={"logo flex justify-center h-[30px]"}>
                    <AdminLogo colorful size={30} />
                </div>
                <div
                    className={
                        "px-[10px] w-full text-[--color-primary]  whitespace-nowrap overflow-hidden text-[20px] py-[10px] font-semibold text-center"
                    }
                >
                    Super Admin
                </div>
                <div
                    className={"menu-container overflow-y-auto scrollbar"}
                    style={{
                        height: "calc(100vh - 90px)",
                    }}
                >
                    <RenderMenu />
                </div>
            </Drawer>

            <button
                onClick={() => {
                    setOpen(toggle)
                }}
                className={
                    "text-[#637381] cursor-pointer flex items-center justify-center p-[8px] hover:bg-[#f5f5f5] rounded-[50%] dark:hover:bg-[#212B36]"
                }
            >
                <IconMenu2 className={"text-[#637381]"} size={20} stroke={2}></IconMenu2>
            </button>
        </Fragment>
    )
}

export default SideDrawerMenuButton
