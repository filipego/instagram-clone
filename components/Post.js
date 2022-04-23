import {
    BookmarkIcon,
    DotsHorizontalIcon,
    PaperAirplaneIcon,
    ChatIcon,
    EmojiHappyIcon,
    HeartIcon
} from "@heroicons/react/outline"
import {HeartIcon as HeartIconFilled} from "@heroicons/react/solid"

function Post({id, username, userImg, img, caption}) {
  return (
    <div className="bg-white my-7 border rounded-sm">
        <div className="flex items-center p-5">
            <img src={userImg} alt="" className="h-12 w-12 rounded-full border p-1 mr-3"/>
            <p className="flex-1 font-bold">{username}</p>
            <DotsHorizontalIcon className="h-5"/>
        </div>

        <img src={img} alt="" className="object-cover w-full"/>

    </div>
  )
}

export default Post