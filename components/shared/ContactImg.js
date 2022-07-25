const ContactImg = ({ src, size }) => {
  const srcValue = src && src.length > 1 ? src : "/defaultAvatar.png";

  if (size === "sm") {
    return (
      <img
        className="w-11 h-11 rounded-full"
        src={srcValue}
        alt={"contact pic"}
        name="imageUrl"
        onError={(e) => {
          e.target.src = "/defaultAvatar.png";
          e.onerror = null;
        }}
      />
    );
  }

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
