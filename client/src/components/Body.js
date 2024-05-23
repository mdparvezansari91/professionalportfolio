import './BodyStyles.css'

function Body(){
    return (
        <>
        <div className="body">
            <div className="profilephoto">
                <img src="https://media.istockphoto.com/id/1486626509/photo/woman-use-ai-to-help-work-or-use-ai-everyday-life-at-home-ai-learning-and-artificial.jpg?s=1024x1024&w=is&k=20&c=GdZtXvKObS4z87L6zwi7fgmWlynJx4dRitwYJUtClLo=" alt="" />
            </div>
            <div className="profilecontent">
            <h1 className="name">Mohd Parvez Ansari</h1>
            <h2>MERN Full Stack Developer</h2>
            <h3>Services Provided</h3>
            <ul>
                <li>Ecommerce Websites</li>
                <li>Portfolio Websites</li>
                <li>Bloggings Website</li>
                <li>Amazon Seller Services</li>
                <li>Flipkart Seller Services</li>
            </ul>
            </div>
        </div>
        
        </>
    )
}


export default Body;