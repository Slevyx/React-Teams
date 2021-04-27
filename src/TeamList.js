import _ from "lodash";
import Male from "./male.png";
import Female from "./female.png";
import RedTeamButton from "./RedTeamButton";
import BlueTeamButton from "./BlueTeamButton";
import FullListButton from "./FullListButton";
import ChooseBlueTeamButton from "./ChooseBlueTeamButton";
import ChooseRedTeamButton from "./ChooseRedTeamButton";
import NotInATeamButton from "./NotInATeamButton";

export default function TeamList(props) {
  return (
    <>
      <div className="notinateam_container">
        <NotInATeamButton
          visualizeNotInATeamUsers={props.visualizeNotInATeamUsers}
        />
      </div>
      <div className="buttons_container">
        {props.isRedTeamPage ? (
          <>
            <FullListButton visualizeFullList={props.visualizeFullList} />
            <BlueTeamButton visualizeBlueTeam={props.visualizeBlueTeam} />
          </>
        ) : (
          <>
            <FullListButton visualizeFullList={props.visualizeFullList} />
            <RedTeamButton visualizeRedTeam={props.visualizeRedTeam} />
          </>
        )}
      </div>
      <ul className="list">
        {_.map(props.list, (element) => {
          return (
            <>
              <li
                className={
                  props.isRedTeamPage ? "red_team_row" : "blue_team_row"
                }
                id={element.key}
              >
                <table cellSpacing="20px">
                  <tr className="fields">
                    <td>Name</td>
                    <td>Surname</td>
                    <td>Gender</td>
                    <td>Change Team</td>
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
                      {props.isRedTeamPage ? (
                        <ChooseBlueTeamButton
                          element={element}
                          moveToBlueTeam={props.moveToBlueTeam}
                        />
                      ) : (
                        <ChooseRedTeamButton
                          element={element}
                          moveToRedTeam={props.moveToRedTeam}
                        />
                      )}
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
