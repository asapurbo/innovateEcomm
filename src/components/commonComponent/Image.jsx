const Image = ({ src, alt = 'image',className, },) => {
  return (
    <picture>
      <img className={`${className}`} src={src} alt={alt} />
    </picture>
  );
};

export default Image;
