import PortfolioContainer from "./PortfolioContainer";

const styles = {
    headerStyle: {
        color: '#ffffffa0',
        fontSize: '69%',
        margin: 0,
        display: 'inline-block'
    }
};

const Header=()=>{
return(
<div style={styles.headerStyle}>
    <PortfolioContainer/>
</div>
)};

export default Header;