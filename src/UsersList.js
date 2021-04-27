import "./styles.css";
import React from "react";
import _ from "lodash";
import Male from "./male.png";
import Female from "./female.png";
import RedTeamButton from "./RedTeamButton";
import BlueTeamButton from "./BlueTeamButton";
import ChooseBlueTeamButton from "./ChooseBlueTeamButton";
import ChooseRedTeamButton from "./ChooseRedTeamButton";
import NotInATeamButton from "./NotInATeamButton";
import FullListButton from "./FullListButton";

export default function UsersList(props) {
  return (
    <>
      <input
        className="generate_users"
        type="button"
        value="Generate Users"
        onClick={() => props.generateUsersCall()}
      />
      <div className="notinateam_container">
        {props.isNotInATeamPage ? (
          <FullListButton visualizeFullList={props.visualizeFullList} />
        ) : (
          <NotInATeamButton
            visualizeNotInATeamUsers={props.visualizeNotInATeamUsers}
          />
        )}
      </div>
      <div className="buttons_container">
        <RedTeamButton visualizeRedTeam={props.visualizeRedTeam} />
        <BlueTeamButton visualizeBlueTeam={props.visualizeBlueTeam} />
      </div>
      <ul className="list">
        {_.map(props.usersList, (element, index) => {
          return (
            <>
              <li
                className={element.gender === "male" ? "male" : "female"}
                id={element.key}
              >
                <table cellSpacing="20px">
                  <tr className="fields">
                    <td>Name</td>
                    <td>Surname</td>
                    <td>Gender</td>
                    <td>Choose Team</td>
                  </tr>
                  <tr>
                    <td>{element.name.first}</td>
                    <td>{element.name.last}</td>
                    <td>
                      <img
                        src={element.gender === "male" ? Male : Female}
                        alt="..."
                        height={element.gender === "male" ? "50px" : "65px"}
                      />
                    </td>
                    <td>
                      <ChooseRedTeamButton
                        element={element}
                        moveToRedTeam={props.moveToRedTeam}
                      />
                      <ChooseBlueTeamButton
                        element={element}
                        moveToBlueTeam={props.moveToBlueTeam}
                      />
                    </td>
                  </tr>
                </table>
              </li>
              <hr></hr>
            </>
          );
        })}
      </ul>
    </>
  );
}
