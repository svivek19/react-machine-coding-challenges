import React, { useState } from "react";

const FolderFileRender = ({ data }) => {
  const [openFolders, setOpenFolders] = useState({});
  const [creatingId, setCreatingId] = useState(null);
  const [newName, setNewName] = useState("");
  const [fileType, setFileType] = useState("file");

  function handleAdd(items) {
    if (!newName.trim()) return;

    items.push({
      id: new Date(),
      name: newName,
      isFolder: fileType === "folder",
      items: [],
    });

    setCreatingId(null);
    setNewName("");
    setFileType("file");
  }

  function handleCreate(id) {
    setCreatingId(id);
    setNewName("");
    setFileType("file");
  }

  const handleToggle = (id) => {
    setOpenFolders((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div style={{ paddingLeft: "16px" }}>
      {data.map((val) => (
        <div key={val.id}>
          <div className="container">
            <span>{val.isFolder ? "📁" : "🗎"}</span>
            <span>{val.name}</span>

            {val.isFolder && (
              <>
                <button onClick={() => handleToggle(val.id)}>
                  {openFolders[val.id] ? "Close" : "Open"}
                </button>
                <button onClick={() => handleCreate(val.id)}>new</button>
              </>
            )}
          </div>

          {creatingId === val.id && (
            <div>
              <input
                placeholder="Enter name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />

              <select
                value={fileType}
                onChange={(e) => setFileType(e.target.value)}
              >
                <option value="file">File</option>
                <option value="folder">Folder</option>
              </select>
              <button onClick={() => handleAdd(val.items)}>Add</button>
              <button onClick={() => setCreatingId(null)}>Cancel</button>
            </div>
          )}

          {val.isFolder && openFolders[val.id] && val.items && (
            <FolderFileRender data={val.items} />
          )}
        </div>
      ))}
    </div>
  );
};

export default FolderFileRender;
