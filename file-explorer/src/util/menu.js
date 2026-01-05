const data = [
  {
    id: "1",
    name: "index.html",
    isFolder: false,
    items: [],
  },
  {
    id: "2",
    name: "vite.config.js",
    isFolder: false,
    items: [],
  },
  {
    id: "3",
    name: "src",
    isFolder: true,
    items: [
      {
        id: "3-1",
        name: "components",
        isFolder: true,
        items: [
          {
            id: "3-1-1",
            name: "Navbar.jsx",
            isFolder: false,
            items: [],
          },
          {
            id: "3-1-2",
            name: "Sidebar.jsx",
            isFolder: false,
            items: [],
          },
          {
            id: "3-1-3",
            name: "ui",
            isFolder: true,
            items: [
              {
                id: "3-1-3-1",
                name: "Button.jsx",
                isFolder: false,
                items: [],
              },
            ],
          },
        ],
      },
      {
        id: "3-2",
        name: "pages",
        isFolder: true,
        items: [
          {
            id: "3-2-1",
            name: "Home.jsx",
            isFolder: false,
            items: [],
          },
          {
            id: "3-2-2",
            name: "About.jsx",
            isFolder: false,
            items: [],
          },
          {
            id: "3-2-3",
            name: "Service.jsx",
            isFolder: false,
            items: [],
          },
        ],
      },
    ],
  },
];

export default data;
