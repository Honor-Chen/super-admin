import { ProColumns, ProTable } from "@ant-design/pro-components"
import { useLocation } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { useKeepAliveContext } from "keepalive-for-react"

const columns: ProColumns<{
    name: string
    sex: string
    age: number
    address: string
    job: string
    phone: string
    entryTime: string
}>[] = [
    {
        title: "姓名",
        align: "center",
        dataIndex: "name",
        key: "name",
    },
    // 入职时间
    {
        title: "入职时间",
        align: "center",
        dataIndex: "entryTime",
        key: "entryTime",
        valueType: "dateRange",
        render: (_, row) => <span>{row.entryTime}</span>,
    },
    {
        title: "性别",
        align: "center",
        dataIndex: "sex",
        key: "sex",
        valueType: "select",
        valueEnum: {
            男: {
                text: "男",
            },
            女: {
                text: "女",
            },
        },
    },
    {
        title: "年龄",
        align: "center",
        dataIndex: "age",
        key: "age",
    },
    {
        title: "地址",
        align: "center",
        dataIndex: "address",
        key: "address",
    },
    {
        title: "工作",
        align: "center",
        dataIndex: "job",
        key: "job",
    },
    {
        title: "电话",
        align: "center",
        dataIndex: "phone",
        key: "phone",
    },
]

//  10000 条数据
const dataSource = Array.from({ length: 10000 }, (_, index) => ({
    key: index,
    name: `Edward King ${index}`,
    entryTime: `2021-09-${index}`,
    sex: index % 2 === 0 ? "男" : "女",
    age: 32,
    address: `London, Park Lane no. ${index}`,
    job: "前端工程师",
    phone: "1234567890",
}))

function ProTablePage() {
    const divRef = useRef<HTMLDivElement>(null)
    const tableRef = useRef<HTMLDivElement>(null)
    const [tableY, setTableY] = useState(0)
    const historyTop = useRef(0)
    const location = useLocation()
    const key = location.pathname + location.search
    const [mounted, setMounted] = useState(false)
    const { active } = useKeepAliveContext()

    useEffect(() => {
        const dom = divRef.current
        if (tableRef.current && active) {
            tableRef.current?.scrollTo({
                top: historyTop.current,
            })
        }
    }, [active])

    useEffect(() => {
        const div = divRef.current
        if (div) {
            const resize = () => {
                const { height } = div.getBoundingClientRect() || {}
                setTableY(height)
            }
            window.addEventListener("resize", resize)
            resize()
            return () => window.removeEventListener("resize", resize)
        }
    }, [setTableY, active])

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div ref={divRef} className={"w-full h-full p-[8px]"}>
            {mounted && (
                <ProTable
                    virtual={true}
                    form={{}}
                    columnsState={{
                        persistenceKey: key,
                        persistenceType: "sessionStorage",
                    }}
                    pagination={false}
                    options={{
                        fullScreen: false,
                    }}
                    scroll={{ x: 2000, y: tableY - 254 }}
                    defaultSize={"small"}
                    rowKey={"name"}
                    columns={columns}
                    dataSource={dataSource}
                ></ProTable>
            )}
        </div>
    )
}

export default ProTablePage
