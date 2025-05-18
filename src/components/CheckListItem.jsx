const CheckListItem = (checkListItem) => {
  return <li>
    {checkListItem.name}
    <input type="checkbox" />
  </li>;
};

export default CheckListItem;