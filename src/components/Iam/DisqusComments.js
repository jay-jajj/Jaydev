import {DiscussionEmbed} from "disqus-react"

const DisqusComments = ({ post }) => {
  const disqusShortname = "Iam"

  const disqusConfig = {
    url: "http://disqus.com/by/Jay",
    identifier: post.id, // Single post id
    title: post.title // Single post title
  }

  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
      <style jsx>{`div{
        margin-left : auto;
        margin-right : auto;
        width : 90vw;
      }`}</style>
    </div>
  )
}

export default DisqusComments;