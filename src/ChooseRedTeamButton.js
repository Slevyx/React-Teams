export default function ChooseRedTeamButton(props) {
  return (
    <>
      <input
        className="red_team"
        type="button"
        onClick={() => props.moveToRedTeam(props.element)}
      />
    </>
  );
}
