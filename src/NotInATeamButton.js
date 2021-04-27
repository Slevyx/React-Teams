export default function NotInATeamButton(props) {
  return (
    <>
      <div>View Not In a Team Users:</div>
      <input
        className="goto_notinalist_button"
        type="button"
        onClick={() => props.visualizeNotInATeamUsers()}
      />
    </>
  );
}
