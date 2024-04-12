const styles = {
    footerstyle: {
      backgroundColor:'#091345',
      display:"flex",
      position:"fixed",
      bottom:0,
      width: '100%',
},
    img :{
      width: "30px",
      height: "30px",
}};
  
const Footer = () => {
    return (
      <div className="justify-content" style={styles.footerstyle}>
        <a style={{ padding:"10px" }} href="https://github.com/g00s3mag1k?tab=repositories" target="blank">
          <img style={styles.img}
            src="https://www.kindpng.com/picc/m/128-1280330_github-logo-png-github-icon-blue-png-transparent.png" 
            className="rounded-circle" 
            alt="github"/>
        </a>
        
        <a style={{ padding:"10px" }} href="https://www.linkedin.com/in/brandon-g-584867303/" target="blank">
          <img style={styles.img}
            src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG7.png" 
            alt="linkedin"/>
        </a>
  
        <a style={{ padding:"10px" }} href="https://www.facebook.com/brandon.gonzalez.3363" target="blank">
          <img style={styles.img}
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" 
            alt="facebook"/>
        </a>
      </div>
    );
};
  
export default Footer;