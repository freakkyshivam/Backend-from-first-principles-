
 

export const users = [
  {
    id: 1,
    name: "Shivam Chaudhary",
    email: "shivam@example.com",
    age: 21,
    role: "student",
    posts: [
      {
        id: 456,
        title: "Learning Express.js",
        content: "Express routing is easy to learn."
      },
      {
        id: 457,
        title: "React Fetch API",
        content: "Using fetch in React frontend."
      }
    ]
  },

  {
    id: 2,
    name: "Aman Verma",
    email: "aman@example.com",
    age: 24,
    role: "developer",
    posts: [
      {
        id: 458,
        title: "Node Basics",
        content: "Node.js runs JavaScript on server."
      }
    ]
  },

  {
    id: 3,
    name: "Priya Singh",
    email: "priya@example.com",
    age: 22,
    role: "designer",
    posts: [
      {
        id: 459,
        title: "UI Design Tips",
        content: "Keep UI simple and clean."
      }
    ]
  }
];

  export const books = [
    {
      "id": 101,
      "title": "Atomic Habits",
      "author": "James Clear",
      "price": 499,
      "available": true
    },
    {
      "id": 102,
      "title": "Clean Code",
      "author": "Robert C. Martin",
      "price": 799,
      "available": true
    },
    {
      "id": 103,
      "title": "The Alchemist",
      "author": "Paulo Coelho",
      "price": 299,
      "available": false
    },
    {
      "id": 104,
      "title": "Deep Work",
      "author": "Cal Newport",
      "price": 550,
      "available": true
    }
  ]

 

export const usersV1 = [
  {
    id: 1,
    name: "Shivam"
  },
  {
    id: 2,
    name: "Aman"
  }
];

export const usersV2 = [
  {
    id: 1,
    name: "Shivam",
    email: "shivam@example.com",
    role: "student"
  },
  {
    id: 2,
    name: "Aman",
    email: "aman@example.com",
    role: "developer"
  }
];

export const usersV3 = [
  {
    id: 1,
    name: "Shivam",
    email: "shivam@example.com",
    role: "student",
    age: 21,
    isPremium: true,
    socialLinks: {
      github: "github.com/shivam",
      linkedin: "linkedin.com/in/shivam"
    }
  },
  {
    id: 2,
    name: "Aman",
    email: "aman@example.com",
    role: "developer",
    age: 24,
    isPremium: false,
    socialLinks: {
      github: "github.com/aman",
      linkedin: "linkedin.com/in/aman"
    }
  }
];