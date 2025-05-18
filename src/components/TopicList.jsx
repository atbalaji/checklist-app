import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const TopicList = () => {
  const [topics, setTopics] = useState([]);
  const [newTopic, setNewTopic] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("topics");
    if (stored) {
      const parsed = JSON.parse(stored);
      console.log("Loaded from localStorage:", stored);
      setTopics(Array.isArray(parsed) ? parsed : []);
    }
  }, []);
  

  useEffect(() => {
    console.log("Saving to localStorage:", JSON.stringify(topics));
    localStorage.setItem("topics", JSON.stringify(topics));
  }, [topics]);

  function addNewTopic(e) {
    setNewTopic(e.target.value);
  }

  function handleAddTopic() {
    if (newTopic.trim() !== "") {
      setTopics([...topics, { id: uuidv4(), name: newTopic }]);
      setNewTopic("");
    }
  }

  function deleteTopic(topicId) {
    if (window.confirm("Are you sure you want to delete this topic?")) {
      setTopics(topics.filter((topic) => topic.id !== topicId));
    }
  }

  return (
    <div>
      <h2>Topics</h2>
      <input type="text" onChange={addNewTopic} value={newTopic} />
      <button className="add-topic-btn" onClick={handleAddTopic}>
        +
      </button>
      <ul>
        {topics.map((topic) => (
          <li key={topic.id}>
            {topic.name}
            <button onClick={() => deleteTopic(topic.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicList;
