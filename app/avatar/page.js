
const Avatar = ({src,alt,fallbackSrc,size='10'}) => {
    return (
        <img 
            src={src || fallbackSrc}  // Fallback to default avatar
            alt={alt}
            className={`w-${size} h-${size} rounded-full`}
        />
    )
}
export default Avatar;