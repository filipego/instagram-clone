import Post from "./Post"

const posts = [
    {
        id: "123",
        username: "filipego",
        userImg: "/images/profile-pic.jpg",
        img: "/images/profile-pic.jpg",
        caption: "Sub and destroy the like button"
    },
    {
        id: "123",
        username: "filipego",
        userImg: "/images/profile-pic.jpg",
        img: "/images/profile-pic.jpg",
        caption: "Sub and destroy the like button"
    },
    {
        id: "123",
        username: "filipego",
        userImg: "/images/profile-pic.jpg",
        img: "/images/profile-pic.jpg",
        caption: "Sub and destroy the like button"
    }
]

function Posts() {
  return (
    <div>

        {posts.map((post) => (
            <Post
                key={post.id}
                id={post.id}
                username={post.username}
                userImg={post.userImg}
                img={post.img}
                caption={post.caption}
            />
        ))}

        
    </div>
  )
}

export default Posts