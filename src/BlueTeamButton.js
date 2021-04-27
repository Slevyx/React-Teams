export default function BlueTeamButton(props) {
  return (
    <>
      <div>View Blue Team:</div>
      <input
        className="goto_blue_button"
        type="button"
        onClick={() => props.visualizeBlueTeam()}
      />
    </>
  );
}
