export default function FullListButton(props) {
  return (
    <>
      <div>View Full List:</div>
      <input
        className="goto_full_list_button"
        type="button"
        onClick={() => props.visualizeFullList()}
      />
    </>
  );
}
