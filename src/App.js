import "./styles.css";
import React, { useState } from "react";
import UsersList from "./UsersList";
import TeamList from "./TeamList";

export default function App() {
  const [usersList, setUsersList] = useState([]);
  const [blueList, setBlueList] = useState([]);
  const [redList, setRedList] = useState([]);
  const [notInATeamList, setNotInATeamList] = useState([]);
  const [isRedTeamPage, setisRedTeamPage] = useState(false);
  const [isBlueTeamPage, setisBlueTeamPage] = useState(false);
  const [isNotInATeamPage, setisNotInATeamPage] = useState(false);

  const generateUsersCall = async () => {
    const response = await fetch("https://randomuser.me/api");
    const json = await response.json();
    setUsersList([...usersList, json.results[0]]);
    setNotInATeamList([...notInATeamList, json.results[0]]);
  };

  const moveToBlueTeam = (selectedElement) => {
    if (isRedTeamPage) {
      redList.splice(
        redList.findIndex((element) => element.id === selectedElement.id),
        1
      );
      setBlueList([...blueList, selectedElement]);
    } else {
      if (
        blueList.findIndex((element) => element.id === selectedElement.id) ===
          -1 &&
        redList.findIndex((element) => element.id === selectedElement.id) === -1
      ) {
        setBlueList([...blueList, selectedElement]);
        notInATeamList.splice(
          notInATeamList.findIndex(
            (element) => element.id === selectedElement.id
          ),
          1
        );
      }
    }
  };

  const moveToRedTeam = (selectedElement) => {
    if (isBlueTeamPage) {
      blueList.splice(
        blueList.findIndex((element) => element.id === selectedElement.id),
        1
      );
      setRedList([...redList, selectedElement]);
    } else {
      if (
        redList.findIndex((element) => element.id === selectedElement.id) ===
          -1 &&
        blueList.findIndex((element) => element.id === selectedElement.id) ===
          -1
      ) {
        setRedList([...redList, selectedElement]);
        notInATeamList.splice(
          notInATeamList.findIndex(
            (element) => element.id === selectedElement.id
          ),
          1
        );
      }
    }
  };

  const visualizeBlueTeam = () => {
    setisBlueTeamPage(true);
    setisRedTeamPage(false);
    setisNotInATeamPage(false);
  };

  const visualizeRedTeam = () => {
    setisRedTeamPage(true);
    setisBlueTeamPage(false);
    setisNotInATeamPage(false);
  };

  const visualizeFullList = () => {
    setisRedTeamPage(false);
    setisBlueTeamPage(false);
    setisNotInATeamPage(false);
  };

  const visualizeNotInATeamUsers = () => {
    setisRedTeamPage(false);
    setisBlueTeamPage(false);
    setisNotInATeamPage(true);
  };

  return (
    <div className="App">
      {isRedTeamPage || isBlueTeamPage ? (
        <TeamList
          list={isRedTeamPage ? redList : blueList}
          isRedTeamPage={isRedTeamPage}
          isNotInATeamPage={isNotInATeamPage}
          visualizeRedTeam={visualizeRedTeam}
          visualizeBlueTeam={visualizeBlueTeam}
          visualizeFullList={visualizeFullList}
          visualizeNotInATeamUsers={visualizeNotInATeamUsers}
          moveToBlueTeam={moveToBlueTeam}
          moveToRedTeam={moveToRedTeam}
        />
      ) : (
        <UsersList
          usersList={isNotInATeamPage ? notInATeamList : usersList}
          generateUsersCall={generateUsersCall}
          isNotInATeamPage={isNotInATeamPage}
          moveToBlueTeam={moveToBlueTeam}
          moveToRedTeam={moveToRedTeam}
          visualizeRedTeam={visualizeRedTeam}
          visualizeBlueTeam={visualizeBlueTeam}
          visualizeFullList={visualizeFullList}
          visualizeNotInATeamUsers={visualizeNotInATeamUsers}
        />
      )}
    </div>
  );
}
