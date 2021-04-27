export default function RedTeamButton(props) {
  return (
    <>
      <div>View Red Team:</div>
      <input
        className="goto_red_button"
        type="button"
        onClick={() => props.visualizeRedTeam()}
      />
    </>
  );
}
