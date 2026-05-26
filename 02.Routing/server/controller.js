
import { users,books,usersV1, usersV2, usersV3 } from "./data.js";


// fetch users
export const fetchAllUsers = (req, res)=>{
    res.json(users.map(({ posts, ...rest }) => rest));
}

// fetch users by id
export const fetchUserById = (req, res) => {
  const id = Number(req.params.id);

  const user = users.map(({ posts, ...rest }) => rest)
const d =   user.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.json(d);
};

// fetch all books
export const fetchAllBooks = (req, res)=>{
    res.json(books)
}

export const fetchBookById = (req, res) => {
  const id = Number(req.params.id);

  const book = books.find((b) => b.id === id);

  if (!book) {
    return res.status(404).json({
      message: "Book not found",
    });
  }

  res.json(book);
};

 
// 
export const fetchUserPostById = (req, res) => {
  const userId = Number(req.params.userId);
  const postId = Number(req.params.postId);

  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  const post = user.posts.find((p) => p.id === postId);

  if (!post) {
    return res.status(404).json({
      message: "Post not found"
    });
  }

  res.json(post);
};

 

export const searchData = (req, res) => {
  const query = req.query.q?.toLowerCase();

  if (!query) {
    return res.status(400).json({
      message: "Query is required",
    });
  }

  // Search users
  const matchedUsers = users
    .filter((user) =>
      user.name.toLowerCase().includes(query)||
      user.age.toString().toLowerCase().includes(query)
      || user.email.toLowerCase().includes(query)
      || user.role.toLowerCase().includes(query)
      || user?.posts?.id?.toString().includes(query)
      || user?.posts?.title?.toLowerCase().includes(query)
      || user?.posts?.content?.toLowerCase().includes(query)
    )
    .map(({ posts, ...rest }) => rest);

  // Search books
  const matchedBooks = books.filter((book) =>
    book.title.toLowerCase().includes(query)
  || book.author.toLowerCase().includes(query)
  || book.id.toString().includes(query)
  );

  res.status(200).json({
    query,
    users: matchedUsers,
    books: matchedBooks,
  });
};


// route versioning
export const routev1 = (req, res)=>{
  res.status(200).json(usersV1)
}
 
export const routev2 = (req, res)=>{
  res.status(200).json(usersV2)
}

export const routev3 = (req, res)=>{
  res.status(200).json(usersV3)
}
