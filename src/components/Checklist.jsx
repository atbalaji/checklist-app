import CheckListItem from "./CheckListItem";

const CheckList = (topics, topicId) => {
  const selectedTopic = topics.find(topic => topicId === topic.id);
  if (selectedTopic) {
    return <ul>
      {selectedTopic.items.map(checkListItem => <CheckListItem key={checkListItem.id} item={checkListItem} /> )}
    </ul>
  } else {
    return <p>{"No Checklist created yet"}</p>;
  }
}

export default CheckList;