const ContactImg = ({ src }) => {
  const srcValue = src && src.length > 1 ? src : "/defaultAvatar.png";
  return (
    <img
      className="w-32 h-32 mx-auto rounded-full  "
      src={srcValue}
      name="imageUrl"
      alt={"contact pic"}
      onError={(e) => {
        e.target.src = "/defaultAvatar.png";
        e.onerror = null;
      }}
    />
  );
};

export default ContactImg;
