export default function ChooseBlueTeamButton(props) {
  return (
    <>
      <input
        className="blue_team"
        type="button"
        onClick={() => props.moveToBlueTeam(props.element)}
      />
    </>
  );
}
