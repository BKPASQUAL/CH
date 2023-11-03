import React, { useState, useEffect } from "react";
import { InputPicker } from "rsuite";
import { Input, InputGroup } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import "../assets/scss/Items.css";
import { Button, Table } from "rsuite";
import Navbars from "./common/Navbars";
import Sidebar from "./common/Sidebar";
import { Modal, ButtonToolbar, Placeholder } from "rsuite";
import AddItems from "./AddItems";

function Items() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  useEffect(() => {
    const handleShortcut = (event) => {
      if (event.key === "F2") {
        handleOpen();
      }
    };

    window.addEventListener("keydown", handleShortcut);

    return () => {
      window.removeEventListener("keydown", handleShortcut);
    };
  }, []);
  const [data, setData] = useState([
    {
      firstName: "John",
      lastName: "Doe",
      gender: "Male",
      age: 30,
      postcode: "12345",
      email: "john.doe@example.com",
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      gender: "Female",
      age: 25,
      postcode: "54321",
      email: "jane.smith@example.com",
    },
    // Add more data as needed
  ]);

  const datas = ["Eugenia", "Bryan", "Linda"].map((item) => ({
    label: item,
    value: item,
  }));

  const { Column, HeaderCell, Cell } = Table;

  const generateId = (() => {
    let id = 1;
    return () => id++;
  })();

  const addMockData = () => {
    // const newData = {
    //   id: generateId(),
    //   firstName: "New",
    //   lastName: "Item",
    //   gender: "Other",
    //   age: 35,
    //   postcode: "67890",
    //   email: "new.item@example.com",
    // };
    // setData((prevData) => [...prevData, newData]);
  };
  

  return (
    <div className="items-con-main">
      <h1>Items</h1>
      <div className="items-con">
        <div className="items-con-top">
          <div style={{ display: "flex", width: "20%" }}>
            <InputPicker
              data={datas}
              style={{ marginLeft: "20px" , border:"0.5px solid #b8b8b8" }}
              placeholder="Select category"
            />
          </div>
          <div style={{ display: "flex", marginRight: "12.5%", width: "20%" }}>
            <InputPicker
              data={datas}
              style={{ border:"0.5px solid #b8b8b8" }}
              placeholder="Select category"
            />
          </div>
          <div
            style={{
              display: "flex",
              marginRight: "4%",
              marginLeft: "4%",
              width: "30%",
            }}
          >
            <InputGroup style={{ width: "100%"  , border:"0.5px solid #b8b8b8"}}>
              <Input />
              <InputGroup.Button>
                <SearchIcon />
              </InputGroup.Button>
            </InputGroup>
          </div>
          <div>
            <Button
              color="blue"
              appearance="primary"
              onClick={handleOpen}
              style={{ width: "130%" }}
            >
              Add Item
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              style={{
                width: "auto",
                backgroundColor: "transparent",
                position: "fixed", // Fix the position
                top: "10%", // Center vertically
                left: "28%", // Center horizontally
              }}
            >
              <AddItems onClose={handleClose} />
            </Modal>
          </div>
        </div>
        <div className="items-con-mid">
          <Table
            height={600}
            data={data}
            onRowClick={(rowData) => {
              console.log(rowData);
            }}
          >
            <Column width={100} align="center" fixed>
              <HeaderCell>#</HeaderCell>
              <Cell>{(rowData, rowIndex) => rowIndex + 1}</Cell>
            </Column>

            <Column width={100} align="center">
              <HeaderCell className="items-con-mid-col">Id</HeaderCell>
              <Cell dataKey="id" />
            </Column>

            <Column width={200}>
              <HeaderCell>First Name</HeaderCell>
              <Cell dataKey="firstName" />
            </Column>

            <Column width={150}>
              <HeaderCell>Last Name</HeaderCell>
              <Cell dataKey="lastName" />
            </Column>

            <Column width={240}>
              <HeaderCell>Gender</HeaderCell>
              <Cell dataKey="gender" />
            </Column>

            <Column width={150}>
              <HeaderCell>Age</HeaderCell>
              <Cell dataKey="age" />
            </Column>

            <Column width={150}>
              <HeaderCell>Postcode</HeaderCell>
              <Cell dataKey="postcode" />
            </Column>

            <Column width={300}>
              <HeaderCell>Email</HeaderCell>
              <Cell dataKey="email" />
            </Column>
            <Column width={80} fixed="right">
              <HeaderCell>...</HeaderCell>

              <Cell style={{ padding: "6px" }}>
                {(rowData) => (
                  <Button
                    appearance="link"
                    onClick={() => alert(`id:${rowData.id}`)}
                  >
                    Edit
                  </Button>
                )}
              </Cell>
            </Column>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Items;
