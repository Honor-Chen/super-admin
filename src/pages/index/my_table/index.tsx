import MyTable from "@/components/MyTable"

function MyTablePage() {
    function getDataSource(params: any): Promise<any> {
        return new Promise(resolve => {
            setTimeout(() => {
                const { current, pageSize } = params
                // 100 items fake data
                const rawData = [
                    {
                        key: 1,
                        name: "John Brown",
                        age: 32,
                        address: "New York No. 1 Lake Park",
                        tags: ["nice", "developer"],
                    },
                    {
                        key: 2,
                        name: "Jim Green",
                        age: 42,
                        address: "London No. 1 Lake Park",
                        tags: ["loser"],
                    },
                    {
                        key: 3,
                        name: "Joe Black",
                        age: 32,
                        address: "Sidney No. 1 Lake Park",
                        tags: ["cool", "teacher"],
                    },
                    {
                        key: 4,
                        name: "Jim Red",
                        age: 32,
                        address: "London No. 2 Lake Park",
                        tags: ["nice", "developer"],
                    },
                    {
                        key: 5,
                        name: "Jim Red",
                        age: 32,
                        address: "London No. 2 Lake Park",
                        tags: ["nice", "developer"],
                    },
                    {
                        key: 6,
                        name: "Jim Red",
                        age: 32,
                        address: "London No. 2 Lake Park",
                        tags: ["nice", "developer"],
                    },
                    {
                        key: 7,
                        name: "Jim Red",
                        age: 32,
                        address: "London No. 2 Lake Park",
                        tags: ["nice", "developer"],
                    },
                    {
                        key: 8,
                        name: "Jim Red",
                        age: 32,
                        address: "London No. 2 Lake Park",
                        tags: ["nice", "developer"],
                    },
                    {
                        key: 9,
                        name: "Jim Red",
                        age: 32,
                        address: "London No. 2 Lake Park",
                        tags: ["nice", "developer"],
                    },
                    {
                        key: 10,
                        name: "Jim Red",
                        age: 32,
                        address: "London No. 2 Lake Park",
                        tags: ["nice", "developer"],
                    },
                    {
                        key: 11,
                        name: "Jim Red",
                        age: 32,
                        address: "London No. 2 Lake Park",
                        tags: ["nice", "developer"],
                    },
                    {
                        key: 12,
                        name: "Jim Red",
                        age: 32,
                        address: "London No. 2 Lake Park",
                        tags: ["nice", "developer"],
                    },
                    {
                        key: 13,
                        name: "Jim Red",
                        age: 32,
                        address: "London No. 2 Lake Park",
                        tags: ["nice", "developer"],
                    },
                    {
                        key: 14,
                        name: "Jim Red",
                        age: 32,
                        address: "London No. 2 Lake Park",
                        tags: ["nice", "developer"],
                    },
                    {
                        key: 15,
                        name: "Jim Red",
                        age: 32,
                        address: "London No. 2 Lake Park",
                        tags: ["nice", "developer"],
                    },
                ]
                resolve({
                    data: rawData.slice((current - 1) * pageSize, current * pageSize),
                    total: rawData.length,
                })
            }, 1000)
        })
    }

    return (
        <div className={"w-full h-full p-[20px]"}>
            <MyTable
                rowKey={"key"}
                fetchData={getDataSource}
                columns={[
                    { title: "Name", dataIndex: "name" },
                    { title: "Age", dataIndex: "age" },
                    { title: "Address", dataIndex: "address" },
                    { title: "Tags", dataIndex: "tags" },
                    {
                        title: "Action",
                        dataIndex: "action",
                        valueType: "select",
                    },
                ]}
            />
        </div>
    )
}

export default MyTablePage
