import * as React from "react";
import { Table, Typography } from "antd";
import "antd/dist/antd.css";
import { getDecisions } from "../utils/utils";

const { Column } = Table;

// markup
const IndexPage = () => {
  const [dec, setDec] = React.useState([]);

  const init = async () => {
    const result = await getDecisions();
    setDec(result.decisions);
  };

  React.useEffect(() => {
    init();
  }, []);

  return (
    <>
      <Table style={{ maxWidth: 1200, margin: "auto" }} dataSource={dec}>
        <Column title="ID" dataIndex="id" key="id" />
        <Column title="Title" dataIndex="title" key="title" />
        <Column
          title="Time created"
          dataIndex="created"
          key="created"
          render={(timestamp) => {
            const date = new Date(timestamp * 1000);
            const string =
              date.getDate() +
              "/" +
              (date.getMonth() + 1) +
              "/" +
              date.getFullYear() +
              " " +
              date.getHours() +
              ":" +
              date.getMinutes() +
              ":" +
              date.getSeconds();

            return <>{string}</>;
          }}
        />
        <Column title="Body" dataIndex="body" key="body" />
      </Table>
    </>
  );
};

export default IndexPage;
