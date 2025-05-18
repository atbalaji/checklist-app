import CheckList from "./Checklist";

const TopicItem = (topic, onDelete, onUpdate) => (
  <li className="">
    {topic.name}
    <button onClick={() => onDelete(topic.id)}>X</button>
  </li>
);

export default TopicItem;