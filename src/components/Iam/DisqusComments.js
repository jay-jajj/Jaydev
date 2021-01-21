import {DiscussionEmbed} from "disqus-react"

const DisqusComments = ({ post }) => {
  const disqusShortname = "Iam"

  const disqusConfig = {
    url: "https://jay-jajj.disqus.com/count.js",
    identifier: post.id, // Single post id
    title: post.title // Single post title
  }

  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}

export default DisqusComments;