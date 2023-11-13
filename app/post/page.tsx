import Image from "next/image";
const getPostsData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const getUsrsData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const getDogImages = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    next: {
      revalidate: 5,
    },
  });
  return res.json();
};

export default async function Post() {
  const [posts, users, dogImages] = await Promise.all([
    getPostsData(),
    getUsrsData(),
    getDogImages(),
  ]);
  return (
    <div>
      <Image src={dogImages.message} alt="dog" width={500} height={500} />
      <div>
        {users.map((user: any) => {
          return <p>{user.name}</p>;
        })}
      </div>
      {posts.map((post: any) => {
        return <p>{post.title}</p>;
      })}
    </div>
  );
}
