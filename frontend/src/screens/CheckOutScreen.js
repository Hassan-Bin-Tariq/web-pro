import "./CheckOutScreen.css" 
const CheckOut = () => {
    return (
        <div className="CheckOut">           
            <h1>CheckOut</h1>
            <input type="text" name="Email"  placeholder="Your Email" ></input>
            <input type="text" name="Phone#"  placeholder="Your Phone#" ></input>
            <div className="button">CheckOut</div>
        </div>
    )
}
export default CheckOut