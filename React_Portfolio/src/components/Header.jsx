import PortfolioContainer from "./PortfolioContainer";

const styles = {
    headerStyle: {
        color: '#ffffffa0',
        fontSize: '69%',
        margin: 0,
    }
};

const Header=()=>{
return(
<div style={styles.headerStyle}>
    <PortfolioContainer/>
</div>
)};

export default Header;