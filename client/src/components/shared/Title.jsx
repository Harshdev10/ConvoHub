import { Helmet } from "react-helmet-async";

const Title = ({
    // eslint-disable-next-line react/prop-types
    title = "Chat App",
    // eslint-disable-next-line react/prop-types
    description = "This is a chat App",
}) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
    </Helmet>
  )
}

export default Title