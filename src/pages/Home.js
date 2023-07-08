import React from "react";
import { Button, Table } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div
        className="text-center mt-0"
        style={{
          backgroundColor: "grey",
          color: "white",
          fontFamily: "Arial",
          marginBottom: "",
        }}
      >
        <br />
        <h3
          className="p-3 d-inline-block"
          style={{
            border: "1px solid #56CCF2",
            borderRadius: "4px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          Get our Latest Album
        </h3>
        <Button
          style={{
            cursor: "pointer",
            display: "block",
            width: "70px",
            border: "2px solid #56CCF2",
            borderRadius: "50%",
            padding: "20px",
            fontSize: "30px",
            fontWeight: "200",
            margin: "20px auto",
            background: "inherit",
            color: "#56CCF2",
          }}
        >
          <strong>{`|>`}</strong>
        </Button>
        <br />
      </div>
      <div className="container mt-4 text-center">
        <h2 style={{ fontWeight: "bolder" }}>TOURS</h2>
        <Table striped className="mt-4">
          <tbody>
            <tr>
              <td>JUL16</td>
              <td>DETROIT, MI</td>
              <td>DTE ENERGY MUSIC THEATRE</td>
              <td>
                <Button
                  variant="info"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  BUY TICKETS
                </Button>
              </td>
            </tr>
            <tr>
              <td>JUL19</td>
              <td>TORONTO, ON</td>
              <td>BUDWEISER STAGE</td>
              <td>
                <Button
                  variant="info"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  BUY TICKETS
                </Button>
              </td>
            </tr>
            <tr>
              <td>JUL22</td>
              <td>BRISTOW, VA</td>
              <td>JIGGY LUBE LIVE</td>
              <td>
                <Button
                  variant="info"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  BUY TICKETS
                </Button>
              </td>
            </tr>
            <tr>
              <td>JUL29</td>
              <td>PHOENIX, AZ</td>
              <td>AK-CHIN PAVILION</td>
              <td>
                <Button
                  variant="info"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  BUY TICKETS
                </Button>
              </td>
            </tr>
            <tr>
              <td>AUG2</td>
              <td>LAS VEGAS, NV</td>
              <td>T-MOBILE ARENA</td>
              <td>
                <Button
                  variant="info"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  BUY TICKETS
                </Button>
              </td>
            </tr>
            <tr>
              <td>AUG7</td>
              <td>CONCORD, CA</td>
              <td>CONCORD PAVILION</td>
              <td>
                <Button
                  variant="info"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  BUY TICKETS
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <br />
      <div className="footer">
        <h1
          style={{
            fontFamily: "Times New Roman",
            fontWeight: "bold",
            display: "flex",
            padding: "20px",
            background: "#56CCF2",
            color: "white",
          }}
        >
          The Generics
        </h1>
      </div>
    </>
  );
};

export default Home;
